# Portfólio · Pedro Henrique Jesus

Portfólio pessoal de Pedro Henrique Jesus, desenvolvedor web full stack. Tema escuro, hero com
rede neural interativa (WebGL), animações fluidas e conteúdo puxado de projetos e experiências reais.

## Stack

- **Next.js 16** (App Router, React Server Components) + **TypeScript**
- **Tailwind CSS v4** (tema dark-locked com design tokens)
- **Motion** (`motion/react`) para scroll-reveal e micro-interações
- **react-three-fiber + three** para o hero de rede neural
- **Geist** (Sans + Mono) via `next/font`, ícones **Phosphor**

## Estrutura

```
app/                layout (fontes, SEO), página, estilos globais (tokens)
components/          Nav, Hero, About, TechStack, Projects, Experience, Contact, Footer
  hero/NeuralField  campo de partículas WebGL (client leaf isolado)
  ui/Reveal         wrappers de animação on-scroll
lib/                profile.ts, projects.ts, experience.ts (dados reais)
scripts/shoot.mjs   captura de screenshots (desktop + mobile) via Playwright
.claude/            skill design-system + comando /preview
BRIEFING.md         decisões de stack, design tokens e plano
```

## Rodando localmente

Pré-requisitos: **Node.js 18.18+** (testado em Node 22).

```bash
npm install        # instala dependências
npm run dev        # ambiente de desenvolvimento em http://localhost:3000
```

Outros comandos:

```bash
npm run build      # build de produção
npm run start      # serve o build de produção
npm run lint       # checagem de lint
```

### Screenshots (opcional)

Requer os navegadores do Playwright (`npx playwright install chromium`):

```bash
URL="http://localhost:3000/" node scripts/shoot.mjs   # gera /screenshots
```

## Deploy

Otimizado para **Vercel** (zero config):

1. Suba o repositório no GitHub.
2. Importe o projeto em [vercel.com/new](https://vercel.com/new).
3. A Vercel detecta Next.js automaticamente. Sem variáveis de ambiente necessárias.
4. Deploy. Cada push na branch principal publica automaticamente.

Alternativas: qualquer plataforma que rode Next.js (Netlify, Cloudflare Pages, ou
`npm run build && npm run start` num servidor Node).

## Personalização

Todo o conteúdo vive em `lib/`. As regras visuais (cores, espaçamento, tom das animações)
estão na skill `.claude/skills/design-system/` e nos tokens em `app/globals.css`.
