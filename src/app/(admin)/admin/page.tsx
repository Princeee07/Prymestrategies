import { db } from '@/server/db';
import Link from 'next/link';
import { ArrowRight, FileText, CheckCircle, Clock, Users } from 'lucide-react';

export default async function AdminDashboard() {
  const applications = await db.application.findMany({
    orderBy: { created_at: 'desc' },
  });

  const total = applications.length;
  const pending = applications.filter((a) => a.status === 'pending').length;
  const interview = applications.filter((a) => a.status === 'interview').length;
  const hired = applications.filter((a) => a.status === 'hired').length;
  const recent = applications.slice(0, 5);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
          Dashboard Overview
        </h1>
        <p className="text-slate-500 dark:text-slate-400 mt-1">
          Here&apos;s what&apos;s happening today.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Stat Cards */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex items-center justify-between pb-4">
            <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400">
              Total Applications
            </h3>
            <FileText className="w-5 h-5 text-blue-500" />
          </div>
          <div className="text-3xl font-bold text-slate-900 dark:text-white">
            {total}
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex items-center justify-between pb-4">
            <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400">
              Pending Review
            </h3>
            <Clock className="w-5 h-5 text-amber-500" />
          </div>
          <div className="text-3xl font-bold text-slate-900 dark:text-white">
            {pending}
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex items-center justify-between pb-4">
            <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400">
              In Interview
            </h3>
            <Users className="w-5 h-5 text-purple-500" />
          </div>
          <div className="text-3xl font-bold text-slate-900 dark:text-white">
            {interview}
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex items-center justify-between pb-4">
            <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400">
              Hired
            </h3>
            <CheckCircle className="w-5 h-5 text-green-500" />
          </div>
          <div className="text-3xl font-bold text-slate-900 dark:text-white">
            {hired}
          </div>
        </div>
      </div>

      {/* Recent Applications */}
      <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
            Recent Applications
          </h2>
          <Link
            href="/admin/applications"
            className="text-sm text-[var(--color-bronze)] hover:text-[var(--color-bronze-light)] hover:underline flex items-center gap-1 font-heading tracking-widest uppercase transition-colors"
          >
            View all <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="divide-y divide-slate-200 dark:divide-slate-800">
          {recent.length === 0 ? (
            <div className="p-6 text-center text-slate-500 dark:text-slate-400">
              No applications yet.
            </div>
          ) : (
            recent.map((app) => (
              <div
                key={app.id}
                className="p-6 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
              >
                <div>
                  <h3 className="font-medium text-slate-900 dark:text-white">
                    {app.firstName} {app.lastName}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                    {app.email} •{' '}
                    {new Date(app.created_at).toLocaleDateString()}
                  </p>
                </div>
                <div>
                  <Link
                    href="/admin/applications"
                    className="text-sm font-heading tracking-widest uppercase text-[var(--color-bronze)] hover:text-[var(--color-bronze-light)] border border-[var(--color-bronze)] px-3 py-1.5 rounded-md hover:bg-[var(--color-bronze)] hover:text-white transition-all flex items-center gap-2"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
