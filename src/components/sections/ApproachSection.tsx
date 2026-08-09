'use client';

import { ScrollReveal } from '@/components/ui/ScrollReveal';

export default function ApproachSection() {
  const steps = [
    {
      title: 'Understand the Market',
      desc: 'We analyze client objectives, audience demographics, and market dynamics to establish clear campaign benchmarks.',
    },
    {
      title: 'Create the Strategy',
      desc: 'We design targeted direct marketing campaigns focused on key engagement points where prospective customers are most receptive.',
    },
    {
      title: 'Connect Face-to-Face',
      desc: 'Our representatives engage directly with target audiences, addressing specific needs, answering questions, and building authentic connection in real time.',
    },
    {
      title: 'Optimize & Scale',
      desc: 'We continuously evaluate performance data to refine execution, strengthen customer acquisition, and maximize client ROI.',
    },
  ];

  return (
    <section
      id="approach"
      className="py-24 bg-gray-50 relative border-y border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-light tracking-[0.2em] uppercase mb-6 text-[var(--color-charcoal)]">
            OUR APPROACH
          </h2>
          <p className="text-lg text-[var(--color-taupe)] max-w-3xl mx-auto leading-relaxed">
            Every brand requires an execution strategy tailored to its unique
            goals. We avoid one-size-fits-all templates and execute campaigns
            through a refined four-step framework:
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <ScrollReveal key={i} delay={0.15 * i}>
              <div className="bg-white p-8 text-center h-full flex flex-col justify-start border border-gray-100 shadow-lg hover:border-[var(--color-bronze)] transition-all transform hover:-translate-y-2 rounded-xl">
                <div className="w-12 h-12 bg-[var(--color-charcoal)] text-[var(--color-bronze)] font-heading text-xl flex items-center justify-center rounded-full mx-auto mb-6">
                  {i + 1}
                </div>
                <h3 className="text-lg font-bold text-[var(--color-charcoal)] mb-4">
                  {step.title}
                </h3>
                <p className="text-[var(--color-taupe)] leading-relaxed text-sm">
                  {step.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
