import { motion } from 'framer-motion'
import Screen from '../components/Screen'
import ScreenHeader from '../components/ScreenHeader'
import { MINDSETS, juryScreen } from '../content'

const accents = [
  MINDSETS.alinhada.color,
  MINDSETS.aberta.color,
  MINDSETS.ativa.color,
  MINDSETS.agil.color,
  MINDSETS.alinhada.color,
]

export default function Jury() {
  return (
    <Screen>
      <ScreenHeader
        eyebrow="O que a banca avalia"
        title={juryScreen.header}
        subtitle={juryScreen.subtext}
        accent={MINDSETS.alinhada.color}
      />

      <div className="space-y-3">
        {juryScreen.points.map((point, i) => {
          const color = accents[i % accents.length]
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: Math.min(i * 0.06, 0.4) }}
              className="flex items-start gap-3 rounded-2xl bg-navy-card p-5"
              style={{ boxShadow: `inset 0 0 0 1px ${color}33` }}
            >
              <span
                className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
                style={{ background: `${color}22` }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12.5 10 17l9-10" stroke={color} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <div>
                <h3 className="text-sm font-semibold text-white">{point.title}</h3>
                <p className="mt-0.5 text-sm leading-relaxed text-mist">{point.text}</p>
              </div>
            </motion.div>
          )
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="mt-5 rounded-2xl p-5"
        style={{
          background: `${MINDSETS.ativa.color}12`,
          boxShadow: `inset 0 0 0 1px ${MINDSETS.ativa.color}45`,
        }}
      >
        <p className="mb-1 text-[11px] font-semibold uppercase tracking-wide text-leaf">
          Recado final
        </p>
        <p className="text-sm leading-relaxed text-white">{juryScreen.finalNote}</p>
      </motion.div>
    </Screen>
  )
}
