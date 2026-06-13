---
name: design-system
description: Regras visuais travadas do portfólio do Leonardo (cores, espaçamento, tipografia, tom das animações). Aplicar em TODO código de UI deste projeto para garantir consistência. Use ao criar ou editar qualquer componente, seção, estilo ou animação.
---

# Design System — Portfólio Leonardo Brandão

Regras NÃO-negociáveis para manter consistência visual. Em conflito, estas regras vencem
preferência estética pontual. Complementa a `taste-skill` global (anti-slop).

## 0. Princípios
- **Tema dark-locked.** A página inteira é escura. Nenhuma seção inverte para claro.
- **Um acento só** (azul-ciano elétrico), usado igual em todas as seções.
- **Zero em-dash** (`—` e `–`) em qualquer texto visível. Use vírgula, ponto, dois-pontos ou parênteses.
- Cada animação precisa de motivo. Tudo honra `prefers-reduced-motion`.

## 1. Tokens de cor (já definidos em `app/globals.css` como CSS vars)
```
--bg            #08090c    base off-black (NUNCA #000000)
--bg-elevated   #0e1014    superfície elevada sutil
--surface       #14161c    cards (só quando elevação comunica hierarquia)
--border        #1d2027    hairlines / divisores
--text          #e7e9ee    corpo principal (NUNCA #ffffff puro)
--text-muted    #9aa0ad    secundário (≥ WCAG AA 4.5:1)
--text-faint    #5b616e    terciário / labels
--accent        #2dd4ff    azul-ciano elétrico (saturação < 80%)
--accent-strong #38bdf8    hover/ativo
--accent-soft   rgba(45,212,255,0.12)   fundos/glows sutis
```
- Sempre referenciar via classe Tailwind mapeada (`bg-bg`, `text-text`, `text-muted`, `border-border`, `text-accent`, etc.) ou `var(--token)`. Não cravar hex solto no JSX.
- Sombras tingidas do fundo/acento, nunca `rgba(0,0,0,...)` puro sobre escuro.

## 2. Espaçamento & forma
- Escala base **4px**. Padding de seção: `py-24 md:py-32` (mobile `py-16`).
- Container: `max-w-[1200px] mx-auto px-6`.
- **Raio único:** cards/painéis `rounded-[14px]`; inputs `rounded-lg` (8px); elementos pill interativos `rounded-full`. Não misturar fora dessa regra.
- Usar borda/`divide-y`/negative space para agrupar antes de recorrer a card. Card só quando elevação tem significado.

## 3. Tipografia
- Fontes: `--font-geist-sans` (display + corpo), `--font-geist-mono` (números, métricas, tags de stack, labels técnicas).
- Display fluido com `clamp()`, `tracking-tight`, `leading-[1.05]`.
- Corpo: `text-base leading-relaxed text-muted max-w-[65ch]`.
- Ênfase em título = itálico/bold da MESMA fonte. Nunca injetar serif numa headline sans.
- Eyebrows (labels uppercase) com MUITA moderação: no máx 1 a cada 3 seções. Hero conta como 1.

## 4. Animação (tom)
- Biblioteca: **Motion** (`motion/react`) para UI; **r3f/three** só no hero (leaf isolado, nunca junto de Motion).
- Easing padrão: `cubic-bezier(0.16, 1, 0.3, 1)`. Spring: `{ type: "spring", stiffness: 100, damping: 20 }`.
- Durations: entrada 0.5-0.7s; hover/feedback 0.15-0.25s. Stagger 0.06s.
- Scroll-reveal: `whileInView` com `viewport={{ once: true, amount: 0.3 }}`.
- Feedback tátil: `:active` `scale-[0.98]`, hover `-translate-y-[1px]`.
- Valores contínuos (mouse, scroll, tilt): `useMotionValue`/`useTransform`. **Nunca** `useState` por frame, **nunca** `window.addEventListener('scroll')`, **nunca** rAF tocando state React.
- `MOTION > 3` exige fallback estático sob `prefers-reduced-motion` (`useReducedMotion()`).

## 5. Componentes — convenções
- Componentes com motion/3D/pointer: `'use client'` no topo, isolados como leaves. Resto é Server Component.
- Ícones só de `@phosphor-icons/react`, `strokeWidth={1.5}`. Logos de tech via Simple Icons/devicon. Nunca SVG de ícone na mão.
- Imagens: `next/image`. Hero LCP com `priority`. Reservar espaço (sem CLS).
- Estados completos: hover, loading (skeleton no formato final), empty, error inline.

## 6. Bans (AI-tells) — falhar qualquer um = retrabalhar
- Em-dash em qualquer lugar. AI-purple/neon glow. `#000`/`#fff` puros. 3 cards iguais lado a lado.
- Fake screenshots em `<div>`. SVG decorativo na mão. Custom cursor. Scroll cues ("↓ scroll").
- Section-number eyebrows (`01 / Capabilities`). Version stamps / locale-weather strips. Dots decorativos.
- Nav em 2 linhas no desktop. Hero estourando o viewport. Mistura de GSAP/Three com Motion na mesma árvore.

## 7. Checklist rápido antes de considerar um componente pronto
- [ ] Usa só tokens (sem hex solto)?  [ ] Acento é o azul-ciano e só ele?
- [ ] Raio dentro do sistema?  [ ] Zero em-dash no texto?
- [ ] Motion justificada + reduced-motion ok?  [ ] Colapso mobile explícito (`< 768px`)?
- [ ] Contraste WCAG AA em texto e botões?  [ ] Ícone de família única (Phosphor)?
