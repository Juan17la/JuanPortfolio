import type { ReactNode } from "react";

interface TechBadgeProps {
  name: string;
  icon: string;
  color: "moss" | "blue" | "yellow";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const colorMap = {
  moss: {
    bg: "rgba(122, 158, 255, 0.12)",
    border: "rgba(122, 158, 255, 0.35)",
    text: "#7a9eff",
    glow: "rgba(122, 158, 255, 0.2)",
  },
  blue: {
    bg: "rgba(150, 180, 255, 0.12)",
    border: "rgba(150, 180, 255, 0.35)",
    text: "#9ab8ff",
    glow: "rgba(150, 180, 255, 0.2)",
  },
  yellow: {
    bg: "rgba(212, 168, 67, 0.12)",
    border: "rgba(212, 168, 67, 0.35)",
    text: "#d4a843",
    glow: "rgba(212, 168, 67, 0.2)",
  },
};

const sizeMap = {
  sm: "px-3 py-1.5 text-xs gap-1.5",
  md: "px-4 py-2.5 text-sm gap-2",
  lg: "px-5 py-3.5 text-base gap-2.5",
};

export function TechBadge({ name, icon, color, size = "md", className = "" }: TechBadgeProps) {
  const theme = colorMap[color];

  return (
    <div
      className={`inline-flex items-center rounded-lg font-medium cursor-default transition-all duration-200 hover:scale-105 ${sizeMap[size]} ${className}`}
      style={{
        backgroundColor: theme.bg,
        border: `1.5px solid ${theme.border}`,
        color: theme.text,
      }}
    >
      <img
        src={`https://cdn.simpleicons.org/${icon}/white`}
        alt={`${name} icon`}
        className={size === "sm" ? "w-3.5 h-3.5" : size === "lg" ? "w-5 h-5" : "w-4 h-4"}
        loading="lazy"
      />
      <span>{name}</span>
    </div>
  );
}

interface TechBlockProps {
  children: ReactNode;
  color: "moss" | "blue" | "yellow";
  className?: string;
}

export function TechBlock({ children, color, className = "" }: TechBlockProps) {
  const theme = colorMap[color];

  return (
    <div
      className={`relative rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_24px_var(--glow-color)] ${className}`}
      style={{
        backgroundColor: theme.bg,
        border: `2px solid ${theme.border}`,
        // @ts-expect-error CSS custom property
        "--glow-color": theme.glow,
      }}
    >
      {children}
    </div>
  );
}
