import { ModuleItem, BonusItem, TestimonialItem, FaqItem, ActivityPreviewTab } from '@/landing-types';

export const MASTER_PRODUCT_MOCKUP = '/assets/aistudio/Pequenos_M_sicos__Atividades_Musicais_Infantis_d94bb9af.png';
export const KIDS_ACTIVITY_PHOTO = '/images/kids_musical_activities_1793616256927.jpg';
export const BONUS_MOCKUP_IMAGE = '/images/bonus_musical_pack_1793616256101.jpg';

// Official user checkout on Cakto
export const CAKTO_CHECKOUT_URL = 'https://pay.cakto.com.br/in8zp6k_1261229';


// Official sheet images from mundobuba.com
export const REAL_ACTIVITY_SHEETS = [
  {
    title: 'Conte os Instrumentos',
    desc: 'Atividade de contagem, associação numérica e identificação de instrumentos musicais.',
    imageUrl: 'https://mundobuba.com/assets/atividade-conte-instrumentos.webp',
    tag: 'Fundamentos & Números',
  },
  {
    title: 'Encontre os Instrumentos',
    desc: 'Percepção visual, atenção concentrada e reconhecimento de figuras instrumentais.',
    imageUrl: 'https://mundobuba.com/assets/atividade-encontre-instrumentos.webp',
    tag: 'Percepção Visual',
  },
  {
    title: 'Instrumentos e Sombras',
    desc: 'Discriminação de silhuetas, raciocínio lógico e formas dos instrumentos.',
    imageUrl: 'https://mundobuba.com/assets/atividade-instrumentos-sombras.webp',
    tag: 'Associação Lógica',
  },
  {
    title: 'Caminho Musical',
    desc: 'Labirinto melódico para desenvolver coordenação motora fina e orientação espacial.',
    imageUrl: 'https://mundobuba.com/assets/atividade-caminho-musical.webp',
    tag: 'Grafomotricidade',
  },
  {
    title: 'Pinte os Iguais',
    desc: 'Classificação, pareamento sonoro-visual e discriminação de instrumentos.',
    imageUrl: 'https://mundobuba.com/assets/atividade-pinte-iguais.webp',
    tag: 'Pintura & Foco',
  },
  {
    title: 'Tracejado Musical',
    desc: 'Traçado de ondas sonoras e linhas rítmicas para treino preparatório da escrita.',
    imageUrl: 'https://mundobuba.com/assets/atividade-tracejado-musical.webp',
    tag: 'Pré-Escrita & Ritmo',
  },
];

// Official testimonials screenshots from mundobuba.com
export const OFFICIAL_TESTIMONIAL_CARDS = [
  {
    id: 1,
    name: 'Prof. Camila',
    role: 'Professora de Educação Infantil',
    imageUrl: 'https://mundobuba.com/assets/depoimento-camila-oficial.webp',
    highlight: 'As crianças amaram as atividades, foi super prático imprimir e aplicar!',
  },
  {
    id: 2,
    name: 'Renata',
    role: 'Educadora Musical & Mãe',
    imageUrl: 'https://mundobuba.com/assets/depoimento-renata-oficial.webp',
    highlight: 'Material riquíssimo, economizou horas do meu planejamento semanal.',
  },
  {
    id: 3,
    name: 'Fernanda',
    role: 'Pedagoga e Mãe',
    imageUrl: 'https://mundobuba.com/assets/depoimento-fernanda-oficial.webp',
    highlight: 'Perfeito para prender o foco das crianças longe das telas!',
  },
];

export const HERO_PILLARS = [
  {
    icon: 'palette',
    title: 'Desenvolve a Criatividade',
    color: 'bg-pink-500/15 text-pink-300 border-pink-500/30',
    description: 'Expressão artística livre e imaginação sonora',
  },
  {
    icon: 'brain',
    title: 'Estimula a Cognição',
    color: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
    description: 'Foco, raciocínio lógico, fala e memorização',
  },
  {
    icon: 'ear',
    title: 'Melhora a Audição',
    color: 'bg-purple-500/15 text-purple-300 border-purple-500/30',
    description: 'Discriminação de timbres e percepção de ritmos',
  },
  {
    icon: 'pencil',
    title: 'Coordenação Motora',
    color: 'bg-amber-500/15 text-amber-300 border-amber-500/30',
    description: 'Controle grafomotor fino para a futura escrita',
  },
];

