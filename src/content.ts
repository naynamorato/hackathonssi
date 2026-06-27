/**
 * content.ts — Fonte única de verdade do app.
 * Todo o texto vem do MD "App_Guia_Hackathon_MentesInovadoras".
 * Para editar cópia, prompts, links ou horários: edite SÓ este arquivo.
 *
 * Onde colar links (procure por "COLE AQUI"):
 *  - aiAgents: links dos agentes de IA
 *  - prompts: nada a colar (texto pronto)
 *  - tools / toolLinks: links de Gamma, Lovable e extras
 *  - brandLogos: arquivos de logo
 */

/* ----------------------------------------------------------------------------
 * Mentalidades — as 4 do programa, cada uma com sua cor (código de cor por etapa)
 * -------------------------------------------------------------------------- */

export type MindsetKey = 'aberta' | 'agil' | 'ativa' | 'alinhada'

export interface Mindset {
  key: MindsetKey
  name: string
  desc: string
  color: string // hex
}

export const MINDSETS: Record<MindsetKey, Mindset> = {
  aberta: {
    key: 'aberta',
    name: 'Mente Aberta',
    desc: 'disposição para explorar novas ideias e perspectivas.',
    color: '#58BABB', // teal
  },
  agil: {
    key: 'agil',
    name: 'Mente Ágil',
    desc: 'capacidade de se adaptar rapidamente a novas situações.',
    color: '#4BADD4', // ciano
  },
  ativa: {
    key: 'ativa',
    name: 'Mente Ativa',
    desc: 'proatividade e busca contínua por aprendizado.',
    color: '#93C472', // verde
  },
  alinhada: {
    key: 'alinhada',
    name: 'Mente Alinhada',
    desc: 'equilíbrio entre prioridades e foco no essencial.',
    color: '#7683B8', // índigo
  },
}

export const MINDSET_ORDER: MindsetKey[] = ['aberta', 'agil', 'ativa', 'alinhada']

/* ----------------------------------------------------------------------------
 * Marca / programa
 * -------------------------------------------------------------------------- */

export const brand = {
  appName: 'Guia do Participante',
  event: 'Hackathon Mentes Inovadoras',
  appSubtitle: 'Hub - Inovação em Saúde Corporativa', // subtítulo curto no topo do app
  hub: 'Hub de Inovação em Saúde Corporativa',
  program: 'Programa Mentes Inovadoras',
  promoters: 'SESI Vida · Sistema FIEMG',
  promoText:
    'Este Hackathon é uma realização do Hub de Inovação em Saúde Corporativa, dentro do programa Mentes Inovadoras, promovido pelo SESI e pelo Sistema FIEMG. O programa nasce para desenvolver uma nova mentalidade de inovação nos profissionais das unidades de Saúde e Segurança, ampliando o olhar para além da rotina operacional e das normas, sem desconsiderá-las.',
  signature: 'by VIO FUTURO',
  // COLE AQUI os arquivos/links de logo quando tiver
  logos: [
    { label: 'Logo Mentes Inovadoras · SESI Vida', src: '' },
    { label: 'Logo Sistema FIEMG', src: '' },
  ],
}

/* ----------------------------------------------------------------------------
 * A grande meta — sempre acessível
 * -------------------------------------------------------------------------- */

export const goal = {
  title: 'O destino de hoje',
  text: 'Tudo o que vocês fazem hoje leva a um único lugar: um pitch que mostra um problema real e como a proposta de vocês resolve esse problema. Um pitch chamativo, com impacto claro e protótipo na mão.',
  strategy:
    'A manhã é onde a corrida se ganha. Saiam do almoço com o problema bem definido, a proposta escolhida e o protótipo já adiantado. À tarde o tempo é curto: é hora de dividir tarefas e produzir, não de decidir.',
  juryReminder:
    'Todas as etapas são avaliadas. Mas não se prendam em fazer cada etapa perfeita: o que mais pesa é chegar com o problema claro, a proposta definida e o protótipo adiantado. Avancem com ritmo.',
}

/* ----------------------------------------------------------------------------
 * Tela Início — linha do tempo
 * -------------------------------------------------------------------------- */

