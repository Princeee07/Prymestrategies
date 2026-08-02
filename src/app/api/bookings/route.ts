import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { bookingSchema } from '@/lib/validations';

// GET all bookings
export async function GET() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from('bookings')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ data });
}

// POST create a new booking
export async function POST(request: NextRequest) {
  const supabase = await createClient();
  const body = await request.json();

  // Validate the request body
  const result = bookingSchema.safeParse(body);
  if (!result.success) {
    return NextResponse.json(
      { error: 'Validation failed', details: result.error.flatten() },
      { status: 400 }
    );
  }

  const { data, error } = await supabase
    .from('bookings')
    .insert({ ...result.data, status: 'pending' })
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ data }, { status: 201 });
}
