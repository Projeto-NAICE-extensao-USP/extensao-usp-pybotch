import { createFileRoute } from "@tanstack/react-router";
import { DisciplinePage } from "@/components/DisciplinePage";
import { disciplines } from "@/data/projects";
import cover from "@/assets/python-cover.jpg";

export const Route = createFileRoute("/python")({
  head: () => ({
    meta: [
      { title: "Python — Extensão USP São Carlos" },
      {
        name: "description",
        content:
          "Projetos e materiais didáticos de Python para o Ensino Fundamental II.",
      },
    ],
  }),
  component: () => <DisciplinePage discipline={disciplines.python} cover={cover} />,
});
