import { createFileRoute } from "@tanstack/react-router";
import { DisciplinePage } from "@/components/DisciplinePage";
import { disciplines } from "@/data/projects";
import cover from "@/assets/robotica-cover.jpg";

export const Route = createFileRoute("/robotica")({
  head: () => ({
    meta: [
      { title: "Robótica — Extensão USP São Carlos" },
      {
        name: "description",
        content:
          "Projetos de robótica educacional com Arduino para o Ensino Fundamental II.",
      },
    ],
  }),
  component: () => <DisciplinePage discipline={disciplines.robotica} cover={cover} />,
});
