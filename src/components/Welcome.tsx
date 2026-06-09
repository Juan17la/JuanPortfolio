import { useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import TextType from "./animated/TextType";
import SplitText from "./animated/SplitText";

import { SocialButton } from "./SocialButton";

export function Welcome() {
  const socialRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = socialRef.current;
    if (!el) return;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      el.style.setProperty('--mouse-x', `${x}%`);
      el.style.setProperty('--mouse-y', `${y}%`);
    };
    el.addEventListener('mousemove', handleMouseMove);
    return () => el.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="welcome" className="w-full min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
      <div className="z-10 w-full max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 80, damping: 18, delay: 0.1 }}
          className="space-y-4 mb-8"
        >
          <SplitText
            text="JUAN DIEGO"
            tag="h1"
            delay={60}
            duration={0.9}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 30 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-text-primary h-fit w-full tracking-tight"
          />

          <div className="flex justify-center overflow-hidden">
            <TextType
              text={["Software Engineer", "Fullstack Developer"]}
              typingSpeed={60}
              pauseDuration={2000}
              showCursor
              cursorCharacter="|"
              deletingSpeed={40}
              cursorBlinkDuration={0.5}
              className="font-body text-2xl sm:text-3xl lg:text-4xl text-text-secondary h-fit w-full"
            />
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          className="w-32 h-px bg-linear-to-r from-transparent via-white/25 to-transparent my-6 origin-center"
        />

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 70, damping: 16, delay: 0.7 }}
          className="text-text-muted text-base sm:text-lg max-w-2xl mb-10 leading-relaxed"
        >
          Fullstack Software Engineer focused on building clean, maintainable systems and delivering reliable products. Strong collaborator, quick learner, and committed to writing code that scales and lasts.
        </motion.p>

        {/* Social Buttons with magnetic hover */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 60, damping: 16, delay: 0.9 }}
          ref={socialRef}
          className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-lg"
          style={{ '--mouse-x': '50%', '--mouse-y': '50%' } as React.CSSProperties}
        >
          <SocialButton
            type="linkedin"
            username="juan07diego"
            url="https://linkedin.com/in/juan07diego"
          />
          <SocialButton
            type="github"
            username="Juan17la"
            url="https://github.com/Juan17la"
          />
          <SocialButton type="gmail" username="juandiegolopezarias07" />
          <SocialButton
            type="x"
            username="@1714jud"
            url="https://x.com/1714jud"
          />
        </motion.div>
      </div>
    </section>
  );
}
