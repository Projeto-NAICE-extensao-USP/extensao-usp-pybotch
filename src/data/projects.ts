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
import visita6 from "@/assets/projects/super-scratch-24-01/visita-6.jpg.asset.json";
import visita7 from "@/assets/projects/super-scratch-24-01/visita-7.jpg.asset.json";
import visita8 from "@/assets/projects/super-scratch-24-01/visita-8.jpg.asset.json";
import visita9 from "@/assets/projects/super-scratch-24-01/visita-9.jpg.asset.json";
import visita10 from "@/assets/projects/super-scratch-24-01/visita-10.jpg.asset.json";
import visita11 from "@/assets/projects/super-scratch-24-01/visita-11.jpg.asset.json";
import visita12 from "@/assets/projects/super-scratch-24-01/visita-12.jpg.asset.json";
import visita13 from "@/assets/projects/super-scratch-24-01/visita-13.jpg.asset.json";
import visita14 from "@/assets/projects/super-scratch-24-01/visita-14.jpg.asset.json";
import visita15 from "@/assets/projects/super-scratch-24-01/visita-15.jpg.asset.json";
import culminancia1 from "@/assets/projects/super-scratch-24-01/culminancia-1.jpg.asset.json";
import culminancia2 from "@/assets/projects/super-scratch-24-01/culminancia-2.jpg.asset.json";
import culminancia3 from "@/assets/projects/super-scratch-24-01/culminancia-3.jpg.asset.json";
import culminancia4 from "@/assets/projects/super-scratch-24-01/culminancia-4.jpg.asset.json";
import culminancia5 from "@/assets/projects/super-scratch-24-01/culminancia-5.jpg.asset.json";
import culminancia6 from "@/assets/projects/super-scratch-24-01/culminancia-6.jpg.asset.json";
import esporteVisita1 from "@/assets/projects/esporte-scratch-24-02/visita-1.jpg.asset.json";
import esporteVisita2 from "@/assets/projects/esporte-scratch-24-02/visita-2.jpg.asset.json";
import esporteVisita3 from "@/assets/projects/esporte-scratch-24-02/visita-3.jpg.asset.json";
import esporteVisita4 from "@/assets/projects/esporte-scratch-24-02/visita-4.jpg.asset.json";
import esporteVisita5 from "@/assets/projects/esporte-scratch-24-02/visita-5.jpg.asset.json";
import esporteVisita6 from "@/assets/projects/esporte-scratch-24-02/visita-6.jpg.asset.json";
import esporteVisita7 from "@/assets/projects/esporte-scratch-24-02/visita-7.jpg.asset.json";
import esporteVisita8 from "@/assets/projects/esporte-scratch-24-02/visita-8.jpg.asset.json";
import esporteVisita9 from "@/assets/projects/esporte-scratch-24-02/visita-9.jpg.asset.json";
import esporteVisita10 from "@/assets/projects/esporte-scratch-24-02/visita-10.jpg.asset.json";
import sustentaVisita1 from "@/assets/projects/sustenta-scratch-24-02/visita-1.jpg.asset.json";
import sustentaVisita2 from "@/assets/projects/sustenta-scratch-24-02/visita-2.jpg.asset.json";
import sustentaVisita3 from "@/assets/projects/sustenta-scratch-24-02/visita-3.jpg.asset.json";
import sustentaVisita4 from "@/assets/projects/sustenta-scratch-24-02/visita-4.jpg.asset.json";
import sustentaVisita5 from "@/assets/projects/sustenta-scratch-24-02/visita-5.jpg.asset.json";
import sustentaVisita6 from "@/assets/projects/sustenta-scratch-24-02/visita-6.jpg.asset.json";
import sustentaVisita7 from "@/assets/projects/sustenta-scratch-24-02/visita-7.jpg.asset.json";
import sustentaVisita8 from "@/assets/projects/sustenta-scratch-24-02/visita-8.jpg.asset.json";
import sustentaVisita9 from "@/assets/projects/sustenta-scratch-24-02/visita-9.jpg.asset.json";
import sustentaVisita10 from "@/assets/projects/sustenta-scratch-24-02/visita-10.jpg.asset.json";

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
          { src: visita6.url, alt: "Alunos no museu da computação", caption: "Explorando o museu", category: "visita" },
          { src: visita7.url, alt: "Alunos com professora em frente a computador antigo", caption: "Computadores antigos em ação", category: "visita" },
          { src: visita8.url, alt: "Aluna usando telefone antigo ao lado da professora", caption: "Tecnologia de outras épocas", category: "visita" },
          { src: visita9.url, alt: "Visão geral da exposição com alunos", caption: "Sala da exposição cheia", category: "visita" },
          { src: visita10.url, alt: "Foto da turma na escadaria do ICMC", caption: "Foto da turma no ICMC", category: "visita" },
          { src: visita11.url, alt: "Alunos usando computador com Windows 95", caption: "Conhecendo o Windows 95", category: "visita" },
          { src: visita12.url, alt: "Alunos no auditório aguardando a palestra", caption: "Aguardando a palestra", category: "visita" },
          { src: visita13.url, alt: "Monitora apresentando consoles antigos", caption: "Consoles e jogos retrô", category: "visita" },
          { src: visita14.url, alt: "Alunos observando jogos de console antigos", caption: "Cartuchos e fitas de jogos", category: "visita" },
          { src: visita15.url, alt: "Aluna fotografando com câmera antiga", caption: "Experimentando uma câmera analógica", category: "visita" },
          { src: culminancia1.url, alt: "Aluna jogando Terra-Chrome no computador", caption: "Apresentação do jogo Terra-Chrome", category: "culminancia" },
          { src: culminancia2.url, alt: "Aluno mostrando o Jogo da Cobrinha feito em Scratch", caption: "Demonstração do Jogo da Cobrinha", category: "culminancia" },
          { src: culminancia3.url, alt: "Foto da turma com os jogos finais nos notebooks", caption: "Turma reunida com os projetos finais", category: "culminancia" },
          { src: culminancia4.url, alt: "Alunos posando com os jogos criados em Scratch", caption: "Apresentação coletiva dos jogos", category: "culminancia" },
          { src: culminancia5.url, alt: "Turma e monitores na culminância do Super Scratch", caption: "Turma e monitores na culminância", category: "culminancia" },
          { src: culminancia6.url, alt: "Aluno e professora jogando um Flappy Bird criado em Scratch", caption: "Testando o Flappy Bird criado pela turma", category: "culminancia" },
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
        photos: [
          { src: esporteVisita1.url, alt: "Alunos no refeitório da USP durante visita", caption: "Visita à USP", category: "visita" },
          { src: esporteVisita2.url, alt: "Apresentação no museu da computação do ICMC", caption: "Museu da Computação do ICMC", category: "visita" },
          { src: esporteVisita3.url, alt: "Aluna experimentando calculadora mecânica antiga", caption: "Calculadoras mecânicas históricas", category: "visita" },
          { src: esporteVisita4.url, alt: "Turma observando equipamentos antigos na visita", caption: "Conhecendo tecnologias do passado", category: "visita" },
          { src: esporteVisita5.url, alt: "Alunos no saguão da exposição do ICMC", caption: "Exposição do ICMC", category: "visita" },
          { src: esporteVisita6.url, alt: "Monitora apresentando peça do museu da computação", caption: "Apresentação no museu", category: "visita" },
          { src: esporteVisita7.url, alt: "Alunos observando vitrines do museu da computação", caption: "Explorando o acervo", category: "visita" },
          { src: esporteVisita8.url, alt: "Alunos utilizando computadores e tablets na exposição", caption: "Experiências interativas", category: "visita" },
          { src: esporteVisita9.url, alt: "Aluno fotografando com câmera analógica antiga", caption: "Experimentando uma câmera analógica", category: "visita" },
          { src: esporteVisita10.url, alt: "Aluno manuseando mouses antigos em exposição", caption: "Periféricos históricos", category: "visita" },
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
        photos: [
          { src: sustentaVisita1.url, alt: "Turma na exposição do museu da computação", caption: "Museu da Computação do ICMC", category: "visita" },
          { src: sustentaVisita2.url, alt: "Alunos visitando laboratório de robótica", caption: "Visita ao laboratório de robótica", category: "visita" },
          { src: sustentaVisita3.url, alt: "Aluna interagindo com robô durante a visita", caption: "Interagindo com os robôs", category: "visita" },
          { src: sustentaVisita4.url, alt: "Apresentação do robô da equipe SEMEAR", caption: "Apresentação do grupo SEMEAR", category: "visita" },
          { src: sustentaVisita5.url, alt: "Turma percorrendo o ICMC durante a visita", caption: "Tour pelo ICMC", category: "visita" },
          { src: sustentaVisita6.url, alt: "Drone exposto na bancada do laboratório com alunos ao fundo", caption: "Drones do laboratório", category: "visita" },
          { src: sustentaVisita7.url, alt: "Apresentação do robô LISA pela equipe SEMEAR", caption: "Conhecendo a robô LISA", category: "visita" },
          { src: sustentaVisita8.url, alt: "Aluno apontando para o rosto digital do robô LISA", caption: "Interagindo com a LISA", category: "visita" },
          { src: sustentaVisita9.url, alt: "Aluna fazendo sinal de paz para o robô LISA", caption: "Diversão com a equipe SEMEAR", category: "visita" },
          { src: sustentaVisita10.url, alt: "Foto da turma reunida na escadaria do ICMC", caption: "Foto da turma no ICMC", category: "visita" },
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
