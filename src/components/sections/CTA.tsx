'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';
import { fadeInUp, staggerContainer } from '@/config/animations';

export default function CTA() {
  return (
    <section className="py-24 px-4">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-4xl mx-auto text-center bg-gradient-to-r from-violet-600/20 to-fuchsia-600/20 border border-violet-500/20 rounded-3xl p-12 md:p-16 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-violet-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-fuchsia-600/10 rounded-full blur-3xl" />

        <div className="relative z-10">
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Ready to Elevate Your Brand?
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-gray-400 text-lg max-w-xl mx-auto mb-8"
          >
            Let&apos;s create something extraordinary together. Book your free
            consultation today.
          </motion.p>
          <motion.div variants={fadeInUp}>
            <Link href="/booking">
              <Button size="lg">
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
