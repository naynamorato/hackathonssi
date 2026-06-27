import { motion } from 'framer-motion'
import Screen from '../components/Screen'
import Logo from '../components/Logo'
import { MINDSETS, prompts, steps } from '../content'
import type { ScreenId } from '../content'

interface StepScreenProps {
  stepId: number
  onBack: () => void
  onNavigate: (id: ScreenId) => void
  onOpenStep: (id: number) => void
  onOpenPrompt: (promptId: number) => void
}

export default function StepScreen({
  stepId,
  onBack,
  onNavigate,
  onOpenStep,
  onOpenPrompt,
}: StepScreenProps) {
  const step = steps.find((s) => s.id === stepId)
  if (!step) return null

  const mindset = MINDSETS[step.mindset]
  const accent = mindset.color
  const prompt = step.promptId ? prompts.find((p) => p.id === step.promptId) : undefined
  const prevStep = steps.find((s) => s.id === stepId - 1)
  const nextStep = steps.find((s) => s.id === stepId + 1)

  return (
    <Screen>
      {/* voltar */}
      <button
        onClick={onBack}
        className="mb-4 flex min-h-[44px] items-center gap-1 text-sm text-mist"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M15 6l-6 6 6 6" stroke="#C9D2DE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Linha do tempo
      </button>

      {/* cabeçalho da etapa */}
      <div
        className="relative overflow-hidden rounded-2xl p-5"
        style={{ background: `${accent}14`, boxShadow: `inset 0 0 0 1px ${accent}40` }}
      >
        <Logo size={64} watermark className="pointer-events-none absolute -right-2 -top-2" />
        <div className="flex items-center gap-3">
          <div
            className="flex h-12 w-12 items-center justify-center rounded-xl font-display text-xl font-bold"
            style={{ background: `${accent}26`, color: accent }}
          >
            {step.id}
          </div>
          <div>
            <p className="text-sm font-semibold tabular-nums text-white">
              {step.time} <span className="text-mist">· {step.duration}</span>
            </p>
            <p className="text-[12px] font-medium" style={{ color: accent }}>
              {mindset.name}
            </p>
          </div>
        </div>
        <h1 className="mt-3 font-display text-2xl font-bold leading-tight text-white">
          {step.title}
        </h1>
      </div>

      {/* mentalidade */}
      <div className="mt-4 flex items-start gap-3 rounded-2xl bg-navy-card p-4"
        style={{ boxShadow: `inset 0 0 0 1px ${accent}33` }}
      >
        <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full" style={{ background: accent }} />
        <p className="text-sm text-mist">
          <span className="font-semibold text-white">{mindset.name}</span> · {step.mindsetNote}
        </p>
      </div>

      {/* objetivo */}
      <Block accent={accent} label="Objetivo" delay={0.05}>
        <p className="text-base font-medium text-white">{step.objective}</p>
      </Block>

      {/* o que rola */}
      <Block accent={accent} label="O que rola nesta etapa" delay={0.1}>
        <p className="text-sm leading-relaxed text-mist">{step.whatHappens}</p>
      </Block>

      {/* mãos à obra */}
      <Block accent={accent} label="Mãos à obra" icon="✋" delay={0.15}>
        <p className="text-sm leading-relaxed text-mist">{step.handsOn}</p>
      </Block>

      {/* fica esperto */}
      <Block accent={accent} label="Fica esperto" icon="💡" delay={0.2} highlight>
        <p className="text-sm leading-relaxed text-mist">{step.watchOut}</p>
      </Block>

      {/* botões contextuais */}
      <div className="mt-5 space-y-3">
        {step.showCardsButton && (
          <ActionButton accent={accent} onClick={() => onNavigate('cards')}>
            Ver as 10 cartas de intenção
          </ActionButton>
        )}
        {prompt && (
          <ActionButton accent={accent} onClick={() => onOpenPrompt(prompt.id)}>
            Abrir prompt: {prompt.title}
          </ActionButton>
        )}
      </div>

      {/* navegação entre etapas */}
      <div className="mt-7 flex items-center gap-3">
        <NavStep
          dir="prev"
          step={prevStep}
          onClick={() => prevStep && onOpenStep(prevStep.id)}
        />
        <NavStep
          dir="next"
          step={nextStep}
          onClick={() => nextStep && onOpenStep(nextStep.id)}
        />
      </div>
    </Screen>
  )
}

function Block({
  label,
  icon,
  children,
  accent,
  delay = 0,
  highlight = false,
}: {
  label: string
  icon?: string
  children: React.ReactNode
  accent: string
  delay?: number
  highlight?: boolean
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay }}
      className="mt-4 rounded-2xl bg-navy-card p-5"
      style={{
        boxShadow: highlight
          ? `inset 0 0 0 1px ${accent}55`
          : 'inset 0 0 0 1px rgba(255,255,255,0.06)',
      }}
    >
      <p
        className="mb-2 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.12em]"
        style={{ color: accent }}
      >
        {icon && <span>{icon}</span>}
        {label}
      </p>
      {children}
    </motion.section>
  )
}

function ActionButton({
  children,
  accent,
  onClick,
}: {
  children: React.ReactNode
  accent: string
  onClick: () => void
}) {
  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="flex min-h-[48px] w-full items-center justify-between rounded-2xl px-5 py-3 text-sm font-semibold text-navy-deep"
      style={{ background: accent }}
    >
      {children}
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M9 6l6 6-6 6" stroke="#01112A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </motion.button>
  )
}

function NavStep({
  step,
  dir,
  onClick,
}: {
  step?: { id: number; title: string }
  dir: 'prev' | 'next'
  onClick: () => void
}) {
  if (!step) return <div className="flex-1" />
  return (
    <button
      onClick={onClick}
      className={`flex min-h-[44px] flex-1 flex-col rounded-2xl bg-navy-card px-4 py-3 ${
        dir === 'next' ? 'items-end text-right' : 'items-start text-left'
      }`}
      style={{ boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.06)' }}
    >
      <span className="text-[10px] uppercase tracking-wide text-mist">
        {dir === 'prev' ? '← Anterior' : 'Próxima →'}
      </span>
      <span className="mt-0.5 truncate font-display text-xs font-semibold text-white">
        {step.title}
      </span>
    </button>
  )
}
