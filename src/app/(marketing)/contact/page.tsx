'use client';

import { useState } from 'react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { MapPin, Mail, Phone, Send, CheckCircle2 } from 'lucide-react';
import { StaggerContainer } from '@/components/ui/StaggerContainer';

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>(
    'idle'
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate network request
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white pt-20">
      {/* Hero Banner */}
      <section className="py-24 border-b border-[var(--color-border-color)] bg-[var(--color-charcoal)] relative overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="/contact-hero.jpg"
            alt="Contact Hero"
            className="w-full h-full object-cover grayscale opacity-30 object-center animate-slow-zoom"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-charcoal)] to-transparent z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <ScrollReveal>
            <h1 className="text-5xl md:text-7xl font-heading font-light tracking-[0.2em] uppercase text-white mb-6 drop-shadow-xl">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto drop-shadow-md">
              Ready to elevate your brand&apos;s face-to-face marketing
              strategy? We&apos;d love to hear from you.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <ScrollReveal>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Contact Information
                </h2>
              </ScrollReveal>

              <StaggerContainer className="space-y-6">
                {[
                  {
                    icon: MapPin,
                    title: 'Our Office',
                    content: 'Huntsville, Alabama',
                  },
                  {
                    icon: Mail,
                    title: 'Email Us',
                    content: 'info@prymestrategies.com',
                    isLink: true,
                    href: 'mailto:info@prymestrategies.com',
                  },
                  {
                    icon: Phone,
                    title: 'Call Us',
                    content: 'Available upon request',
                  },
                ].map((item, i) => (
                  <ScrollReveal key={i} delay={i * 0.1}>
                    <div className="flex items-start bg-[var(--color-card-bg)] p-6 rounded-2xl border border-[var(--color-border-color)]">
                      <div className="w-12 h-12 bg-white border border-[var(--color-border-color)] rounded-xl flex items-center justify-center mr-6 flex-shrink-0 text-[var(--color-bronze)]">
                        <item.icon size={24} />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-1">
                          {item.title}
                        </h4>
                        {item.isLink ? (
                          <a
                            href={item.href}
                            className="text-[var(--color-text-gray)] hover:text-[var(--color-bronze)] transition-colors"
                          >
                            {item.content}
                          </a>
                        ) : (
                          <p className="text-[var(--color-text-gray)]">
                            {item.content}
                          </p>
                        )}
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </StaggerContainer>
            </div>

            {/* Contact Form */}
            <ScrollReveal direction="left" delay={0.2}>
              <div className="bg-[var(--color-card-bg)] p-8 md:p-10 rounded-3xl border border-[var(--color-border-color)]">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">
                  Send us a Message
                </h3>

                {status === 'success' ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center h-full min-h-[400px]">
                    <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-10 h-10 text-green-500" />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">
                      Message Sent!
                    </h4>
                    <p className="text-[var(--color-text-gray)] mb-8">
                      Thank you for reaching out. We&apos;ll get back to you
                      within 48 hours.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="px-6 py-3 bg-white border border-[var(--color-border-color)] text-gray-900 rounded hover:border-[var(--color-bronze)] transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-[var(--color-text-gray)] mb-2"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        className="w-full bg-white border border-[var(--color-border-color)] rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-[var(--color-bronze)] transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-[var(--color-text-gray)] mb-2"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        className="w-full bg-white border border-[var(--color-border-color)] rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-[var(--color-bronze)] transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-[var(--color-text-gray)] mb-2"
                      >
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        required
                        className="w-full bg-white border border-[var(--color-border-color)] rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-[var(--color-bronze)] transition-colors"
                        placeholder="How can we help?"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-[var(--color-text-gray)] mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        required
                        className="w-full bg-white border border-[var(--color-border-color)] rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-[var(--color-bronze)] transition-colors resize-none"
                        placeholder="Your message here..."
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full py-4 bg-[var(--color-bronze)] text-white font-bold rounded-lg hover:bg-[var(--color-bronze-light)] transition-colors flex items-center justify-center group disabled:opacity-70"
                    >
                      {status === 'submitting' ? (
                        'Sending...'
                      ) : (
                        <>
                          Send Message
                          <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
