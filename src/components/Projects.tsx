import { useState } from "react";
import { motion } from 'motion/react';
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import projectsData from "../data/projects.json";
import AnimatedSection from "./animated/AnimatedSection";

interface Project {
  id: number;
  name: string;
  brief: string;
  description: string;
  tech: string[];
  specialities: string[];
  images: string[];
  category: string;
  repositoryLink?: string[];
  previewLink?: string;
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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
            <ProjectCard
              project={project as Project}
              onSelect={setSelectedProject}
            />
          </motion.div>
        ))}
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
