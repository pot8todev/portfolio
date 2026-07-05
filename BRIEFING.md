# BRIEFING — Portfólio de Pedro Jesus
 : TODO 

> Documento de referência do projeto. Define stack, design system e plano de execução.
> As regras visuais detalhadas vivem na skill `.claude/skills/design-system/`.

---

## 1. Objetivo & contexto

Portfólio pessoal de **Pedro Henrique Jesus** (25 anos, Rio das Ostras/RJ) para se candidatar a
**vagas dev júnior / estágio no Brasil**. Conteúdo em **português**.

- **Identidade:** Desenvolvedor Web Full Stack, com experiência em React, Node.js, TypeScript
  e automação de processos.
- **Posicionamento:** foco em aplicações web escaláveis, APIs REST, automação e qualidade de código.
- **Diferencial narrativo:** unir teoria e prática. Experiência em estágio na Tesch Solutions
  com metodologias ágeis (Scrum e Kanban).

---

## 2. Stack escolhida + justificativa

| Camada | Escolha | Por quê |
|--------|---------|---------|
| Framework | **Next.js 16 (App Router, RSC)** | SSR/SSG, ótimo SEO, performance, padrão de mercado. Server Components por padrão; motion isolado em client leaves. |
| Linguagem | **TypeScript** | Type safety, sinaliza maturidade para recrutadores. |
| Estilo | **Tailwind v4** (`@tailwindcss/postcss`) | Velocidade, consistência via tokens, `dark`-locked. |
| Animação UI | **Motion** (`motion/react`) | Scroll-reveal, hover físico, stagger. `useMotionValue` para valores contínuos (nunca `useState` por frame). |
| Hero 3D | **react-three-fiber + three + drei** | Campo de partículas / rede neural com profundidade e glow. Isolado em client leaf; NUNCA na mesma árvore do Motion. |
| Tipografia | **Geist Sans + Geist Mono** (via `next/font`) | Sans display limpo e técnico; mono para números/labels/código. |
| Ícones | **@phosphor-icons/react** (strokeWidth 1.5) | Uma família só. Logos de tech via Simple Icons / devicon CDN. |

**Regra:** antes de importar lib nova, conferir `package.json`. Um design system por projeto.

---

## 3. Design tokens

Tema **dark-locked** (sem inversão por seção). Base off-black, **um acento** azul-ciano elétrico.

### Cores (CSS vars em `globals.css`)
```
--bg            #08090c   (off-black, base — nunca #000000)
--bg-elevated   #0e1014   (superfícies elevadas sutis)
--surface       #14161c   (cards, quando elevação comunica hierarquia)
--border        #1d2027   (hairlines)
--text          #e7e9ee   (corpo principal — nunca #ffffff puro)
--text-muted    #9aa0ad   (secundário, ≥ WCAG AA)
--text-faint    #5b616e   (terciário, labels)
--accent        #2dd4ff   (azul-ciano elétrico — sat < 80%)
--accent-strong #38bdf8   (estados hover/ativo)
--accent-soft   rgba(45,212,255,0.12)  (fundos/glows sutis)
```
Acento travado na página inteira (Color Consistency Lock). Sombras tingidas do fundo, nunca preto puro.

### Espaçamento & raio
- Escala base 4px. Seções: `py-24` a `py-32` (desktop), `py-16` (mobile). Container `max-w-[1200px] mx-auto px-6`.
- **Raio único:** `--radius: 14px` para cards; pills (full) só em elementos interativos arredondados; inputs `8px`. Regra documentada e seguida em tudo.

### Tipografia
- Display: `clamp()` fluido, `tracking-tight`, `leading-[1.05]`. Ex.: hero `clamp(2.5rem, 6vw, 4.5rem)`.
- Corpo: `text-base/relaxed`, `max-w-[65ch]`, cor `--text-muted`.
- Mono (`--font-geist-mono`): números, métricas, tags de stack, labels técnicas.
- Sem em-dash em nenhum lugar (`—`/`–` proibidos). Ênfase = itálico/bold da MESMA fonte.

