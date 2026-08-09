'use client';

import { ScrollReveal } from '@/components/ui/ScrollReveal';

export default function IntroSection() {
  return (
    <section className="py-20 bg-gray-50 border-b border-gray-200 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <div className="w-16 h-1 bg-[var(--color-bronze)] mx-auto mb-10" />
        </ScrollReveal>
        <ScrollReveal delay={0.2} className="space-y-6">
          <p className="text-xl md:text-2xl text-[var(--color-charcoal)] font-serif italic leading-relaxed">
            Marketing continues to evolve, but one fundamental principle remains
            constant:{' '}
            <span className="text-[var(--color-bronze)] transition-colors duration-500 cursor-default">
              people connect with people.
            </span>
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.3} className="mt-8">
          <p className="text-lg text-[var(--color-taupe)] leading-relaxed">
            PRYME STRATEGIES is a direct marketing and sales firm focused on
            helping brands turn genuine human connections into measurable
            business opportunities. By combining direct engagement, strategic
            market positioning, and professional execution, we represent our
            clients in environments where authentic conversations drive brand
            awareness and customer acquisition.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
