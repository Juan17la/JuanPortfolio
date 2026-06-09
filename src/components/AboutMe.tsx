import { motion } from 'motion/react';
import AnimatedSection from "./animated/AnimatedSection";

const viewportSettings = { once: true, margin: '-80px' as const };

export function AboutMe() {
  return (
    <section className="relative w-full px-6 py-24" id="about">
      <div className="max-w-3xl mx-auto text-center">
        {/* Centered Section Header */}
        <AnimatedSection className="mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-8 h-px bg-white/20" />
            <span className="text-xs uppercase tracking-[0.25em] text-text-muted font-semibold">
              The Person Behind The Code
            </span>
            <div className="w-8 h-px bg-white/20" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl text-text-primary">
            About Me
          </h2>
        </AnimatedSection>

        {/* Two short paragraphs with soft fade-in */}
        <div className="flex flex-col gap-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportSettings}
            transition={{ type: 'spring', stiffness: 70, damping: 16, delay: 0.1 }}
            className="text-base sm:text-lg text-text-secondary leading-relaxed"
          >
            I'm a software engineer who enjoys building things that actually work.
            I like getting involved in projects from start to finish, and I care about
            writing clean code that holds up over time.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportSettings}
            transition={{ type: 'spring', stiffness: 70, damping: 16, delay: 0.2 }}
            className="text-base sm:text-lg text-text-secondary leading-relaxed"
          >
            I work well with others, communicate clearly, and I'm always learning.
            If you're looking for someone reliable who takes ownership of their work,
            I'm your person.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