export const home = {
  header: 'Bora? O dia começa aqui.',
  subtext:
    'Toque em cada etapa para ver o que fazer. Os horários são a sua bússola, não a sua prisão. Se atrasar um pouco, tudo bem: o que importa é chegar lá.',
}

export interface TimelineMarker {
  kind: 'marker'
  label: string
  detail: string
  time: string
  after: number // aparece depois desta etapa
}

export const timelineMarkers: TimelineMarker[] = [
  {
    kind: 'marker',
    label: 'Almoço',
    detail:
      'No almoço o canvas precisa estar fechado. Falta só consolidar e montar o pitch.',
    time: '12:00 às 13:00',
    after: 7,
  },
  {
    kind: 'marker',
    label: 'Pitch para a banca',
    detail: 'O grande momento. Subam ao palco com orgulho.',
    time: '15:00 em ponto',
    after: 8,
  },
]

/* ----------------------------------------------------------------------------
 * Etapas (8)
 * -------------------------------------------------------------------------- */

export interface Step {
  id: number
  title: string
  time: string
  duration: string
  mindset: MindsetKey
  mindsetNote: string
  objective: string
  whatHappens: string
  handsOn: string
  watchOut: string
  promptId?: number // prompt na Caixa de IA, se houver
  showCardsButton?: boolean // botão "Ver cartas"
}

