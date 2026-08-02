'use client';

import { useBookings } from '@/hooks/useBookings';
import Badge from '@/components/ui/Badge';
import { formatDate } from '@/lib/utils';

const statusVariant = {
  pending: 'warning' as const,
  confirmed: 'success' as const,
  cancelled: 'error' as const,
  completed: 'info' as const,
};

export default function BookingsTable() {
  const { bookings, isLoading, error } = useBookings();

  if (isLoading) {
    return (
      <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
        <div className="animate-pulse space-y-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-12 bg-gray-800 rounded-lg" />
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-6 text-red-400">
        Error loading bookings: {error}
      </div>
    );
  }

  if (bookings.length === 0) {
    return (
      <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-12 text-center">
        <p className="text-gray-400">No bookings yet.</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-900/50 border border-gray-800 rounded-2xl overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-800">
              <th className="text-left px-6 py-4 text-sm font-medium text-gray-400">
                Name
              </th>
              <th className="text-left px-6 py-4 text-sm font-medium text-gray-400">
                Email
              </th>
              <th className="text-left px-6 py-4 text-sm font-medium text-gray-400">
                Service
              </th>
              <th className="text-left px-6 py-4 text-sm font-medium text-gray-400">
                Date
              </th>
              <th className="text-left px-6 py-4 text-sm font-medium text-gray-400">
                Status
              </th>
              <th className="text-left px-6 py-4 text-sm font-medium text-gray-400">
                Created
              </th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr
                key={booking.id}
                className="border-b border-gray-800/50 hover:bg-gray-800/30 transition-colors"
              >
                <td className="px-6 py-4 text-sm text-white font-medium">
                  {booking.name}
                </td>
                <td className="px-6 py-4 text-sm text-gray-400">
                  {booking.email}
                </td>
                <td className="px-6 py-4 text-sm text-gray-300">
                  {booking.service}
                </td>
                <td className="px-6 py-4 text-sm text-gray-300">
                  {booking.date} at {booking.time}
                </td>
                <td className="px-6 py-4">
                  <Badge variant={statusVariant[booking.status]}>
                    {booking.status}
                  </Badge>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {formatDate(booking.created_at)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
