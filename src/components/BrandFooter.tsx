import { brand } from '../content'
import logoMentesInovadoras from '../assets/LogoMentesInovadoras.png'
import logoHubSSI from '../assets/logoHubSSI.png'
import logoFIEMG from '../assets/logoFIEMG.webp'

/**
 * Rodapé de marca. Quem promove: Hub de Inovação em Saúde Corporativa,
 * dentro do programa Mentes Inovadoras (SESI Vida · Sistema FIEMG).
 */
export default function BrandFooter() {
  return (
    <footer className="mt-8 border-t border-white/8 pt-6 text-center">
      <img
        src={logoMentesInovadoras}
        alt={`${brand.program} · ${brand.promoters}`}
        className="mx-auto mb-5 w-44 max-w-full"
      />

      {/* Logos dos promotores */}
      <div className="flex flex-wrap items-center justify-center gap-5">
        <img
          src={logoHubSSI}
          alt="Hub Inovação em Saúde Corporativa · SESI Vida"
          className="h-14 max-w-full"
        />
        <img src={logoFIEMG} alt="Sistema FIEMG" className="h-10 max-w-full" />
      </div>

      <p className="mt-5 font-display text-[11px] text-mist/80">{brand.signature}</p>
    </footer>
  )
}