export const steps: Step[] = [
  {
    id: 1,
    title: 'Retrospectiva do problema',
    time: '09:00',
    duration: '20 min',
    mindset: 'alinhada',
    mindsetNote: 'focar no essencial e deixar o problema claro para todos.',
    objective: 'Sair com um problema só por mesa, claro para todos.',
    whatHappens:
      'Vocês já chegaram com o problema definido em casa, então aqui não é hora de começar do zero: é hora de revisar. Leiam juntos o problema que trouxeram e confirmem que todo mundo na mesa entende a mesma coisa. Um problema confuso vira uma proposta confusa, e mais tarde vira um pitch confuso. Por isso esses 20 minutos valem ouro. Se o grupo ainda não tem um problema fechado, usem esse tempo para definir rápido: qual é o problema e qual o impacto dele na rotina de SSI. Não precisa ser perfeito, precisa ser claro.',
    handsOn:
      'Escrevam o problema em uma frase só. Em um post-it separado, anotem o impacto: quem sente essa dor no dia a dia e o que acontece se nada mudar.',
    watchOut:
      'Se ninguém na mesa souber dizer quem sente a dor desse problema, ele ainda não está claro. Clareza agora é meio caminho andado para um bom pitch.',
  },
  {
    id: 2,
    title: 'Geração de ideias',
    time: '09:20',
    duration: '30 min',
    mindset: 'aberta',
    mindsetNote: 'explorar muitas ideias sem julgar.',
    objective: 'Encher a mesa de ideias. Aqui quantidade vale mais que qualidade.',
    whatHappens:
      'Agora é a hora de soltar a imaginação. O objetivo é gerar o máximo de ideias possível para resolver o problema, sem filtro e sem medo. Não pensem ainda se a ideia é boa, cara ou difícil: pensem em quantidade. Quanto mais ideias na mesa, maior a chance de uma delas, ou a mistura de várias, virar algo incrível. Pensem em vários tipos de proposta: um produto, um serviço, um app, um novo processo, um treinamento. Não se prendam a um formato só. A regra de ouro desta etapa: ninguém critica ideia de ninguém agora. Crítica cedo mata a criatividade.',
    handsOn:
      'Uma ideia por post-it. Comecem escrevendo sozinhos por alguns minutos, em silêncio. Depois cada um cola suas ideias e lê em voz alta para o grupo. Ouvir a ideia do outro acende ideias novas.',
    watchOut:
      'Travou? Joguem um "e se" na mesa: e se não houvesse limite de orçamento? E se tivesse que resolver até amanhã? E se fosse a coisa mais simples possível?',
  },
  {
    id: 3,
    title: 'Cartas de intenção',
    time: '09:50',
    duration: '20 min',
    mindset: 'aberta',
    mindsetNote: 'olhar o problema por novas perspectivas com os estímulos.',
    objective: 'Gerar ideias novas com a ajuda dos estímulos das cartas.',
    whatHappens:
      'As cartas de intenção existem para tirar o grupo do óbvio. Cada carta traz um estímulo, uma tecnologia ou um método, e provoca vocês a olhar o problema por um ângulo diferente. Puxem uma carta e perguntem: e se usássemos a CARTA para resolver isso? A primeira reação costuma ser "isso não dá". Insistam no "como daria". Essas ideias novas não substituem as da etapa anterior, elas somam. Quanto mais cartas vocês rodarem no tempo, mais frentes de ideia abrem.',
    handsOn:
      'Para cada carta, um post-it novo. Vale ideia maluca: o filtro vem só na próxima etapa.',
    watchOut:
      'As melhores ideias muitas vezes nascem do cruzamento improvável. Não descartem uma ideia só porque parece estranha agora.',
    showCardsButton: true,
  },
  {
    id: 4,
    title: 'Priorização ideia',
    time: '10:10',
    duration: '20 min',
    mindset: 'agil',
    mindsetNote: 'decidir rápido e escolher um caminho.',
    objective: 'Sair desta etapa com uma ideia escolhida.',
    whatHappens:
      'Chegou a hora de organizar a bagunça criativa e escolher por onde seguir. Primeiro, agrupem os post-its parecidos: ideias que falam da mesma coisa viram um grupo só. Isso já clareia os caminhos. Depois vem a votação: cada pessoa vota nas ideias que acha mais fortes. Onde os votos se concentram, está a direção da mesa. Por fim, discutam e fechem em uma única ideia, que será a proposta que vocês vão desenvolver até o pitch. Essa decisão é importante: a partir daqui o grupo trabalha junto em uma só direção.',
    handsOn:
      'Juntem os post-its parecidos em grupos. Cada pessoa vota com 2 marcações nas melhores ideias. A mais votada lidera, mas conversem antes de fechar.',
    watchOut:
      'Voto não é só popularidade. Antes de fechar, perguntem: essa ideia resolve mesmo o problema? E cabe no nosso tempo de hoje?',
  },
  {
    id: 5,
    title: 'Aprofundamento da ideia',
    time: '10:30',
    duration: '50 min',
    mindset: 'ativa',
    mindsetNote: 'colocar a mão na massa e produzir.',
    objective:
      'Tangibilizar a ideia. Começar a produzir o protótipo e o pitch ao mesmo tempo.',
    whatHappens:
      'Este é o bloco mais longo e mais importante da manhã. A ideia já está escolhida, agora é hora de dar vida a ela. Desenhem como a proposta funciona, passo a passo, para qualquer pessoa entender. Dividam as tarefas na mesa para trabalhar em paralelo e ganhar tempo: enquanto uns desenham o fluxo da ideia, o Mestre das Máquinas já abre as ferramentas e começa o protótipo, e o Arquiteto do Pitch começa a estrutura da apresentação. Usem IA para acelerar o protótipo. Não esperem ter tudo pronto para começar a produzir: comecem a produzir agora.',
    handsOn:
      'Um post-it por tarefa e por responsável. Desenhem o passo a passo da ideia ao lado. Quem cuida do protótipo já abre a ferramenta. Quem cuida do pitch já começa os slides.',
    watchOut:
      '50 minutos passam voando. Na metade do tempo, parem 30 segundos e chequem: o protótipo e o pitch estão andando juntos? Se um ficou para trás, redistribuam.',
    promptId: 3,
  },
  {
    id: 6,
    title: 'Viabilidade',
    time: '11:20',
    duration: '20 min',
    mindset: 'agil',
    mindsetNote: 'adaptar a ideia ao que é viável na prática.',
    objective: 'Mostrar que a proposta para de pé na prática.',
    whatHappens:
      'Aqui o foco é viabilidade técnica e financeira. É a hora de sair um pouco do sonho e olhar o concreto: como essa proposta vai funcionar de verdade, o que ela precisa de recurso para acontecer, e qual o primeiro passo para validar se ela dá certo. Não precisa ter todas as respostas nem um plano gigante. Precisa mostrar que vocês pensaram em como tirar a ideia do papel. Pensem no MVP: qual é a menor versão possível da proposta que já daria para testar com gente de verdade.',
    handsOn:
      'Três post-its: o que precisa de recurso (pessoas, tecnologia, investimento), quanto custa mais ou menos, e qual o primeiro passo para validar.',
    watchOut:
      'Viável não quer dizer perfeito, quer dizer possível de começar. Usem a Caixa de IA: tem um prompt pronto para estruturar a viabilidade.',
    promptId: 1,
  },
  {
    id: 7,
    title: 'Impacto',
    time: '11:40',
    duration: '20 min',
    mindset: 'alinhada',
    mindsetNote: 'ligar o ganho de volta ao problema e ao essencial.',
    objective: 'Mostrar o tamanho do ganho que a proposta gera.',
    whatHappens:
      'Esta é a etapa que dá força ao pitch. Aqui vocês mostram por que a proposta vale a pena, conectando ela de volta ao problema. Confirmem: a proposta realmente resolve a dor que vocês mapearam lá no começo? E então mostrem o ganho. O impacto pode aparecer em várias frentes: mais receita, mais eficiência, mais satisfação das pessoas ou mais segurança. Traduzam em número sempre que der, porque número convence: quanto reduz, quanto economiza, quantas pessoas alcança.',
    handsOn:
      'Um post-it por ganho. Escrevam em número sempre que possível. Liguem cada ganho de volta ao problema original.',
    watchOut:
      'Tem ganho que não cabe em reais, e tudo bem: segurança e bem-estar das pessoas valem por si só. Use a Caixa de IA: tem um prompt para ajudar a transformar o impacto em números.',
    promptId: 2,
  },
  {
    id: 8,
    title: 'Consolidação do pitch',
    time: '13:00',
    duration: 'até 14:30',
    mindset: 'ativa',
    mindsetNote: 'consolidar, produzir e entregar o pitch.',
    objective: 'Montar a apresentação final, consolidar tudo e enviar.',
    whatHappens:
      'Reta final. Toda a manhã levou a este momento. Agora é juntar tudo o que está no canvas e transformar em uma apresentação que emociona e convence. Consolidem o problema, a persona, a proposta, como ela funciona, a viabilidade e o impacto em uma história clara. Fujam do pitch corporativo e sem graça: contem uma história que prende a atenção, mostrem o protótipo, mostrem a persona e a dor dela. Finalizem os slides, ensaiem o tempo e enviem a apresentação no canal combinado. O pitch tem 7 minutos: cronometrem pelo menos uma vez antes de subir ao palco.',
    handsOn:
      'Marquem quem fala o quê no pitch. Usem os post-its do canvas como roteiro. Finalizem os slides, ensaiem uma vez com o relógio e enviem a apresentação.',
    watchOut:
      'A banca começa às 15h em ponto. Fechem a apresentação até as 14h30 e usem o tempo que sobra para ensaiar. Um pitch ensaiado vale muito mais que um slide bonito.',
    promptId: 4,
  },
]

