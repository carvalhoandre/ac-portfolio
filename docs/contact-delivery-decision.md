# Contact delivery decision

## Previous failure

The previous form used a native `POST` with this action:

`/pt-BR/?contact=success#contato`

The Vite server on port 8080 does not emulate Netlify Forms, and the deployed static routing sends unknown requests to `404.html` with status 404. Submitting the form therefore performed a full navigation to a POST route with no server handler. The success message depended on the query string after that navigation, so it could not be reached reliably.

## Gmail SMTP evaluation

The only acceptable design was a Netlify Function using Nodemailer and Gmail SMTP with an app password stored exclusively in Netlify environment variables. SMTP from the browser and frontend credentials were rejected outright.

The server-side option was not retained because this workspace has:

- no linked Netlify site;
- no Netlify CLI installation;
- none of the required SMTP environment variables;
- no Gmail app password available to the server environment;
- no authenticated Deploy Preview or production context in which delivery, arrival, and `replyTo` could be verified.

Unit tests with a mocked mail transport would prove validation logic, but not the required Gmail authentication, delivery, preview, and production stability. An unverified Function would leave the visitor with another visually active but unreliable form. OAuth 2.0 was not attempted because it would add more untestable secrets and lifecycle complexity without resolving the missing deployment validation.

## Chosen solution

The form, native submission, success-query handling, honeypot, form-only styles, and Netlify Forms attributes were removed. Nodemailer, SMTP variables, `.env.example`, and a Netlify Function were not added.

The contact section always exposes:

- an encoded `mailto` link with the subject “Contato pelo portfólio” or “Portfolio contact”;
- LinkedIn;
- GitHub;
- WhatsApp;
- a copy-email button with accessible success and failure feedback;
- the localized résumé download.

These actions do not reload the application, navigate to a success route, change the language or theme, alter the hash, or move the viewport. The portfolio therefore no longer depends on SMTP, Netlify Forms processing, query strings, or browser-side configuration for contact.

## Security review

The current tree and the most recent 20 commits were searched by filename and content for Gmail SMTP hosts, SMTP password names, app-password references, OAuth client secrets, refresh tokens, credential-like filenames, and key material. Gmail matches were the public contact address and security-policy text; no SMTP credential assignment, tracked environment file, private key, client secret, refresh token, or app password was found.

If a server-side contact form is reconsidered later, it should start as a separate deployment task with a linked Netlify site, a new Gmail app password created specifically for the portfolio, environment variables entered only in Netlify, local validation through `netlify dev`, and verified delivery in Deploy Preview and production before the form is exposed.

## Validation

- clean installation: `npm ci` passed after the running Vite development processes were stopped;
- formatting, lint, and TypeScript checks: passed;
- unit tests: 10 passed, including copy success, copy failure, unchanged pathname, and correctly encoded direct contact links;
- end-to-end tests: 18 passed across 320 px, 390 px, and desktop, including unchanged URL, hash, and viewport in both locales;
- production build: passed, with 11 public routes and `404.html` prerendered;
- bundle audit: passed at 79.87 kB gzip for JavaScript and CSS;
- dependency audit: inconclusive because the local TLS certificate chain prevented access to the npm audit endpoint;
- local Gmail delivery, Deploy Preview delivery, and production delivery: not applicable because the rejected SMTP implementation was not added;
- visual review: passed on mobile and desktop using the direct-contact implementation.