export const TRUST_TAGS = [
  { icon: 'printer', text: 'Imprima Quantas Vezes Quiser', detail: 'Acesso vitalício aos PDFs' },
  { icon: 'home', text: 'Ideal para Casa, Escola e Igreja', detail: 'Pais, professoras e ministério infantil' },
  { icon: 'star', text: 'Aprender Brincando', detail: 'Metodologia 100% lúdica' },
  { icon: 'music', text: 'Música, Diversão e Educação!', detail: 'Desenvolvimento longe das telas' },
];

export const CORE_SUBJECTS = [
  {
    icon: 'music',
    title: '🎼 Fundamentos e notas musicais',
    desc: 'Explore os primeiros conceitos da linguagem musical, nomes das notas, pentagrama, clave de Sol e leitura musical.',
    badge: 'Conceitos Iniciais',
  },
  {
    icon: 'drum',
    title: '🥁 Ritmo e duração dos sons',
    desc: 'Trabalhe figuras musicais, pausas, pulsação, subdivisão, compassos e percepção rítmica por meio de propostas educativas.',
    badge: 'Pulsação & Tempo',
  },
  {
    icon: 'waves',
    title: '🎶 Percepção, melodia e expressão',
    desc: 'Explore altura, intensidade, andamento, timbres, instrumentos e construção de melodias.',
    badge: 'Timbres & Expressão',
  },
  {
    icon: 'gamepad-2',
    title: '🎹 Jogos e atividades práticas',
    desc: 'Tenha acesso a propostas de escuta, movimento, associação, desafios e criação musical.',
    badge: 'Movimento & Dinâmica',
  },
];

export const WHAT_YOU_CAN_DO = [
  'Escolher atividades de acordo com o que deseja trabalhar.',
  'Imprimir somente as páginas que precisa.',
  'Explorar diferentes conceitos musicais.',
  'Ter novas propostas para suas aulas e atividades educativas.',
  'Economizar tempo na preparação.',
];

export const WITHOUT_VS_WITH = {
  without: [
    'Passar tempo procurando atividades na internet.',
    'Precisar montar exercícios do zero.',
    'Repetir sempre as mesmas propostas.',
    'Ter dificuldade para organizar o que trabalhar.',
    'Gastar tempo preparando materiais para imprimir.',
  ],
  with: [
    'Mais de 500 atividades organizadas.',
    'Diferentes propostas para explorar a música.',
    'Arquivos digitais para consultar e imprimir.',
    'Mais opções para planejar suas atividades.',
    'Praticidade para escolher o que utilizar.',
  ],
};

export const BONUSES_LIST: BonusItem[] = [
  {
    id: 1,
    title: 'BÔNUS 1: 30 Instrumentos Musicais com Materiais Recicláveis',
    subtitle: 'Construção criativa e sustentável de instrumentos em casa ou na escola',
    description: 'Aprenda a construir instrumentos simples e criativos utilizando materiais acessíveis.',
    originalPrice: 'R$ 29,00',
    badge: 'INCLUSO NO PREMIUM',
    highlights: [
      'Passo a passo ilustrado com materiais de fácil acesso (garrafas, caixas, tampinhas)',
      'Explicação dos tipos de sons produzidos por cada instrumento caseiro',
      'Atividades práticas para tocar em conjunto após a confecção',
    ],
  },
  {
    id: 2,
    title: 'BÔNUS 2: Calendário de Musicalização Infantil',
    subtitle: 'Planejamento anual e mensal de atividades musicais',
    description: 'Ideias e propostas organizadas para planejar momentos musicais ao longo dos meses.',
    originalPrice: 'R$ 19,00',
    badge: 'INCLUSO NO PREMIUM',
    highlights: [
      'Propostas temáticas organizadas mês a mês',
      'Ideias para datas comemorativas e estações do ano',
      'Rotina prática para manter a constância sem sobrecarga',
    ],
  },
  {
    id: 3,
    title: 'BÔNUS 3: 50 Brincadeiras de Ritmo e Movimento',
    subtitle: 'Dinâmicas corporais, jogos musicais e percepção rítmica ativa',
    description: 'Atividades corporais, jogos musicais e propostas dinâmicas para trabalhar percepção rítmica e expressão.',
    originalPrice: 'R$ 27,00',
    badge: 'INCLUSO NO PREMIUM',
    highlights: [
      'Jogos de palmas, percussão corporal e passos no tempo da música',
      'Dinâmicas de estátua musical e controle inibitório motor',
      'Propostas lúdicas para aplicar individualmente ou em grandes turmas',
    ],
  },
];

