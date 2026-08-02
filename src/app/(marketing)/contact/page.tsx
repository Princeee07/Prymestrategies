import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | PrymeStrategies',
  description: "Get in touch with PrymeStrategies. We'd love to hear from you.",
};

export default function ContactPage() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
        <p className="text-lg text-gray-400">
          Page under construction. Check back soon.
        </p>
      </div>
    </section>
  );
}
