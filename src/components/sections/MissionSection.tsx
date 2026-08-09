'use client';

import { motion } from 'framer-motion';

export default function MissionSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section
      id="mission"
      className="py-32 bg-[var(--color-charcoal)] relative overflow-hidden"
    >
      {/* Background Creative Effect */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-[var(--color-bronze)] blur-[120px]" />
        <div className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-white blur-[120px]" />
      </div>

      <motion.div
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <motion.div variants={itemVariants} className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-heading font-light tracking-[0.2em] uppercase text-white">
            Our{' '}
            <span className="text-[var(--color-bronze)]">Mission & Vision</span>
          </h2>
          <div className="w-24 h-1 bg-[var(--color-bronze)] mx-auto mt-8" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div
            variants={itemVariants}
            className="bg-white/5 backdrop-blur-sm border border-white/10 p-10 lg:p-14 rounded-2xl hover:bg-white/10 transition-colors duration-500"
          >
            <h3 className="text-2xl font-heading tracking-[0.2em] uppercase text-white mb-6">
              Our Mission
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed font-sans">
              To create measurable growth for the brands we represent through
              strategic direct marketing, while cultivating an environment where
              performance, discipline, and hard work translate directly into
              career development.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-white/5 backdrop-blur-sm border border-white/10 p-10 lg:p-14 rounded-2xl hover:bg-white/10 transition-colors duration-500"
          >
            <h3 className="text-2xl font-heading tracking-[0.2em] uppercase text-white mb-6">
              Our Vision
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed font-sans">
              To establish PRYME STRATEGIES as a trusted industry leader in
              direct marketing and customer acquisition—recognized for the
              uncompromising quality of our representation, the depth of our
              leadership, and the sustainable results we deliver for our
              partners.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
