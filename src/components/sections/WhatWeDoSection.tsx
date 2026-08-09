'use client';

import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Briefcase, Calendar, ShoppingBag, Target } from 'lucide-react';

export default function WhatWeDoSection() {
  const services = [
    {
      icon: Briefcase,
      title: 'Business-to-Business (B2B) Marketing',
      desc: 'Direct engagement with business owners and decision-makers to present high-value products and services through targeted, professional presentations.',
    },
    {
      icon: Calendar,
      title: 'Event Marketing',
      desc: 'Curated direct-engagement opportunities in strategic venues designed to expand brand reach and generate immediate customer interest.',
    },
    {
      icon: ShoppingBag,
      title: 'Retail Marketing',
      desc: 'In-store promotional campaigns designed to capture customer attention, communicate brand value, and accelerate purchasing decisions.',
    },
    {
      icon: Target,
      title: 'Direct Customer Acquisition',
      desc: 'Turning high-level brand awareness into active engagement through clear, personalized, and solution-oriented conversations.',
    },
  ];

  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-light tracking-[0.2em] uppercase mb-6 text-[var(--color-charcoal)]">
            WHAT WE DO
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((svc, i) => (
            <ScrollReveal key={i} delay={0.2 * i}>
              <div className="flex flex-col md:flex-row items-start bg-[var(--color-beige)] p-8 rounded-xl border border-[var(--color-border-color)] group hover:border-[var(--color-bronze)] transition-all h-full">
                <div className="w-16 h-16 bg-white border border-[var(--color-border-color)] rounded-xl flex flex-shrink-0 items-center justify-center mb-6 md:mb-0 md:mr-8 text-[var(--color-bronze)] group-hover:scale-110 transition-transform">
                  <svc.icon size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[var(--color-charcoal)] mb-3">
                    {svc.title}
                  </h3>
                  <p className="text-[var(--color-taupe)] leading-relaxed">
                    {svc.desc}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
