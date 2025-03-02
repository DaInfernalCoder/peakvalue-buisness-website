import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { logApiError } from '../utils';

// Initialize Supabase client with env variables from .env.local
const supabaseUrl = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabase = createClient(supabaseUrl, supabaseServiceKey);

/**
 * GET handler to fetch a single contact submission by ID
 */
export async function GET(request, { params }) {
  try {
    const { id } = params;
    
    // Validate ID format (UUID)
    if (!id.match(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i)) {
      return NextResponse.json(
        { error: 'Invalid ID format' },
        { status: 400 }
      );
    }
    
    // Fetch contact by ID
    const { data, error } = await supabase
      .from('contacts')
      .select('*')
      .eq('id', id)
      .single();
    
    if (error) {
      logApiError('Supabase', error);
      return NextResponse.json(
        { error: error.message },
        { status: error.code === 'PGRST116' ? 404 : 500 }
      );
    }
    
    return NextResponse.json({ data });
    
  } catch (error) {
    logApiError('Unexpected', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred' },
      { status: 500 }
    );
  }
}

/**
 * PATCH handler to update a contact submission (e.g., change status)
 */
export async function PATCH(request, { params }) {
  try {
    const { id } = params;
    const updates = await request.json();
    
    // Validate ID format
    if (!id.match(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i)) {
      return NextResponse.json(
        { error: 'Invalid ID format' },
        { status: 400 }
      );
    }
    
    // Validate updates
    if (!updates || typeof updates !== 'object') {
      return NextResponse.json(
        { error: 'Invalid update data' },
        { status: 400 }
      );
    }
    
    // Only allow updating certain fields
    const allowedFields = ['status'];
    const sanitizedUpdates = {};
    
    for (const field of allowedFields) {
      if (updates[field] !== undefined) {
        sanitizedUpdates[field] = updates[field];
      }
    }
    
    if (Object.keys(sanitizedUpdates).length === 0) {
      return NextResponse.json(
        { error: 'No valid fields to update' },
        { status: 400 }
      );
    }
    
    // Validate status value if present
    if (sanitizedUpdates.status) {
      const validStatuses = ['new', 'in-progress', 'completed', 'archived'];
      if (!validStatuses.includes(sanitizedUpdates.status)) {
        return NextResponse.json(
          { error: 'Invalid status value' },
          { status: 400 }
        );
      }
    }
    
    // Update the contact
    const { data, error } = await supabase
      .from('contacts')
      .update(sanitizedUpdates)
      .eq('id', id)
      .select()
      .single();
    
    if (error) {
      logApiError('Supabase', error);
      return NextResponse.json(
        { error: error.message },
        { status: error.code === 'PGRST116' ? 404 : 500 }
      );
    }
    
    return NextResponse.json({ 
      success: true,
      data,
      message: 'Contact updated successfully' 
    });
    
  } catch (error) {
    logApiError('Unexpected', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred' },
      { status: 500 }
    );
  }
} 