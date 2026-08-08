'use client';

import { useEffect, useState, useReducer } from 'react';
import type { Booking } from '@/types';

export function useBookings() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [refetchCount, triggerRefetch] = useReducer((c: number) => c + 1, 0);

  useEffect(() => {
    let cancelled = false;
    const controller = new AbortController();

    async function loadBookings() {
      setIsLoading(true);
      setError(null);
      try {
        const res = await fetch('/api/admin/bookings', {
          signal: controller.signal,
        });
        if (cancelled) return;
        if (res.ok) {
          const data = await res.json();
          setBookings(data.bookings as Booking[]);
        } else {
          const errData = await res.json();
          setError(errData.error || 'Failed to fetch bookings');
        }
      } catch (err: unknown) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : 'Network error');
        }
      } finally {
        if (!cancelled) {
          setIsLoading(false);
        }
      }
    }

    loadBookings();

    return () => {
      cancelled = true;
      controller.abort();
    };
  }, [refetchCount]);

  return { bookings, isLoading, error, refetch: triggerRefetch };
}
