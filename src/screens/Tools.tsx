import { motion } from 'framer-motion'
import Screen from '../components/Screen'
import ScreenHeader from '../components/ScreenHeader'
import { MINDSETS, tools, toolsScreen } from '../content'

const accents = [MINDSETS.ativa.color, MINDSETS.aberta.color, MINDSETS.agil.color, MINDSETS.alinhada.color]

export default function Tools() {
  return (
    <Screen>
      <ScreenHeader
        eyebrow="Ferramentas"
        title={toolsScreen.header}
        subtitle={toolsScreen.subtext}
        accent={MINDSETS.ativa.color}
      />

      <div className="space-y-3">
        {tools.map((tool, i) => {
          const color = accents[i % accents.length]
          const pending = tool.placeholder || !tool.url
          const card = (
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: Math.min(i * 0.06, 0.4) }}
              whileTap={tool.url ? { scale: 0.98 } : undefined}
              className="rounded-2xl bg-navy-card p-5"
              style={{
                boxShadow: tool.placeholder
                  ? 'inset 0 0 0 1px rgba(255,255,255,0.10)'
                  : `inset 0 0 0 1px ${color}40`,
              }}
            >
              <div className="flex items-center justify-between gap-3">
                <h3
                  className="font-display text-lg font-bold lowercase"
                  style={{ color: tool.placeholder ? '#C9D2DE' : color }}
                >
                  {tool.placeholder ? 'espaço livre' : tool.name}
                </h3>
                {pending ? (
                  <span className="rounded-full border border-dashed border-white/20 px-2 py-0.5 text-[10px] text-mist/70">
                    colar link
                  </span>
                ) : (
                  <span style={{ color }}>↗</span>
                )}
              </div>
              <p className="mt-1 text-sm text-white">{tool.purpose}</p>
              <p className="mt-2 inline-block rounded-full bg-white/5 px-2.5 py-1 text-[11px] text-mist">
                {tool.when}
              </p>
            </motion.div>
          )

          return tool.url ? (
            <a key={i} href={tool.url} target="_blank" rel="noopener noreferrer" className="block">
              {card}
            </a>
          ) : (
            <div key={i}>{card}</div>
          )
        })}
      </div>

      <p className="mt-5 px-1 text-[11px] leading-relaxed text-mist/70">
        Os links diretos (Gamma, Lovable e extras) ficam no arquivo{' '}
        <span className="font-mono text-mist">content.ts</span> — procure por “COLE AQUI”.
      </p>
    </Screen>
  )
}
