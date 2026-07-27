# Portfolio refactor plan

## Stack encontrada

- React 19.2, TypeScript 5.9 e Vite 8, entregues como SPA no Netlify.
- npm e `package-lock.json` como gerenciador e lockfile oficiais.
- CSS global e CSS por componente; conteúdo distribuído entre JSON de tradução, hooks e componentes.
- Internacionalização exclusivamente client-side com i18next; tema também controlado no cliente.
- Não há testes automatizados, E2E, Lighthouse CI ou pipeline de CI versionado.
- Domínio canônico confirmado no README: `https://andreleitecarvalho.space`.

## Baseline e problemas atuais

- Lighthouse mobile local: Performance 83, Accessibility 100, Best Practices 96 e SEO 92; LCP 3,8 s, CLS 0,103 e TBT 40 ms.
- Lighthouse desktop local: Performance 99, Accessibility 100, Best Practices 100 e SEO 92; LCP 0,8 s e CLS 0,041.
- O lint falha com quatro erros e cinco avisos. O build passa.
- Loader artificial cobre toda a primeira renderização, inclusive o Hero.
- Bundle principal de 306,28 kB (100,26 kB gzip), além de um chunk da Home de 22,29 kB (6,43 kB gzip).
- Currículos têm 2,04 MB e 1,87 MB; fotografias não têm `srcset` nem AVIF.
- Header móvel fica no rodapé, sem gestão de foco, Escape ou bloqueio de scroll.
- Container limitado a 768 px, excesso de vazios, Hero genérico e carrossel com CTA “Ir!”.
- Ordem atual prioriza biografia antes dos projetos; não há seção clara de impacto profissional.
- Conteúdo profissional, links e datas estão duplicados e há inconsistências entre PT e EN.
- O e-mail no link contém erro de digitação (`cavalho`), embora o texto visível esteja correto.
- HTML inicial usa `lang="en"`, domínio Netlify antigo, perfis sociais incorretos e dados estruturados fictícios (`University Name`, `AC Developer`).
- Não existem canonical, hreflang, sitemap ou robots válidos; não há 404 real.
- Rotas de idioma não são indexáveis separadamente e metadados não mudam por idioma.
- `outline: none` é aplicado globalmente; estados de foco dependem de estilos insuficientes.
- A auditoria npm ficou limitada por erro de certificado no endpoint de audit; `npm outdated` não reportou pacotes desatualizados.

## Dependências

- Remover pacotes sem uso direto: `js-yaml`, `minimatch`, `rollup`, `@types/md5` e o plugin React duplicado.
- Substituir i18next/react-i18next por conteúdo tipado, porque são desnecessários para apenas duas versões estáticas.
- Remover React Router e lucide-react em favor de rotas pré-renderizadas e ícones SVG locais.
- Manter React, React DOM, TypeScript, Vite, ESLint, Prettier e Husky.
- Adicionar apenas ferramentas justificadas para teste, acessibilidade e otimização de imagens.

## Componentes mantidos e removidos

- Manter: fotografias reais, logos, ilustrações dos três projetos, currículos e conteúdo profissional confirmado.
- Reescrever: Header, Hero, Projects, Expertise, Experience, About, Journey, Contact, Footer e tratamento de erro.
- Remover: Loader artificial, carrossel, slider, skeleton global, notificações sem uso, serviços/modal antigos, depoimentos não publicados e abstrações genéricas que aumentam o bundle.

## Nova arquitetura da página

1. Header compacto e acessível.
2. Hero com posicionamento, fotografia e três CTAs.
3. Projetos selecionados em grid editorial e páginas de estudo de caso.
4. Especialidades aplicadas, com tecnologias como suporte.
5. Experiência e impacto sem métricas inventadas.
6. Sobre André.
7. Formação e trajetória com tabs acessíveis.
8. André’s Lab, usando a URL pública já existente.
9. Contato objetivo.
10. Footer simplificado.

As versões `/pt-BR` e `/en` serão pré-renderizadas com canonical, hreflang e metadata próprios. As páginas de projeto também serão pré-renderizadas; uma 404 real cobrirá URLs inexistentes.

## Plano de commits

1. `chore: audit and update project dependencies`
2. `refactor: reorganize portfolio information architecture`
3. `feat: redesign hero and navigation experience`
4. `feat: rebuild projects as case studies`
5. `feat: improve expertise experience and journey sections`
6. `perf: optimize images fonts and loading strategy`
7. `feat: improve contact flows and portfolio calls to action`
8. `feat: add portfolio seo and social metadata`
9. `test: add responsive accessibility and seo coverage`
10. `test: add end to end portfolio flows`
11. `chore: validate production build and lighthouse targets`

Commits poderão ser agrupados quando uma alteração for tecnicamente indivisível, mantendo escopo semântico claro.
