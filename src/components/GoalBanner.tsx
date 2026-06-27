import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { goal } from '../content'
import { MINDSETS } from '../content'

/**
 * Meta da manhã + lembrete da banca, sempre acessível.
 * Faixa fixa recolhível no topo das telas principais.
 */
export default function GoalBanner() {
  const [open, setOpen] = useState(false)
  const teal = MINDSETS.aberta.color

  return (
    <div className="mb-5">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center gap-3 rounded-2xl bg-navy-card px-4 py-3 text-left transition-colors"
        style={{ boxShadow: `inset 0 0 0 1px ${teal}40` }}
        aria-expanded={open}
      >
        <span
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-base"
          style={{ background: `${teal}22` }}
        >
          🎯
        </span>
        <span className="min-w-0 flex-1">
          <span className="block text-[11px] font-semibold uppercase tracking-wide text-teal">
            A grande meta
          </span>
          <span className="block truncate text-sm font-semibold text-white">
            {goal.title}
          </span>
        </span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-mist"
        >
          ▾
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="mt-2 space-y-3 rounded-2xl bg-navy-card p-4 text-sm leading-relaxed text-mist"
              style={{ boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.06)' }}
            >
              <p className="text-white">{goal.text}</p>
              <div className="rounded-xl bg-leaf/10 p-3" style={{ boxShadow: `inset 0 0 0 1px ${MINDSETS.ativa.color}40` }}>
                <p className="mb-1 text-[11px] font-semibold uppercase tracking-wide text-leaf">
                  A manhã decide
                </p>
                <p className="text-mist">{goal.strategy}</p>
              </div>
              <div className="rounded-xl bg-indigo/10 p-3" style={{ boxShadow: `inset 0 0 0 1px ${MINDSETS.alinhada.color}40` }}>
                <p className="mb-1 text-[11px] font-semibold uppercase tracking-wide text-indigo">
                  Lembrete da banca
                </p>
                <p className="text-mist">{goal.juryReminder}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
