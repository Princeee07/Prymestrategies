import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import Testimonials from '@/components/sections/Testimonials';
import Stats from '@/components/sections/Stats';
import CTA from '@/components/sections/CTA';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PrymeStrategies | Premium Marketing Solutions',
  description:
    'Transform your business with face-to-face marketing strategies that deliver measurable results. Book your free consultation today.',
  openGraph: {
    title: 'PrymeStrategies | Premium Marketing Solutions',
    description:
      'Transform your business with face-to-face marketing strategies that deliver measurable results.',
    type: 'website',
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <Stats />
      <Testimonials />
      <CTA />
    </>
  );
}
