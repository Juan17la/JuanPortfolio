import './index.css'

import ClickSpark from "./components/animated/ClickSpark.tsx";
import FaultyTerminal from './components/background/FaultyTerminal.tsx';

import { Welcome } from './components/Welcome.tsx'
import { Projects } from './components/Projects.tsx'
import { Stack } from './components/Stack.tsx'
import { AboutMe } from './components/AboutMe.tsx'
import { Contact } from './components/Contact.tsx'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

function App() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const navLinks = [
    { href: '#projects', label: 'Projects' },
    { href: '#stack', label: 'Stack' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ]

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href === '#') {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    setMobileOpen(false)
  }

  return (
    <ClickSpark>
      <div className="relative min-h-screen w-full overflow-x-hidden">
        {/* Background Layer */}
        <div className="fixed inset-0 z-0">
          <FaultyTerminal
            scale={1.5}
            gridMul={[2, 1]}
            digitSize={1.2}
            timeScale={0.5}
            pause={false}
            scanlineIntensity={0.5}
            glitchAmount={1}
            flickerAmount={1}
            noiseAmp={1}
            chromaticAberration={0}
            dither={0}
            curvature={0.1}
            tint="#5a8a6e"
            mouseReact
            mouseStrength={0.5}
            pageLoadAnimation
            brightness={0.5}
          />
        </div>

        {/* Content Layer */}
        <div className="relative z-10">
          {/* Navigation */}
          <header className="fixed top-0 left-0 right-0 z-50 py-5">
            <div className="mx-auto px-6 max-w-6xl">
              <nav className="flex items-center justify-between h-12">
                <a
                  href="#"
                  onClick={(e) => handleNavClick(e, '#')}
                  className="font-display text-text-primary"
                >
                  JD
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="text-sm text-[#888888] hover:text-moss uppercase tracking-wider font-medium transition-colors duration-300 relative group"
                    >
                      {link.label}
                      <span className="absolute -bottom-1 left-0 w-0 h-px bg-moss transition-all duration-300 group-hover:w-full" />
                    </a>
                  ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                  className="md:hidden p-2 text-[#888888] hover:text-moss focus:outline-none focus:ring-2 focus:ring-moss/50 rounded-lg transition-colors duration-300"
                  onClick={() => setMobileOpen(!mobileOpen)}
                  aria-label="Toggle menu"
                  aria-expanded={mobileOpen}
                >
                  {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
              </nav>
            </div>

            {/* Mobile Nav */}
            {mobileOpen && (
              <div className="md:hidden mx-6 mt-2 glass-strong rounded-xl p-4">
                <div className="flex flex-col gap-3">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="text-sm text-[#888888] hover:text-moss uppercase tracking-wider font-medium py-2 px-3 rounded-lg hover:bg-moss/5 transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </header>

          {/* Main Content */}
          <main>
            <Welcome />
            <div className="w-full h-px bg-linear-to-r from-transparent via-moss/10 to-transparent" />
            <Projects />
            <div className="w-full h-px bg-linear-to-r from-transparent via-moss/10 to-transparent" />
            <Stack />
            <div className="w-full h-px bg-linear-to-r from-transparent via-moss/10 to-transparent" />
            <AboutMe />
            <div className="w-full h-px bg-linear-to-r from-transparent via-moss/10 to-transparent" />
            <Contact />
          </main>

          {/* Footer */}
          <footer className="w-full py-8 px-6 border-t border-border/40">
            <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-[#888888] uppercase tracking-wider">
                Juan Diego Lopez Arias &copy; {new Date().getFullYear()}
              </p>
              <p className="text-xs text-[#888888] uppercase tracking-wider">
                Built with React, Tailwind & Darkness
              </p>
            </div>
          </footer>
        </div>
      </div>
    </ClickSpark>
  )
}

export default App
