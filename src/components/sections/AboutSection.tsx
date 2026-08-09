'use client';

import { ScrollReveal } from '@/components/ui/ScrollReveal';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl font-heading font-light tracking-[0.2em] uppercase mb-6 text-[var(--color-charcoal)]">
            ABOUT US
          </h2>
          <h3 className="text-xl md:text-2xl font-serif text-[var(--color-bronze)] mb-12 italic">
            Building Brands. Developing People. Creating Opportunity.
          </h3>
        </ScrollReveal>

        <div className="space-y-8 text-lg text-[var(--color-taupe)] leading-relaxed">
          <ScrollReveal delay={0.2}>
            <p>
              At PRYME STRATEGIES, we believe effective marketing begins with
              understanding people. We partner with brands to strengthen their
              market presence and drive growth through face-to-face
              communication. While digital channels expand brand exposure,
              meaningful human interaction builds the trust needed to turn
              interest into long-term loyalty.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <p className="font-bold text-[var(--color-charcoal)]">
              We operate under a straightforward principle: the right strategy
              becomes exponential when delivered by the right people.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.4}>
            <p>
              Our firm is built on a culture of professionalism, accountability,
              and continuous improvement. For our clients, we serve as a
              seamless extension of their brand—communicating value with clarity
              and integrity. Internally, we foster an environment where
              ambitious individuals can build practical skills in leadership,
              business development, and campaign execution.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
