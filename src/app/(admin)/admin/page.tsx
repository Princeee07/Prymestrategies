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

  const getStatusBadge = (status: string) => {
    const styles: Record<string, string> = {
      pending:
        'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400 border-amber-200 dark:border-amber-800',
      reviewed:
        'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400 border-blue-200 dark:border-blue-800',
      interview:
        'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400 border-purple-200 dark:border-purple-800',
      rejected:
        'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400 border-red-200 dark:border-red-800',
      hired:
        'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 border-green-200 dark:border-green-800',
    };
    return (
      styles[status] ||
      'bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300 border-slate-200 dark:border-slate-700'
    );
  };

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
            className="text-sm text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
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
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusBadge(app.status)}`}
                  >
                    {app.status.charAt(0).toUpperCase() + app.status.slice(1)}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