/* ----------------------------------------------------------------------------
 * Cartas de Intenção (10)
 * -------------------------------------------------------------------------- */

export const cardsScreen = {
  header: 'As cartas que destravam ideias.',
  subtext:
    'Na etapa 3, puxem as cartas e deixem que elas provoquem novas ideias. Cada carta é uma lente diferente para olhar o mesmo problema. A primeira reação costuma ser "isso não dá". Insistam no "como daria". Vale ideia maluca: o filtro vem depois.',
  howTo:
    'Rodem o máximo de cartas que der nos 20 minutos. Para cada carta, gerem pelo menos uma ideia nova e anotem em um post-it. As cartas concretas (1 a 6) ajudam quem está travado e precisa de um caminho. As provocações (7 a 10) ajudam quem já tem ideia e quer esticar. Comecem por uma concreta, depois puxem uma provocação.',
}

export interface IntentionCard {
  n: number
  title: string
  text: string
  type: 'concreta' | 'provocacao'
}

export const intentionCards: IntentionCard[] = [
  {
    n: 1,
    title: 'Inteligência Artificial',
    text: 'E se a Inteligência Artificial resolvesse esse problema? O que ela poderia prever, analisar ou automatizar que hoje toma o tempo de vocês?',
    type: 'concreta',
  },
  {
    n: 2,
    title: 'Conectado e Sensores',
    text: 'E se um sensor avisasse em tempo real? Imaginem o problema sendo detectado no momento exato em que acontece, no ambiente ou no próprio trabalhador.',
    type: 'concreta',
  },
  {
    n: 3,
    title: 'Gêmeo Digital',
    text: 'E se vocês pudessem testar tudo num mundo virtual antes? Uma cópia digital da operação para simular riscos e propostas sem colocar ninguém em perigo.',
    type: 'concreta',
  },
  {
    n: 4,
    title: 'Gamificação',
    text: 'E se resolver isso virasse um jogo? Pontos, desafios e recompensas para engajar as pessoas a agir com segurança todos os dias.',
    type: 'concreta',
  },
  {
    n: 5,
    title: 'App na Mão do Trabalhador',
    text: 'E se a pessoa da ponta resolvesse isso pelo próprio celular? Sem depender de ninguém, com autonomia para agir na hora.',
    type: 'concreta',
  },
  {
    n: 6,
    title: 'Integração de Áreas',
    text: 'E se ergonomia, saúde, segurança e bem-estar resolvessem isso juntos? Uma proposta que conecta áreas em vez de tratar o problema isolado.',
    type: 'concreta',
  },
  {
    n: 7,
    title: 'Escala',
    text: 'E se isso funcionasse igual nas 10 unidades? Pensem numa proposta que nasce grande e serve para todo o estado, não só para a sua realidade.',
    type: 'provocacao',
  },
  {
    n: 8,
    title: 'Sem Limites',
    text: 'E se não houvesse limite de orçamento nem de tecnologia? Esqueçam as restrições por um instante: qual seria a proposta dos sonhos?',
    type: 'provocacao',
  },
  {
    n: 9,
    title: 'Simplicidade Radical',
    text: 'E se a proposta fosse tão simples que coubesse num post-it? Tirem tudo o que é supérfluo e fiquem só com a essência que resolve.',
    type: 'provocacao',
  },
  {
    n: 10,
    title: 'Dez Vezes',
    text: 'E se em vez de melhorar dez por cento, vocês tivessem que melhorar dez vezes? O que mudaria na proposta se a meta fosse transformar, não só ajustar?',
    type: 'provocacao',
  },
]

