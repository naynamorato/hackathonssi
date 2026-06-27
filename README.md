# Guia do Participante · Hackathon Mentes Inovadoras

App-guia de bolso para os participantes do Hackathon, do programa **Mentes Inovadoras** (Hub de Inovação em Saúde Corporativa · SESI Vida · Sistema FIEMG). Mobile-first, dark, sem backend.

## Como rodar

```bash
npm install
npm run dev
```

Abra o endereço que o Vite mostrar (normalmente http://localhost:5173).

Build de produção: `npm run build` e depois `npm run preview`.

> Node 18+ recomendado. (Se o `node` não estiver no PATH, ele pode estar em `/opt/homebrew/bin`.)

## Onde editar conteúdo e links

**Tudo vive em [`src/content.ts`](src/content.ts).** Nenhum texto está hardcoded nos componentes — toda cópia, prompts, etapas, cartas, papéis e horários vêm desse arquivo.

Procure por **`COLE AQUI`** para preencher os espaços pendentes:

| O que | Onde em `content.ts` |
|-------|----------------------|
| Links dos agentes de IA | `aiAgents[].url` |
| Link do Gamma / Lovable / extras | `tools[].url` |
| Arquivos de logo (Mentes Inovadoras, FIEMG) | `brand.logos[].src` |
| Textos das 8 etapas | `steps` |
| Prompts da Caixa de IA | `prompts` |
| Cartas de intenção | `intentionCards` |
| Papéis do grupo | `roles` |
| Horários da linha do tempo | `steps[].time` e `src/lib/currentStep.ts` |

Espaços ainda não preenchidos aparecem no app marcados como **“colar link”** (borda tracejada), fáceis de localizar.

## Estrutura

```
src/
  content.ts            ← fonte única de verdade (todo o texto)
  App.tsx               ← roteamento por estado + transições
  lib/currentStep.ts    ← qual etapa corresponde ao horário atual
  components/
    MagicBackground.tsx  Screen.tsx  Card.tsx  StepCard.tsx
    PromptCard.tsx  BottomNav.tsx  Logo.tsx (motivo dos 4 blocos)
    ScreenHeader.tsx  GoalBanner.tsx  BrandFooter.tsx
  screens/
    Splash · Home · StepScreen · Cards · AI · Tools · Wisdom · Roles · Jury
```

## Identidade visual

Paleta e tipografia do programa Mentes Inovadoras (ver `tailwind.config.js`):
fundo marinho `#01112A`, cards `#0A1B3D`, e as 4 cores das mentalidades —
teal (Mente Aberta), ciano (Mente Ágil), verde (Mente Ativa), índigo (Mente Alinhada).
Tipografia: Inter (corpo) + Space Grotesk (títulos). O logo dos 4 blocos é recriado em SVG em `Logo.tsx`.
