import { steps } from '../content'

/**
 * Descobre qual etapa corresponde ao horário atual (apenas referência visual,
 * não cobrança). Retorna o id da etapa ou null fora da janela do evento.
 * Os horários das etapas estão em "HH:MM"; a etapa 8 vai até 14:30.
 */
export function getCurrentStepId(now: Date = new Date()): number | null {
  const mins = now.getHours() * 60 + now.getMinutes()

  const toMin = (hhmm: string) => {
    const [h, m] = hhmm.split(':').map(Number)
    return h * 60 + m
  }

  // janelas: do início de cada etapa até o início da próxima (com pausas)
  const bounds = [
    { id: 1, start: toMin('09:00'), end: toMin('09:20') },
    { id: 2, start: toMin('09:20'), end: toMin('09:50') },
    { id: 3, start: toMin('09:50'), end: toMin('10:10') },
    { id: 4, start: toMin('10:10'), end: toMin('10:30') },
    { id: 5, start: toMin('10:30'), end: toMin('11:20') },
    { id: 6, start: toMin('11:20'), end: toMin('11:40') },
    { id: 7, start: toMin('11:40'), end: toMin('12:00') },
    // 12:00–13:00 almoço (nenhuma etapa ativa)
    { id: 8, start: toMin('13:00'), end: toMin('14:30') },
  ]

  for (const b of bounds) {
    if (mins >= b.start && mins < b.end) return b.id
  }
  return null
}

export const stepIds = steps.map((s) => s.id)
