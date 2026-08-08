import Link from 'next/link';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { TypewriterText } from '@/components/ui/TypewriterText';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-background)]">
      {/* 1. Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
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
        <div className="absolute inset-0 z-0 bg-black/40"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal delay={0.1}>
            <h1 className="text-5xl md:text-8xl font-heading font-light tracking-[0.2em] uppercase text-white mb-6 drop-shadow-xl">
              Face To Face Marketing
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. "Our Approach" Section */}
      <section className="relative bg-gradient-to-b from-gray-100 to-white pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal delay={0.2} className="relative z-10 -mt-32">
            <div className="bg-[var(--color-charcoal)] text-white p-12 shadow-2xl text-center md:text-left flex flex-col items-center md:items-start">
              <h2 className="text-3xl md:text-4xl font-heading font-light tracking-[0.2em] uppercase mb-6 flex items-center justify-center md:justify-start gap-4 flex-wrap whitespace-nowrap">
                <span>Our Approach</span>
                <TypewriterText
                  words={['Works.', 'Connects.', 'Matters.', 'Inspires.']}
                />
              </h2>
              <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                We believe that the most effective way to build a brand is
                through direct, meaningful connections. Our approach goes beyond
                traditional advertising by engaging directly with your audience,
                creating lasting impressions that drive real results and foster
                loyalty.
              </p>
              <Link
                href="/contact"
                className="bg-[var(--color-bronze)] text-white uppercase font-heading tracking-widest text-sm px-8 py-4 hover:bg-[var(--color-bronze-light)] transition-colors inline-block"
              >
                Let&apos;s Schedule a Meeting
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 3. "How To Do Business" Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-heading font-light tracking-[0.2em] uppercase mb-16 text-[var(--color-charcoal)]">
              How To Do Business With Our Team
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                step: 'Step #1',
                desc: 'Initial consultation to understand your brand and goals.',
              },
              {
                step: 'Step #2',
                desc: 'Custom strategy development tailored to your specific audience.',
              },
              {
                step: 'Step #3',
                desc: 'Execution of face-to-face campaigns by our trained experts.',
              },
              {
                step: 'Step #4',
                desc: 'Ongoing analysis and optimization for maximum ROI.',
              },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={0.2 * i}>
                <div className="bg-[var(--color-beige)] p-8 text-center h-full flex flex-col justify-center">
                  <h3 className="text-xl font-heading font-light tracking-[0.2em] uppercase mb-4 text-[var(--color-charcoal)]">
                    {item.step}
                  </h3>
                  <p className="text-[var(--color-taupe)] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.8}>
            <Link
              href="/services"
              className="inline-flex items-center text-[var(--color-taupe)] hover:text-[var(--color-bronze)] transition-colors font-heading tracking-widest text-sm uppercase"
            >
              View Our Services <span className="ml-2">{'>>'}</span>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* 4. Founder Section */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center relative">
            {/* Left: Image (Replaced Placeholder) */}
            <ScrollReveal direction="right" className="w-full lg:w-1/2 z-10">
              <div className="aspect-[3/4] shadow-xl relative w-full max-w-md mx-auto lg:mx-0 lg:ml-auto overflow-hidden">
                <img
                  src="/68630944603ad773cc39b1c1_948017385_PS53099-5.jpg"
                  alt="Vicki Morris"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </ScrollReveal>

            {/* Right: Taupe Box Overlapping */}
            <ScrollReveal
              direction="left"
              className="w-full lg:w-1/2 lg:-ml-24 z-20 mt-12 lg:mt-0"
              delay={0.3}
            >
              <div className="bg-[var(--color-taupe)] text-white p-12 shadow-2xl">
                <p className="text-lg leading-relaxed mb-8">
                  Face To Face Marketing is owned and operated by Vicki Morris.
                  As a leader in the Huntsville business ecosystem, she is able
                  to tailor communication strategies that resonate on a personal
                  level, driving growth and fostering authentic relationships.
                </p>
                <Link
                  href="/contact"
                  className="bg-[var(--color-bronze)] text-white uppercase font-heading tracking-widest text-sm px-8 py-4 hover:bg-[var(--color-bronze-light)] transition-colors inline-block"
                >
                  Get In Touch
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Aesthetic Gallery Section */}
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
                <div className="relative aspect-video overflow-hidden group shadow-2xl flex flex-col items-center justify-center text-center">
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

      {/* 5. Mission Statement Section */}
      <section className="py-32 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-heading font-light tracking-[0.2em] uppercase mb-12 text-[var(--color-charcoal)]">
              Our Mission Statement:
            </h2>
            <div className="space-y-6 text-xl text-[var(--color-taupe)] leading-relaxed font-serif">
              <p>&quot;To become a better person through marketing.&quot;</p>
              <p>
                We believe that the skills required to excel in direct
                sales—communication, empathy, resilience, and leadership—are the
                same skills needed to excel in life. By investing in our
                team&apos;s personal and professional growth, we deliver
                exceptional results for our clients and create a lasting
                positive impact in our community.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
