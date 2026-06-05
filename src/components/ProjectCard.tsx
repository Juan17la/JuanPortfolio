import { useState, useEffect, useRef } from "react";
import { Star, User, Zap, Code, ExternalLink } from "lucide-react";
import { getTechIconUrl } from "../lib/techIcons";

interface Project {
  id: number;
  name: string;
  brief: string;
  description: string;
  tech: string[];
  specialities: string[];
  images: string[];
  category: string;
  repositoryLink?: string;
  previewLink?: string;
}

const categoryConfig: Record<string, { label: string; color: string; icon: React.ReactNode }> = {
  starproject: { label: "Star", color: "#d4a843", icon: <Star className="w-3 h-3" /> },
  personalproject: { label: "Personal", color: "#7a9eff", icon: <User className="w-3 h-3" /> },
  sillyproject: { label: "Silly", color: "#9ab8ff", icon: <Zap className="w-3 h-3" /> },
};

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export function ProjectCard({ project, onSelect }: ProjectCardProps) {
  const [activeImage, setActiveImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const category = categoryConfig[project.category] || categoryConfig.sillyproject;

  useEffect(() => {
    if (!isHovered) return;
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % project.images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [isHovered, project.images.length]);

  // Mouse spotlight tracking
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty('--mouse-x', `${x}%`);
      card.style.setProperty('--mouse-y', `${y}%`);
    };
    card.addEventListener('mousemove', handleMouseMove);
    return () => card.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <article
      ref={cardRef}
      className="relative min-w-full min-h-full glass-card overflow-hidden group cursor-pointer"
      style={{ '--mouse-x': '50%', '--mouse-y': '50%' } as React.CSSProperties}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setActiveImage(0);
      }}
      onClick={() => onSelect(project)}
    >
      {/* Category tag - keeps its color */}
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
      <div className="relative w-full h-45 overflow-hidden bg-surface/40">
        {project.images.map((img, i) => (
          <div
            key={i}
            className="absolute inset-0 flex items-center justify-center transition-opacity duration-700"
            style={{ opacity: i === activeImage ? 1 : 0 }}
          >
            <img
              src={img}
              alt={`${project.name} screenshot ${i + 1}`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
        {/* Image indicator dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
          {project.images.map((_, i) => (
            <div
              key={i}
              className="w-1.5 h-1.5 rounded-full transition-all duration-300"
              style={{
                backgroundColor: i === activeImage ? "#ffffff" : "rgba(255,255,255,0.15)",
                transform: i === activeImage ? "scale(1.3)" : "scale(1)",
              }}
            />
          ))}
        </div>
        {/* Hover hint */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-5">
          <span className="text-xs text-white/70 uppercase tracking-widest">Click to view details</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col">
        <h3 className="font-display text-lg text-text-primary mb-2 group-hover:text-white transition-colors duration-300">
          {project.name}
        </h3>
        <p className="text-sm text-text-secondary leading-relaxed mb-4 line-clamp-2">
          {project.brief}
        </p>

        {/* Tech icons - monochrome white */}
        <div className="flex items-center gap-2 mb-3 flex-wrap">
          {project.tech.map((tech) => (
            <img
              key={tech}
              src={getTechIconUrl(tech)}
              alt={`${tech} icon`}
              className="w-5 h-5 opacity-90 hover:opacity-100 transition-opacity duration-200"
              loading="lazy"
            />
          ))}
        </div>

        {/* Specialities */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.specialities.map((spec) => (
            <span
              key={spec}
              className="px-2 py-0.5 text-[10px] uppercase tracking-wider rounded-md bg-white/5 text-text-muted border border-white/10"
            >
              {spec}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-end gap-2 mt-auto">
          {project.repositoryLink && (
            <a
              href={project.repositoryLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 text-white text-[10px] uppercase tracking-wider rounded-md bg-white/35 border border-white/75 hover:bg-white/50 transition-colors duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              <Code className="w-3 h-3" />
              Repository
            </a>
          )}
          {project.previewLink && (
            <a
              href={project.previewLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 text-white text-[10px] uppercase tracking-wider rounded-md bg-white/35 border border-white/75 hover:bg-white/50 transition-colors duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink className="w-3 h-3" />
              Preview
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
