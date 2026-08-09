import { redirect } from 'next/navigation';
import Link from 'next/link';
import { getSession } from '@/lib/auth';
import { LayoutDashboard, FileText } from 'lucide-react';
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
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <aside className="w-64 bg-[var(--color-charcoal)] border-r border-[var(--color-taupe)] flex flex-col">
        <div className="h-16 flex items-center justify-center px-6 border-b border-[var(--color-taupe)]">
          <h1 className="text-xl font-heading font-light text-white tracking-[0.2em] uppercase">
            PRYME <span className="text-[var(--color-bronze)]">CRM</span>
          </h1>
        </div>
        <nav className="flex-1 px-4 py-8 space-y-4">
          <Link
            href="/admin"
            className="flex items-center gap-3 px-4 py-3 text-gray-300 font-heading tracking-widest uppercase text-xs hover:bg-[var(--color-bronze)] hover:text-white transition-colors"
          >
            <LayoutDashboard className="w-4 h-4" />
            Dashboard
          </Link>
          <Link
            href="/admin/applications"
            className="flex items-center gap-3 px-4 py-3 text-gray-300 font-heading tracking-widest uppercase text-xs hover:bg-[var(--color-bronze)] hover:text-white transition-colors"
          >
            <FileText className="w-4 h-4" />
            Applications
          </Link>
        </nav>
        <div className="p-6 border-t border-[var(--color-taupe)] bg-[#111]">
          <div className="flex items-center gap-3">
            <div className="text-sm w-full">
              <p className="text-white font-medium truncate mb-1 text-sm font-sans">
                {session.email}
              </p>
              <p className="text-[var(--color-bronze)] text-xs font-heading tracking-widest uppercase">
                Administrator
              </p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden bg-gray-50">
        {/* Top Header */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8 shadow-sm z-10">
          <h2 className="text-sm font-heading tracking-widest uppercase text-[var(--color-charcoal)]">
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
