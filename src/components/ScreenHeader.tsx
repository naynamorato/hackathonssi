import { motion } from 'framer-motion'

interface ScreenHeaderProps {
  eyebrow?: string
  title: string
  subtitle?: string
  accent?: string
}

export default function ScreenHeader({
  eyebrow,
  title,
  subtitle,
  accent = '#58BABB',
}: ScreenHeaderProps) {
  return (
    <motion.header
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="mb-5"
    >
      {eyebrow && (
        <p
          className="mb-1 text-[11px] font-semibold uppercase tracking-[0.14em]"
          style={{ color: accent }}
        >
          {eyebrow}
        </p>
      )}
      <h1 className="font-display text-2xl font-bold leading-tight text-white">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-2 text-sm leading-relaxed text-mist">{subtitle}</p>
      )}
    </motion.header>
  )
}
