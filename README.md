# Extensão USP — Python, Scratch e Robótica

Site do projeto de extensão da **USP São Carlos (ICMC)** que leva aulas de
Python, Scratch e Robótica para escolas públicas da região. Além de divulgar
o projeto para novas escolas, o site funciona como acervo dos materiais e
registros fotográficos de cada turma.

- **Preview (dev):** https://id-preview--91298f5e-50aa-4b65-976b-1265cab5786d.lovable.app
- **Site publicado:** https://extensao-usp-pybotch.lovable.app

---

## Stack

- **TanStack Start** (React 19 + Vite 7) — roteamento por arquivos em `src/routes/`
- **Tailwind CSS v4** — tokens de design em `src/styles.css`
- **shadcn/ui** — componentes em `src/components/ui/`
- **Lovable Assets** — imagens hospedadas no CDN (ver seção abaixo)
- Deploy em **Cloudflare Workers** (via Lovable)

## Estrutura de pastas

```
src/
├── assets/              # imagens do projeto (arquivos .asset.json — ver abaixo)
│   └── projects/        # fotos organizadas por turma
├── components/          # componentes reutilizáveis (Header, Footer, DisciplinePage…)
│   └── ui/              # shadcn/ui
├── data/
│   ├── projects.ts      # todas as turmas de Python/Scratch/Robótica + fotos
│   ├── clubes.ts        # clubes de estudo
│   └── team.ts          # equipe/coordenação
├── routes/              # cada arquivo = uma rota do site
│   ├── __root.tsx       # layout raiz (head, header, footer)
│   ├── index.tsx        # home
│   ├── sobre-nos.tsx
│   ├── python.tsx
│   ├── scratch.tsx
│   ├── robotica.tsx
│   ├── clubes-de-estudo.tsx
│   └── escolas.tsx
├── lib/                 # utilitários e tema por disciplina
└── styles.css           # design system (cores, fontes, tokens)
```

## Rodando localmente

Precisa de **Node 18+** e **bun** (ou npm/pnpm).

```bash
bun install
bun run dev        # abre em http://localhost:8080
bun run build      # build de produção
```

## Como as imagens funcionam (Lovable Assets)

Para manter o repositório leve, os arquivos binários (fotos, logos etc.)
**não ficam no Git**. No lugar de cada imagem existe um arquivo
`nome.jpg.asset.json` que aponta para a URL definitiva da imagem no CDN da
Lovable:

```json
{
  "asset_id": "abc-123",
  "url": "/__l5e/assets-v1/abc-123/foto.jpg",
  "content_type": "image/jpeg",
  ...
}
```

No código a gente importa o `.asset.json` e usa `.url`:

```tsx
import foto from "@/assets/projects/python-25-02/aula-1.jpg.asset.json";
<img src={foto.url} alt="Aula" />
```

As URLs são estáveis e sobrevivem a qualquer deploy.

### Baixar todas as fotos localmente

Se você (ou alguém que clonou o repo) quer ter todas as fotos em disco
— para arquivo, backup, ou para usar fora do site — rode:

```bash
node scripts/download-assets.mjs
# → cria a pasta ./assets-export com todas as ~235 imagens
```

Passe um caminho para escolher outra pasta de saída:

```bash
node scripts/download-assets.mjs ~/Desktop/fotos-projeto
```

O script não é usado pelo site em si; é só uma ferramenta para exportar as
imagens quando alguém quiser.

## Editando o conteúdo

- **Adicionar uma turma nova / mais fotos:** edite `src/data/projects.ts`.
- **Trocar textos da home ou sobre nós:** `src/routes/index.tsx` e
  `src/routes/sobre-nos.tsx`.
- **Menu / navegação:** `src/components/SiteHeader.tsx`.
- **Cores das disciplinas:** `src/lib/discipline-theme.ts` e as variáveis
  em `src/styles.css`.

## Fluxo Lovable ⇄ GitHub

O projeto tem sincronização bidirecional com o GitHub configurada pela
Lovable. Isso significa:

- Alterações feitas na Lovable **entram automaticamente** no repositório.
- Commits feitos direto no GitHub (ou por PR) **voltam automaticamente**
  para a Lovable e ficam visíveis no preview.

Quem preferir programar localmente pode clonar o repo, criar uma branch,
abrir PR e mergear — a Lovable segue funcionando em paralelo para quem não
programa.

## Licença / Créditos

Projeto acadêmico de extensão universitária da USP São Carlos (ICMC).
Materiais e registros são de uso educacional.
