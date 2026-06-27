import { motion } from 'framer-motion'
import type { ScreenId } from '../content'

interface NavItem {
  id: ScreenId
  label: string
  icon: (active: boolean) => JSX.Element
}

const stroke = (active: boolean) => (active ? '#58BABB' : '#C9D2DE')

const items: NavItem[] = [
  {
    id: 'home',
    label: 'Início',
    icon: (a) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M3 10.5 12 4l9 6.5" stroke={stroke(a)} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 9.5V20h14V9.5" stroke={stroke(a)} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 'ai',
    label: 'Caixa IA',
    icon: (a) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect x="4" y="6" width="16" height="13" rx="3" stroke={stroke(a)} strokeWidth="1.8" />
        <path d="M9 11v3M15 11v3M12 3v3" stroke={stroke(a)} strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="12" cy="3" r="1.4" fill={stroke(a)} />
      </svg>
    ),
  },
  {
    id: 'tools',
    label: 'Links Úteis',
    icon: (a) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M10 14a3.5 3.5 0 0 0 5 0l3-3a3.5 3.5 0 0 0-5-5l-1.5 1.5" stroke={stroke(a)} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 10a3.5 3.5 0 0 0-5 0l-3 3a3.5 3.5 0 0 0 5 5l1.5-1.5" stroke={stroke(a)} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 'roles',
    label: 'Papéis',
    icon: (a) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="9" cy="9" r="3" stroke={stroke(a)} strokeWidth="1.8" />
        <path d="M4 19a5 5 0 0 1 10 0" stroke={stroke(a)} strokeWidth="1.8" strokeLinecap="round" />
        <path d="M15 7a3 3 0 0 1 0 6M16 19a5 5 0 0 0-3-4.6" stroke={stroke(a)} strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'jury',
    label: 'Banca',
    icon: (a) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 3v4M7 7l10 0M6 7l-2 6a3 3 0 0 0 6 0L8 7M16 7l2 6a3 3 0 0 0 6 0l-2-6" stroke={stroke(a)} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" transform="translate(-1 0)" />
        <path d="M12 7v11M8 20h8" stroke={stroke(a)} strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
]

interface BottomNavProps {
  current: ScreenId
  onNavigate: (id: ScreenId) => void
}

export default function BottomNav({ current, onNavigate }: BottomNavProps) {
  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-30"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <div className="mx-auto max-w-md px-4 pb-3">
        <div className="flex items-stretch justify-between gap-1 rounded-2xl border border-white/10 bg-navy-card/90 px-2 py-2 backdrop-blur-xl">
          {items.map((item) => {
            const active = current === item.id
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className="relative flex min-h-[44px] flex-1 flex-col items-center justify-center gap-1 rounded-xl py-1"
                aria-current={active ? 'page' : undefined}
                aria-label={item.label}
              >
                {active && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-xl bg-teal/12"
                    style={{ boxShadow: 'inset 0 0 0 1px rgba(88,186,187,0.35)' }}
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="relative">{item.icon(active)}</span>
                <span
                  className={`relative text-[10px] font-medium leading-none ${
                    active ? 'text-teal' : 'text-mist'
                  }`}
                >
                  {item.label}
                </span>
              </button>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
