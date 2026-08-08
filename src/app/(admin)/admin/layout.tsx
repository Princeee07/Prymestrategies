import { redirect } from 'next/navigation';
import Link from 'next/link';
import { getSession } from '@/lib/auth';
import { LayoutDashboard, Users, FileText } from 'lucide-react';
import LogoutButton from './LogoutButton';

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();

  if (!session) {
    redirect('/admin/login');
  }

  return (
    <div className="flex h-screen bg-slate-50 dark:bg-slate-950">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 border-r border-slate-800 flex flex-col">
        <div className="h-16 flex items-center px-6 border-b border-slate-800">
          <h1 className="text-xl font-bold text-white tracking-tight">PRYME</h1>
        </div>
        <nav className="flex-1 px-4 py-6 space-y-2">
          <Link
            href="/admin"
            className="flex items-center gap-3 px-3 py-2 text-slate-300 rounded-md hover:bg-slate-800 hover:text-white transition-colors"
          >
            <LayoutDashboard className="w-5 h-5" />
            Dashboard
          </Link>
          <Link
            href="/admin/applications"
            className="flex items-center gap-3 px-3 py-2 text-slate-300 rounded-md hover:bg-slate-800 hover:text-white transition-colors"
          >
            <FileText className="w-5 h-5" />
            Applications
          </Link>
        </nav>
        <div className="p-4 border-t border-slate-800">
          <div className="flex items-center gap-3 px-3 py-2">
            <Users className="w-5 h-5 text-slate-400" />
            <div className="text-sm">
              <p className="text-slate-300 font-medium truncate max-w-[140px]">
                {session.email}
              </p>
              <p className="text-slate-500 text-xs">Administrator</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header */}
        <header className="h-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-8">
          <h2 className="text-lg font-medium text-slate-800 dark:text-slate-200">
            Admin Portal
          </h2>
          <LogoutButton />
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto p-8">{children}</main>
      </div>
    </div>
  );
}
