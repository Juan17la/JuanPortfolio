import { NodeCard } from "./NodeCard";
import { motion } from 'motion/react';
import AnimatedSection from "./animated/AnimatedSection";

const nodes = [
  {
    title: "How I Work",
    description:
      "I consider myself as someone who likes to implicate in the projects and the succesful and well development of the apps I work with.",
  },
  {
    title: "A Good Teammate",
    description:
      "I am someone who knows listening and discussing technical solutions in a profesional enviroment. I'm trying to always make the team feel confident and make them know I'm someone who they can relate and trust.",
  },
  {
    title: "Soft Skills",
    description:
      "I believe I'm a good comunicator with both technical and bussines problematics. When I have to take the lead I tried to do my best to make the team reach the highest!",
  },
  {
    title: "Commitment & Accountability",
    description:
      "I believe commitment and accountability are key in a workspace. Always in time, always with the repercutions of errors or bad practices in my mind to not make mistakes and affect my team or the product!",
  },
  {
    title: "Learning Never Stops",
    description:
      "I constantly try to be in tune with the last news, techs, vulnerabilities in the tech world! I'm always up to learn something new and dive into projects that challenge my skills.",
  },
];

export function AboutMe() {
  return (
    <section className="relative w-full px-6 py-24" id="about">
      <div className="max-w-5xl mx-auto">
        {/* Centered Section Header */}
        <AnimatedSection className="text-center mb-16">
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

        {/* Desktop Node Graph Container */}
        <div className="relative hidden md:block" style={{ minHeight: "820px" }}>
          {/* SVG Connection Lines - monochrome */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-0"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M 20 8 Q 38 5, 55 16" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="0.3" />
            <path d="M 60 24 Q 62 32, 55 44" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="0.3" />
            <path d="M 48 56 Q 32 58, 20 66" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="0.3" />
            <path d="M 20 74 Q 25 82, 38 86" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="0.3" />
            <circle cx="55" cy="16" r="0.7" fill="rgba(255,255,255,0.3)" />
            <circle cx="55" cy="44" r="0.7" fill="rgba(255,255,255,0.3)" />
            <circle cx="20" cy="66" r="0.7" fill="rgba(255,255,255,0.3)" />
          </svg>

          {/* Nodes */}
          <div className="absolute left-[0%] top-[2%] w-[44%]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 70, damping: 16, delay: 0.1 }}
            >
              <NodeCard title={nodes[0].title} description={nodes[0].description} index={0} />
            </motion.div>
          </div>
          <div className="absolute left-[53%] top-[14%] w-[44%]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 70, damping: 16, delay: 0.2 }}
            >
              <NodeCard title={nodes[1].title} description={nodes[1].description} index={1} />
            </motion.div>
          </div>
          <div className="absolute left-[46%] top-[42%] w-[44%]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 70, damping: 16, delay: 0.3 }}
            >
              <NodeCard title={nodes[2].title} description={nodes[2].description} index={2} />
            </motion.div>
          </div>
          <div className="absolute left-[0%] top-[58%] w-[44%]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 70, damping: 16, delay: 0.4 }}
            >
              <NodeCard title={nodes[3].title} description={nodes[3].description} index={3} />
            </motion.div>
          </div>
          <div className="absolute left-[38%] top-[85%] w-[50%]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 70, damping: 16, delay: 0.5 }}
            >
              <NodeCard title={nodes[4].title} description={nodes[4].description} index={4} />
            </motion.div>
          </div>
        </div>

        {/* Mobile: vertical stack with timeline */}
        <div className="md:hidden relative">
          <div
            className="absolute left-4.75 top-4 bottom-4 w-px"
            style={{
              background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.2) 5%, rgba(255,255,255,0.2) 95%, transparent)",
            }}
          />
          <div className="flex flex-col gap-8">
            {nodes.map((node, index) => (
              <div key={index} className="relative pl-12">
                <div
                  className="absolute left-3.5 top-6 w-3 h-3 rounded-full border-2 border-white/30 bg-background z-10"
                  style={{ boxShadow: "0 0 8px rgba(255,255,255,0.2)" }}
                />
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 70, damping: 16, delay: index * 0.08 }}
                >
                  <NodeCard title={node.title} description={node.description} index={index} />
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
