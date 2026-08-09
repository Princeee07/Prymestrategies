'use client';

import { ScrollReveal } from '@/components/ui/ScrollReveal';
import Link from 'next/link';

export default function CareersSection() {
  const skills = [
    'Direct Communication & Sales Negotiation',
    'Campaign Management & Market Execution',
    'Team Leadership & Professional Mentorship',
    'Operations & Business Development',
  ];

  return (
    <section
      id="careers"
      className="py-24 bg-[var(--color-charcoal)] relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/careers-hero.jpg"
          alt="Careers"
          className="w-full h-full object-cover grayscale opacity-20 object-center animate-slow-zoom"
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <ScrollReveal>
              <h2 className="text-3xl md:text-5xl font-heading font-light tracking-[0.2em] uppercase text-white mb-6 drop-shadow-xl">
                CAREERS
              </h2>
              <h3 className="text-xl md:text-2xl font-serif text-[var(--color-bronze)] mb-8 italic drop-shadow-lg">
                Where Performance Creates Opportunity.
              </h3>
            </ScrollReveal>
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <ScrollReveal delay={0.2}>
                <p>
                  At PRYME STRATEGIES, we believe career progression should be
                  earned, not awarded based on seniority. We provide ambitious
                  individuals with the platform, training, and experience needed
                  to build a long-term business career.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <p>
                  Our hands-on performance model provides skill development in:
                </p>
                <ul className="mt-4 space-y-3">
                  {skills.map((skill, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-[var(--color-bronze)]"
                    >
                      <span className="mr-3 text-2xl font-bold">&bull;</span>
                      <span className="text-gray-300">{skill}</span>
                    </li>
                  ))}
                </ul>
              </ScrollReveal>

              <ScrollReveal delay={0.4}>
                <p className="mt-4">
                  As you advance within our organization, opportunities scale
                  accordingly—including expanded management roles, professional
                  mentorship, and domestic and international industry trips.
                </p>
                <p className="font-bold text-white mt-4 italic">
                  Bring the ambition. Build the discipline. Earn the
                  opportunity.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.5}>
                <Link
                  href="/#contact"
                  className="inline-block mt-8 bg-[var(--color-bronze)] text-white uppercase font-heading tracking-widest text-sm px-8 py-4 hover:bg-[var(--color-bronze-light)] transition-colors"
                >
                  Apply Now
                </Link>
              </ScrollReveal>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <ScrollReveal direction="left" delay={0.3}>
              <div className="aspect-[4/5] bg-white/5 border border-white/10 p-4 rounded-xl shadow-2xl relative">
                <img
                  src="/68630944603ad773cc39b1c1_948017385_PS53099-5.jpg"
                  alt="Careers at PRYME STRATEGIES"
                  className="w-full h-full object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
