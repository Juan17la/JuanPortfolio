import { useRef, useEffect } from 'react';

interface NodeCardProps {
  title: string;
  description: string;
  index: number;
}

export function NodeCard({ title, description, index }: NodeCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

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
    <div
      ref={cardRef}
      className="relative glass-card overflow-visible p-6 group"
      style={{ '--mouse-x': '50%', '--mouse-y': '50%' } as React.CSSProperties}
    >
      {/* Node number */}
      <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-surface border-2 border-white/20 flex items-center justify-center z-10">
        <span className="text-xs font-bold text-text-secondary">{index + 1}</span>
      </div>

      <h4 className="font-display text-lg text-text-primary mb-3 pl-4 group-hover:text-white transition-colors duration-300">
        {title}
      </h4>
      <p className="text-sm text-text-secondary leading-relaxed">
        {description}
      </p>

      {/* Corner accent */}
      <div className="absolute bottom-0 right-0 w-12 h-12 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
        <svg viewBox="0 0 48 48" className="w-full h-full">
          <path d="M48 48 L48 0 L0 48 Z" fill="currentColor" className="text-white" />
        </svg>
      </div>
    </div>
  );
}
