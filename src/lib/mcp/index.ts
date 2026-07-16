import { defineMcp } from "@lovable.dev/mcp-js";
import listDisciplines from "./tools/list-disciplines";
import getDiscipline from "./tools/get-discipline";
import listTeam from "./tools/list-team";

export default defineMcp({
  name: "extensao-usp-mcp",
  title: "Extensão USP · ICMC",
  version: "0.1.0",
  instructions:
    "Ferramentas para consultar o conteúdo público do projeto de extensão USP/ICMC (São Carlos): disciplinas de Python, Scratch e Robótica, Clubes de Estudo e equipe. Use list_disciplines para descobrir os IDs e get_discipline para ler os projetos completos.",
  tools: [listDisciplines, getDiscipline, listTeam],
});