/* ----------------------------------------------------------------------------
 * Caixa de IA — prompts + agentes
 * -------------------------------------------------------------------------- */

export const aiScreen = {
  header: 'IA é sua aliada, não sua muleta.',
  subtext:
    'A inteligência da proposta vem de vocês. A IA acelera, organiza e ajuda a calcular. Use os prompts abaixo, é só copiar e colar na ferramenta. Quando terminar, sempre revise: a IA erra, e a palavra final é de vocês.',
}

export interface AiAgent {
  label: string
  desc: string
  url: string // COLE AQUI o link do agente
}

// COLE AQUI os links dos agentes de IA (deixe url vazio para marcar como pendente)
export const aiAgents: AiAgent[] = [
  { label: 'Agente 1', desc: 'descrição curta', url: '' },
  { label: 'Agente 2', desc: 'descrição curta', url: '' },
  { label: 'Agente 3', desc: 'descrição curta', url: '' },
]

export interface Prompt {
  id: number
  title: string
  stepLabel: string
  stepId: number
  body: string
}

export const prompts: Prompt[] = [
  {
    id: 1,
    title: 'Estruturar a viabilidade',
    stepLabel: 'Etapa 6',
    stepId: 6,
    body: `Você é um especialista em viabilidade de projetos para a área de Saúde e Segurança na Indústria. Vou te descrever uma proposta criada por uma equipe num hackathon e preciso que você me ajude a estruturar a viabilidade técnica e financeira dela.

A proposta é: [DESCREVA A PROPOSTA EM 2 OU 3 FRASES]
O problema que ela resolve é: [DESCREVA O PROBLEMA]

Me ajude a organizar, de forma simples e objetiva:
1. Viabilidade técnica: o que é preciso para fazer funcionar (pessoas, tecnologia, processos).
2. Viabilidade financeira: uma estimativa de custo e o que mais pesa no orçamento.
3. MVP: qual a menor versão possível para testar a proposta na prática.
4. Primeiro passo: a ação mais simples para começar a validar já.

Responda em tópicos curtos e diretos, em linguagem para quem não é da área de tecnologia.`,
  },
  {
    id: 2,
    title: 'Transformar o impacto em números',
    stepLabel: 'Etapa 7',
    stepId: 7,
    body: `Você é um especialista em mensuração de resultados na área de Saúde e Segurança na Indústria. Uma equipe de hackathon criou uma proposta e precisa mostrar o impacto dela de forma clara e, se possível, em números.

A proposta é: [DESCREVA A PROPOSTA]
O problema que ela resolve é: [DESCREVA O PROBLEMA]

Me ajude a mostrar o impacto em quatro frentes, com indicadores que dariam para medir na prática:
1. Segurança (redução de riscos, acidentes, não conformidades).
2. Eficiência (tempo, retrabalho, produtividade).
3. Satisfação e bem-estar das pessoas.
4. Receita ou economia financeira.

Para cada frente, sugira como traduzir o ganho em número (por exemplo, "reduz X por cento de Y"). Seja realista e direto. Linguagem simples.`,
  },
  {
    id: 3,
    title: 'Acelerar o protótipo',
    stepLabel: 'Etapa 5',
    stepId: 5,
    body: `Você vai me ajudar a criar rapidamente um protótipo de uma proposta de um hackathon de Saúde e Segurança na Indústria.

A proposta é: [DESCREVA A PROPOSTA]
Para quem é: [DESCREVA A PERSONA, QUEM VAI USAR]
O problema que resolve: [DESCREVA O PROBLEMA]

Me ajude a estruturar o protótipo:
1. Quais as telas ou partes principais que ele precisa ter.
2. O que aparece em cada uma, de forma bem objetiva.
3. Um fluxo simples de como a pessoa usaria, do início ao fim.

Depois disso, eu vou usar uma ferramenta de prototipação. Me entregue a estrutura pronta para eu transformar em telas.`,
  },
  {
    id: 4,
    title: 'Estruturar o pitch',
    stepLabel: 'Etapa 8',
    stepId: 8,
    body: `Você é um especialista em pitches de impacto. Preciso montar a estrutura de um pitch de 7 minutos para apresentar a uma banca, no encerramento de um hackathon de Saúde e Segurança na Indústria.

Problema: [DESCREVA O PROBLEMA]
Persona (quem sente a dor): [DESCREVA]
Proposta: [DESCREVA]
Como funciona: [DESCREVA]
Viabilidade: [RESUMA]
Impacto: [RESUMA OS GANHOS]

Monte um roteiro de pitch que conte uma história envolvente, na seguinte ordem: abertura que prende a atenção, o problema e a dor da persona, a proposta como virada de chave, como funciona, viabilidade, impacto, e um fechamento forte. Para cada parte, sugira o que falar e quanto tempo dedicar. Linguagem humana e cativante, nada corporativa.`,
  },
]

