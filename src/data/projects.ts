import convite1 from "@/assets/projects/super-scratch-24-01/convite-1.jpg.asset.json";
import convite2 from "@/assets/projects/super-scratch-24-01/convite-2.jpg.asset.json";
import convite3 from "@/assets/projects/super-scratch-24-01/convite-3.jpg.asset.json";
import aula1 from "@/assets/projects/super-scratch-24-01/aula-1.jpg.asset.json";
import aula2 from "@/assets/projects/super-scratch-24-01/aula-2.jpg.asset.json";
import aula3 from "@/assets/projects/super-scratch-24-01/aula-3.jpg.asset.json";
import aula4 from "@/assets/projects/super-scratch-24-01/aula-4.jpg.asset.json";
import aula5 from "@/assets/projects/super-scratch-24-01/aula-5.jpg.asset.json";
import aula6 from "@/assets/projects/super-scratch-24-01/aula-6.jpg.asset.json";
import aula7 from "@/assets/projects/super-scratch-24-01/aula-7.jpg.asset.json";
import aula8 from "@/assets/projects/super-scratch-24-01/aula-8.jpg.asset.json";
import aula9 from "@/assets/projects/super-scratch-24-01/aula-9.jpg.asset.json";
import aula10 from "@/assets/projects/super-scratch-24-01/aula-10.jpg.asset.json";
import aula11 from "@/assets/projects/super-scratch-24-01/aula-11.jpg.asset.json";
import aula12 from "@/assets/projects/super-scratch-24-01/aula-12.jpg.asset.json";
import aula13 from "@/assets/projects/super-scratch-24-01/aula-13.jpg.asset.json";
import visita1 from "@/assets/projects/super-scratch-24-01/visita-1.jpg.asset.json";
import visita2 from "@/assets/projects/super-scratch-24-01/visita-2.jpg.asset.json";
import visita3 from "@/assets/projects/super-scratch-24-01/visita-3.jpg.asset.json";
import visita4 from "@/assets/projects/super-scratch-24-01/visita-4.jpg.asset.json";
import visita5 from "@/assets/projects/super-scratch-24-01/visita-5.jpg.asset.json";

export type DisciplineId = "python" | "scratch" | "robotica";

export type PhotoCategory = "aula" | "visita" | "convite" | "culminancia";

export interface ProjectFile {
  name: string;
  size: string;
  type: string;
  url: string;
}

export interface ProjectPhoto {
  src: string;
  alt: string;
  caption?: string;
  category?: PhotoCategory;
}

export interface Project {
  id: string;
  title: string;
  summary: string;
  level: string;
  duration: string;
  objectives: string[];
  files: ProjectFile[];
  /** Pessoas que participaram do projeto (monitores / coordenação) */
  team?: string[];
  photos?: ProjectPhoto[];
}

