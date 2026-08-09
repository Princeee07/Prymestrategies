'use client';

import { useState, useEffect, useReducer } from 'react';
import {
  ExternalLink,
  Search,
  Loader2,
  Phone,
  Mail,
  Clock,
} from 'lucide-react';
import { useRouter } from 'next/navigation';

type Application = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  resumeUrl: string;
  status: string;
  created_at: string;
};

export default function ApplicationsPage() {
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [refetchCount] = useReducer((c: number) => c + 1, 0);
  const router = useRouter();

  useEffect(() => {
    let cancelled = false;
    const controller = new AbortController();

    async function loadApplications() {
      try {
        const res = await fetch('/api/admin/applications', {
          signal: controller.signal,
        });
        if (cancelled) return;
        if (res.ok) {
          const data = await res.json();
          setApplications(data.applications);
        } else if (res.status === 401) {
          router.push('/admin/login');
        }
      } catch (error) {
        if (!cancelled) {
          console.error('Failed to fetch applications', error);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    loadApplications();

    return () => {
      cancelled = true;
      controller.abort();
    };
  }, [router, refetchCount]);

  const filteredApps = applications.filter((app) => {
    const searchLower = search.toLowerCase();
    return (
      app.firstName.toLowerCase().includes(searchLower) ||
      app.lastName.toLowerCase().includes(searchLower) ||
      app.email.toLowerCase().includes(searchLower)
    );
  });

  return (
    <div className="space-y-8 h-full flex flex-col">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-heading font-light tracking-[0.1em] text-[var(--color-charcoal)] uppercase mb-2">
            Applicants
          </h1>
          <p className="text-gray-500 font-sans text-sm">
            View details and contact your candidates.
          </p>
        </div>

        <div className="relative min-w-[300px]">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search candidates..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="block w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-bronze)] focus:border-transparent transition-all shadow-sm"
          />
        </div>
      </div>

      {loading ? (
        <div className="flex-1 flex flex-col items-center justify-center">
          <Loader2 className="w-12 h-12 animate-spin text-[var(--color-bronze)] mb-4" />
          <p className="text-gray-500 font-heading tracking-widest uppercase text-sm">
            Loading Applicants...
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 pb-8">
          {filteredApps.length > 0 ? (
            filteredApps.map((app) => (
              <div
                key={app.id}
                className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full"
              >
                <div className="mb-6 border-b border-gray-100 pb-4">
                  <h4 className="font-bold text-gray-900 text-xl mb-2">
                    {app.firstName} {app.lastName}
                  </h4>
                  <div className="flex items-center text-xs text-gray-500 font-medium">
                    <Clock className="w-3 h-3 mr-2" />
                    Applied on {new Date(app.created_at).toLocaleDateString()}
                  </div>
                </div>

                <div className="space-y-4 mb-8 flex-grow">
                  <a
                    href={`mailto:${app.email}`}
                    className="flex items-center text-[var(--color-charcoal)] hover:text-[var(--color-bronze)] transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center mr-3 group-hover:bg-orange-50 transition-colors">
                      <Mail className="w-4 h-4 text-gray-400 group-hover:text-[var(--color-bronze)] transition-colors" />
                    </div>
                    <span className="truncate font-medium">{app.email}</span>
                  </a>
                  <a
                    href={`tel:${app.phone}`}
                    className="flex items-center text-[var(--color-charcoal)] hover:text-[var(--color-bronze)] transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center mr-3 group-hover:bg-orange-50 transition-colors">
                      <Phone className="w-4 h-4 text-gray-400 group-hover:text-[var(--color-bronze)] transition-colors" />
                    </div>
                    <span className="font-medium">{app.phone}</span>
                  </a>
                </div>

                <div className="mt-auto pt-4">
                  <a
                    href={app.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 border border-[var(--color-bronze)] bg-[var(--color-bronze)] text-white hover:bg-[var(--color-bronze-light)] hover:border-[var(--color-bronze-light)] rounded-lg text-sm font-heading tracking-widest uppercase transition-colors shadow-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Resume / CV
                  </a>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-24 flex flex-col items-center justify-center text-center bg-gray-50 border-2 border-dashed border-gray-200 rounded-2xl">
              <p className="text-gray-500 font-heading uppercase tracking-widest text-sm mb-2">
                No candidates found
              </p>
              <p className="text-gray-400 text-sm font-sans">
                Applications will appear here once submitted.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
