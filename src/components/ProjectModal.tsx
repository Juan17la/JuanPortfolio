import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Star, User, Zap, ExternalLink, Code } from "lucide-react";
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
  repositoryLink?: string[];
  previewLink?: string;
}

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const categoryConfig: Record<string, { label: string; color: string; icon: React.ReactNode }> = {
  starproject: { label: "Star", color: "#d4a843", icon: <Star className="w-3 h-3" /> },
  personalproject: { label: "Personal", color: "#7a9eff", icon: <User className="w-3 h-3" /> },
  sillyproject: { label: "Silly", color: "#9ab8ff", icon: <Zap className="w-3 h-3" /> },
};

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [activeImage, setActiveImage] = useState(0);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setActiveImage(0);
    setLightboxImage(null);
  }, [project?.id]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (project) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [project]);

  // Close on Escape key
  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (lightboxImage) {
          setLightboxImage(null);
        } else {
          onClose();
        }
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [project, lightboxImage, onClose]);

  // Close when clicking outside modal content
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === modalRef.current) {
      onClose();
    }
  };

  if (!project) return null;

  const category = categoryConfig[project.category] || categoryConfig.sillyproject;
  const descriptionParagraphs = project.description.split("\n\n");

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          ref={modalRef}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.75)", backdropFilter: "blur(8px)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={handleBackdropClick}
        >
          <motion.div
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-container rounded-2xl"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-30 p-2 rounded-full bg-white/10 border border-white/20 text-white/80 hover:text-white hover:bg-white/20 transition-colors duration-200"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Category tag */}
            <div
              className="absolute top-4 left-4 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider"
              style={{
                backgroundColor: `${category.color}18`,
                border: `1.5px solid ${category.color}50`,
                color: category.color,
              }}
            >
              {category.icon}
              {category.label}
            </div>

            {/* Main image */}
            <div className="relative w-full aspect-video overflow-hidden rounded-t-2xl bg-surface/40">
              {project.images.length > 0 ? (
                <>
                  <img
                    src={project.images[activeImage]}
                    alt={`${project.name} screenshot ${activeImage + 1}`}
                    className="w-full h-full object-cover cursor-zoom-in"
                    loading="lazy"
                    onClick={() => setLightboxImage(project.images[activeImage])}
                  />
                  {/* Image indicator dots */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                    {project.images.map((_, i) => (
                      <button
                        key={i}
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveImage(i);
                        }}
                        className="w-2 h-2 rounded-full transition-all duration-300"
                        style={{
                          backgroundColor: i === activeImage ? "#ffffff" : "rgba(255,255,255,0.3)",
                          transform: i === activeImage ? "scale(1.3)" : "scale(1)",
                        }}
                        aria-label={`View image ${i + 1}`}
                      />
                    ))}
                  </div>
                </>
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-text-muted text-sm">No images available</span>
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8">
              <h2 className="font-display text-2xl sm:text-3xl text-text-primary mb-4">
                {project.name}
              </h2>

              {/* Thumbnail gallery */}
              {project.images.length > 1 && (
                <div className="flex gap-3 mb-6 overflow-x-auto pb-2">
                  {project.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImage(i)}
                      className={`shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                        i === activeImage
                          ? "border-white/60 opacity-100"
                          : "border-transparent opacity-50 hover:opacity-80"
                      }`}
                    >
                      <img
                        src={img}
                        alt={`${project.name} thumbnail ${i + 1}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </button>
                  ))}
                </div>
              )}

              {/* Description */}
              <div className="space-y-4 mb-6">
                {descriptionParagraphs.map((paragraph, i) => (
                  <p key={i} className="text-sm sm:text-base text-text-secondary leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Tech stack */}
              <div className="mb-4">
                <h4 className="text-xs uppercase tracking-widest text-text-muted font-semibold mb-3">
                  Tech Stack
                </h4>
                <div className="flex items-center gap-3 flex-wrap">
                  {project.tech.map((tech) => (
                    <div key={tech} className="flex items-center gap-1.5">
                      <img
                        src={getTechIconUrl(tech)}
                        alt={`${tech} icon`}
                        className="w-6 h-6 opacity-90"
                        loading="lazy"
                      />
                      <span className="text-xs text-text-secondary capitalize">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Specialities */}
              <div className="mb-6">
                <h4 className="text-xs uppercase tracking-widest text-text-muted font-semibold mb-3">
                  Specialities
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.specialities.map((spec) => (
                    <span
                      key={spec}
                      className="px-2.5 py-1 text-[10px] uppercase tracking-wider rounded-md bg-white/5 text-text-muted border border-white/10"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-3">
                {(project.repositoryLink ?? []).map((link, i, arr) => (
                  <a
                    key={i}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-wider rounded-md bg-white/10 border border-white/20 text-text-primary hover:bg-white/20 transition-colors duration-200"
                  >
                    <Code className="w-4 h-4" />
                    Repository {arr.length > 1 ? i + 1 : ""}
                  </a>
                ))}
                {project.previewLink && (
                  <a
                    href={project.previewLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-wider rounded-md bg-white/10 border border-white/20 text-text-primary hover:bg-white/20 transition-colors duration-200"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Preview
                  </a>
                )}
              </div>
            </div>
          </motion.div>

          {/* Lightbox overlay for full-size image */}
          <AnimatePresence>
            {lightboxImage && (
              <motion.div
                className="fixed inset-0 z-60 flex items-center justify-center bg-black/90"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setLightboxImage(null)}
              >
                <motion.img
                  src={lightboxImage}
                  alt="Full size preview"
                  className="max-w-[95vw] max-h-[90vh] object-contain rounded-lg"
                  loading="lazy"
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.9 }}
                  onClick={(e) => e.stopPropagation()}
                />
                <button
                  onClick={() => setLightboxImage(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-white/10 border border-white/20 text-white/80 hover:text-white hover:bg-white/20 transition-colors duration-200"
                  aria-label="Close lightbox"
                >
                  <X className="w-5 h-5" />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
