'use client';

import { useState } from 'react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { UploadCloud, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import Link from 'next/link';

export default function ApplyPage() {
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

  if (status === 'success') {
    return (
      <div className="min-h-screen bg-white pt-32 pb-24 flex items-center justify-center px-4">
        <ScrollReveal className="bg-[var(--color-card-bg)] border border-[var(--color-border-color)] p-12 rounded-3xl max-w-lg w-full text-center">
          <div className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 className="w-12 h-12 text-green-500" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Application Received!
          </h2>
          <p className="text-[var(--color-text-gray)] mb-8 text-lg">
            Thank you for applying to PRYME Strategies. Our team will review
            your application and get back to you within 48 hours.
          </p>
          <Link
            href="/"
            className="inline-block px-8 py-4 bg-white border border-[var(--color-border-color)] text-gray-900 font-bold rounded-lg hover:border-[var(--color-gold)] transition-colors"
          >
            Return to Home
          </Link>
        </ScrollReveal>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Join Our Team
          </h1>
          <p className="text-xl text-[var(--color-text-gray)]">
            Take the first step towards a rewarding career.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <form
            onSubmit={handleSubmit}
            className="bg-[var(--color-card-bg)] border border-[var(--color-border-color)] rounded-3xl p-8 md:p-12 shadow-2xl"
          >
            {status === 'error' && (
              <div className="mb-8 p-4 bg-red-500/10 border border-red-500/50 rounded-lg flex items-start text-red-500">
                <AlertCircle className="w-6 h-6 mr-3 flex-shrink-0" />
                <p>{errorMessage}</p>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-2">
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-[var(--color-text-gray)]"
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
                  className="w-full bg-white border border-[var(--color-border-color)] rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-[var(--color-gold)] transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-[var(--color-text-gray)]"
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
                  className="w-full bg-white border border-[var(--color-border-color)] rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-[var(--color-gold)] transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[var(--color-text-gray)]"
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
                  className="w-full bg-white border border-[var(--color-border-color)] rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-[var(--color-gold)] transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-[var(--color-text-gray)]"
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
                  className="w-full bg-white border border-[var(--color-border-color)] rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-[var(--color-gold)] transition-colors"
                />
              </div>
            </div>

            <div className="mb-10 space-y-2">
              <label className="block text-sm font-medium text-[var(--color-text-gray)]">
                Resume / CV (PDF only)
              </label>
              <div className="relative border-2 border-dashed border-[var(--color-border-color)] rounded-xl p-8 hover:border-[var(--color-gold)] transition-colors bg-white text-center group">
                <input
                  type="file"
                  id="resume"
                  accept=".pdf"
                  onChange={handleFileChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <div className="flex flex-col items-center justify-center space-y-4">
                  <UploadCloud
                    className={`w-12 h-12 ${file ? 'text-[var(--color-gold)]' : 'text-[var(--color-text-gray)] group-hover:text-[var(--color-gold)] transition-colors'}`}
                  />
                  {file ? (
                    <div className="text-gray-900 font-medium">
                      {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
                    </div>
                  ) : (
                    <div>
                      <span className="text-[var(--color-gold)] font-medium">
                        Click to upload
                      </span>
                      <span className="text-[var(--color-text-gray)]">
                        {' '}
                        or drag and drop
                      </span>
                      <p className="text-sm text-[var(--color-text-gray)] mt-2">
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
              className="w-full py-4 bg-[var(--color-gold)] text-white text-lg font-bold rounded-lg hover:bg-[var(--color-gold-light)] transition-all disabled:opacity-70 flex items-center justify-center"
            >
              {status === 'submitting' ? (
                <>
                  <Loader2 className="w-6 h-6 animate-spin mr-2" />
                  Submitting...
                </>
              ) : (
                'Submit Application'
              )}
            </button>
          </form>
        </ScrollReveal>
      </div>
    </div>
  );
}
