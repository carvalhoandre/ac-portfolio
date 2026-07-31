# Comparação do roteamento na Netlify

## Escopo e estado inicial

A comparação foi feita em 31 de julho de 2026 entre os checkouts locais:

- referência: `carvalhoandre/prumo-gestao-web`, branch `main`, commit `ed6ba83`;
- alvo: `carvalhoandre/ac-portfolio`, branch `master`, commit `5a5f569`.

Os dois repositórios estavam limpos antes da análise. O repositório de referência
foi usado somente para leitura, instalação e geração local do artefato `dist`; não
foram feitos commits nem alterações em arquivos versionados nele.

## Estrutura de navegação do Prumo Gestão

O Prumo é uma SPA React 19 construída com Vite 8. O arquivo
`src/app/App.tsx` usa `BrowserRouter`, `Routes` e `Route` do React Router DOM 7.
As rotas públicas, autenticadas e dinâmicas são interpretadas no cliente. A última
rota, `path="*"`, renderiza o componente interno `NotFoundPage`.

Como as rotas não geram arquivos HTML individuais, o servidor precisa entregar
`index.html` para qualquer navegação de aplicação que não corresponda a um arquivo
real. Depois disso, o React Router resolve a URL no navegador.

## Estrutura de navegação do portfólio

O portfólio é uma aplicação React 19 e Vite 8 híbrida, com pré-renderização
estática e navegação no cliente. Antes da migração, não usava React Router:
`src/main.tsx` lia `window.location.pathname`, `resolveRoute()` comparava strings
com caixa exata e `App.tsx` escolhia a página por `route.type`.

Depois da migração, o cliente usa `BrowserRouter` e uma árvore declarativa com
`Routes`, `Route`, rotas aninhadas por idioma e catch-all localizado. As rotas são
case-insensitive, como é padrão no React Router, portanto `/pt-BR/` e `/pt-br/`
resolvem para a mesma página. `Header`, `Footer` e `MotionController` permanecem no
layout compartilhado. `HomePage`, `ProjectPage` e `NotFoundPage` são carregadas
com `React.lazy` em chunks independentes.

O servidor usa `StaticRouter` com componentes síncronos para manter a
pré-renderização. O manifesto de rotas também alimenta os metadados de SEO e
valida os quatro slugs conhecidos. Slugs desconhecidos e outras rotas continuam
renderizando `src/pages/NotFoundPage.tsx`, com as mesmas ações de voltar ao início,
ver projetos e entrar em contato.

## Estratégia de build

### Prumo Gestão

- comando: `tsc -b && vite build`;
- publicação: `dist` por convenção do Vite;
- resultado: uma SPA com `dist/index.html`, bundles em `dist/assets`, PWA,
  `dist/404.html` e os arquivos de configuração copiados de `public`;
- confirmação local: o build gerou `dist/_redirects` com exatamente o mesmo
  conteúdo de `public/_redirects`.

### Portfólio

- comando versionado na Netlify: `npm run build`;
- publicação versionada na Netlify: `dist`;
- pipeline: sincronização do conteúdo do GitHub, typecheck, build cliente, build
  SSR e `scripts/prerender.mjs`;
- resultado esperado: `index.html`, bundles, assets públicos, 11 rotas públicas
  pré-renderizadas e `404.html`;
- confirmação anterior à correção: `npm run build:client` gerou
  `dist/index.html` e `dist/assets`, mas não gerou `dist/_redirects`, porque esse
  arquivo não existia mais em `public`.

## Estratégia de fallback e arquivos encontrados

### Prumo Gestão

O repositório não possui `netlify.toml`. A fonte única das regras é
`public/_redirects`. Ela protege manifest, service worker, chunks Workbox e os
namespaces de arquivos estáticos antes da última regra:

```text
/manifest.webmanifest /404.html 404
/sw.js /404.html 404
/workbox-* /404.html 404
/icons/* /404.html 404
/og/* /404.html 404
/screenshots/* /404.html 404
/assets/* /404.html 404
/files/* /404.html 404
/* /index.html 200
```

