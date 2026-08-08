import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { StaggerContainer } from '@/components/ui/StaggerContainer';
import {
  CheckCircle2,
  TrendingUp,
  Users,
  MessageSquare,
  Award,
} from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers | PRYME Strategies',
  description:
    'Join PRYME Strategies. Build your career with paid training, professional development, and incredible earning potential.',
};

export default function CareersPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white pt-20">
      {/* Hero Banner */}
      <section className="py-24 border-b border-[var(--color-border-color)] bg-[var(--color-charcoal)] relative overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="/careers-hero.jpg"
            alt="Careers"
            className="w-full h-full object-cover grayscale opacity-30 object-center animate-slow-zoom"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-charcoal)] to-transparent z-0"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--color-gold)]/10 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2 z-0"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <ScrollReveal>
            <h1 className="text-5xl md:text-7xl font-heading font-light tracking-[0.2em] uppercase text-white mb-6 drop-shadow-xl">
              Grow With Us
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10 drop-shadow-md">
              We&apos;re looking for ambitious individuals ready to take their
              career to the next level.
            </p>
            <Link
              href="/apply"
              className="inline-block px-8 py-4 bg-[var(--color-bronze)] text-white text-sm font-heading uppercase tracking-widest hover:bg-[var(--color-bronze-light)] transition-all"
            >
              View Open Positions
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Role Description */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <ScrollReveal direction="right">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Sales Associate
              </h2>
              <div className="space-y-6 text-[var(--color-text-gray)] text-lg">
                <p>
                  As a Sales Associate at PRYME Strategies, you are the face of
                  our clients&apos; brands. You will engage directly with
                  customers, understand their needs, and provide tailored
                  solutions.
                </p>
                <h3 className="text-xl font-bold text-gray-900 pt-4">
                  Responsibilities:
                </h3>
                <ul className="space-y-3">
                  {[
                    'Execute face-to-face marketing campaigns',
                    'Build and maintain customer relationships',
                    'Meet and exceed daily acquisition targets',
                    'Participate in daily leadership and training workshops',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle2 className="w-6 h-6 text-[var(--color-bronze)] mr-3 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.2}>
              <div className="bg-[var(--color-card-bg)] p-8 rounded-2xl border border-[var(--color-border-color)]">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Compensation & Benefits
                </h3>
                <div className="space-y-6">
                  <div className="pb-6 border-b border-[var(--color-border-color)]">
                    <div className="text-3xl font-black text-[var(--color-bronze)] mb-2">
                      $40,000 – $120,000
                    </div>
                    <div className="text-[var(--color-text-gray)]">
                      Annual Earning Potential (Base + Uncapped Commission)
                    </div>
                  </div>
                  <ul className="space-y-4">
                    {[
                      'Comprehensive Paid Training',
                      'Professional Development Programs',
                      'Retirement Plans',
                      'Merit-Based Advancement',
                      'Travel Opportunities',
                    ].map((item, i) => (
                      <li key={i} className="flex items-center text-gray-900">
                        <div className="w-2 h-2 bg-[var(--color-bronze)] rounded-full mr-4"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/apply"
                    className="block w-full text-center mt-8 px-6 py-4 bg-[var(--color-bronze)] text-white font-bold rounded hover:bg-[var(--color-bronze-light)] transition-colors"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Career Progression */}
      <section className="py-24 bg-gray-50 border-y border-[var(--color-border-color)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Clear Path to Leadership
            </h2>
            <p className="text-xl text-[var(--color-text-gray)] max-w-2xl mx-auto">
              We promote 100% from within. Your growth is entirely dependent on
              your work ethic and results.
            </p>
          </ScrollReveal>

          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-[var(--color-border-color)] -translate-y-1/2"></div>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: '01',
                  title: 'Sales Associate',
                  desc: 'Master the basics of direct marketing and customer acquisition.',
                },
                {
                  step: '02',
                  title: 'Team Member',
                  desc: 'Take on more responsibility and start mentoring new hires.',
                },
                {
                  step: '03',
                  title: 'Team Leader',
                  desc: 'Manage your own small team and run daily training sessions.',
                },
                {
                  step: '04',
                  title: 'Management',
                  desc: 'Oversee entire campaigns and lead the strategic direction.',
                },
              ].map((item, i) => (
                <ScrollReveal
                  key={i}
                  delay={i * 0.2}
                  direction="up"
                  className="relative"
                >
                  <div className="bg-[var(--color-card-bg)] p-6 rounded-2xl border border-[var(--color-border-color)] relative z-10 hover:border-[var(--color-bronze)] transition-colors h-full">
                    <div className="w-12 h-12 bg-[var(--color-navy)] text-[var(--color-bronze)] font-black text-xl rounded-full flex items-center justify-center mb-6 border-2 border-[var(--color-bronze)] mx-auto md:mx-0">
                      {item.step}
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3 text-center md:text-left">
                      {item.title}
                    </h4>
                    <p className="text-[var(--color-text-gray)] text-center md:text-left">
                      {item.desc}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Skills Developed */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Skills You&apos;ll Develop
            </h2>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: MessageSquare,
                title: 'Communication',
                desc: 'Learn to articulate value clearly and persuasively.',
              },
              {
                icon: Award,
                title: 'Public Speaking',
                desc: 'Build confidence presenting to both individuals and groups.',
              },
              {
                icon: Users,
                title: 'Teamwork',
                desc: 'Collaborate effectively to achieve shared objectives.',
              },
              {
                icon: TrendingUp,
                title: 'Leadership',
                desc: 'Inspire and guide others toward their own success.',
              },
            ].map((skill, i) => (
              <ScrollReveal key={i} delay={i * 0.2}>
                <div className="text-center">
                  <div className="mx-auto w-16 h-16 bg-[var(--color-card-bg)] rounded-2xl border border-[var(--color-border-color)] flex items-center justify-center mb-6 text-[var(--color-bronze)]">
                    <skill.icon size={32} />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    {skill.title}
                  </h4>
                  <p className="text-[var(--color-text-gray)]">{skill.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
