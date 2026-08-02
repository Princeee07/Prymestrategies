import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | PrymeStrategies',
  description:
    'Learn about PrymeStrategies and our mission to deliver premium face-to-face marketing solutions.',
};

export default function AboutPage() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
        <p className="text-lg text-gray-400">
          Page under construction. Check back soon.
        </p>
      </div>
    </section>
  );
}
