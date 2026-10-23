'use client';

import Image from 'next/image';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[var(--color-beige)]/30 -skew-x-12 transform origin-top-right z-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Image Composition */}
          <ScrollReveal direction="right" className="relative hidden lg:block">
            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl z-10">
              <Image
                src="/about-hero.jpg"
                alt="PRYME STRATEGIES Team"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[var(--color-charcoal)]/10 mix-blend-multiply"></div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-8 -right-8 w-2/3 h-2/3 bg-[var(--color-beige)] rounded-2xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-[var(--color-bronze)] rounded-2xl -z-10"></div>

            {/* Floating Badge */}
            <div className="absolute bottom-12 -left-8 bg-white p-6 rounded-xl shadow-xl border border-gray-100 animate-float">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[var(--color-bronze)] rounded-full flex items-center justify-center text-white font-bold text-xl">
                  P
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-heading tracking-widest uppercase">
                    Trusted By
                  </p>
                  <p className="font-bold text-[var(--color-charcoal)]">
                    Top Brands
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: Content */}
          <div className="space-y-8">
            <ScrollReveal direction="left">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-[1px] bg-[var(--color-bronze)]"></div>
                <h2 className="text-sm font-heading font-bold tracking-[0.2em] uppercase text-[var(--color-bronze)]">
                  ABOUT US
                </h2>
              </div>
              <h3 className="text-3xl md:text-5xl font-serif text-[var(--color-charcoal)] leading-tight">
                Building{' '}
                <span className="italic text-[var(--color-bronze)]">
                  Brands
                </span>
                .<br />
                Developing{' '}
                <span className="italic text-[var(--color-bronze)]">
                  People
                </span>
                .<br />
                Creating{' '}
                <span className="italic text-[var(--color-bronze)]">
                  Opportunity
                </span>
                .
              </h3>
            </ScrollReveal>

            <ScrollReveal delay={0.2} direction="left">
              <p className="text-lg text-[var(--color-taupe)] leading-relaxed">
                At PRYME STRATEGIES, we believe effective marketing begins with
                understanding people. We partner with brands to strengthen their
                market presence and drive growth through face-to-face
                communication. While digital channels expand brand exposure,
                meaningful human interaction builds the trust needed to turn
                interest into long-term loyalty.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3} direction="left">
              <div className="pl-6 border-l-4 border-[var(--color-bronze)] py-2">
                <p className="text-xl font-medium text-[var(--color-charcoal)] italic">
                  &quot;We operate under a straightforward principle: the right
                  strategy becomes exponential when delivered by the right
                  people.&quot;
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4} direction="left">
              <p className="text-[var(--color-taupe)] leading-relaxed">
                Our firm is built on a culture of professionalism,
                accountability, and continuous improvement. For our clients, we
                serve as a seamless extension of their brand—communicating value
                with clarity and integrity. Internally, we foster an environment
                where ambitious individuals can build practical skills in
                leadership, business development, and campaign execution.
              </p>
            </ScrollReveal>

            <ScrollReveal
              delay={0.5}
              direction="left"
              className="pt-4 lg:hidden"
            >
              <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-lg mt-8">
                <Image
                  src="/about-hero.jpg"
                  alt="PRYME STRATEGIES Team"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
