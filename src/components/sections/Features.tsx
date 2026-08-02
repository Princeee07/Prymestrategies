'use client';

import { motion } from 'framer-motion';
import { Users, Target, TrendingUp, Award, Zap, Shield } from 'lucide-react';
import Card from '@/components/ui/Card';
import { fadeInUp, staggerContainer } from '@/config/animations';

const features = [
  {
    icon: Users,
    title: 'Brand Ambassadors',
    description:
      'Trained professionals who embody your brand and create genuine connections.',
  },
  {
    icon: Target,
    title: 'Targeted Campaigns',
    description:
      'Data-driven strategies that reach the right audience at the right time.',
  },
  {
    icon: TrendingUp,
    title: 'Measurable Results',
    description:
      'Real-time analytics and reporting to track campaign performance.',
  },
  {
    icon: Award,
    title: 'Award-Winning Team',
    description:
      'Industry-recognized experts with years of marketing excellence.',
  },
  {
    icon: Zap,
    title: 'Rapid Deployment',
    description:
      'Launch campaigns quickly with our streamlined activation process.',
  },
  {
    icon: Shield,
    title: 'Brand Protection',
    description:
      'Consistent messaging and professional representation at every touchpoint.',
  },
];

export default function Features() {
  return (
    <section className="py-24 px-4">
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
            Why Choose{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500">
              PrymeStrategies
            </span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            We deliver comprehensive marketing solutions that set your brand
            apart.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div key={feature.title} variants={fadeInUp}>
                <Card hover className="h-full">
                  <div className="inline-flex p-3 rounded-xl bg-violet-500/10 mb-4">
                    <Icon className="w-6 h-6 text-violet-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
