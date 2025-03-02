import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

// Initialize Supabase client - using proper environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY; // Removed NEXT_PUBLIC prefix for security
const supabase = createClient(supabaseUrl, supabaseServiceKey);

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// Business email to receive notifications
const BUSINESS_EMAIL = process.env.BUSINESS_EMAIL || 'your-business-email@example.com';
const SENDER_EMAIL = 'Peak Value <onboarding@resend.dev>';

export async function POST(request) {
  try {
    // Parse the request body
    const formData = await request.json();
    const { name, email, subject, message } = formData;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Store contact data in Supabase
    const { data: contactData, error: supabaseError } = await supabase
      .from('contacts')
      .insert([{ 
        name, 
        email, 
        subject, 
        message, 
        created_at: new Date().toISOString(),
        status: 'new'
      }])
      .select();

    if (supabaseError) {
      console.error('Supabase error:', supabaseError);
      return NextResponse.json(
        { error: 'Failed to store contact information' },
        { status: 500 }
      );
    }

    // Send notification email to business owner
    const { data: notificationData, error: notificationError } = await resend.emails.send({
      from: SENDER_EMAIL,
      to: [BUSINESS_EMAIL],
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <p><strong>Submitted at:</strong> ${new Date().toLocaleString()}</p>
      `,
    });

    if (notificationError) {
      console.error('Notification email error:', notificationError);
      // Update status in Supabase
      await supabase
        .from('contacts')
        .update({ status: 'notification_failed' })
        .eq('id', contactData[0].id);
    }

    // Send confirmation email to the user
    const { data: confirmationData, error: confirmationError } = await resend.emails.send({
      from: SENDER_EMAIL,
      to: [email],
      subject: 'Thank you for contacting Peak Value',
      html: `
        <h2>Thank you for contacting us!</h2>
        <p>Dear ${name},</p>
        <p>We've received your message regarding "${subject}" and will get back to you as soon as possible.</p>
        <p>In the meantime, if you have any urgent inquiries, please don't hesitate to call us directly.</p>
        <p>Best regards,</p>
        <p>The Peak Value Team</p>
      `,
    });

    if (confirmationError) {
      console.error('Confirmation email error:', confirmationError);
      // Update status in Supabase
      await supabase
        .from('contacts')
        .update({ 
          status: confirmationError ? 'confirmation_failed' : 'complete' 
        })
        .eq('id', contactData[0].id);
    } else {
      // Update status to complete if everything succeeded
      await supabase
        .from('contacts')
        .update({ status: 'complete' })
        .eq('id', contactData[0].id);
    }

    return NextResponse.json({
      success: true,
      message: 'Contact form submitted successfully',
      data: contactData
    });
  } catch (error) {
    console.error('General error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred' },
      { status: 500 }
    );
  }
} 