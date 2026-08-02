/* eslint-disable @typescript-eslint/no-require-imports */
const { Client } = require('pg');

const client = new Client({
  connectionString:
    'postgresql://postgres.ywftcevravxgnydeluuq:Pryme986022@aws-0-ap-southeast-1.pooler.supabase.com:5432/postgres',
});

async function setup() {
  await client.connect();
  console.log('Connected to Supabase DB');

  // Create Bookings Table
  await client.query(`
    CREATE TABLE IF NOT EXISTS public.bookings (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT NOT NULL,
      date TEXT NOT NULL,
      time TEXT NOT NULL,
      service TEXT NOT NULL,
      message TEXT,
      status TEXT NOT NULL DEFAULT 'pending',
      created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
      updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
    );
  `);

  // Enable RLS
  await client.query(`ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;`);

  // Drop existing policies if any
  await client.query(
    `DROP POLICY IF EXISTS "Allow anonymous inserts" ON public.bookings;`
  );
  await client.query(
    `DROP POLICY IF EXISTS "Allow authenticated read" ON public.bookings;`
  );
  await client.query(
    `DROP POLICY IF EXISTS "Allow authenticated update" ON public.bookings;`
  );
  await client.query(
    `DROP POLICY IF EXISTS "Allow authenticated delete" ON public.bookings;`
  );

  // Anyone can insert a booking
  await client.query(`
    CREATE POLICY "Allow anonymous inserts" ON public.bookings
    FOR INSERT TO public
    WITH CHECK (true);
  `);

  // Only authenticated users can read bookings
  await client.query(`
    CREATE POLICY "Allow authenticated read" ON public.bookings
    FOR SELECT TO authenticated
    USING (true);
  `);

  // Only authenticated users can update bookings
  await client.query(`
    CREATE POLICY "Allow authenticated update" ON public.bookings
    FOR UPDATE TO authenticated
    USING (true);
  `);

  // Only authenticated users can delete bookings
  await client.query(`
    CREATE POLICY "Allow authenticated delete" ON public.bookings
    FOR DELETE TO authenticated
    USING (true);
  `);

  console.log('Bookings table created and RLS policies applied.');

  await client.end();
}

setup().catch(console.error);
