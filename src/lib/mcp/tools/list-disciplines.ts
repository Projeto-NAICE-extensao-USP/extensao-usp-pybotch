import { defineTool } from "@lovable.dev/mcp-js";
import { disciplineList } from "@/data/projects";
import { clubes } from "@/data/clubes";

export default defineTool({
  name: "list_disciplines",
  title: "Listar disciplinas e clubes",
  description:
    "Lista todas as disciplinas de ensino (Python, Scratch, Robótica) e o grupo de Clubes de Estudo do projeto de extensão USP/ICMC, com nome, chamada curta, descrição e quantidade de projetos.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const items = [...disciplineList, clubes].map((d) => ({
      id: d.id,
      name: d.name,
      tagline: d.tagline,
      description: d.description,
      projectCount: d.projects.length,
    }));
    return {
      content: [{ type: "text", text: JSON.stringify(items, null, 2) }],
      structuredContent: { disciplines: items },
    };
  },
});
