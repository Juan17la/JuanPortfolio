import { motion } from 'motion/react';
import { ProjectCard } from "./ProjectCard";
import { ArrowUpRight } from "lucide-react";
import projectsData from "../data/projects.json";
import AnimatedSection from "./animated/AnimatedSection";

export function Projects() {
  return (
    <section className="relative w-full px-6 py-24" id="projects">
      {/* Centered Section Header */}
      <AnimatedSection className="max-w-6xl mx-auto mb-12 text-center">
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="w-8 h-px bg-white/20" />
          <span className="text-xs uppercase tracking-[0.25em] text-text-muted font-semibold">
            Selected Work
          </span>
          <div className="w-8 h-px bg-white/20" />
        </div>
        <h2 className="font-display text-4xl sm:text-5xl text-text-primary">
          Projects
        </h2>
      </AnimatedSection>

      {/* Projects grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {projectsData.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{
              type: 'spring',
              stiffness: 70,
              damping: 16,
              delay: index * 0.06,
            }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>

      {/* View all link */}
      <AnimatedSection delay={0.2}>
        <div className="max-w-6xl mx-auto flex justify-center">
          <a
            href="/projects"
            className="group inline-flex items-center gap-3 px-8 py-4 glass-container text-text-primary font-medium hover:border-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30 transition-all duration-300"
          >
            <span className="font-display text-lg">View All Projects</span>
            <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>
      </AnimatedSection>
    </section>
  );
}
