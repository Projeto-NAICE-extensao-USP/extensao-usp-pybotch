import { defineTool } from "@lovable.dev/mcp-js";
import { team } from "@/data/team";

export default defineTool({
  name: "list_team",
  title: "Equipe do projeto",
  description:
    "Lista os membros da direção e coordenação do projeto de extensão USP/ICMC (nome, função e status atual/ex-integrante).",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const members = team.map((m) => ({
      name: m.name,
      role: m.role,
      status: m.status,
      bio: m.bio,
    }));
    return {
      content: [{ type: "text", text: JSON.stringify(members, null, 2) }],
      structuredContent: { team: members },
    };
  },
});
