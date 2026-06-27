import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  accent?: string // cor de destaque (borda/glow)
  onClick?: () => void
  index?: number // para stagger
  interactive?: boolean
}

export default function Card({
  children,
  className = '',
  accent,
  onClick,
  index = 0,
  interactive = false,
}: CardProps) {
  const clickable = interactive || !!onClick

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.4), ease: 'easeOut' }}
      whileTap={clickable ? { scale: 0.98 } : undefined}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={
        onClick
          ? (e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                onClick()
              }
            }
          : undefined
      }
      className={`rounded-2xl bg-navy-card p-5 ${
        clickable ? 'cursor-pointer transition-shadow' : ''
      } ${className}`}
      style={
        accent
          ? {
              boxShadow: `inset 0 0 0 1px ${accent}33`,
            }
          : { boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.06)' }
      }
    >
      {children}
    </motion.div>
  )
}
