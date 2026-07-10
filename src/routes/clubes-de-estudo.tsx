import { createFileRoute } from "@tanstack/react-router";
import { DisciplinePage } from "@/components/DisciplinePage";
import { clubes } from "@/data/clubes";
import cover from "@/assets/robotica-cover.jpg";

export const Route = createFileRoute("/clubes-de-estudo")({
  head: () => ({
    meta: [
      { title: "Clubes de Estudo — Extensão USP | ICMC" },
      {
        name: "description",
        content:
          "Clubes de estudo da Extensão USP ICMC: espaços de aprofundamento e preparação para olimpíadas, com foco em robótica e programação.",
      },
      { property: "og:title", content: "Clubes de Estudo — Extensão USP | ICMC" },
      {
        property: "og:description",
        content:
          "Grupos de estudo voltados à preparação para olimpíadas e desafios de programação e robótica.",
      },
    ],
  }),
  component: () => <DisciplinePage discipline={clubes} cover={cover} />,
});
