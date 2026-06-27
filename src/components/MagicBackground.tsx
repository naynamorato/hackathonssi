/**
 * Fundo marinho com blobs coloridos desfocados que "respiram" lentamente.
 * Baixa opacidade, performático (CSS animation, sem JS por frame).
 * As 4 cores são as das mentalidades.
 */
export default function MagicBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* base marinho */}
      <div className="absolute inset-0 bg-navy-deep" />

      {/* blobs */}
      <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-teal/30 blur-3xl animate-breathe" />
      <div className="absolute -right-20 top-10 h-72 w-72 rounded-full bg-cyan/25 blur-3xl animate-breatheAlt" />
      <div className="absolute -left-10 bottom-24 h-72 w-72 rounded-full bg-leaf/20 blur-3xl animate-breatheAlt" />
      <div className="absolute -right-24 -bottom-20 h-80 w-80 rounded-full bg-indigo/25 blur-3xl animate-breathe" />

      {/* vinheta sutil para foco no centro */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/40 via-transparent to-navy-deep/70" />
    </div>
  )
}