export const FAQ_LIST: FaqItem[] = [
  {
    question: '1. Como recebo o material?',
    answer: 'O acesso é 100% digital e imediato após a confirmação do pagamento. Você receberá um e-mail com o link para download de todos os arquivos em formato PDF.',
    category: 'Acesso',
  },
  {
    question: '2. O material é físico ou digital?',
    answer: 'O material é 100% digital (PDF). Você pode baixar no computador, tablet ou celular e imprimir quantas vezes quiser.',
    category: 'Formato',
  },
  {
    question: '3. Para qual faixa etária é indicado?',
    answer: 'As atividades foram desenvolvidas especialmente para crianças de 2 a 8 anos, abrangendo desde a primeira infância até os primeiros anos do ensino fundamental.',
    category: 'Faixa Etária',
  },
  {
    question: '4. Preciso ter conhecimento musical para aplicar?',
    answer: 'Não! As atividades são intuitivas, lúdicas e acompanham orientações claras. Qualquer professor, educador ou responsável consegue aplicar sem dificuldade.',
    category: 'Pedagógico',
  },
  {
    question: '5. Posso imprimir quantas vezes quiser?',
    answer: 'Sim! O arquivo é seu. Você pode imprimir as atividades sempre que precisar, para diferentes turmas ou ocasiões.',
    category: 'Impressão',
  },
  {
    question: '6. Quais são as formas de pagamento?',
    answer: 'Você pode pagar via PIX (aprovação imediata) ou Cartão de Crédito (com parcelamento disponível).',
    category: 'Pagamento',
  },
  {
    question: '7. E se eu não gostar?',
    answer: 'Você conta com a nossa garantia de 7 dias. Se não ficar satisfeito, devolvemos 100% do valor pago.',
    category: 'Garantia',
  },
];

