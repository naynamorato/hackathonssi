import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import type { Prompt } from '../content'

interface PromptCardProps {
  prompt: Prompt
  accent: string
  index?: number
  /** etapa de origem para o selo */
  onGoToStep?: (stepId: number) => void
}

export default function PromptCard({ prompt, accent, index = 0, onGoToStep }: PromptCardProps) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(prompt.body)
    } catch {
      // fallback para navegadores sem clipboard API
      const ta = document.createElement('textarea')
      ta.value = prompt.body
      ta.style.position = 'fixed'
      ta.style.opacity = '0'
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      document.body.removeChild(ta)
    }
    // feedback tátil de sucesso
    if (navigator.vibrate) navigator.vibrate(12)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.06, 0.4) }}
      className="overflow-hidden rounded-2xl bg-navy-card"
      style={{ boxShadow: `inset 0 0 0 1px ${accent}33` }}
    >
      <div className="flex items-center justify-between gap-3 p-5 pb-3">
        <div className="min-w-0">
          <button
            onClick={() => onGoToStep?.(prompt.stepId)}
            className="mb-1 inline-block rounded-full px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide"
            style={{ background: `${accent}22`, color: accent }}
          >
            {prompt.stepLabel}
          </button>
          <h3 className="font-display text-lg font-bold lowercase text-white">
            {prompt.title}
          </h3>
        </div>
      </div>

      <div className="px-5">
        <pre className="max-h-44 overflow-auto whitespace-pre-wrap rounded-xl bg-navy-deep/60 p-4 text-[13px] leading-relaxed text-mist no-scrollbar">
          {prompt.body}
        </pre>
      </div>

      <div className="p-5 pt-3">
        <button
          onClick={copy}
          className="relative flex min-h-[44px] w-full items-center justify-center gap-2 overflow-hidden rounded-xl px-4 py-3 text-sm font-semibold text-navy-deep transition-transform active:scale-[0.98]"
          style={{ background: accent }}
        >
          <AnimatePresence mode="wait" initial={false}>
            {copied ? (
              <motion.span
                key="ok"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className="flex items-center gap-2"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12.5 10 17l9-10" stroke="#01112A" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Copiado!
              </motion.span>
            ) : (
              <motion.span
                key="copy"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className="flex items-center gap-2"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <rect x="9" y="9" width="11" height="11" rx="2.5" stroke="#01112A" strokeWidth="1.9" />
                  <path d="M5 15V6a2 2 0 0 1 2-2h8" stroke="#01112A" strokeWidth="1.9" strokeLinecap="round" />
                </svg>
                Copiar prompt
              </motion.span>
            )}
          </AnimatePresence>

          {/* brilho ao copiar */}
          <AnimatePresence>
            {copied && (
              <motion.span
                initial={{ x: '-120%' }}
                animate={{ x: '120%' }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="pointer-events-none absolute inset-y-0 w-1/3 -skew-x-12 bg-white/40 blur-md"
              />
            )}
          </AnimatePresence>
        </button>
      </div>
    </motion.div>
  )
}
