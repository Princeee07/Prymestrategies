import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services | PrymeStrategies',
  description:
    'Explore our range of premium marketing services designed to grow your business.',
};

export default function ServicesPage() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
        <p className="text-lg text-gray-400">
          Page under construction. Check back soon.
        </p>
      </div>
    </section>
  );
}