export interface Discipline {
  id: DisciplineId;
  name: string;
  tagline: string;
  description: string;
  projects: Project[];
}

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
        id: "py-descoberta-25-01",
        title: "Python: A Descoberta (25-01)",
        summary:
          "Eletiva no SOR para 8º e 9º ano: primeiros passos em Python com foco em lógica, variáveis e pequenos projetos.",
        level: "8º e 9º ano",
        duration: "Semestre 2025/1",
        objectives: [
          "Apresentar a sintaxe básica de Python",
          "Trabalhar lógica de programação com problemas reais",
          "Construir projetos autorais ao final do semestre",
        ],
        files: [
          { name: "plano-descoberta.pdf", size: "—", type: "PDF", url: placeholder },
        ],
        team: [
          "Moniely Silva Barboza (coordenação)",
          "Dante Brito Lourenço",
          "Diego Fernandes Lemos",
          "Pedro Lunkes Villela",
        ],
      },
      {
        id: "py-akd-25-02",
        title: "Introdução à Programação com Python (25-02)",
        summary:
          "Curso extracurricular na E.E. Aduar Kemell Dibo para 8º, 9º e 1º ano, com turmas iniciantes em Python.",
        level: "8º, 9º e 1º ano",
        duration: "Semestre 2025/2",
        objectives: [
          "Introduzir programação para iniciantes",
          "Praticar com pequenos desafios semanais",
          "Estimular autonomia para resolver problemas",
        ],
        files: [
          { name: "plano-akd.pdf", size: "—", type: "PDF", url: placeholder },
        ],
        team: [
          "Moniely Silva Barboza (coordenação)",
          "Antonio Feolsa",
          "Rafael Senger",
        ],
      },
      {
        id: "py-akd-26-01",
        title: "Python — Iniciantes e Ciência de Dados (26-01)",
        summary:
          "Duas turmas na AKD: iniciantes em programação (8º/9º/1º) e introdução à ciência de dados (1º/2º).",
        level: "8º ao 2º ano",
        duration: "Semestre 2026/1",
        objectives: [
          "Atender alunos iniciantes e intermediários",
          "Introduzir manipulação de dados com Python",
          "Aproximar os alunos da cultura científica",
        ],
        files: [
          { name: "plano-iniciantes.pdf", size: "—", type: "PDF", url: placeholder },
          { name: "plano-ciencia-de-dados.pdf", size: "—", type: "PDF", url: placeholder },
        ],
        team: [
          "Moniely Silva Barboza (coordenação iniciantes)",
          "Rafael Senger (coordenação ciência de dados)",
          "Alvaro Minto Ramos",
          "Antonio Feolsa",
          "Aron Caturelli Braga",
        ],
      },
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
        id: "sc-super-scratch-24-01",
        title: "Super Scratch (24-01)",
        summary:
          "Disciplina eletiva no SOR para 6º e 7º ano. Primeira turma do semestre 2024/1, com convite aos alunos, aulas semanais, culminância e visita à USP.",
        level: "6º e 7º ano",
        duration: "Semestre 2024/1 · 38 alunos",
        objectives: [
          "Apresentar o Scratch como ferramenta de criação",
          "Estimular projetos autorais de jogos e histórias",
          "Realizar culminância com apresentação dos projetos",
        ],
        files: [
          { name: "plano-super-scratch.pdf", size: "—", type: "PDF", url: placeholder },
        ],
        team: [
          "Moniely Silva Barboza (coordenação)",
          "Lucca Baptista Silva Ferraz",
        ],
        photos: [
          { src: convite1.url, alt: "Monitores recebendo alunos na quadra", caption: "Convite aos alunos", category: "convite" },
          { src: convite2.url, alt: "Aluna apresentando o projeto no notebook", caption: "Convite aos alunos", category: "convite" },
          { src: convite3.url, alt: "Apresentação do projeto na quadra da escola", caption: "Convite aos alunos", category: "convite" },
          { src: aula1.url, alt: "Alunos programando no Scratch durante a aula", caption: "Aula prática no laboratório", category: "aula" },
          { src: aula2.url, alt: "Turma trabalhando em duplas nos notebooks", caption: "Turma engajada na atividade", category: "aula" },
          { src: aula3.url, alt: "Tela do Scratch com projeto em desenvolvimento", caption: "Projeto em construção", category: "aula" },
          { src: aula4.url, alt: "Aluno desenvolvendo seu jogo no Scratch", caption: "Construção do jogo autoral", category: "aula" },
          { src: aula5.url, alt: "Vista da sala com a turma toda usando Scratch", caption: "Sala cheia, todos programando", category: "aula" },
          { src: aula6.url, alt: "Monitora explicando o conteúdo na lousa", caption: "Explicação na lousa", category: "aula" },
          { src: aula7.url, alt: "Atividade de Kahoot com a turma", caption: "Atividade gamificada com Kahoot", category: "aula" },
          { src: aula8.url, alt: "Apresentação inicial sobre lógica de programação", caption: "Apresentação da eletiva", category: "aula" },
          { src: aula9.url, alt: "Discussão sobre algoritmos com a turma", caption: "Introdução a algoritmos", category: "aula" },
          { src: aula10.url, alt: "Aluna mostrando projeto impresso ao lado da professora", caption: "Aluna apresenta seu projeto", category: "aula" },
          { src: aula11.url, alt: "Aluno mostrando personagem desenhado", caption: "Personagens autorais", category: "aula" },
          { src: aula12.url, alt: "Sala completa com monitor explicando a eletiva", caption: "Apresentação da eletiva à turma", category: "aula" },
          { src: aula13.url, alt: "Turma inteira programando no Scratch", caption: "Turma engajada no laboratório", category: "aula" },
          { src: visita1.url, alt: "Aluno observando réguas de cálculo no museu da computação", caption: "Museu da Computação do ICMC", category: "visita" },
          { src: visita2.url, alt: "Alunos experimentando máquina de escrever antiga", caption: "Conhecendo tecnologias do passado", category: "visita" },
          { src: visita3.url, alt: "Alunos usando computadores antigos no museu", caption: "Computadores históricos em ação", category: "visita" },
          { src: visita4.url, alt: "Professora guiando alunos pelo museu da computação", caption: "Visita guiada no museu", category: "visita" },
          { src: visita5.url, alt: "Palestra para alunos no auditório da USP", caption: "Palestra no auditório do ICMC", category: "visita" },
        ],
      },
      {
        id: "sc-esporte-24-02",
        title: "Esporte em Scratch (24-02)",
        summary:
          "Eletiva no SOR para 6º e 7º ano com tema esportivo. Os alunos criaram jogos inspirados em modalidades olímpicas.",
        level: "6º e 7º ano",
        duration: "Semestre 2024/2 · 35 alunos",
        objectives: [
          "Conectar programação a temas do cotidiano",
          "Trabalhar variáveis de pontuação e física simples",
          "Estimular trabalho em equipe",
        ],
        files: [
          { name: "plano-esporte.pdf", size: "—", type: "PDF", url: placeholder },
        ],
        team: [
          "Francisco Rafael Argueta Pérez (coordenação)",
          "Thales do Espírito Santo Silva",
          "Vitória Gomes Guimarães",
        ],
      },
      {
        id: "sc-sustenta-24-02",
        title: "Sustenta Scratch (24-02)",
        summary:
          "Eletiva no SOR para 8º e 9º ano com tema sustentabilidade. Jogos e simulações sobre meio ambiente.",
        level: "8º e 9º ano",
        duration: "Semestre 2024/2 · 38 alunos",
        objectives: [
          "Aplicar programação para causas sociais",
          "Trabalhar interatividade e simulação",
          "Estimular pensamento crítico",
        ],
        files: [
          { name: "plano-sustenta.pdf", size: "—", type: "PDF", url: placeholder },
        ],
        team: [
          "Moniely Silva Barboza (coordenação)",
          "Daniel Martins Arrais",
          "João Victor Alonso de Mello",
          "Paulo Henrique Vedovatto Turquetti",
        ],
      },
      {
        id: "sc-super-scratch-25-01",
        title: "Super Scratch (25-01)",
        summary:
          "Eletiva no SOR para 6º e 7º ano no semestre 2025/1, com nova turma de 38 alunos.",
        level: "6º e 7º ano",
        duration: "Semestre 2025/1 · 38 alunos",
        objectives: [
          "Dar continuidade ao Super Scratch",
          "Aprimorar o roteiro de aulas",
          "Realizar culminância com a comunidade escolar",
        ],
        files: [
          { name: "plano-super-scratch-25.pdf", size: "—", type: "PDF", url: placeholder },
        ],
        team: [
          "Francisco Rafael Argueta Pérez (coordenação)",
          "Thales do Espírito Santo Silva",
          "Vitória Gomes Guimarães",
        ],
      },
      {
        id: "sc-super-scratch-25-02",
        title: "Super Scratch (25-02)",
        summary:
          "Eletiva no SOR para 6º e 7º ano no semestre 2025/2.",
        level: "6º e 7º ano",
        duration: "Semestre 2025/2 · 38 alunos",
        objectives: [
          "Consolidar o roteiro de Super Scratch",
          "Formar novos monitores",
          "Ampliar o repertório de projetos finais",
        ],
        files: [
          { name: "plano-25-02.pdf", size: "—", type: "PDF", url: placeholder },
        ],
        team: [
          "Vitória Gomes Guimarães (coordenação)",
          "José Carlos Andrade do Nascimento",
          "João Pedro Boiago Gomes Santana",
        ],
      },
      {
        id: "sc-scratchmat-26-01",
        title: "ScratchMat (26-01)",
        summary:
          "Eletiva de Scratch com foco em matemática para 6º e 7º ano no SOR.",
        level: "6º e 7º ano",
        duration: "Semestre 2026/1",
        objectives: [
          "Integrar programação e matemática",
          "Explorar geometria e operações com blocos",
          "Estimular raciocínio lógico",
        ],
        files: [
          { name: "plano-scratchmat.pdf", size: "—", type: "PDF", url: placeholder },
        ],
        team: [
          "João Pedro Boiago Gomes Santana (coordenação)",
          "Felipe Volkweis de Oliveira",
          "Lúcia Karoline Marques de Azevedo",
        ],
      },
    ],
  },
  robotica: {
    id: "robotica",
    name: "Robótica",
    tagline: "Do mundo físico ao código que pensa",
    description:
      "Trabalhamos com kits acessíveis (Arduino e componentes simples) para que os alunos prototipem soluções reais: semáforos inteligentes, sensores, pequenos veículos e muito mais.",
    projects: [
      {
        id: "ro-clube-25",
        title: "Clube de Robótica (2025)",
        summary:
          "Clube anual no SOR aberto do 7º ano ao 3º do EM, com 16 alunos. Foco em prototipação com Arduino.",
        level: "7º ano ao 3º EM",
        duration: "Ano letivo 2025 · 16 alunos",
        objectives: [
          "Apresentar eletrônica básica",
          "Programar microcontroladores",
          "Construir protótipos autorais",
        ],
        files: [
          { name: "plano-clube-robotica.pdf", size: "—", type: "PDF", url: placeholder },
        ],
        team: [
          "Eduardo Magno (coordenação)",
          "Newton Eduardo Pena Villegas",
        ],
      },
      {
        id: "ro-disciplina-25-01",
        title: "Disciplinas de Robótica (25-01)",
        summary:
          "Disciplina obrigatória no SOR para 6º e 7º ano, com turmas de cerca de 38 alunos cada.",
        level: "6º e 7º ano",
        duration: "Semestre 2025/1",
        objectives: [
          "Atender a grade obrigatória da escola",
          "Adaptar conteúdo para grandes turmas",
          "Desenvolver atividades práticas com kits",
        ],
        files: [
          { name: "plano-disciplina.pdf", size: "—", type: "PDF", url: placeholder },
        ],
        team: [
          "Henrique Ribeiro de Figueiredo (coordenação)",
          "Pedro da Silva Panini",
        ],
      },
      {
        id: "ro-disciplina-26-01",
        title: "Disciplinas de Robótica — 9º ano (26-01)",
        summary:
          "Duas turmas obrigatórias de 9º ano no SOR (turmas A e B) no semestre 2026/1.",
        level: "9º ano",
        duration: "Semestre 2026/1",
        objectives: [
          "Aprofundar prototipação eletrônica",
          "Integrar sensores e atuadores",
          "Desenvolver projeto final por turma",
        ],
        files: [
          { name: "plano-9ano.pdf", size: "—", type: "PDF", url: placeholder },
        ],
        team: [
          "Vinicius (coordenação 9A)",
          "Francisco Rafael Argueta Pérez (coordenação 9B)",
          "Kauã Benjamin Trombim Silva",
          "Caio Lucas Indalecio",
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
