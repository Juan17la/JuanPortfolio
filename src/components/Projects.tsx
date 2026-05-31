import { ProjectCard } from "./ProjectCard";
import { ArrowUpRight } from "lucide-react";
import projectsData from "../data/projects.json";
import BlurText from "./animated/BlurText";
import FadeContent from "./animated/FadeContent";

export function Projects() {
  return (
    <section className="relative w-full px-6 py-24" id="projects">
      {/* Section header */}
      <div className="max-w-6xl mx-auto mb-12">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-8 h-px bg-[#5a8a6e]" />
          <span className="text-xs uppercase tracking-[0.25em] text-[#5a8a6e] font-semibold">
            Selected Work
          </span>
        </div>
        <BlurText
          text="Projects"
          delay={150}
          animateBy="letters"
          direction="top"
          threshold={0.1}
          className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl text-[#f0f0f0]"
        />
      </div>

      {/* Projects grid - 3 columns, tight */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {projectsData.map((project, index) => (
          <FadeContent
            key={project.id}
            blur
            duration={800}
            delay={index * 120}
            threshold={0.1}
          >
            <ProjectCard project={project} />
          </FadeContent>
        ))}
      </div>

      {/* View all link */}
      <FadeContent blur duration={800} delay={300} threshold={0.1}>
        <div className="max-w-6xl mx-auto flex justify-center">
          <a
            href="/projects"
            className="group inline-flex items-center gap-3 px-8 py-4 glass-strong rounded-xl text-[#f0f0f0] font-medium hover:border-[#5a8a6e]/40 hover:shadow-[0_0_24px_rgba(90,138,110,0.15)] focus:outline-none focus:ring-2 focus:ring-[#5a8a6e]/50 transition-all duration-300"
          >
            <span className="font-[family-name:var(--font-display)] text-lg">View All Projects</span>
            <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>
      </FadeContent>
    </section>
  );
}
