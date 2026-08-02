import BookingForm from '@/components/booking/BookingForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Book a Consultation | PrymeStrategies',
  description:
    'Schedule a free consultation with our marketing experts. Choose your preferred date and time.',
};

export default function BookingPage() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Book Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500">
              Consultation
            </span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Take the first step towards transforming your marketing strategy.
            Choose a time that works for you.
          </p>
        </div>
        <BookingForm />
      </div>
    </section>
  );
}