export const ACTIVITY_PREVIEW_TABS: ActivityPreviewTab[] = [
  {
    id: 'fundamentos',
    title: '1. Fundamentos e Notas Musicais',
    subtitle: 'Nomes das notas, pentagrama, clave de Sol e leitura musical',
    summary: 'Apresenta os primeiros conceitos da linguagem musical de forma lúdica, visual e acessível para crianças.',
    ageGroup: '2 a 8 anos',
    sampleCount: '70+ atividades',
    points: [
      'Conhecendo a Clave de Sol e as notas musicais de forma amigável',
      'Pentagrama e linhas da pauta explicados como uma escadinha sonora',
      'Identificação de notas com cores e desenhos intuitivos',
      'Exercícios de leitura musical inicial sem sobrecarga teórica',
    ],
    exerciseExample: {
      instruction: 'Complete a melodia e pinte a Clave de Sol com sua cor preferida!',
      details: 'Estimula a atenção seletiva, discriminação visual e categorização sonora.',
      tags: ['Clave de Sol', 'Dó-Ré-Mi', 'Pauta Musical', 'Notas Coloridas'],
    },
  },
  {
    id: 'ritmo',
    title: '2. Ritmo e Duração dos Sons',
    subtitle: 'Figuras musicais, pausas, pulsação, subdivisão e compassos',
    summary: 'Trabalhe o senso de tempo, ritmo e compasso através de traçados pontilhados, palmas e desafios visuais.',
    ageGroup: '3 a 8 anos',
    sampleCount: '75+ atividades',
    points: [
      'Traçados rítmicos que conectam o pulso sonoro ao movimento da mão',
      'Associação entre sons longos e curtos com figuras do dia a dia',
      'Exercícios de subdivisão e compasso com palmas e batidas',
      'Labirintos e caminhos musicais com ritmo visual',
    ],
    exerciseExample: {
      instruction: 'Trace o caminho pontilhado seguindo a batida do tambor até a linha de chegada!',
      details: 'Desenvolve coordenação óculo-manual e controle muscular delicado.',
      tags: ['Pulsação', 'Tempo', 'Coordenação Fina', 'Pré-Escrita'],
    },
  },
  {
    id: 'percepcao',
    title: '3. Percepção, Melodia e Expressão',
    subtitle: 'Altura, intensidade, andamento, timbres e construção de melodias',
    summary: 'Explore sons graves e agudos, fortes e fracos, rápidos e lentos, e as famílias dos instrumentos.',
    ageGroup: '2 a 8 anos',
    sampleCount: '70+ atividades',
    points: [
      'Identifique os instrumentos de corda, sopro, percussão e teclas',
      'Diferenciação auditiva: som forte como trovão vs suave como brisa',
      'Sombras dos instrumentos e reconhecimento de timbres',
      'Associação entre emoções, expressão corporal e melodias',
    ],
    exerciseExample: {
      instruction: 'Ligue cada instrumento à sua sombra correspondente e pinte quem faz som forte!',
      details: 'Fortalece o raciocínio lógico, atenção aos detalhes e discriminação sonora.',
      tags: ['Timbres', 'Instrumentos', 'Grave e Agudo', 'Sombras'],
    },
  },
  {
    id: 'jogos',
    title: '4. Jogos e Atividades Práticas',
    subtitle: 'Escuta, movimento, associação, desafios e criação musical',
    summary: 'Propostas dinâmicas para prender a atenção, colorir cantigas e brincar de música sem complicação.',
    ageGroup: '2 a 8 anos',
    sampleCount: '65+ atividades',
    points: [
      'Jogos de contar instrumentos e associar com números',
      'Atividades de "encontre os intrusos" e caça-instrumentos',
      'Cantigas populares para cantar junto e colorir',
      'Desafios de escuta e dinâmicas interativas em família ou na turma',
    ],
    exerciseExample: {
      instruction: 'Conte quantos violões, tambores e flautas existem no desenho e anote o total!',
      details: 'Conecta a linguagem matemática com a música e a atenção concentrada.',
      tags: ['Contagem', 'Jogos Lúdicos', 'Atenção Plena', 'Criação Musical'],
    },
  },
];

export const MODULES_LIST: ModuleItem[] = [
  {
    id: 1,
    title: 'Módulo 1: Fundamentos e Notas Musicais',
    tagline: '70+ Atividades de Reconhecimento e Pauta',
    description: 'Apresenta os primeiros conceitos da linguagem musical de forma lúdica.',
    activitiesCount: '70+ Páginas',
    icon: 'music',
    topics: ['Nomes das notas musicais', 'Clave de Sol ilustrada', 'Pentagrama divertido', 'Leitura simples'],
  },
  {
    id: 2,
    title: 'Módulo 2: Ritmo e Duração dos Sons',
    tagline: '75+ Atividades de Pulsação e Compassos',
    description: 'Figuras musicais, pausas, pulsação, subdivisão e percepção rítmica.',
    activitiesCount: '75+ Páginas',
    icon: 'drum',
    topics: ['Pulsação com palmas', 'Figuras rítmicas', 'Sons curtos e longos', 'Compassos simples'],
  },
  {
    id: 3,
    title: 'Módulo 3: Percepção, Melodia e Expressão',
    tagline: '70+ Atividades de Timbres e Sons',
    description: 'Altura, intensidade, andamento, timbres, instrumentos e construção de melodias.',
    activitiesCount: '70+ Páginas',
    icon: 'waves',
    topics: ['Famílias de instrumentos', 'Som forte vs som fraco', 'Sons graves e agudos', 'Sombras e timbres'],
  },
  {
    id: 4,
    title: 'Módulo 4: Jogos e Atividades Práticas',
    tagline: '65+ Propostas de Escuta e Movimento',
    description: 'Propostas de escuta, movimento, associação, desafios e criação musical.',
    activitiesCount: '65+ Páginas',
    icon: 'gamepad-2',
    topics: ['Contagem com instrumentos', 'Encontre os instrumentos', 'Caminhos musicais', 'Cantigas populares'],
  },
];