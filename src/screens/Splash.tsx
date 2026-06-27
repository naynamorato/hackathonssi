import { motion } from 'framer-motion'
import Logo from '../components/Logo'
import { brand } from '../content'

/**
 * Tela de abertura: os 4 blocos se montam em animação rápida, comunicando
 * que o programa é grande e organizado. Some sozinha após alguns instantes.
 */
export default function Splash({ onEnter }: { onEnter: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center px-8 text-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      onClick={onEnter}
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <Logo size={108} animate />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="mt-7 font-display text-3xl font-bold lowercase leading-tight text-white"
      >
        {brand.event}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.95, duration: 0.5 }}
        className="mt-2 max-w-xs text-sm text-mist"
      >
        {brand.hub}
      </motion.p>

      <motion.button
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3, duration: 0.5 }}
        onClick={onEnter}
        className="mt-10 min-h-[44px] rounded-2xl bg-teal px-8 py-3 text-sm font-bold text-navy-deep transition-transform active:scale-95"
      >
        Bora começar
      </motion.button>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        className="mt-6 text-[11px] text-mist"
      >
        {brand.promoters}
      </motion.p>
    </motion.div>
  )
}
