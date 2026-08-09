'use client';

import { ScrollReveal } from '@/components/ui/ScrollReveal';

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source
          src="/New_York_City_drone_views_202608081430.mp4"
          type="video/mp4"
        />
      </video>
      <div className="absolute inset-0 z-0 bg-black/50"></div>
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-12 flex flex-col items-center">
        <ScrollReveal delay={0.1}>
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-heading font-light tracking-[0.2em] uppercase text-white mb-8 drop-shadow-2xl">
            PRYME STRATEGIES
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <h2 className="text-xl md:text-3xl font-serif text-[var(--color-bronze)] drop-shadow-xl italic max-w-4xl mx-auto">
            Strategy Built Around People. Growth Built Around Connection.
          </h2>
        </ScrollReveal>
      </div>
    </section>
  );
}
