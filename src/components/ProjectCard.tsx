import { useState, useEffect } from "react";
import { Star, User, Zap } from "lucide-react";

interface Project {
  id: number;
  name: string;
  brief: string;
  description: string;
  tech: string[];
  specialities: string[];
  images: string[];
  category: string;
}

const categoryConfig: Record<string, { label: string; color: string; icon: React.ReactNode }> = {
  starproject: { label: "Star", color: "#d4a843", icon: <Star className="w-3 h-3" /> },
  personalproject: { label: "Personal", color: "#5a8a6e", icon: <User className="w-3 h-3" /> },
  sillyproject: { label: "Silly", color: "#6b9ec7", icon: <Zap className="w-3 h-3" /> },
};

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [activeImage, setActiveImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const category = categoryConfig[project.category] || categoryConfig.sillyproject;

  useEffect(() => {
    if (!isHovered) return;
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % project.images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [isHovered, project.images.length]);

  return (
    <article
      className="relative w-full glass rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(90,138,110,0.12)] hover:border-[#5a8a6e]/30 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setActiveImage(0);
      }}
    >
      {/* Category tag */}
      <div
        className="absolute top-3 right-3 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider"
        style={{
          backgroundColor: `${category.color}18`,
          border: `1.5px solid ${category.color}50`,
          color: category.color,
        }}
      >
        {category.icon}
        {category.label}
      </div>

      {/* Image carousel area */}
      <div className="relative w-full h-[180px] overflow-hidden bg-[#0a0a0a]">
        {project.images.map((img, i) => (
          <div
            key={i}
            className="absolute inset-0 flex items-center justify-center transition-opacity duration-700"
            style={{ opacity: i === activeImage ? 1 : 0 }}
          >
            <div className="w-full h-full flex items-center justify-center bg-[#1a1a1a]/50">
              <span className="text-[#888888] text-xs font-medium">{img}</span>
            </div>
          </div>
        ))}
        {/* Image indicator dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
          {project.images.map((_, i) => (
            <div
              key={i}
              className="w-1.5 h-1.5 rounded-full transition-all duration-300"
              style={{
                backgroundColor: i === activeImage ? "#5a8a6e" : "rgba(255,255,255,0.15)",
                transform: i === activeImage ? "scale(1.3)" : "scale(1)",
              }}
            />
          ))}
        </div>
        {/* Hover hint */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-[5]">
          <span className="text-xs text-white/70 uppercase tracking-widest">Hover to preview</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col">
        <h3 className="font-[family-name:var(--font-display)] text-lg text-[#f0f0f0] mb-2 group-hover:text-[#5a8a6e] transition-colors duration-300">
          {project.name}
        </h3>
        <p className="text-sm text-[#c8c8c8] leading-relaxed mb-4 line-clamp-2">
          {project.brief}
        </p>

        {/* Tech icons */}
        <div className="flex items-center gap-2 mb-3 flex-wrap">
          {project.tech.map((tech) => (
            <img
              key={tech}
              src={`https://cdn.simpleicons.org/${tech}/5a8a6e`}
              alt={`${tech} icon`}
              className="w-5 h-5 opacity-70 hover:opacity-100 transition-opacity duration-200"
              loading="lazy"
            />
          ))}
        </div>

        {/* Specialities */}
        <div className="flex flex-wrap gap-1.5">
          {project.specialities.map((spec) => (
            <span
              key={spec}
              className="px-2 py-0.5 text-[10px] uppercase tracking-wider rounded-md bg-[#2a2a2a]/60 text-[#888888] border border-[#2a2a2a]/60"
            >
              {spec}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
