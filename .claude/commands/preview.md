---
description: Roda o portfólio e tira screenshots (desktop + mobile) via Playwright MCP
allowed-tools: Bash, Read
---

# /preview — Rodar o site e capturar screenshots

Objetivo: subir o dev server e capturar a página em desktop e mobile usando o Playwright MCP,
para inspeção visual e o ciclo de qualidade.

Argumentos opcionais: `$ARGUMENTS` pode conter uma rota (ex.: `/`, `/#projetos`). Padrão: `/`.

## Passos

1. **Garantir o dev server rodando** em `http://localhost:3000`:
   - Checar se já há algo na porta 3000. Se não, iniciar `npm run dev` em background (run_in_background).
   - Aguardar a porta responder (loop curto de `curl -s -o /dev/null -w "%{http_code}" http://localhost:3000` até `200`), com timeout razoável (~60s).

2. **Carregar as ferramentas do Playwright MCP** (deferidas) via ToolSearch, ex.:
   `mcp__playwright__browser_navigate`, `mcp__playwright__browser_resize`, `mcp__playwright__browser_take_screenshot`.

3. **Capturar desktop:**
   - `browser_resize` para 1440 x 900.
   - `browser_navigate` para `http://localhost:3000$ARGUMENTS` (ou `/`).
   - Aguardar render (rede neural/animações assentarem).
   - `browser_take_screenshot` full page, salvar como `screenshots/desktop.png`.

4. **Capturar mobile:**
   - `browser_resize` para 390 x 844 (iPhone 12/13).
   - Recarregar a mesma URL.
   - `browser_take_screenshot` full page, salvar como `screenshots/mobile.png`.

5. **Reportar:** caminho dos dois arquivos e qualquer erro de console capturado.

## Ciclo de qualidade (quando usado para revisar UI)
Depois de capturar, **analisar criticamente os próprios prints**: alinhamento, hierarquia,
espaçamento, contraste, qualquer coisa que pareça "template genérico" ou amadora. Aplicar a skill
`design-system` e a `taste-skill`, refatorar os pontos fracos e repetir `/preview` até ficar
realmente impressionante. Só então apresentar os prints finais ao usuário.
