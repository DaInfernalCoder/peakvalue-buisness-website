import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';
import { getAdminNotificationEmail, getUserConfirmationEmail } from './EmailTemplates';
import { validateContactForm, logApiError, formatContactData } from './utils';

// Initialize Supabase client with env variables from .env.local
const supabaseUrl = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabase = createClient(supabaseUrl, supabaseServiceKey);

// Initialize Resend with env variable from .env.local
const resendApiKey = process.env.RESEND_KEY || process.env.RESEND_API_KEY;
const resend = new Resend(resendApiKey);

// Configuration from .env.local
const ADMIN_EMAIL = process.env.CONTACT_ADMIN_EMAIL || process.env.ADMIN_EMAIL || 'info@peakvaluebusiness.com';
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || process.env.FROM_EMAIL || 'contact@peakvaluebusiness.com';
const FROM_NAME = process.env.CONTACT_FROM_NAME || process.env.FROM_NAME || 'PeakValueBusiness';

export async function POST(request) {
  try {
    // Parse the request body
    const formData = await request.json();

    // Validate form data
    const validation = validateContactForm(formData);
    if (!validation.isValid) {
      return NextResponse.json(
        { error: validation.error },
        { status: 400 }
      );
    }

    const { name, email, subject, message } = formData;

    // Insert into Supabase contacts table
    const { data, error } = await supabase
      .from('contacts')
      .insert([formatContactData(formData)])
      .select();

    if (error) {
      logApiError('Supabase', error);
      return NextResponse.json(
        { error: 'Failed to save contact information' },
        { status: 500 }
      );
    }

    // Send notification email to admin
    const adminEmailTemplate = getAdminNotificationEmail(name, email, subject, message);
    const adminEmailResult = await resend.emails.send({
      from: `${FROM_NAME} <${FROM_EMAIL}>`,
      to: [ADMIN_EMAIL],
      subject: adminEmailTemplate.subject,
      html: adminEmailTemplate.html,
      reply_to: email,
    });

    if (adminEmailResult.error) {
      logApiError('Admin Email', adminEmailResult.error);
    }

    // Send confirmation email to user
    const userEmailTemplate = getUserConfirmationEmail(name);
    const userEmailResult = await resend.emails.send({
      from: `${FROM_NAME} <${FROM_EMAIL}>`,
      to: [email],
      subject: userEmailTemplate.subject,
      html: userEmailTemplate.html,
    });

    if (userEmailResult.error) {
      logApiError('User Email', userEmailResult.error);
    }

    return NextResponse.json({
      success: true,
      message: 'Contact form submitted successfully',
      id: data?.[0]?.id
    });

  } catch (error) {
    logApiError('Unexpected', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred' },
      { status: 500 }
    );
  }
} 