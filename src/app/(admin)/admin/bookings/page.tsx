import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import Sidebar from '@/components/layout/Sidebar';
import BookingsTable from '@/components/admin/BookingsTable';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Manage Bookings | PrymeStrategies Admin',
  description: 'View and manage all booking requests.',
};

export default async function AdminBookingsPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/admin/login');
  }

  return (
    <div className="min-h-screen bg-gray-950 flex">
      <Sidebar />
      <main className="flex-1 p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white">Bookings</h1>
          <p className="text-gray-400 mt-1">Manage all booking requests</p>
        </div>
        <BookingsTable />
      </main>
    </div>
  );
}
