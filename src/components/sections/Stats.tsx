'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/config/animations';

const stats = [
  { value: '500+', label: 'Campaigns Delivered' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '150+', label: 'Brand Partners' },
  { value: '10M+', label: 'People Reached' },
];

export default function Stats() {
  return (
    <section className="py-20 px-4">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8"
      >
        {stats.map((stat) => (
          <motion.div
            key={stat.label}
            variants={fadeInUp}
            className="text-center"
          >
            <p className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500 mb-2">
              {stat.value}
            </p>
            <p className="text-gray-400 text-sm">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
