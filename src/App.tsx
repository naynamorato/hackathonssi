import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import MagicBackground from './components/MagicBackground'
import BottomNav from './components/BottomNav'
import Splash from './screens/Splash'
import Home from './screens/Home'
import StepScreen from './screens/StepScreen'
import Cards from './screens/Cards'
import AI from './screens/AI'
import Tools from './screens/Tools'
import Wisdom from './screens/Wisdom'
import Roles from './screens/Roles'
import Jury from './screens/Jury'
import type { ScreenId } from './content'

// telas que aparecem na barra inferior
const NAV_SCREENS: ScreenId[] = ['home', 'ai', 'tools', 'roles', 'jury']

export default function App() {
  const [showSplash, setShowSplash] = useState(true)
  const [screen, setScreen] = useState<ScreenId>('home')
  const [activeStep, setActiveStep] = useState<number | null>(null)
  const [focusPromptId, setFocusPromptId] = useState<number | undefined>(undefined)

  // some o splash sozinho após alguns segundos
  useEffect(() => {
    const t = window.setTimeout(() => setShowSplash(false), 3200)
    return () => window.clearTimeout(t)
  }, [])

  // rola para o topo a cada troca de tela
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [screen, activeStep])

  const navigate = (id: ScreenId) => {
    setActiveStep(null)
    setFocusPromptId(undefined)
    setScreen(id)
  }

  const openStep = (id: number) => {
    setActiveStep(id)
    setScreen('step')
  }

  const openPrompt = (promptId: number) => {
    setActiveStep(null)
    setFocusPromptId(promptId)
    setScreen('ai')
  }

  // chave única para o AnimatePresence (etapa varia por id)
  const screenKey = screen === 'step' ? `step-${activeStep}` : screen

  return (
    <div className="relative min-h-screen">
      <MagicBackground />

      <AnimatePresence>
        {showSplash && <Splash onEnter={() => setShowSplash(false)} />}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <div key={screenKey}>
          {screen === 'home' && <Home onOpenStep={openStep} />}
          {screen === 'step' && activeStep != null && (
            <StepScreen
              stepId={activeStep}
              onBack={() => navigate('home')}
              onNavigate={navigate}
              onOpenStep={openStep}
              onOpenPrompt={openPrompt}
            />
          )}
          {screen === 'cards' && <Cards />}
          {screen === 'ai' && (
            <AI focusPromptId={focusPromptId} onOpenStep={openStep} onNavigate={navigate} />
          )}
          {screen === 'tools' && <Tools />}
          {screen === 'wisdom' && <Wisdom />}
          {screen === 'roles' && <Roles />}
          {screen === 'jury' && <Jury />}
        </div>
      </AnimatePresence>

      <BottomNav
        current={NAV_SCREENS.includes(screen) ? screen : 'home'}
        onNavigate={navigate}
      />
    </div>
  )
}
