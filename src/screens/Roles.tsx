import { motion } from 'framer-motion'
import Screen from '../components/Screen'
import ScreenHeader from '../components/ScreenHeader'
import { MINDSETS, roles, rolesScreen } from '../content'

const emojiByRole: Record<string, string> = {
  'Espírito da Alegria': '🎉',
  'Guardião do Tempo': '⏱️',
  'Mestre das Máquinas': '⚙️',
  'Arquiteto do Pitch': '🎤',
  'Anotador Oficial': '📝',
}

export default function Roles() {
  return (
    <Screen>
      <ScreenHeader
        eyebrow="Papéis do grupo"
        title={rolesScreen.header}
        subtitle={rolesScreen.subtext}
        accent={MINDSETS.ativa.color}
      />

      <div className="space-y-3">
        {roles.map((role, i) => {
          const color = MINDSETS[role.mindset].color
          return (
            <motion.div
              key={role.name}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: Math.min(i * 0.06, 0.4) }}
              className="flex gap-4 rounded-2xl bg-navy-card p-5"
              style={{ boxShadow: `inset 0 0 0 1px ${color}33` }}
            >
              <span
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-xl"
                style={{ background: `${color}1f` }}
              >
                {emojiByRole[role.name] ?? '⭐'}
              </span>
              <div className="min-w-0">
                <h3 className="font-display text-base font-semibold text-white">
                  {role.name}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-mist">{role.desc}</p>
              </div>
            </motion.div>
          )
        })}
      </div>
    </Screen>
  )
}
