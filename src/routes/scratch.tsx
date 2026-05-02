import { createFileRoute } from "@tanstack/react-router";
import { DisciplinePage } from "@/components/DisciplinePage";
import { disciplines } from "@/data/projects";
import cover from "@/assets/scratch-cover.jpg";

export const Route = createFileRoute("/scratch")({
  head: () => ({
    meta: [
      { title: "Scratch — Extensão USP São Carlos" },
      {
        name: "description",
        content:
          "Projetos de Scratch usados nas aulas para escolas públicas: histórias, jogos e animações.",
      },
    ],
  }),
  component: () => <DisciplinePage discipline={disciplines.scratch} cover={cover} />,
});
