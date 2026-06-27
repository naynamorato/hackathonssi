import { brand } from '../content'
import Logo from './Logo'

/**
 * Rodapé de marca. Quem promove: Hub de Inovação em Saúde Corporativa,
 * dentro do programa Mentes Inovadoras (SESI Vida · Sistema FIEMG).
 * Espaço para logos quando os arquivos forem inseridos em content.ts.
 */
export default function BrandFooter() {
  return (
    <footer className="mt-8 border-t border-white/8 pt-6 text-center">
      <Logo size={36} className="mx-auto mb-3 opacity-80" />
      <p className="text-xs font-semibold text-white">{brand.program}</p>
      <p className="mt-0.5 text-[11px] text-mist">{brand.hub}</p>
      <p className="mt-0.5 text-[11px] text-mist">{brand.promoters}</p>

      {/* Espaço para logos — preencha brand.logos em content.ts */}
      <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
        {brand.logos.map((logo) =>
          logo.src ? (
            <img key={logo.label} src={logo.src} alt={logo.label} className="h-8" />
          ) : (
            <span
              key={logo.label}
              className="rounded-lg border border-dashed border-white/15 px-3 py-1.5 text-[10px] text-mist/70"
            >
              {logo.label}
            </span>
          ),
        )}
      </div>

      <p className="mt-4 font-display text-[11px] italic text-mist/80">
        “{brand.signature}”
      </p>
    </footer>
  )
}
