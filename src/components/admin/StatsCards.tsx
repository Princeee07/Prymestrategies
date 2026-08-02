'use client';

import { useBookings } from '@/hooks/useBookings';
import Card from '@/components/ui/Card';
import { CalendarDays, CheckCircle, Clock, XCircle } from 'lucide-react';

export default function StatsCards() {
  const { bookings, isLoading } = useBookings();

  const stats = [
    {
      label: 'Total Bookings',
      value: bookings.length,
      icon: CalendarDays,
      color: 'text-violet-400',
      bgColor: 'bg-violet-500/10',
    },
    {
      label: 'Confirmed',
      value: bookings.filter((b) => b.status === 'confirmed').length,
      icon: CheckCircle,
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10',
    },
    {
      label: 'Pending',
      value: bookings.filter((b) => b.status === 'pending').length,
      icon: Clock,
      color: 'text-amber-400',
      bgColor: 'bg-amber-500/10',
    },
    {
      label: 'Cancelled',
      value: bookings.filter((b) => b.status === 'cancelled').length,
      icon: XCircle,
      color: 'text-red-400',
      bgColor: 'bg-red-500/10',
    },
  ];

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[...Array(4)].map((_, i) => (
          <Card key={i}>
            <div className="animate-pulse space-y-3">
              <div className="w-10 h-10 bg-gray-800 rounded-lg" />
              <div className="h-4 w-20 bg-gray-800 rounded" />
              <div className="h-8 w-12 bg-gray-800 rounded" />
            </div>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <Card key={stat.label}>
            <div
              className={`inline-flex p-2.5 rounded-lg ${stat.bgColor} mb-3`}
            >
              <Icon className={`w-5 h-5 ${stat.color}`} />
            </div>
            <p className="text-sm text-gray-400">{stat.label}</p>
            <p className="text-3xl font-bold text-white mt-1">{stat.value}</p>
          </Card>
        );
      })}
    </div>
  );
}
