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

## Como as imagens funcionam

Todas as fotos ficam versionadas no próprio repositório em `public/assets/`
(cerca de 46 MB, ~235 arquivos). Para cada imagem existe também um pequeno
arquivo `nome.jpg.asset.json` ao lado, dentro de `src/assets/`, contendo o
caminho público servido pelo site:

```json
{
  "url": "/assets/projects/python-25-02/aula-1.jpg",
  "original_filename": "aula-1.jpg",
  ...
}
```

No código a gente importa o `.asset.json` e usa `.url`:

```tsx
import foto from "@/assets/projects/python-25-02/aula-1.jpg.asset.json";
<img src={foto.url} alt="Aula" />
```

Como as imagens moram em `public/`, elas são servidas por qualquer host
(Vercel, Netlify, Cloudflare Pages, servidor próprio…) sem depender de
CDN externo.

### (Opcional) Rebaixar as fotos

Se em algum momento o repositório perder as imagens, o script
`scripts/download-assets.mjs` reconstrói `public/assets/` a partir das URLs
originais listadas nos `.asset.json`:

```bash
node scripts/download-assets.mjs public/assets
```

## Hospedando fora da Lovable

O código é um projeto TanStack Start / Vite normal e roda em qualquer
provedor. Recomendado: **Vercel** (deploy grátis, HTTPS automático).

1. Crie conta em [vercel.com](https://vercel.com) usando **Login with GitHub**.
2. **Add New… → Project** e escolha o repositório
   `Projeto-NAICE-extensao-USP/extensao-usp-pybotch`.
3. Deixe as configurações padrão detectadas (framework: Vite) e clique
   **Deploy**. Em ~1 minuto o site fica no ar em uma URL `*.vercel.app`
   — sem badge nem pop-up da Lovable.
4. Cada push no GitHub gera um novo deploy automaticamente.

Para conectar um domínio próprio (por exemplo `algum-nome.usp.br`):

1. Na Vercel: **Project → Settings → Domains → Add**.
2. Copie os registros DNS mostrados (CNAME ou A + TXT).
3. Envie para a TI da USP pedindo para adicionar no DNS do domínio.
4. HTTPS é emitido automaticamente após a propagação.

Alternativa equivalente: **Netlify** ou **Cloudflare Pages** seguem o mesmo
fluxo (login com GitHub → importar repo → deploy).

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
