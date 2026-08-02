import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import Sidebar from '@/components/layout/Sidebar';
import StatsCards from '@/components/admin/StatsCards';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard | PrymeStrategies Admin',
  description: 'Admin dashboard for managing bookings and analytics.',
};

export default async function AdminDashboardPage() {
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
          <h1 className="text-3xl font-bold text-white">Dashboard</h1>
          <p className="text-gray-400 mt-1">Welcome back, {user.email}</p>
        </div>
        <StatsCards />
      </main>
    </div>
  );
}
