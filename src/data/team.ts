import vitoriaImg from "@/assets/team/vitoria-gomes.jpg";
import moniellyImg from "@/assets/team/monielly-barboza.jpg";

export interface Member {
  name: string;
  role: string;
  photo?: string;
  bio?: string;
  status: "current" | "alumni";
}

// Apenas a organização (direção e coordenação)
export const team: Member[] = [
  { name: "Cynthia de Oliveira Lage Ferreira", role: "Diretora Geral", status: "current" },
  { name: "Vitória Gomes Guimarães", role: "Coordenadora", photo: vitoriaImg, status: "current" },
  { name: "Moniely Silva Barboza", role: "Coordenadora", photo: moniellyImg, status: "current" },
];
