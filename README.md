# Projeto de Extensão USP São Carlos (ICMC)

Site oficial das atividades de extensão do ICMC/USP, com aulas de Python, Scratch e Robótica para escolas públicas da região de São Carlos. O site funciona como divulgação do projeto para novas escolas e acervo de materiais e registros das turmas.

---

## Tech Stack

* **Framework:** TanStack Start (React 19 + Vite)
* **Estilização:** Tailwind CSS v4 & shadcn/ui

---

## Estrutura de Pastas

* `src/routes/`: Páginas do site (roteamento por arquivos)
* `src/data/`: Conteúdo editável (turmas, fotos, equipe, clubes de estudo)
* `src/components/`: Componentes da interface
* `public/assets/`: Imagens e registros fotográficos do projeto

---

## Como Rodar Localmente

Certifique-se de ter o Node.js (v18+) e o `bun` (ou `npm`) instalados.

1. Instale as dependências:
   ```bash
   bun install

Inicie o servidor de desenvolvimento:
  bun run dev

Acesse http://localhost:8080.

Para gerar a versão de produção:

bun run build

Como Atualizar o Conteúdo
Adicionar turmas ou fotos: Altere o arquivo src/data/projects.ts.

Editar equipe: Altere src/data/team.ts.

Mudar páginas (Home, Sobre nós): Edite os arquivos correspondentes em src/routes/.

Hospedagem e Deploy
O projeto está pronto para hospedagem na Vercel ou plataformas similares (Netlify, Cloudflare Pages).

Importe este repositório no painel da Vercel.

Mantenha o preset padrão do Vite.

Para conectar um subdomínio oficial (*.usp.br), adicione o domínio nas configurações do projeto na Vercel e solicite o apontamento CNAME à equipe de TI da USP/ICMC.

Licença
Projeto de extensão universitária — ICMC / USP São Carlos. Uso livre para fins educacionais.
