import { motion } from 'framer-motion'
import { MINDSETS } from '../content'
import type { Step } from '../content'
import Logo from './Logo'

interface StepCardProps {
  step: Step
  index: number
  isCurrent: boolean
  onClick: () => void
}

export default function StepCard({ step, index, isCurrent, onClick }: StepCardProps) {
  const mindset = MINDSETS[step.mindset]
  const accent = mindset.color

  return (
    <motion.button
      initial={{ opacity: 0, x: -12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.35, delay: Math.min(index * 0.05, 0.4) }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="group relative flex w-full items-center gap-4 rounded-2xl bg-navy-card p-4 text-left"
      style={{
        boxShadow: isCurrent
          ? `inset 0 0 0 1.5px ${accent}, 0 0 22px ${accent}40`
          : `inset 0 0 0 1px ${accent}22`,
      }}
    >
      {/* glow pulsante na etapa do horário atual */}
      {isCurrent && (
        <motion.span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-2xl"
          style={{ boxShadow: `0 0 0 1.5px ${accent}` }}
          animate={{ opacity: [0.25, 0.8, 0.25] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
        />
      )}

      {/* número + bloco de cor */}
      <div
        className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl font-display text-lg font-bold"
        style={{ background: `${accent}1f`, color: accent }}
      >
        {step.id}
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold tabular-nums text-white">
            {step.time}
          </span>
          <span className="text-[11px] text-mist">· {step.duration}</span>
          {isCurrent && (
            <span
              className="ml-auto rounded-full px-2 py-0.5 text-[10px] font-bold uppercase"
              style={{ background: `${accent}22`, color: accent }}
            >
              agora
            </span>
          )}
        </div>
        <h3 className="truncate font-display text-base font-semibold text-white">
          {step.title}
        </h3>
        <span className="text-[11px]" style={{ color: accent }}>
          {mindset.name}
        </span>
      </div>

      <span className="shrink-0 opacity-40 transition group-hover:translate-x-0.5 group-hover:opacity-70">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M9 6l6 6-6 6" stroke="#C9D2DE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>

      <Logo size={40} watermark className="pointer-events-none absolute -right-1 -top-1" />
    </motion.button>
  )
}
