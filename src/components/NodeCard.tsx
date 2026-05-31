interface NodeCardProps {
  title: string;
  description: string;
  index: number;
}

export function NodeCard({ title, description, index }: NodeCardProps) {
  return (
    <div className="relative glass rounded-xl p-6 transition-all duration-300 hover:shadow-[0_0_24px_rgba(90,138,110,0.12)] hover:border-moss/20 hover:-translate-y-1 group">
      {/* Node number */}
      <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-background border-2 border-moss/40 flex items-center justify-center z-10">
        <span className="text-xs font-bold text-moss">{index + 1}</span>
      </div>

      <h4 className="font-[family-name:var(--font-display)] text-lg text-[#f0f0f0] mb-3 pl-4 group-hover:text-[#5a8a6e] transition-colors duration-300">
        {title}
      </h4>
      <p className="text-sm text-[#c8c8c8] leading-relaxed">
        {description}
      </p>

      {/* Corner accent */}
      <div className="absolute bottom-0 right-0 w-12 h-12 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
        <svg viewBox="0 0 48 48" className="w-full h-full">
          <path d="M48 48 L48 0 L0 48 Z" fill="#5a8a6e" />
        </svg>
      </div>
    </div>
  );
}
