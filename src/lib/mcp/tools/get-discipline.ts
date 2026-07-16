import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { disciplineList, type Discipline, type Project } from "@/data/projects";
import { clubes } from "@/data/clubes";

function findDiscipline(id: string): Discipline | undefined {
  return [...disciplineList, clubes].find((d) => d.id === id);
}

function serializeProject(p: Project) {
  return {
    id: p.id,
    title: p.title,
    summary: p.summary,
    level: p.level,
    duration: p.duration,
    objectives: p.objectives,
    team: p.team ?? [],
    files: p.files.map((f) => ({ name: f.name, type: f.type, size: f.size })),
    photoCount: p.photos?.length ?? 0,
    videoCount: p.videos?.length ?? 0,
  };
}

export default defineTool({
  name: "get_discipline",
  title: "Detalhes de uma disciplina/clube",
  description:
    "Retorna os projetos completos de uma disciplina (python, scratch, robotica) ou do grupo de clubes (clubes), com objetivos pedagógicos, nível, duração, equipe e materiais.",
  inputSchema: {
    id: z
      .string()
      .describe("Identificador da disciplina: python, scratch, robotica ou clubes."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ id }) => {
    const discipline = findDiscipline(id);
    if (!discipline) {
      return {
        content: [
          {
            type: "text",
            text: `Disciplina "${id}" não encontrada. Use list_disciplines para ver os IDs disponíveis.`,
          },
        ],
        isError: true,
      };
    }
    const payload = {
      id: discipline.id,
      name: discipline.name,
      tagline: discipline.tagline,
      description: discipline.description,
      projects: discipline.projects.map(serializeProject),
    };
    return {
      content: [{ type: "text", text: JSON.stringify(payload, null, 2) }],
      structuredContent: payload,
    };
  },
});
