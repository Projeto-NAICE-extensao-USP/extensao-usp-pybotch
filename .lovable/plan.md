# Migrar a hospedagem para fora do Lovable (mantendo as fotos)

O código já está no GitHub (`Projeto-NAICE-extensao-USP/extensao-usp-pybotch`). O ponto crítico é: **as fotos hoje moram no CDN do Lovable** (URLs `/__l5e/assets-v1/...`). Se você só apontar outro host para o repositório, as fotos podem parar de carregar quando o projeto Lovable for encerrado. Por isso o plano tem duas partes: (A) trazer as fotos para dentro do projeto, e (B) hospedar em outro lugar.

---

## Parte A — Trazer as fotos do CDN para o repositório

Objetivo: o site deixar de depender do CDN do Lovable.

1. **Baixar todas as fotos localmente** usando o script que já existe no repositório:
   ```bash
   node scripts/download-assets.mjs
   ```
   Isso cria uma pasta (ex.: `downloaded-assets/`) com os 235 arquivos.

2. **Mover as fotos para `public/assets/`** (mantendo os nomes de arquivo). Tudo dentro de `public/` é servido em `/assets/...` pelo site.

3. **Trocar as referências** dos `.asset.json` para caminhos locais. Duas opções:
   - **Opção rápida (recomendada):** ajustar o helper que hoje lê `asset.url` para, em vez disso, montar `"/assets/" + nome_original`. Assim os arquivos `.asset.json` continuam existindo mas o site passa a servir as fotos locais.
   - **Opção limpa:** substituir cada import de `*.asset.json` por um import direto do arquivo em `public/assets/`.

4. **Rodar `bun run build` e testar localmente** (`bun run dev`) para garantir que todas as fotos carregam sem depender do CDN.

5. **Commitar as fotos no GitHub.** O repositório vai crescer (~46 MB), o que é totalmente aceitável para o GitHub.

Depois desse passo o site é 100% autossuficiente: qualquer host serve as fotos direto do repositório.

---

## Parte B — Publicar em outro provedor

Recomendação: **Vercel** (mais simples para TanStack Start, deploy automático a cada push no GitHub, plano gratuito suficiente, HTTPS automático).

Passos na Vercel:

1. Criar conta gratuita em vercel.com usando **Login with GitHub**.
2. **Import Project** → selecionar o repositório `extensao-usp-pybotch`.
3. Vercel detecta Vite/TanStack automaticamente. Confirmar:
   - Build Command: `bun run build` (ou deixar o padrão detectado)
   - Output Directory: padrão detectado
4. Clicar em **Deploy**. Em ~1 min o site sobe em uma URL `*.vercel.app` — **sem badge do Lovable, sem pop-up**.
5. A partir daí, todo push no GitHub (feito pelo Lovable enquanto você ainda usa, ou por qualquer dev depois) publica automaticamente.

**Alternativa:** Netlify segue exatamente o mesmo fluxo (Login com GitHub → Import → Deploy). Escolha a que preferir.

---

## Parte C — Conectar o domínio `usp.br` (quando disponível)

1. Na Vercel: **Project → Settings → Domains → Add** → digitar o subdomínio da USP.
2. Vercel mostra os registros DNS (um CNAME ou A + TXT).
3. Enviar esses registros para a TI da USP pedindo para adicionar no DNS do domínio.
4. Após propagação (minutos a algumas horas), o HTTPS é emitido automaticamente e o site fica no ar no domínio oficial.

Importante: fazer isso **direto na Vercel**, não no Lovable, quando a hospedagem já tiver migrado.

---

## Parte D — Encerrar o Lovable com segurança

Só depois que o site na Vercel estiver rodando com o domínio da USP:
1. Remover a conexão do GitHub no Lovable (opcional — impede alterações acidentais).
2. Cancelar o plano / apagar o projeto Lovable.

O GitHub e a Vercel continuam funcionando normalmente sem nenhuma dependência do Lovable.

---

## Resumo do resultado final

- Código: GitHub (já pronto).
- Fotos: dentro do próprio repositório, em `public/assets/`.
- Hospedagem: Vercel (grátis, sem badge, sem pop-up).
- Domínio: `algum-nome.usp.br` apontando para a Vercel.
- Manutenção futura: qualquer pessoa com acesso ao GitHub edita → push → publica sozinho.

---

## Detalhes técnicos (para quem for executar)

- O script `scripts/download-assets.mjs` já existe e percorre todos os `*.asset.json` do repositório.
- O helper de resolução de URL de asset está centralizado (a Parte A passo 3 é edição pontual, não um refactor grande).
- TanStack Start roda em Vercel via preset padrão do Vite; nenhuma configuração especial precisa ser feita hoje.
- Tamanho do repositório após incluir fotos: ~46 MB — bem abaixo do limite de 100 MB por arquivo do GitHub e sem necessidade de Git LFS.

Se aprovar, na próxima etapa eu executo a **Parte A** (baixo, movo e ajusto as referências) e deixo o repositório pronto para você importar na Vercel. As Partes B, C e D você (ou a TI da USP) executa fora do Lovable.
