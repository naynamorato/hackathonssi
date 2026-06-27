import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

/**
 * Container de tela: coluna centralizada (max-w-md no desktop, como um app),
 * com transição de entrada (fade + slide curto).
 */
interface ScreenProps {
  children: ReactNode
  /** padding inferior extra quando há BottomNav */
  withNav?: boolean
}

export default function Screen({ children, withNav = true }: ScreenProps) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.28, ease: 'easeOut' }}
      className="relative z-10 mx-auto w-full max-w-md px-5 pt-6"
      style={{
        paddingBottom: withNav
          ? 'calc(6.5rem + env(safe-area-inset-bottom))'
          : 'calc(2rem + env(safe-area-inset-bottom))',
      }}
    >
      {children}
    </motion.main>
  )
}
