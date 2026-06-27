import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Screen from '../components/Screen'
import ScreenHeader from '../components/ScreenHeader'
import PromptCard from '../components/PromptCard'
import { MINDSETS, aiAgents, aiScreen, prompts, steps } from '../content'
import type { ScreenId } from '../content'

const accentByStep: Record<number, string> = {}
steps.forEach((s) => (accentByStep[s.id] = MINDSETS[s.mindset].color))

interface AIProps {
  focusPromptId?: number
  onOpenStep: (id: number) => void
  onNavigate: (id: ScreenId) => void
}

export default function AI({ focusPromptId, onOpenStep, onNavigate }: AIProps) {
  const refs = useRef<Record<number, HTMLDivElement | null>>({})

  useEffect(() => {
    if (focusPromptId && refs.current[focusPromptId]) {
      refs.current[focusPromptId]?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }, [focusPromptId])

  return (
    <Screen>
      <ScreenHeader
        eyebrow="Caixa de IA"
        title={aiScreen.header}
        subtitle={aiScreen.subtext}
        accent={MINDSETS.agil.color}
      />

      {/* espaço para links de agentes */}
      <div className="mb-6">
        <p className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-mist">
          Agentes de IA
        </p>
        <div className="space-y-2">
          {aiAgents.map((agent) => {
            const pending = !agent.url
            const inner = (
              <div
                className="flex items-center gap-3 rounded-2xl bg-navy-card px-4 py-3"
                style={{
                  boxShadow: pending
                    ? 'inset 0 0 0 1px rgba(255,255,255,0.10)'
                    : `inset 0 0 0 1px ${MINDSETS.agil.color}40`,
                }}
              >
                <span
                  className="flex h-9 w-9 items-center justify-center rounded-xl text-sm"
                  style={{ background: pending ? 'rgba(255,255,255,0.06)' : `${MINDSETS.agil.color}22` }}
                >
                  🤖
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold text-white">{agent.label}</p>
                  <p className="truncate text-[11px] text-mist">{agent.desc}</p>
                </div>
                {pending ? (
                  <span className="rounded-full border border-dashed border-white/20 px-2 py-0.5 text-[10px] text-mist/70">
                    colar link
                  </span>
                ) : (
                  <span className="text-cyan">↗</span>
                )}
              </div>
            )
            return pending ? (
              <div key={agent.label}>{inner}</div>
            ) : (
              <a
                key={agent.label}
                href={agent.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                {inner}
              </a>
            )
          })}
        </div>
      </div>

      {/* prompts prontos */}
      <p className="mb-3 text-[11px] font-semibold uppercase tracking-wide text-mist">
        Prompts prontos · é só copiar
      </p>
      <div className="space-y-4">
        {prompts.map((prompt, i) => (
          <div key={prompt.id} ref={(el) => (refs.current[prompt.id] = el)}>
            <PromptCard
              prompt={prompt}
              accent={accentByStep[prompt.stepId] ?? MINDSETS.agil.color}
              index={i}
              onGoToStep={onOpenStep}
            />
          </div>
        ))}
      </div>

      <motion.button
        whileTap={{ scale: 0.98 }}
        onClick={() => onNavigate('wisdom')}
        className="mt-6 flex min-h-[48px] w-full items-center justify-between rounded-2xl bg-navy-card px-5 py-3 text-sm font-semibold text-white"
        style={{ boxShadow: `inset 0 0 0 1px ${MINDSETS.agil.color}40` }}
      >
        Usar IA com sabedoria
        <span className="text-cyan">→</span>
      </motion.button>
    </Screen>
  )
}