/* ----------------------------------------------------------------------------
 * Ferramentas
 * -------------------------------------------------------------------------- */

export const toolsScreen = {
  header: 'Suas ferramentas de produção.',
  subtext:
    'Atalhos para o que vai ajudar a produzir rápido. Escolham o que faz sentido para a proposta de vocês, não precisam usar todas.',
}

export interface Tool {
  name: string
  purpose: string
  when: string
  url: string // COLE AQUI o link direto da ferramenta
  placeholder?: boolean // espaço reservado para preencher no código
}

export const tools: Tool[] = [
  {
    name: 'Gamma',
    purpose: 'Montar a apresentação do pitch com rapidez',
    when: 'Na etapa 8, para os slides',
    url: 'https://gamma.app/',
  },
  {
    name: 'Lovable',
    purpose: 'Criar protótipo de app ou site funcional',
    when: 'Na etapa 5, se a proposta é digital',
    url: 'https://lovable.dev/',
  },
  {
    name: 'Ferramenta extra',
    purpose: 'colar ferramenta extra e descrição',
    when: 'etapa',
    url: '',
    placeholder: true,
  },
  {
    name: 'Ferramenta extra',
    purpose: 'colar ferramenta extra e descrição',
    when: 'etapa',
    url: '',
    placeholder: true,
  },
]

/* ----------------------------------------------------------------------------
 * Usar IA com sabedoria
 * -------------------------------------------------------------------------- */

