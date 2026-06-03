import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MotionConfig } from 'motion/react'
import './index.css'
import App from './App.tsx'
import { BackgroundProvider } from './components/background/BackgroundContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MotionConfig reducedMotion="user">
      <BackgroundProvider>
        <App />
      </BackgroundProvider>
    </MotionConfig>
  </StrictMode>,
)
