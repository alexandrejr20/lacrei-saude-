# Lacrei Saúde — Next.js + TypeScript + Styled-Components


Entrega do desafio técnico da lacrei saúde


## Requisitos
- Node 18+ / npm 9+


## Instalação
```bash
npm ci
npm run dev
```


## Scripts
- `npm run dev` — dev server
- `npm run build` — build
- `npm run start` — start
- `npm run test` — run tests
- `npm run lint` — lint


## Decisões técnicas
- Next.js (SSR/SSG) facilita SEO e SSR do styled-components.
- styled-components escolhido para manter estilo coeso e tema com tokens.
- React Hook Form + Zod para UX e validação simples e robusta.


## Checklist de Acessibilidade executada
- Landmarks: `<main>`, `<header>`, `<nav>`, `<footer>`
- Form fields com `<label>` associados e `aria-*` onde aplicável
- Focus states visíveis
- Contraste verificado (cores principais >= WCAG AA)
- Navegação por teclado testada


## Lighthouse
- Acessibilidade >= 90 (coloque aqui o print/resultados após rodar localmente)
- Performance >= 80


## Deploy & Rollback
- Recomendado: deploy em Vercel
- Rollback (manual): no painel do Vercel escolher deployment anterior e clicar em "Promote"; em CI, manter tag do último release funcional e reverter o merge PR/branch.


## Testes
- `src/tests/` contém 3 testes: Header, BookingForm, Accessibility


## Observações e melhorias
- Otimizar imagens (AVIF/WebP), usar `next/image` quando adaptar para assets reais.
- Adicionar monitoramento e testes end-to-end (Cypress).