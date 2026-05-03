export type DisciplineId = "python" | "scratch" | "robotica";

export interface ProjectFile {
  name: string;
  size: string;
  type: string; // ex: PDF, PY, SB3, ZIP
  url: string; // link para download
}

export interface Project {
  id: string;
  title: string;
  summary: string;
  level: string; // ex: 6º ano, 7º ano
  duration: string; // ex: 2 aulas
  objectives: string[];
  files: ProjectFile[];
  photos?: string[];
}

export interface GalleryPhoto {
  src?: string; // URL da foto (deixe vazio para placeholder)
  alt: string;
  caption?: string;
}

export interface Discipline {
  id: DisciplineId;
  name: string;
  tagline: string;
  description: string;
  projects: Project[];
  gallery: GalleryPhoto[];
}

// Substitua os links abaixo pelos arquivos reais (Google Drive, GitHub, etc.)
const placeholder = "#";

export const disciplines: Record<DisciplineId, Discipline> = {
  python: {
    id: "python",
    name: "Python",
    tagline: "Lógica, dados e criatividade com código",
    description:
      "Introduzimos o pensamento computacional usando Python como ferramenta de criação. Os alunos exploram variáveis, condicionais, repetições e funções por meio de jogos, animações e pequenos projetos com dados reais.",
    projects: [
      {
        id: "py-jogo-adivinhacao",
        title: "Jogo de Adivinhação",
        summary:
          "Primeiro contato com input, condicionais e loops. Os alunos constroem um jogo onde o computador sorteia um número e dá dicas.",
        level: "6º e 7º ano",
        duration: "2 aulas",
        objectives: [
          "Compreender variáveis e tipos numéricos",
          "Usar if/elif/else para tomar decisões",
          "Aplicar laços while em situações reais",
        ],
        files: [
          { name: "plano-de-aula.pdf", size: "320 KB", type: "PDF", url: placeholder },
          { name: "jogo_adivinhacao.py", size: "2 KB", type: "PY", url: placeholder },
          { name: "slides-introducao.pdf", size: "1.2 MB", type: "PDF", url: placeholder },
        ],
      },
      {
        id: "py-arte-turtle",
        title: "Arte com Turtle",
        summary:
          "Desenhos geométricos e fractais com a biblioteca Turtle, conectando matemática e programação visual.",
        level: "7º ano",
        duration: "3 aulas",
        objectives: [
          "Trabalhar laços for com parâmetros variáveis",
          "Explorar ângulos e polígonos regulares",
          "Criar funções reutilizáveis",
        ],
        files: [
          { name: "guia-turtle.pdf", size: "780 KB", type: "PDF", url: placeholder },
          { name: "exemplos_turtle.zip", size: "14 KB", type: "ZIP", url: placeholder },
        ],
      },
      {
        id: "py-quiz",
        title: "Quiz Interativo",
        summary:
          "Os alunos criam um quiz sobre temas escolhidos por eles, treinando listas, dicionários e contagem de pontuação.",
        level: "8º e 9º ano",
        duration: "4 aulas",
        objectives: [
          "Trabalhar com listas e dicionários",
          "Estruturar funções com retorno",
          "Salvar e ler dados de arquivo",
        ],
        files: [
          { name: "plano-quiz.pdf", size: "410 KB", type: "PDF", url: placeholder },
          { name: "quiz_base.py", size: "3 KB", type: "PY", url: placeholder },
          { name: "perguntas-exemplo.json", size: "5 KB", type: "JSON", url: placeholder },
        ],
      },
    ],
    gallery: [
      { alt: "Aula de Python — turma do 6º ano" },
      { alt: "Alunos desenvolvendo o jogo de adivinhação" },
      { alt: "Apresentação dos projetos finais de Python" },
      { alt: "Monitoria em dupla durante atividade prática" },
      { alt: "Arte gerada com Turtle pelos alunos" },
      { alt: "Encerramento do módulo de Python" },
    ],
  },
  scratch: {
    id: "scratch",
    name: "Scratch",
    tagline: "Programação visual para contar histórias",
    description:
      "Com o Scratch, alunos criam animações, histórias interativas e jogos arrastando blocos. É a porta de entrada perfeita para o pensamento computacional sem a barreira da sintaxe.",
    projects: [
      {
        id: "sc-historia-interativa",
        title: "Minha História Interativa",
        summary:
          "Os alunos criam uma narrativa com personagens, falas e cenários, aprendendo eventos e mensagens.",
        level: "6º ano",
        duration: "2 aulas",
        objectives: [
          "Usar blocos de eventos e movimento",
          "Trocar cenários e fantasias",
          "Trabalhar com mensagens entre atores",
        ],
        files: [
          { name: "plano-historia.pdf", size: "290 KB", type: "PDF", url: placeholder },
          { name: "historia-base.sb3", size: "1.8 MB", type: "SB3", url: placeholder },
        ],
      },
      {
        id: "sc-jogo-labirinto",
        title: "Jogo do Labirinto",
        summary:
          "Construção de um jogo clássico com colisões, pontuação e fases. Excelente para introduzir condicionais.",
        level: "7º e 8º ano",
        duration: "3 aulas",
        objectives: [
          "Detectar colisões com cores e bordas",
          "Criar variáveis de pontuação",
          "Estruturar fases com cenários",
        ],
        files: [
          { name: "guia-labirinto.pdf", size: "520 KB", type: "PDF", url: placeholder },
          { name: "labirinto.sb3", size: "2.4 MB", type: "SB3", url: placeholder },
          { name: "assets-labirinto.zip", size: "3.1 MB", type: "ZIP", url: placeholder },
        ],
      },
    ],
    gallery: [
      { alt: "Alunos criando história interativa no Scratch" },
      { alt: "Demonstração do jogo do labirinto" },
      { alt: "Workshop de Scratch com a turma" },
      { alt: "Personagens criados pelos alunos" },
      { alt: "Apresentação dos jogos finais" },
      { alt: "Monitor explicando blocos de eventos" },
    ],
  },
    id: "robotica",
    name: "Robótica",
    tagline: "Do mundo físico ao código que pensa",
    description:
      "Trabalhamos com kits acessíveis (Arduino e componentes simples) para que os alunos prototipem soluções reais: semáforos inteligentes, sensores, pequenos veículos e muito mais.",
    projects: [
      {
        id: "ro-semaforo",
        title: "Semáforo Inteligente",
        summary:
          "Montagem e programação de um semáforo com LEDs, introduzindo eletrônica básica e controle de tempo.",
        level: "7º ano",
        duration: "2 aulas",
        objectives: [
          "Montar circuito em protoboard",
          "Programar saídas digitais com Arduino",
          "Compreender resistores e LEDs",
        ],
        files: [
          { name: "plano-semaforo.pdf", size: "640 KB", type: "PDF", url: placeholder },
          { name: "semaforo.ino", size: "2 KB", type: "INO", url: placeholder },
          { name: "esquema-circuito.png", size: "210 KB", type: "PNG", url: placeholder },
        ],
      },
      {
        id: "ro-carrinho",
        title: "Carrinho Seguidor de Linha",
        summary:
          "Projeto integrador: sensores infravermelhos, motores DC e tomada de decisão em tempo real.",
        level: "8º e 9º ano",
        duration: "5 aulas",
        objectives: [
          "Ler sensores analógicos",
          "Controlar motores via ponte H",
          "Implementar lógica de seguimento",
        ],
        files: [
          { name: "guia-carrinho.pdf", size: "1.1 MB", type: "PDF", url: placeholder },
          { name: "carrinho.ino", size: "4 KB", type: "INO", url: placeholder },
          { name: "lista-materiais.pdf", size: "180 KB", type: "PDF", url: placeholder },
        ],
      },
    ],
  },
};

export const disciplineList: Discipline[] = [
  disciplines.python,
  disciplines.scratch,
  disciplines.robotica,
];
