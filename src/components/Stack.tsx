import { TechBadge, TechBlock } from "./TechBadge";
import BlurText from "./animated/BlurText";
import FadeContent from "./animated/FadeContent";

export function Stack() {
  return (
    <section className="relative w-full px-6 py-24" id="stack">
      {/* Background subtle grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#5a8a6e 1px, transparent 1px), linear-gradient(90deg, #5a8a6e 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-8 h-px bg-[#5a8a6e]" />
          <span className="text-xs uppercase tracking-[0.25em] text-[#5a8a6e] font-semibold">
            Arsenal
          </span>
        </div>
        <BlurText
          text="Stack"
          delay={150}
          animateBy="letters"
          direction="top"
          threshold={0.1}
          className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl text-[#f0f0f0] mb-16"
        />

        {/* Tetris Grid */}
        <FadeContent blur duration={900} delay={100} threshold={0.1}>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-3 auto-rows-[80px]">
            {/* Main stack - Moss Green */}
            <TechBlock color="moss" className="col-span-1 row-span-2 flex flex-col items-center justify-center gap-2">
              <TechBadge name="Java" icon="java" color="moss" size="sm" />
              <TechBadge name="Spring Boot" icon="springboot" color="moss" size="sm" />
            </TechBlock>

            <TechBlock color="moss" className="col-span-2 row-span-1 flex items-center justify-center gap-2">
              <TechBadge name="React" icon="react" color="moss" size="sm" />
              <TechBadge name="TailwindCSS" icon="tailwindcss" color="moss" size="sm" />
            </TechBlock>
            <TechBlock color="moss" className="col-span-1 row-span-1 flex items-center justify-center">
              <TechBadge name="HTML" icon="html5" color="moss" size="sm" />
            </TechBlock>

            <TechBlock color="moss" className="col-span-1 row-span-1 flex items-center justify-center">
              <TechBadge name="CSS" icon="css3" color="moss" size="sm" />
            </TechBlock>
            <TechBlock color="moss" className="col-span-1 row-span-1 flex items-center justify-center">
              <TechBadge name="PostgreSQL" icon="postgresql" color="moss" size="sm" />
            </TechBlock>

            <TechBlock color="moss" className="col-span-2 row-span-1 flex items-center justify-center gap-2">
              <TechBadge name="Node.js" icon="nodedotjs" color="moss" size="sm" />
              <TechBadge name="TypeScript" icon="typescript" color="moss" size="sm" />
            </TechBlock>

            {/* Other techs - Blue */}
            <TechBlock color="blue" className="col-span-1 row-span-1 flex items-center justify-center">
              <TechBadge name="MongoDB" icon="mongodb" color="blue" size="sm" />
            </TechBlock>
            <TechBlock color="blue" className="col-span-1 row-span-1 flex items-center justify-center">
              <TechBadge name="C#" icon="csharp" color="blue" size="sm" />
            </TechBlock>
            <TechBlock color="blue" className="col-span-1 row-span-1 flex items-center justify-center">
              <TechBadge name=".NET" icon="dotnet" color="blue" size="sm" />
            </TechBlock>
            <TechBlock color="blue" className="col-span-1 row-span-1 flex items-center justify-center">
              <TechBadge name="Python" icon="python" color="blue" size="sm" />
            </TechBlock>
            <TechBlock color="blue" className="col-span-2 row-span-1 flex items-center justify-center">
              <TechBadge name="Kotlin" icon="kotlin" color="blue" size="sm" />
            </TechBlock>

            {/* Tools - Yellow */}
            <TechBlock color="yellow" className="col-span-1 row-span-1 flex items-center justify-center">
              <TechBadge name="Git" icon="git" color="yellow" size="sm" />
            </TechBlock>
            <TechBlock color="yellow" className="col-span-1 row-span-1 flex items-center justify-center">
              <TechBadge name="Docker" icon="docker" color="yellow" size="sm" />
            </TechBlock>
            <TechBlock color="yellow" className="col-span-1 row-span-1 flex items-center justify-center">
              <TechBadge name="Figma" icon="figma" color="yellow" size="sm" />
            </TechBlock>
            <TechBlock color="yellow" className="col-span-1 row-span-1 flex items-center justify-center">
              <TechBadge name="Jira" icon="jira" color="yellow" size="sm" />
            </TechBlock>
            <TechBlock color="yellow" className="col-span-1 row-span-1 flex items-center justify-center">
              <TechBadge name="Notion" icon="notion" color="yellow" size="sm" />
            </TechBlock>
            <TechBlock color="yellow" className="col-span-1 row-span-1 flex items-center justify-center">
              <TechBadge name="Linux" icon="linux" color="yellow" size="sm" />
            </TechBlock>
          </div>
        </FadeContent>

        {/* Legend */}
        <FadeContent blur duration={800} delay={300} threshold={0.1}>
          <div className="flex flex-wrap justify-center gap-6 mt-10">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-sm bg-[#5a8a6e]/30 border border-[#5a8a6e]/40" />
              <span className="text-xs text-[#888888] uppercase tracking-wider">Main Stack</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-sm bg-[#6b9ec7]/30 border border-[#6b9ec7]/40" />
              <span className="text-xs text-[#888888] uppercase tracking-wider">Other Techs</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-sm bg-[#d4a843]/30 border border-[#d4a843]/40" />
              <span className="text-xs text-[#888888] uppercase tracking-wider">Tools</span>
            </div>
          </div>
        </FadeContent>
      </div>
    </section>
  );
}
