export interface Member {
  name: string;
  role: string;
  bio?: string;
  status: "current" | "alumni";
}

// Substitua pelos nomes reais da equipe
export const team: Member[] = [
  { name: "Coordenador(a) — Nome", role: "Coordenação · Docente USP", status: "current" },
  { name: "Membro Atual 1", role: "Monitoria · Python", status: "current" },
  { name: "Membro Atual 2", role: "Monitoria · Scratch", status: "current" },
  { name: "Membro Atual 3", role: "Monitoria · Robótica", status: "current" },
  { name: "Membro Atual 4", role: "Conteúdo · Material didático", status: "current" },
  { name: "Membro Atual 5", role: "Comunicação", status: "current" },
  { name: "Ex-membro 1", role: "Monitoria · Python (2022)", status: "alumni" },
  { name: "Ex-membro 2", role: "Monitoria · Scratch (2021)", status: "alumni" },
  { name: "Ex-membro 3", role: "Monitoria · Robótica (2020)", status: "alumni" },
];
