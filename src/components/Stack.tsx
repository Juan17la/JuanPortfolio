import { TechBadge } from "./TechBadge";
import { motion } from 'motion/react';
import AnimatedSection from "./animated/AnimatedSection";

const mainStack = [
  { name: "Java", icon: "java" },
  { name: "Spring Boot", icon: "springboot" },
  { name: "React", icon: "react" },
  { name: "TailwindCSS", icon: "tailwindcss" },
  { name: "HTML", icon: "html5" },
  { name: "CSS", icon: "css3" },
  { name: "PostgreSQL", icon: "postgresql" },
  { name: "Node.js", icon: "nodedotjs" },
  { name: "TypeScript", icon: "typescript" },
];

const otherTechs = [
  { name: "MongoDB", icon: "mongodb" },
  { name: "C#", icon: "csharp" },
  { name: ".NET", icon: "dotnet" },
  { name: "Python", icon: "python" },
  { name: "Kotlin", icon: "kotlin" },
];

const tools = [
  { name: "Git", icon: "git" },
  { name: "Docker", icon: "docker" },
  { name: "Figma", icon: "figma" },
  { name: "Jira", icon: "jira" },
  { name: "Notion", icon: "notion" },
  { name: "Linux", icon: "linux" },
];

export function Stack() {
  return (
    <section className="relative w-full px-6 py-24" id="stack">
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Centered Section Header */}
        <AnimatedSection className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-8 h-px bg-white/20" />
            <span className="text-xs uppercase tracking-[0.25em] text-text-muted font-semibold">
              Arsenal
            </span>
            <div className="w-8 h-px bg-white/20" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl text-text-primary">
            Stack
          </h2>
        </AnimatedSection>

        {/* Three column glass blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Main Stack */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ type: 'spring', stiffness: 70, damping: 16, delay: 0 }}
            className="glass-container p-6"
          >
            <h3 className="text-xs uppercase tracking-[0.25em] text-moss font-semibold mb-4">
              Main Stack
            </h3>
            <div className="flex flex-wrap-reverse gap-2 content-start">
              {mainStack.map((tech) => (
                <TechBadge key={tech.name} name={tech.name} icon={tech.icon} color="moss" size="sm" />
              ))}
            </div>
          </motion.div>

          {/* Other Techs */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ type: 'spring', stiffness: 70, damping: 16, delay: 0.08 }}
            className="glass-container p-6"
          >
            <h3 className="text-xs uppercase tracking-[0.25em] text-tag-blue font-semibold mb-4">
              Other Techs
            </h3>
            <div className="flex flex-wrap-reverse gap-2 content-start">
              {otherTechs.map((tech) => (
                <TechBadge key={tech.name} name={tech.name} icon={tech.icon} color="blue" size="sm" />
              ))}
            </div>
          </motion.div>

          {/* Tools */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ type: 'spring', stiffness: 70, damping: 16, delay: 0.16 }}
            className="glass-container p-6"
          >
            <h3 className="text-xs uppercase tracking-[0.25em] text-tag-yellow font-semibold mb-4">
              Tools
            </h3>
            <div className="flex flex-wrap-reverse gap-2 content-start">
              {tools.map((tech) => (
                <TechBadge key={tech.name} name={tech.name} icon={tech.icon} color="yellow" size="sm" />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
