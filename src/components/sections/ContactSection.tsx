'use client';

import { useState } from 'react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import {
  MapPin,
  Mail,
  Phone,
  UploadCloud,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from 'lucide-react';
import { StaggerContainer } from '@/components/ui/StaggerContainer';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
  });
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<
    'idle' | 'submitting' | 'success' | 'error'
  >('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      if (selectedFile.type !== 'application/pdf') {
        setErrorMessage('Only PDF files are allowed.');
        return;
      }
      if (selectedFile.size > 5 * 1024 * 1024) {
        setErrorMessage('File size must be less than 5MB.');
        return;
      }
      setErrorMessage('');
      setFile(selectedFile);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      setErrorMessage('Please upload your resume.');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      const data = new FormData();
      data.append('firstName', formData.firstName);
      data.append('lastName', formData.lastName);
      data.append('phone', formData.phone);
      data.append('email', formData.email);
      data.append('resume', file);

      const response = await fetch('/api/applications', {
        method: 'POST',
        body: data,
      });

      if (!response.ok) {
        throw new Error('Failed to submit application');
      }

      setStatus('success');
    } catch (err) {
      setStatus('error');
      setErrorMessage(
        err instanceof Error ? err.message : 'An unexpected error occurred.'
      );
    }
  };

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-light tracking-[0.2em] uppercase mb-6 text-[var(--color-charcoal)]">
            CONTACT US
          </h2>
          <p className="text-lg text-[var(--color-taupe)] max-w-3xl mx-auto leading-relaxed">
            Great partnerships begin with a conversation. Whether you are
            looking to scale your brand&apos;s market reach or explore career
            opportunities with our team, we welcome the opportunity to connect.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <StaggerContainer className="space-y-6">
              {[
                {
                  icon: MapPin,
                  title: 'Company',
                  content: 'PRYME STRATEGIES',
                },
                {
                  icon: MapPin,
                  title: 'Address',
                  content: 'Midtown Manhattan, NY',
                },
                {
                  icon: Mail,
                  title: 'Email',
                  content: 'prymesteategiesinc@gmail.com',
                  isLink: true,
                  href: 'mailto:prymesteategiesinc@gmail.com',
                },
                {
                  icon: Phone,
                  title: 'Phone',
                  content: '+1 (607) 413-9352',
                },
              ].map((item, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="flex items-start bg-[var(--color-beige)] p-6 rounded-2xl border border-[var(--color-border-color)]">
                    <div className="w-12 h-12 bg-white border border-[var(--color-border-color)] rounded-xl flex items-center justify-center mr-6 flex-shrink-0 text-[var(--color-bronze)]">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-[var(--color-charcoal)] mb-1">
                        {item.title}
                      </h4>
                      {item.isLink ? (
                        <a
                          href={item.href}
                          className="text-[var(--color-taupe)] hover:text-[var(--color-bronze)] transition-colors"
                        >
                          {item.content}
                        </a>
                      ) : (
                        <p className="text-[var(--color-taupe)]">
                          {item.content}
                        </p>
                      )}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </StaggerContainer>
          </div>

          {/* Application Form */}
          <ScrollReveal direction="left" delay={0.2}>
            <div className="bg-white p-8 md:p-10 rounded-3xl border border-[var(--color-border-color)] shadow-xl relative z-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 font-heading uppercase tracking-widest text-[var(--color-charcoal)]">
                Apply Now
              </h3>

              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center py-12 text-center h-full min-h-[400px]">
                  <div className="w-24 h-24 border border-[var(--color-border-color)] bg-[var(--color-beige)] rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                    <CheckCircle2
                      className="w-12 h-12 text-[var(--color-bronze)]"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h4 className="text-2xl font-heading font-light tracking-[0.2em] uppercase text-[var(--color-charcoal)] mb-4">
                    Application{' '}
                    <span className="text-[var(--color-bronze)] font-normal">
                      Received
                    </span>
                  </h4>
                  <p className="text-[var(--color-taupe)] mb-10 leading-relaxed max-w-md mx-auto">
                    Thank you for applying to PRYME STRATEGIES. We&apos;ll
                    review your application and get back to you within 48 hours.
                  </p>
                  <button
                    onClick={() => {
                      setStatus('idle');
                      setFile(null);
                      setFormData({
                        firstName: '',
                        lastName: '',
                        phone: '',
                        email: '',
                      });
                    }}
                    className="px-8 py-4 bg-[var(--color-bronze)] text-white font-heading tracking-widest uppercase text-sm rounded-lg hover:bg-[var(--color-bronze-light)] transition-colors"
                  >
                    Submit Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {status === 'error' && (
                    <div className="p-4 bg-red-500/10 border border-red-500/50 rounded-lg flex items-start text-red-500">
                      <AlertCircle className="w-6 h-6 mr-3 flex-shrink-0" />
                      <p>{errorMessage}</p>
                    </div>
                  )}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-gray-600 mb-2"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-[var(--color-bronze)] focus:ring-1 focus:ring-[var(--color-bronze)] transition-colors"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-gray-600 mb-2"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-[var(--color-bronze)] focus:ring-1 focus:ring-[var(--color-bronze)] transition-colors"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-600 mb-2"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-[var(--color-bronze)] focus:ring-1 focus:ring-[var(--color-bronze)] transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-600 mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-[var(--color-bronze)] focus:ring-1 focus:ring-[var(--color-bronze)] transition-colors"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-600">
                      Resume / CV (PDF only)
                    </label>
                    <div className="relative border-2 border-dashed border-gray-300 rounded-xl p-6 hover:border-[var(--color-bronze)] transition-colors bg-gray-50 text-center group">
                      <input
                        type="file"
                        id="resume"
                        accept=".pdf"
                        onChange={handleFileChange}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        required
                      />
                      <div className="flex flex-col items-center justify-center space-y-3">
                        <UploadCloud
                          className={`w-10 h-10 ${file ? 'text-[var(--color-bronze)]' : 'text-gray-400 group-hover:text-[var(--color-bronze)] transition-colors'}`}
                        />
                        {file ? (
                          <div className="text-gray-900 font-medium">
                            {file.name}
                          </div>
                        ) : (
                          <div>
                            <span className="text-[var(--color-bronze)] font-medium">
                              Click to upload
                            </span>
                            <span className="text-gray-500">
                              {' '}
                              or drag and drop
                            </span>
                            <p className="text-xs text-gray-400 mt-2">
                              PDF up to 5MB
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full py-4 bg-[var(--color-bronze)] text-white font-bold rounded-lg hover:bg-[var(--color-bronze-light)] transition-colors flex items-center justify-center group disabled:opacity-70 font-heading tracking-widest uppercase text-sm"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin mr-2" />
                        Sending...
                      </>
                    ) : (
                      'Submit Application'
                    )}
                  </button>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
