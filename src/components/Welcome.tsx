import TextType from "./animated/TextType";
import SplitText from "./animated/SplitText";
import FadeContent from "./animated/FadeContent";

import { SocialButton } from "./SocialButton";
import { GothDecoration } from "./GothDecoration";
import { ChevronDown } from "lucide-react";

export function Welcome() {
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  return (
    <section className="w-full min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
      {/* Background accent lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-full h-px bg-linear-to-r from-transparent via-moss/10 to-transparent" />
        <div className="absolute top-3/4 left-0 w-full h-px bg-linear-to-r from-transparent via-moss/10 to-transparent" />
      </div>

      <div className="z-10 w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center">
        {/* Left Column */}
        <div className="flex flex-col items-start">
          {/* Name */}
          <div className="space-y-3">
            <SplitText
              text="JUAN DIEGO"
              delay={80}
              duration={1.25}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="left"
              onLetterAnimationComplete={handleAnimationComplete}
              className="font-body text-5xl sm:text-6xl sm:pb-3 lg:text-7xl lg:pb-4 text-text-primary h-fit w-full"
            />

            <div className="flex overflow-hidden">
              <TextType
                text={["Software Engineer", "Fullstack Developer"]}
                typingSpeed={80}
                pauseDuration={2000}
                showCursor
                cursorCharacter="|"
                deletingSpeed={50}
                cursorBlinkDuration={0.5}
                className="font-body text-3xl sm:text-4xl sm:pb-3 lg:text-5xl lg:pb-4 text-text-primary h-fit w-full"
              />
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-0.5 bg-linear-to-r from-moss/60 to-transparent my-4 sm:my-5 lg:my-8" />

          {/* Social Buttons */}
          <FadeContent blur duration={800} delay={200} threshold={0.1}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-md">
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
            </div>
          </FadeContent>
        </div>

        {/* Right Column - Goth Decoration */}
        <FadeContent blur duration={1000} delay={400} threshold={0.1}>
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-112.5">
              <GothDecoration />
            </div>
            <div className="absolute -bottom-8 -right-4 w-32 h-32 bg-moss/5 rounded-full blur-3xl" />
          </div>
        </FadeContent>
      </div>

      {/* Scroll indicator */}
      <a
        href="#projects"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#888888] hover:text-moss cursor-pointer focus:outline-none focus:ring-2 focus:ring-moss/40 rounded-lg px-3 py-1 transition-colors duration-300"
        aria-label="Scroll to Projects section"
      >
        <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        <ChevronDown className="w-4 h-4" />
      </a>
    </section>
  );
}
