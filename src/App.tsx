import './index.css'

import ClickSpark from "./components/animated/ClickSpark.tsx";
import FaultyTerminal from './components/background/FaultyTerminal.tsx';
import NebulaCanvas from './components/background/NebulaCanvas.tsx';
import GlassNav from './components/GlassNav.tsx';
import { useBackgroundMode } from './components/background/BackgroundContext';

import { Welcome } from './components/Welcome.tsx'
import { Projects } from './components/Projects.tsx'
import { Stack } from './components/Stack.tsx'
import { AboutMe } from './components/AboutMe.tsx'
// import { Contact } from './components/Contact.tsx'

function App() {
  const { mode } = useBackgroundMode();

  return (
    <ClickSpark>
      <div className="relative min-h-screen w-full overflow-x-hidden">
        {/* Background Layer */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          {mode === 'matrix' ? (
            <FaultyTerminal
              scale={3}
              gridMul={[2, 1]}
              digitSize={1.2}
              timeScale={2.8}
              pause={false}
              scanlineIntensity={0.5}
              glitchAmount={1}
              flickerAmount={1}
              noiseAmp={0.6}
              chromaticAberration={0}
              dither={0}
              curvature={0.04}
              tint="#b0b8c8"
              mouseReact
              mouseStrength={0.5}
              pageLoadAnimation
              brightness={0.4}
            />
          ) : (
            <NebulaCanvas />
          )}
        </div>

        {/* Content Layer */}
        <div className="relative z-10">
          {/* Navigation */}
          <GlassNav />

          {/* Main Content */}
          <main className='gap-5'>
            <Welcome />
            <div className="w-full h-px bg-linear-to-r from-transparent via-white/8 to-transparent" />
            <AboutMe />
            <div className="w-full h-px bg-linear-to-r from-transparent via-white/8 to-transparent" />
            <Stack />
            <div className="w-full h-px bg-linear-to-r from-transparent via-white/8 to-transparent" />
            <Projects />
            {/* <div className="w-full h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
            <Contact /> */}
          </main>

          {/* Footer */}
          <footer className="w-full py-8 px-6 border-t border-white/8">
            <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-text-muted uppercase tracking-wider">
                Juan Diego Lopez Arias &copy; {new Date().getFullYear()}
              </p>
              <p className="text-xs text-text-muted uppercase tracking-wider">
                Built with love ❤️
              </p>
            </div>
          </footer>
        </div>
      </div>
    </ClickSpark>
  )
}

export default App
