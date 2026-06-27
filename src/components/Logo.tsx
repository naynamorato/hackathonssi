import { motion } from 'framer-motion'
import { MINDSETS } from '../content'

/**
 * Motivo gráfico do programa: 4 blocos (quadrados + semicírculos) que
 * representam as 4 mentalidades. Recriado em SVG, sem imagens externas.
 * - `animate`: monta os blocos em sequência (tela de abertura)
 * - `watermark`: versão sutil, baixa opacidade, decorativa
 */

interface LogoProps {
  size?: number
  animate?: boolean
  watermark?: boolean
  className?: string
}

const teal = MINDSETS.aberta.color
const cyan = MINDSETS.agil.color
const leaf = MINDSETS.ativa.color
const indigo = MINDSETS.alinhada.color

export default function Logo({
  size = 56,
  animate = false,
  watermark = false,
  className = '',
}: LogoProps) {
  const gap = 0.06
  const block = (1 - gap) / 2

  const blocks = [
    // top-left: quadrado teal
    { x: 0, y: 0, color: teal, shape: 'square' as const },
    // top-right: semicírculo ciano (vira para baixo)
    { x: block + gap, y: 0, color: cyan, shape: 'semi-b' as const },
    // bottom-left: semicírculo verde (vira para a direita)
    { x: 0, y: block + gap, color: leaf, shape: 'semi-r' as const },
    // bottom-right: quadrado índigo
    { x: block + gap, y: block + gap, color: indigo, shape: 'square' as const },
  ]

  const r = block * 0.32

  return (
    <svg
      viewBox="0 0 1 1"
      width={size}
      height={size}
      className={className}
      style={{ opacity: watermark ? 0.06 : 1 }}
      aria-hidden="true"
    >
      {blocks.map((b, i) => {
        const common = {
          fill: b.color,
        }
        const mv = animate
          ? {
              initial: { scale: 0, opacity: 0 },
              animate: { scale: 1, opacity: 1 },
              transition: {
                delay: 0.12 * i,
                type: 'spring' as const,
                stiffness: 320,
                damping: 18,
              },
              style: { transformOrigin: `${b.x + block / 2}px ${b.y + block / 2}px` },
            }
          : {}

        if (b.shape === 'square') {
          return (
            <motion.rect
              key={i}
              x={b.x}
              y={b.y}
              width={block}
              height={block}
              rx={r}
              {...common}
              {...mv}
            />
          )
        }
        // semicírculos: meio quadrado com cantos arredondados de um lado
        if (b.shape === 'semi-b') {
          // semicírculo que fecha embaixo
          return (
            <motion.path
              key={i}
              d={`M${b.x},${b.y} h${block} v${block / 2} a${block / 2},${block / 2} 0 0 1 -${block},0 Z`}
              {...common}
              {...mv}
            />
          )
        }
        // semi-r: semicírculo que fecha à direita
        return (
          <motion.path
            key={i}
            d={`M${b.x},${b.y} h${block / 2} a${block / 2},${block / 2} 0 0 1 0,${block} h-${block / 2} Z`}
            {...common}
            {...mv}
          />
        )
      })}
    </svg>
  )
}
