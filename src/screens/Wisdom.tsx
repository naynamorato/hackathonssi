import Screen from '../components/Screen'
import ScreenHeader from '../components/ScreenHeader'
import Card from '../components/Card'
import { MINDSETS, wisdomScreen } from '../content'

const accents = [
  MINDSETS.aberta.color,
  MINDSETS.agil.color,
  MINDSETS.ativa.color,
  MINDSETS.alinhada.color,
]

export default function Wisdom() {
  return (
    <Screen>
      <ScreenHeader
        eyebrow="Usar IA com sabedoria"
        title={wisdomScreen.header}
        subtitle={wisdomScreen.subtext}
        accent={MINDSETS.agil.color}
      />

      <div className="space-y-3">
        {wisdomScreen.tips.map((tip, i) => {
          const color = accents[i % accents.length]
          return (
            <Card key={i} index={i} accent={color}>
              <div className="flex gap-3">
                <span
                  className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg font-display text-sm font-bold"
                  style={{ background: `${color}1f`, color }}
                >
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-white">{tip.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-mist">{tip.text}</p>
                </div>
              </div>
            </Card>
          )
        })}
      </div>
    </Screen>
  )
}
