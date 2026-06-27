import { motion } from 'framer-motion'
import Screen from '../components/Screen'
import GoalBanner from '../components/GoalBanner'
import StepCard from '../components/StepCard'
import BrandFooter from '../components/BrandFooter'
import Logo from '../components/Logo'
import { brand, home, steps, timelineMarkers } from '../content'
import { getCurrentStepId } from '../lib/currentStep'

interface HomeProps {
  onOpenStep: (id: number) => void
}

export default function Home({ onOpenStep }: HomeProps) {
  const currentStepId = getCurrentStepId()

  return (
    <Screen>
      {/* marca no topo */}
      <div className="mb-5 flex items-center gap-3">
        <Logo size={40} />
        <div className="min-w-0">
          <p className="truncate font-display text-sm font-bold text-white">
            {brand.event}
          </p>
          <p className="truncate text-[11px] text-mist">{brand.appSubtitle}</p>
        </div>
      </div>

      <GoalBanner />

      <div className="mb-5">
        <h1 className="font-display text-2xl font-bold leading-tight text-white">
          {home.header}
        </h1>
        <p className="mt-2 text-sm leading-relaxed text-mist">{home.subtext}</p>
      </div>

      {/* linha do tempo */}
      <div className="space-y-3">
        {steps.map((step, i) => (
          <div key={step.id}>
            <StepCard
              step={step}
              index={i}
              isCurrent={currentStepId === step.id}
              onClick={() => onOpenStep(step.id)}
            />
            {timelineMarkers
              .filter((m) => m.after === step.id)
              .map((m) => (
                <Marker key={m.label} label={m.label} detail={m.detail} time={m.time} />
              ))}
          </div>
        ))}
      </div>

      <BrandFooter />
    </Screen>
  )
}

function Marker({ label, detail, time }: { label: string; detail: string; time: string }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="my-3 flex items-start gap-3 rounded-2xl border border-dashed border-white/15 bg-navy-deep/40 px-4 py-3"
    >
      <span className="mt-0.5 text-base">{label.toLowerCase().includes('pitch') ? '🎤' : '🍽️'}</span>
      <div className="min-w-0">
        <div className="flex flex-wrap items-baseline gap-x-2">
          <span className="font-display text-sm font-semibold text-white">
            {label}
          </span>
          <span className="text-[11px] font-medium tabular-nums text-teal">{time}</span>
        </div>
        <p className="mt-0.5 text-[11px] leading-relaxed text-mist">{detail}</p>
      </div>
    </motion.div>
  )
}