Arquivos reais continuam tendo precedência, pois as regras não usam `force`. Um
asset ausente recebe o `404.html`; uma rota da SPA recebe `index.html` com status
200; e o React Router decide se a rota é válida ou se deve exibir a página 404
interna.

### Portfólio antes da correção definitiva

O arquivo `netlify.toml` contém build, diretório de publicação, cabeçalhos, três
redirects legados e a rewrite `/* -> /index.html` com status 200. O antigo
`public/_redirects` foi removido no commit `e29dd95`, portanto a configuração de
roteamento não faz parte do diretório publicado.

Essa regra geral também não protege namespaces estáticos. No deploy público,
`/assets/nao-existe.js` e `/images/nao-existe.webp` responderam `200 text/html`,
com o cache de assets aplicado, em vez de um 404. Isso pode esconder erros de
referência e armazenar o shell HTML como se fosse JavaScript ou imagem.

## Comportamento observado

### Ambiente local

- o build do Prumo copiou `public/_redirects` para `dist/_redirects`;
- o build cliente do portfólio, antes da correção, não publicou `_redirects`;
- o Vite em desenvolvimento ou preview não é evidência suficiente da configuração
  de redirects da Netlify, pois o servidor do Vite tem fallback próprio.

### Netlify pública

Requisições HTTP ao domínio canônico redirecionaram para `www` e normalizaram
`/pt-BR/` para `/pt-br/`. No momento da análise, as rotas abaixo terminaram em
`200 text/html` e a página de projeto correta estava no corpo:

- `/pt-BR/projetos/ac-labs/`;
- `/en/projects/ac-labs/`;
- `/pt-BR/projetos/ac-dogs/`.

Uma rota desconhecida também terminou em `200 text/html`, como esperado para uma
404 controlada no cliente após a rewrite. Assets inexistentes também terminaram
em `200 text/html`, o que não é esperado e demonstra a falta das regras de
proteção presentes no Prumo.

## Causa exata do 404 interno

A resposta HTTP e o corpo pré-renderizado da página estavam corretos. A falha
ocorria depois, no cliente: a Netlify normaliza `/pt-BR/` para `/pt-br/`, enquanto
o resolvedor anterior comparava a URL recebida com strings como
`/pt-BR/projetos/ac-labs/`. A comparação case-sensitive falhava e produzia
`route.type === "notFound"`, exibindo o componente interno do portfólio.

O fallback ausente no artefato continuava sendo um risco separado de deploy e foi
corrigido com `public/_redirects`. A migração para React Router corrige a causa da
404 interna sem remover o fallback ou a página 404 legítima.

## Solução escolhida

Combinar o padrão de deploy do Prumo com roteamento declarativo:

1. tornar `public/_redirects` a fonte única de redirects;
2. manter os redirects legados no início;
3. proteger os namespaces e arquivos estáticos do portfólio antes do fallback;
4. manter `/* /index.html 200` como última regra;
5. remover as regras de redirect duplicadas do `netlify.toml`, preservando nele
   apenas build, publish, ambiente e headers;
6. confirmar após o build que `dist/_redirects` existe e contém a ordem correta.
7. usar `BrowserRouter` no cliente e `StaticRouter` no prerender;
8. declarar rotas localizadas, dinâmicas e catch-all com React Router DOM;
9. carregar as três páginas com `React.lazy`, mantendo o layout compartilhado;
10. identificar no HTML qual rota foi pré-renderizada e só hidratar quando ela
    corresponder semanticamente à URL atual, evitando mismatch quando a Netlify
    entregar `index.html` pelo fallback.

Não será adotado `HashRouter`, migração de framework, HTML manual por slug ou
redirect individual por projeto. As páginas pré-renderizadas continuam tendo
precedência, e o fallback cobre acessos profundos quando um arquivo físico não for
resolvido.

## Riscos e controles

- **Fallback esconder assets ausentes:** controlado por regras 404 específicas
  antes do catch-all.
- **Configuração duplicada:** controlado removendo redirects do `netlify.toml`.
- **Interferência nas páginas pré-renderizadas:** evitada por não usar `force`;
  arquivos reais continuam prioritários.
