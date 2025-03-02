import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { logApiError } from '../utils';

// Initialize Supabase client with env variables from .env.local
const supabaseUrl = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabase = createClient(supabaseUrl, supabaseServiceKey);

/**
 * GET handler for fetching contact submissions
 * This would typically be protected by authentication
 */
export async function GET(request) {
  try {
    // Get URL parameters
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const status = searchParams.get('status');
    const sortBy = searchParams.get('sortBy') || 'created_at';
    const sortOrder = searchParams.get('sortOrder') || 'desc';
    
    // Calculate offset for pagination
    const offset = (page - 1) * limit;
    
    // Build query
    let query = supabase
      .from('contacts')
      .select('*', { count: 'exact' })
      .order(sortBy, { ascending: sortOrder === 'asc' })
      .range(offset, offset + limit - 1);
    
    // Add status filter if provided
    if (status) {
      query = query.eq('status', status);
    }
    
    // Execute query
    const { data, error, count } = await query;
    
    if (error) {
      logApiError('Supabase', error);
      return NextResponse.json(
        { error: 'Failed to fetch contact submissions' },
        { status: 500 }
      );
    }
    
    // Return paginated results
    return NextResponse.json({
      data,
      pagination: {
        total: count,
        page,
        limit,
        pages: Math.ceil(count / limit)
      }
    });
    
  } catch (error) {
    logApiError('Unexpected', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred' },
      { status: 500 }
    );
  }
} 