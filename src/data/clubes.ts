import type { Discipline } from "@/data/projects";

const placeholder = "#";

export const clubes: Discipline = {
  id: "clubes",
  name: "Clubes de Estudo",
  tagline: "Aprofundamento, competição e comunidade",
  description:
    "Os Clubes de Estudo são espaços de aprofundamento voltados a estudantes que querem ir além do currículo. Diferente dos projetos aplicados nas escolas, aqui o foco é preparar, treinar e reunir alunos em torno de temas específicos — como olimpíadas científicas e desafios de programação.",
  projects: [
    {
      id: "clube-olimpiada-robotica",
      title: "Clube de Estudo — Olimpíada de Robótica",
      summary:
        "Grupo de estudos voltado à preparação para a Olimpíada Brasileira de Robótica (OBR), com foco em lógica, montagem, programação e resolução de problemas de robótica.",
      level: "Ensino Fundamental II e Médio",
      duration: "Encontros semanais",
      objectives: [
        "Preparar estudantes para as fases teórica e prática da OBR",
        "Aprofundar conhecimentos em programação e eletrônica embarcada",
        "Estimular trabalho em equipe e pensamento estratégico",
        "Formar uma comunidade de estudantes interessados em robótica",
      ],
      files: [
        { name: "cronograma-clube-obr.pdf", size: "—", type: "PDF", url: placeholder },
      ],
    },
  ],
};
