import { Globe, Code2, Mail, AtSign } from "lucide-react";

interface SocialButtonProps {
  type: "linkedin" | "github" | "gmail" | "x";
  username: string;
  url?: string;
}

export function SocialButton({ type, username, url }: SocialButtonProps) {
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

  const handleClick = (e: React.MouseEvent) => {
    if (type === "gmail") {
      e.preventDefault();
      const user = "juandiegolopezarias07";
      const domain = "gmail.com";
      window.location.href = `mailto:${user}@${domain}`;
    }
  };

  return (
    <a
      href={url || "#"}
      onClick={type === "gmail" ? handleClick : undefined}
      target={type !== "gmail" ? "_blank" : undefined}
      rel={type !== "gmail" ? "noopener noreferrer" : undefined}
      className="group flex items-center gap-3 px-5 py-3 glass rounded-lg
                 transition-all duration-300 hover:border-[#5a8a6e]/40
                 hover:shadow-[0_0_20px_rgba(90,138,110,0.15)]
                 focus:outline-none focus:ring-2 focus:ring-[#5a8a6e]/50"
      aria-label={`${labels[type]}: ${username}`}
    >
      <Icon className="w-5 h-5 text-[#888888] group-hover:text-[#5a8a6e] transition-colors duration-300" />
      <div className="flex flex-col items-start">
        <span className="text-xs text-[#888888] uppercase tracking-wider font-medium">
          {labels[type]}
        </span>
        <span className="text-sm text-[#f0f0f0] group-hover:text-[#5a8a6e] transition-colors duration-300">
          {username}
        </span>
      </div>
    </a>
  );
}
