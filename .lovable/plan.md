## Objetivo
Retirar completamente o servidor MCP (Agent integrations) que foi adicionado ao site, voltando ao estado sem endpoints de agentes.

## Alterações

1. **Remover o plugin MCP do Vite**
   - `vite.config.ts`: remover o import de `mcpPlugin` e a entrada `plugins: [mcpPlugin()]`, deixando apenas o `defineConfig` padrão.

2. **Apagar código do servidor MCP**
   - `src/lib/mcp/index.ts`
   - `src/lib/mcp/tools/list-disciplines.ts`
   - `src/lib/mcp/tools/get-discipline.ts`
   - `src/lib/mcp/tools/list-team.ts`
   - (a pasta `src/lib/mcp/` fica vazia e será removida)

3. **Apagar rotas geradas pelo plugin**
   - `src/routes/mcp.ts`
   - `src/routes/[.mcp]/list-tools.ts`
   - `src/routes/[.mcp]/invoke-tool/$tool.ts`
   - `src/routes/[.well-known]/oauth-protected-resource.ts`
   - (o `routeTree.gen.ts` é regenerado automaticamente pelo Vite)

4. **Apagar manifesto**
   - `.lovable/mcp/manifest.json`

5. **Remover dependências**
   - `bun remove @lovable.dev/mcp-js`
   - Em `bunfig.toml`, remover `"@lovable.dev/mcp-js"` da lista `minimumReleaseAgeExcludes`.

## Fora do escopo
- Nenhuma outra parte do site (páginas, dados, imagens, layout) é tocada.
- O pacote `zod`, se estava sendo usado só pelas ferramentas MCP, é mantido para não arriscar quebrar outros usos.

Depois disso o site fica igual a antes de adicionarmos os agentes: sem `/mcp`, sem `/.well-known/oauth-protected-resource`, sem nada aparecer em "Agent integrations".