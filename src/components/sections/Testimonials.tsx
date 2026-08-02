'use client';

import { motion } from 'framer-motion';
import Card from '@/components/ui/Card';
import { fadeInUp, staggerContainer } from '@/config/animations';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Marketing Director, TechCorp',
    content:
      'PrymeStrategies transformed our brand presence. Their team delivered exceptional results that exceeded our expectations.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'CEO, StartupHub',
    content:
      'The ROI from their campaigns was incredible. Professional, creative, and results-driven — exactly what we needed.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Brand Manager, RetailMax',
    content:
      'Working with PrymeStrategies was a game-changer. Their strategic approach and execution are unmatched.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-4 bg-gray-900/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            What Our Clients Say
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Don&apos;t just take our word for it — hear from the brands
            we&apos;ve helped grow.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial) => (
            <motion.div key={testimonial.name} variants={fadeInUp}>
              <Card className="h-full">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <p className="text-gray-300 mb-6">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
