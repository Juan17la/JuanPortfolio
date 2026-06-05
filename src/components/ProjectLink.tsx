interface ProjectLinkProps {
    href: string;
    label: string;
}

export function ProjectLink({ href, label }: ProjectLinkProps) {
    return (
        <a
            className="px-3 py-1 text-white text-[10px] uppercase tracking-wider rounded-md bg-white/35 border border-white/75 hover:bg-white/50 transition-colors duration-200"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
        >
            {label}
        </a>
    )
}
