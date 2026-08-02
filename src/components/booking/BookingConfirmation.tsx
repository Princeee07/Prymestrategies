import { CheckCircle } from 'lucide-react';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export default function BookingConfirmation() {
  return (
    <div className="text-center py-12">
      <CheckCircle className="w-20 h-20 text-emerald-400 mx-auto mb-6" />
      <h2 className="text-3xl font-bold text-white mb-3">Booking Confirmed!</h2>
      <p className="text-gray-400 max-w-md mx-auto mb-8">
        Thank you for your booking. We&apos;ll send a confirmation email
        shortly.
      </p>
      <Link href="/">
        <Button variant="outline">Back to Home</Button>
      </Link>
    </div>
  );
}
