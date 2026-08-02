'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Button from '@/components/ui/Button';
import { fadeInUp, staggerContainer } from '@/config/animations';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-violet-950/20 via-gray-950 to-gray-950" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-fuchsia-600/10 rounded-full blur-3xl" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl mx-auto px-4 text-center"
      >
        {/* Badge */}
        <motion.div
          variants={fadeInUp}
          className="inline-flex items-center gap-2 px-4 py-2 bg-violet-500/10 border border-violet-500/20 rounded-full text-violet-400 text-sm mb-8"
        >
          <Sparkles className="w-4 h-4" />
          Premium Marketing Solutions
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={fadeInUp}
          className="text-5xl md:text-7xl font-bold leading-tight mb-6"
        >
          Transform Your Brand With{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500">
            Face-to-Face
          </span>{' '}
          Marketing
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeInUp}
          className="text-xl text-gray-400 max-w-2xl mx-auto mb-10"
        >
          We craft unforgettable brand experiences that connect with your
          audience and drive measurable results.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/booking">
            <Button size="lg">
              Book a Consultation
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
          <Link href="/services">
            <Button variant="outline" size="lg">
              Explore Services
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