- **404 legítima eliminada:** evitada mantendo as rotas catch-all localizadas, a
  validação de slugs e o arquivo pré-renderizado `404.html`.
- **Diferenças de painel da Netlify:** o `_redirects` dentro de `dist` reduz a
  dependência da descoberta do TOML, embora build e publish ainda devam permanecer
  alinhados com `netlify.toml`.

## Testes realizados antes da correção

- `git status --short --branch` e branch atual nos dois repositórios;
- inspeção de `App.tsx`, `package.json`, `vite.config.ts`, páginas 404 e arquivos
  de configuração dos dois projetos;
- `npm ci` e `npm run build` no Prumo;
- inspeção de `prumo-gestao-web/dist/_redirects`;
- `npm run build:client` no portfólio e confirmação de `_redirects` ausente;
- requisições HTTP às rotas localizadas válidas, rota desconhecida e assets
  inexistentes no domínio de produção.

## Resultados após a implementação

- `npm ci --offline`: concluído com 288 pacotes instalados pelo lockfile;
- `react-router-dom@7.18.1`: instalado como dependência de produção;
- Prettier nos arquivos novos suportados: aprovado;
- `npm run format:check`: bloqueado por 51 arquivos versionados preexistentes com
  divergências de formatação/fim de linha neste checkout Windows; nenhum deles foi
  reformatado fora do escopo;
- `npx prettier --check . --end-of-line auto`: aprovado para todo o repositório,
  confirmando que a falha anterior se limita à política de fim de linha local;
- `npm run lint`: aprovado;
- `npm run typecheck`: aprovado;
- `npm test`: 2 arquivos e 15 testes aprovados, incluindo as regras da Netlify,
  URL `/pt-br/` normalizada e slug de projeto desconhecido;
- `npm run build`: aprovado; 11 rotas públicas e `404.html` pré-renderizados;
- lazy loading confirmado no artefato pelos chunks separados `HomePage`,
  `ProjectPage` e `NotFoundPage`;
- cada página pré-renderizada registra `data-prerender-path`, permitindo evitar
  hydration mismatch quando o fallback servir um shell de outra rota;
- inspeção do build: `dist/index.html`, `dist/404.html`, assets, oito páginas de
  projeto localizadas e `dist/_redirects` presentes;
- conteúdo de `dist/_redirects`: idêntico a `public/_redirects`, com o fallback
  como última regra;
- `npm run test:e2e` contra `vite preview` do build: 21 testes aprovados nos três
  viewports configurados;
- acesso direto e refresh E2E: aprovados para `/pt-BR/projetos/ac-labs/`,
  `/pt-br/projetos/ac-labs/` e `/en/projects/ac-labs/`;
- erros de console e de página durante esses acessos: nenhum;
- 404 interna E2E: aprovada para rota desconhecida;
- assets e links relativos no código: nenhuma referência problemática encontrada;
- sitemap, canonical, Open Graph e hreflang de `ac-labs`: alinhados com as rotas
  localizadas e o domínio canônico;
- produção existente antes da publicação desta mudança: HTTP 200 para `/`,
  `/pt-BR/`, `/en/`, projetos válidos com e sem trailing slash e rotas
  desconhecidas; o conteúdo de `ac-labs` foi confirmado no corpo;
- Netlify CLI: não executado porque a instalação temporária falhou com
  `UNABLE_TO_VERIFY_LEAF_SIGNATURE` no registry npm;
- Deploy Preview da mudança: pendente; o GitHub CLI está instalado, mas não está
  autenticado, portanto não foi possível criar branch, commit, push e PR com
  segurança;
- repositório de referência após instalação e build: worktree continuou limpo em
  `main`.

Para concluir a validação externa, autenticar o GitHub CLI com `gh auth login`,
publicar a branch da correção, aguardar o Deploy Preview e repetir a matriz HTTP.
Nesse preview, os projetos devem responder `200 text/html`, rotas desconhecidas
devem carregar a 404 interna e assets inexistentes devem responder HTTP 404.