export const wisdomScreen = {
  header: 'Use a IA bem (e gaste menos).',
  subtext:
    'Algumas dicas rápidas para a IA render mais e não travar no meio da dinâmica.',
  tips: [
    {
      title: 'Dê contexto antes de pedir.',
      text: 'Diga quem você é, qual o problema e o que quer. Uma boa pergunta vale por dez ruins.',
    },
    {
      title: 'Peça uma coisa por vez.',
      text: 'Em vez de pedir tudo de uma vez, vá por partes. As respostas ficam melhores e mais úteis.',
    },
    {
      title: 'Reaproveite a mesma conversa.',
      text: 'Continue no mesmo chat em vez de abrir um novo a cada pergunta. A IA já entende o contexto e você economiza.',
    },
    {
      title: 'Seja específico no que quer de volta.',
      text: 'Diga o formato: "responda em tópicos", "em 5 linhas", "em linguagem simples". Economiza tempo e idas e voltas.',
    },
    {
      title: 'Revise sempre.',
      text: 'A IA erra, inventa número e às vezes viaja. A palavra final é sempre de vocês.',
    },
    {
      title: 'Não copie e cole cego.',
      text: 'Use a resposta como ponto de partida, adapte para a realidade de SSI de vocês.',
    },
  ],
}

/* ----------------------------------------------------------------------------
 * Papéis do grupo (5 cartas)
 * -------------------------------------------------------------------------- */

export const rolesScreen = {
  header: 'Cada um tem um papel. Todos pensam juntos.',
  subtext:
    'O papel é uma responsabilidade extra, não uma caixa que limita. Todo mundo gera ideias e decide em grupo.',
}

export interface Role {
  name: string
  desc: string
  mindset: MindsetKey
}

export const roles: Role[] = [
  {
    name: 'Espírito da Alegria',
    desc: 'Mantém o astral da mesa lá em cima. Anima quando a energia cai, celebra cada etapa concluída e garante que o grupo se divirta enquanto trabalha.',
    mindset: 'aberta',
  },
  {
    name: 'Guardião do Tempo',
    desc: 'Cuida do relógio para o grupo não se perder. Avisa quando faltam 5 minutos para o fim de cada etapa e mantém todos no ritmo do tabuleiro.',
    mindset: 'agil',
  },
  {
    name: 'Mestre das Máquinas',
    desc: 'A mente digital da mesa. Comanda as ferramentas e a IA para dar vida ao protótipo, transformando a ideia em algo que dá para ver e tocar.',
    mindset: 'ativa',
  },
  {
    name: 'Arquiteto do Pitch',
    desc: 'Junta tudo em uma apresentação que convence. Responsável por consolidar o pitch e construir os slides. Garante que a história da proposta seja contada do início ao fim.',
    mindset: 'alinhada',
  },
  {
    name: 'Anotador Oficial',
    desc: 'Os olhos e a memória do grupo. Cuida do canvas, organiza os post-its e registra as discussões, garantindo que o time siga cada passo sem perder nenhuma ideia.',
    mindset: 'ativa',
  },
]

/* ----------------------------------------------------------------------------
 * O que a banca avalia
 * -------------------------------------------------------------------------- */

export const juryScreen = {
  header: 'O que mais importa no final.',
  subtext: 'Todas as etapas contam. Mas se for para focar energia, foquem aqui.',
  points: [
    {
      title: 'Problema bem definido.',
      text: 'Claro, real e com impacto que dá para sentir.',
    },
    {
      title: 'Proposta clara.',
      text: 'Resolve o problema e dá para entender em poucos segundos.',
    },
    {
      title: 'Protótipo adiantado.',
      text: 'Algo que dá para ver e tocar, não só falar.',
    },
    {
      title: 'Impacto demonstrado.',
      text: 'O ganho aparece, de preferência em números.',
    },
    {
      title: 'Pitch cativante.',
      text: 'Conta uma história, mostra a persona, emociona e convence.',
    },
  ],
  finalNote:
    'Cheguem ao almoço com problema, proposta e protótipo encaminhados. A tarde é curta e é para produzir. Mas acima de tudo: aproveitem, se divirtam e tenham orgulho do que vão construir. Vocês levaram uma ideia do problema ao palco em um dia só. Isso já é vitória.',
}

/* ----------------------------------------------------------------------------
 * Navegação
 * -------------------------------------------------------------------------- */

export type ScreenId =
  | 'home'
  | 'step'
  | 'cards'
  | 'ai'
  | 'tools'
  | 'wisdom'
  | 'roles'
  | 'jury'
