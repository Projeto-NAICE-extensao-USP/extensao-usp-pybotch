import vitoriaImg from "@/assets/team/vitoria-gomes.jpg";
import moniellyImg from "@/assets/team/monielly-barboza.jpg";
import pedroImg from "@/assets/team/pedro-coelho.jpg";
import rafaelSengerImg from "@/assets/team/rafael-senger.jpg";

export interface Member {
  name: string;
  role: string;
  photo?: string;
  bio?: string;
  status: "current" | "alumni";
}

// Equipe atual do projeto extensionista
export const team: Member[] = [
  // Gestão / Coordenação
  { name: "Cynthia Ferreira", role: "Diretora Geral", status: "current" },
  { name: "Vitória Gomes", role: "Coordenadora", photo: vitoriaImg, status: "current" },
  { name: "Moniely Barboza", role: "Coordenadora", photo: moniellyImg, status: "current" },

  // Voluntários
  { name: "Laura", role: "Voluntária", status: "current" },
  { name: "Uebton", role: "Voluntário", status: "current" },
  { name: "Sydney", role: "Voluntário(a)", status: "current" },
  { name: "João Pedro", role: "Voluntário", status: "current" },
  { name: "Felipe", role: "Voluntário", status: "current" },
  { name: "Lucia", role: "Voluntária", status: "current" },
  { name: "Vinicius", role: "Voluntário", status: "current" },
  { name: "Kauã", role: "Voluntário", status: "current" },
  { name: "Rafael", role: "Voluntário", status: "current" },
  { name: "Caio", role: "Voluntário", status: "current" },
  { name: "Álvaro", role: "Voluntário", status: "current" },
  { name: "Antonio", role: "Voluntário", status: "current" },
  { name: "Aron", role: "Voluntário", status: "current" },
  { name: "Rafael Senger", role: "Voluntário", photo: rafaelSengerImg, status: "current" },
  { name: "Pedro Coelho", role: "Voluntário", photo: pedroImg, status: "current" },
];