---

## 4. Estrutura das seções (ordem)

1. **Nav** — fixa, 1 linha, ≤ 72px. Logo (monograma) + âncoras + CTA "Contato".
2. **Hero** — fundo `NeuralHero` (rede neural/partículas em r3f). Máx 4 elementos de texto:
   nome, papel ("Desenvolvedor Web Full Stack"), subtext ≤ 20 palavras, CTAs ("Ver projetos" + "GitHub").
   `min-h-[100dvh]`, `pt-24` máx, CTA visível sem scroll.
3. **Sobre** — bio real e curta: 25 anos, experiência em estágio na Tesch Solutions, formação em CC na UFF e Física na UERJ. Stack vertical.
4. **Tecnologias** — logos reais agrupados por categoria (Linguagens / Backend & Infra / Frontend & Web / Ferramentas).
   Sem 3 cards iguais; grid agrupado com hairlines esparsas.
5. **Projetos** — generalista, layout variado (sem zigzag 3x, sem cards iguais). SGA, SOS Solutions, Web Scraping. Descrições reais do GitHub.
6. **Experiência** — Tesch Solutions (Estagiário de Desenvolvimento Web). Timeline limpa, conquistas reais.
7. **Contato** — uma intenção de CTA. Email `pedrohjesus234@gmail.com`, GitHub, LinkedIn.
8. **Footer** — minimal, sem version-stamp/locale-strip.

---

## 5. Animações & efeitos planejados

Cada animação precisa de motivo (hierarquia, narrativa, feedback, transição de estado). Todas honram `prefers-reduced-motion`.

| Efeito | Onde | Implementação |
|--------|------|---------------|
| **Rede neural / partículas** | Hero (assinatura) | r3f: pontos + linhas entre vizinhos, parallax sutil ao ponteiro. Reduced-motion → frame estático. |
| Entrada do hero | Hero texto | Motion: fade + rise stagger no load. |
| Scroll-reveal | Seções/itens | `whileInView` (Motion), `once: true`, easing `[0.16,1,0.3,1]`, stagger 0.06s. |
| Hover físico em CTAs | Botões/cards | `:active` `scale-[0.98]`, hover `-translate-y-[1px]`, glow do acento sutil. |
| Spotlight/tilt nos cards de projeto | Projetos | Borda iluminada sob o cursor (motion values, sem re-render por frame). |
| Marquee de stack (opcional) | Tecnologias | Máx 1 marquee na página, se usar. |

**Bans:** `window.addEventListener('scroll')`, rAF tocando state React, custom cursor, neon/glow exagerado, AI-purple.

---

## 6. Ordem de implementação

1. **Tokens & layout** — `globals.css` (tokens dark-locked), `app/layout.tsx` (Geist, metadata/SEO, tema travado).
2. **Dados** — `lib/profile.ts`, `lib/projects.ts` (reais do GitHub), `lib/experience.ts` (Profile.pdf).
3. **Hero** — `NeuralHero` (r3f, client leaf) + conteúdo sobreposto + Nav.
4. **Seções de conteúdo** — Sobre → Tecnologias → Projetos → Experiência → Contato → Footer.
5. **Polish** — micro-interações, estados (hover/empty/error), responsividade mobile explícita por seção.
6. **Ciclo de qualidade** — `/preview` (screenshots desktop+mobile) → auto-crítica → refatorar → repetir.
7. **README.md** — instalação, dev, build, deploy (Vercel).

---

## 7. Metas de qualidade
- **Lighthouse > 90** (Performance/Best Practices/SEO/A11y). LCP < 2.5s, CLS < 0.1, INP < 200ms.
- Lazy-load do Three.js fora do above-the-fold se necessário; animar só `transform`/`opacity`.
- Passar o Pre-Flight da taste-skill: zero em-dash, 1 acento, tema travado, nav 1 linha, sem AI-tells.
- Responsivo: layouts assimétricos colapsam para 1 coluna < 768px.
