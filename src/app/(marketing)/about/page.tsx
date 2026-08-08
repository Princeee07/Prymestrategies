import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { StaggerContainer } from '@/components/ui/StaggerContainer';
import { Shield, TrendingUp, Target, Users } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | PRYME Strategies',
  description:
    'Learn about PRYME Strategies, our story, Vicki Morris, and our core values.',
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white pt-20">
      {/* Hero Banner */}
      <section className="py-24 border-b border-[var(--color-border-color)] bg-[var(--color-charcoal)] relative overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="/about-hero.jpg"
            alt="About Hero"
            className="w-full h-full object-cover grayscale opacity-30 object-center animate-slow-zoom"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-charcoal)] to-transparent z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <ScrollReveal>
            <h1 className="text-5xl md:text-7xl font-heading font-light tracking-[0.2em] uppercase text-white mb-6 drop-shadow-xl">
              Our Story
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto drop-shadow-md">
              Driven by a passion for connection and a commitment to growth.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Company Story & Mission */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="right">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                The PRYME Mission
              </h2>
              <div className="space-y-6 text-[var(--color-text-gray)] text-lg leading-relaxed">
                <p>
                  PRYME Strategies was founded on a simple but powerful premise:
                  direct, face-to-face engagement remains the most effective way
                  to build lasting brand loyalty. In a world increasingly
                  dominated by digital noise, authentic human connection stands
                  out.
                </p>
                <p>
                  Based in Huntsville, we partner with both B2B and B2C clients
                  to bring their campaigns to life. We don&apos;t just generate
                  leads; we build relationships. Our approach ensures that every
                  interaction is meaningful, measurable, and ROI-driven.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="left" delay={0.2}>
              <div className="aspect-video bg-[var(--color-charcoal)] rounded-2xl border border-[var(--color-border-color)] relative overflow-hidden group shadow-xl">
                <div className="absolute inset-0 bg-black/40 z-10 group-hover:bg-transparent transition-all duration-700"></div>
                <img
                  src="/new-york-city-evening-NYCTG0221-52492d6ccab44f328a1c89f41ac02aea.jpg"
                  alt="Company Story"
                  className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 z-0"
                />
                <div className="absolute inset-0 flex items-center justify-center z-20 text-[var(--color-bronze)] opacity-50 group-hover:opacity-0 transition-opacity duration-700">
                  <Target size={80} strokeWidth={1} />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24 bg-gray-50 border-y border-[var(--color-border-color)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-sm font-bold tracking-widest text-[var(--color-bronze)] uppercase mb-3">
              Leadership
            </h2>
            <h3 className="text-4xl font-bold text-gray-900 mb-6">
              Vicki Morris
            </h3>
            <p className="text-xl text-[var(--color-text-gray)]">
              A recognized leader in the Huntsville business ecosystem, Vicki
              Morris founded PRYME Strategies with a vision to redefine
              marketing through personal growth.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="right" delay={0.2}>
              <div className="aspect-square max-w-md mx-auto bg-[var(--color-card-bg)] rounded-full border-4 border-[var(--color-border-color)] relative overflow-hidden flex items-center justify-center shadow-[0_0_50px_rgba(212,168,67,0.1)]">
                <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-navy)] to-[var(--color-card-bg)]"></div>
                <Users
                  size={80}
                  className="text-[var(--color-text-gray)] opacity-50 relative z-10"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="left" delay={0.4}>
              <div className="space-y-6 text-[var(--color-text-gray)] text-lg leading-relaxed">
                <p>
                  Vicki believes that a company is only as strong as its team.
                  Under her leadership, PRYME Strategies has cultivated an
                  environment where professional development is just as
                  important as client acquisition.
                </p>
                <p>
                  &quot;We don&apos;t just train salespeople; we develop
                  leaders,&quot; Vicki notes. This philosophy permeates every
                  aspect of the company, from our 48-hour client response policy
                  to our comprehensive management training program.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-[var(--color-text-gray)]">
              The principles that guide every interaction.
            </p>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: 'Integrity',
                desc: 'Doing the right thing, even when no one is watching.',
              },
              {
                icon: TrendingUp,
                title: 'Growth',
                desc: 'Continuous personal and professional development.',
              },
              {
                icon: Target,
                title: 'Results',
                desc: 'Delivering measurable ROI for our clients.',
              },
              {
                icon: Users,
                title: 'Teamwork',
                desc: 'Supporting each other to achieve collective success.',
              },
            ].map((value, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 0.2}>
                <div className="bg-[var(--color-card-bg)] p-8 rounded-2xl border border-[var(--color-border-color)] h-full hover:border-[var(--color-bronze)] transition-all transform hover:-translate-y-2">
                  <value.icon className="w-12 h-12 text-[var(--color-bronze)] mb-6" />
                  <h4 className="text-xl font-bold text-gray-900 mb-4">
                    {value.title}
                  </h4>
                  <p className="text-[var(--color-text-gray)]">{value.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
