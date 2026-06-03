import { useRef, useState } from "react";
import { motion } from "motion/react";
import { Globe, Code2, Mail, AtSign } from "lucide-react";

interface SocialButtonProps {
  type: "linkedin" | "github" | "gmail" | "x";
  username: string;
  url?: string;
}

export function SocialButton({ type, username, url }: SocialButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const icons = {
    linkedin: Globe,
    github: Code2,
    gmail: Mail,
    x: AtSign,
  };

  const labels = {
    linkedin: "LinkedIn",
    github: "GitHub",
    gmail: "Email",
    x: "X / Twitter",
  };

  const Icon = icons[type];

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distX = (e.clientX - centerX) * 0.15;
    const distY = (e.clientY - centerY) * 0.15;
    setPosition({ x: distX, y: distY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const handleClick = (e: React.MouseEvent) => {
    if (type === "gmail") {
      e.preventDefault();
      window.location.href = `mailto:juandiegolopezarias07@gmail.com`;
    }
  };

  return (
    <motion.a
      ref={ref}
      href={url || "#"}
      onClick={type === "gmail" ? handleClick : undefined}
      target={type !== "gmail" ? "_blank" : undefined}
      rel={type !== "gmail" ? "noopener noreferrer" : undefined}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className="group flex items-center gap-3 px-5 py-3 glass-card
                 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
      aria-label={`${labels[type]}: ${username}`}
    >
      <Icon className="w-5 h-5 text-text-muted group-hover:text-white transition-colors duration-300" />
      <div className="flex flex-col items-start">
        <span className="text-xs text-text-muted uppercase tracking-wider font-medium">
          {labels[type]}
        </span>
        <span className="text-sm text-text-primary group-hover:text-white transition-colors duration-300">
          {username}
        </span>
      </div>
    </motion.a>
  );
}
