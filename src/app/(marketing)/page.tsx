import HeroSection from '@/components/sections/HeroSection';
import IntroSection from '@/components/sections/IntroSection';
import AboutSection from '@/components/sections/AboutSection';
import MissionSection from '@/components/sections/MissionSection';
import ApproachSection from '@/components/sections/ApproachSection';
import WhatWeDoSection from '@/components/sections/WhatWeDoSection';
import CareersSection from '@/components/sections/CareersSection';
import ContactSection from '@/components/sections/ContactSection';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-background)]">
      <HeroSection />
      <ScrollReveal>
        <IntroSection />
      </ScrollReveal>
      <ScrollReveal>
        <AboutSection />
      </ScrollReveal>
      <MissionSection />
      <ScrollReveal>
        <ApproachSection />
      </ScrollReveal>

      {/* Aesthetic Gallery Section (Unchanged) */}
      <ScrollReveal>
        <section className="py-24 bg-[var(--color-charcoal)] relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <ScrollReveal>
              <h2 className="text-3xl md:text-5xl font-heading font-light tracking-[0.2em] uppercase text-white text-center mb-16 drop-shadow-2xl">
                ELEVATING <br />
                <span className="text-[var(--color-bronze)]">BRANDS</span>
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  src: '/17.jpg',
                  title: 'DIRECT IMPACT',
                  subtitle: 'Building Meaningful Connections',
                },
                {
                  src: '/37.jpg',
                  title: 'PRYME STRATEGIES',
                  subtitle: 'To become a better person through marketing.',
                },
                {
                  src: '/images%20(2).jpg',
                  title: 'GLOBAL REACH',
                  subtitle: 'Scaling Brands With Confidence',
                },
                {
                  src: '/new-york-city-evening-NYCTG0221-52492d6ccab44f328a1c89f41ac02aea.jpg',
                  title: 'PROVEN RESULTS',
                  subtitle: 'Delivering Measurable ROI',
                },
              ].map((item, i) => (
                <ScrollReveal key={i} delay={0.2 * i}>
                  <div className="relative aspect-video overflow-hidden group shadow-2xl flex flex-col items-center justify-center text-center rounded-xl">
                    <div className="absolute inset-0 bg-black/60 z-10 group-hover:bg-black/30 transition-all duration-700"></div>
                    <img
                      src={item.src}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 z-0"
                    />
                    <div className="relative z-20 p-6 transform translate-y-2 group-hover:translate-y-0 transition-all duration-700">
                      <h3 className="text-2xl md:text-3xl font-heading font-light tracking-[0.2em] uppercase text-white mb-3 drop-shadow-lg">
                        {item.title}
                      </h3>
                      <p className="text-[var(--color-bronze)] font-serif italic text-lg lg:text-xl drop-shadow-md">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <WhatWeDoSection />
      </ScrollReveal>
      <ScrollReveal>
        <CareersSection />
      </ScrollReveal>
      <ScrollReveal>
        <ContactSection />
      </ScrollReveal>
    </div>
  );
}
