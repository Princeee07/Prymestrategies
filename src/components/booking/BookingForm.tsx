'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { bookingSchema, type BookingFormData } from '@/lib/validations';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import { Loader2, CheckCircle } from 'lucide-react';

export default function BookingForm() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
  });

  const onSubmit = async (data: BookingFormData) => {
    setServerError(null);

    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to submit booking');
      }

      setIsSuccess(true);
      reset();
    } catch (err) {
      setServerError(
        err instanceof Error ? err.message : 'Something went wrong'
      );
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-12 text-center">
        <CheckCircle className="w-16 h-16 text-emerald-400 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-white mb-2">
          Booking Submitted!
        </h2>
        <p className="text-gray-400 mb-6">
          We&apos;ll get back to you shortly to confirm your appointment.
        </p>
        <Button onClick={() => setIsSuccess(false)}>Book Another</Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 space-y-6"
    >
      {serverError && (
        <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm">
          {serverError}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Full Name"
          placeholder="John Doe"
          error={errors.name?.message}
          {...register('name')}
        />
        <Input
          label="Email"
          type="email"
          placeholder="john@example.com"
          error={errors.email?.message}
          {...register('email')}
        />
        <Input
          label="Phone"
          type="tel"
          placeholder="+1 (555) 123-4567"
          error={errors.phone?.message}
          {...register('phone')}
        />
        <div className="w-full">
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Service
          </label>
          <select
            {...register('service')}
            className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
          >
            <option value="">Select a service</option>
            <option value="brand-activation">Brand Activation</option>
            <option value="event-marketing">Event Marketing</option>
            <option value="field-marketing">Field Marketing</option>
            <option value="promotional-staffing">Promotional Staffing</option>
            <option value="consultation">General Consultation</option>
          </select>
          {errors.service && (
            <p className="mt-1 text-sm text-red-400">
              {errors.service.message}
            </p>
          )}
        </div>
        <Input
          label="Preferred Date"
          type="date"
          error={errors.date?.message}
          {...register('date')}
        />
        <Input
          label="Preferred Time"
          type="time"
          error={errors.time?.message}
          {...register('time')}
        />
      </div>

      <div className="w-full">
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Message (Optional)
        </label>
        <textarea
          {...register('message')}
          rows={4}
          className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all resize-none"
          placeholder="Tell us about your marketing needs..."
        />
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting}
        className="w-full"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Submitting...
          </>
        ) : (
          'Submit Booking'
        )}
      </Button>
    </form>
  );
}
