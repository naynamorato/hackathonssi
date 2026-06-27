import { motion } from 'framer-motion'
import Screen from '../components/Screen'
import ScreenHeader from '../components/ScreenHeader'
import { MINDSETS, cardsScreen, intentionCards } from '../content'

const teal = MINDSETS.aberta.color
const cyan = MINDSETS.agil.color

export default function Cards() {
  const concretas = intentionCards.filter((c) => c.type === 'concreta')
  const provocacoes = intentionCards.filter((c) => c.type === 'provocacao')

  return (
    <Screen>
      <ScreenHeader
        eyebrow="Etapa 3 · Cartas de intenção"
        title={cardsScreen.header}
        subtitle={cardsScreen.subtext}
        accent={teal}
      />

      <div
        className="mb-6 rounded-2xl bg-navy-card p-4 text-sm leading-relaxed text-mist"
        style={{ boxShadow: `inset 0 0 0 1px ${teal}33` }}
      >
        <p className="mb-1 text-[11px] font-semibold uppercase tracking-wide text-teal">
          Como usar
        </p>
        {cardsScreen.howTo}
      </div>

      <Group title="Concretas" hint="1 a 6 · para quem está travado" color={teal} />
      <div className="mb-6 grid grid-cols-1 gap-3">
        {concretas.map((c, i) => (
          <IntentionCardView key={c.n} card={c} index={i} color={teal} />
        ))}
      </div>

      <Group title="Provocações" hint="7 a 10 · para esticar a ideia" color={cyan} />
      <div className="grid grid-cols-1 gap-3">
        {provocacoes.map((c, i) => (
          <IntentionCardView key={c.n} card={c} index={i} color={cyan} />
        ))}
      </div>
    </Screen>
  )
}

function Group({ title, hint, color }: { title: string; hint: string; color: string }) {
  return (
    <div className="mb-3 flex items-baseline gap-2">
      <span className="h-2.5 w-2.5 rounded-full" style={{ background: color }} />
      <h2 className="font-display text-lg font-bold text-white">{title}</h2>
      <span className="text-[11px] text-mist">{hint}</span>
    </div>
  )
}

function IntentionCardView({
  card,
  index,
  color,
}: {
  card: { n: number; title: string; text: string }
  index: number
  color: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: Math.min(index * 0.05, 0.4) }}
      whileTap={{ scale: 0.99 }}
      className="flex gap-4 rounded-2xl bg-navy-card p-5"
      style={{ boxShadow: `inset 0 0 0 1px ${color}33` }}
    >
      <div
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl font-display text-lg font-bold"
        style={{ background: `${color}1f`, color }}
      >
        {card.n}
      </div>
      <div className="min-w-0">
        <h3 className="font-display text-base font-semibold text-white">
          {card.title}
        </h3>
        <p className="mt-1 text-sm leading-relaxed text-mist">{card.text}</p>
      </div>
    </motion.div>
  )
}
