import { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Monitor } from 'lucide-react';
import { useBackgroundMode } from './background/BackgroundContext';

export default function GlassNav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);
  const { mode, toggleMode } = useBackgroundMode();
  const containerRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  const navLinks = [
    { href: '#projects', label: 'Projects' },
    { href: '#stack', label: 'Stack' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ];

  const getPillPosition = useCallback(() => {
    if (!hoveredTab || !containerRef.current) return null;
    const tab = tabRefs.current[hoveredTab];
    if (!tab) return null;

    const containerRect = containerRef.current.getBoundingClientRect();
    const tabRect = tab.getBoundingClientRect();

    return {
      left: tabRect.left - containerRect.left,
      width: tabRect.width,
      top: tabRect.top - containerRect.top,
      height: tabRect.height,
    };
  }, [hoveredTab]);

  const pillPos = getPillPosition();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-5 px-4">
      <div className="mx-auto max-w-6xl">
        <nav className="glass-nav flex items-center justify-between h-14 px-5">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => handleNavClick(e, '#')}
            className="font-display text-lg font-semibold text-text-primary tracking-tight shrink-0"
          >
            JD
          </a>

          {/* Desktop Tabs */}
          <div
            ref={containerRef}
            className="hidden md:flex items-center relative h-10 px-1"
            onMouseLeave={() => setHoveredTab(null)}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                ref={(el) => { tabRefs.current[link.href] = el; }}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                onMouseEnter={() => setHoveredTab(link.href)}
                className="relative z-10 px-4 py-2 text-sm text-text-muted hover:text-text-primary uppercase tracking-wider font-medium transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}

            {/* Animated hover pill */}
            {pillPos && (
              <motion.div
                layoutId="nav-hover-pill"
                className="absolute tab-glow"
                initial={false}
                animate={{
                  left: pillPos.left,
                  top: pillPos.top + (pillPos.height - 32) / 2,
                  width: pillPos.width,
                  height: 32,
                  opacity: 1,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 380,
                  damping: 30,
                }}
                style={{ borderRadius: 9999 }}
              />
            )}
          </div>

          {/* Right side controls */}
          <div className="flex items-center gap-2">
            {/* Background toggle */}
            <button
              onClick={toggleMode}
              className="relative z-10 p-2 rounded-full text-text-muted hover:text-text-primary transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
              aria-label={mode === 'nebula' ? 'Switch to Matrix mode' : 'Switch to Nebula mode'}
              title={mode === 'nebula' ? 'Matrix Mode' : 'Nebula Mode'}
            >
              <Monitor className="w-4 h-4" />
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden relative z-10 p-2 rounded-full text-text-muted hover:text-text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30 transition-colors duration-300"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile Nav */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="md:hidden mt-2 glass-container p-4"
            >
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-sm text-text-muted hover:text-text-primary uppercase tracking-wider font-medium py-2 px-4 rounded-xl hover:bg-white/5 transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="h-px bg-white/10 my-1" />
                <button
                  onClick={() => {
                    toggleMode();
                    setMobileOpen(false);
                  }}
                  className="flex items-center gap-2 text-sm text-text-muted hover:text-text-primary uppercase tracking-wider font-medium py-2 px-4 rounded-xl hover:bg-white/5 transition-colors duration-300 text-left"
                >
                  <Monitor className="w-4 h-4" />
                  {mode === 'nebula' ? 'Switch to Matrix' : 'Switch to Nebula'}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
