import { createContext, useContext, useState, type ReactNode } from 'react';

type BackgroundMode = 'nebula' | 'matrix';

interface BackgroundContextType {
  mode: BackgroundMode;
  toggleMode: () => void;
  setMode: (mode: BackgroundMode) => void;
}

const BackgroundContext = createContext<BackgroundContextType | null>(null);

export function BackgroundProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<BackgroundMode>('nebula');

  const toggleMode = () => {
    setMode((prev) => (prev === 'nebula' ? 'matrix' : 'nebula'));
  };

  return (
    <BackgroundContext.Provider value={{ mode, toggleMode, setMode }}>
      {children}
    </BackgroundContext.Provider>
  );
}

export function useBackgroundMode() {
  const ctx = useContext(BackgroundContext);
  if (!ctx) throw new Error('useBackgroundMode must be used within BackgroundProvider');
  return ctx;
}
