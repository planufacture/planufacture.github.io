# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Installation

```bash
npm ci
```

## Local Development

```bash
npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## llms.txt and Markdown copies (used by the AI assistant)

The build also generates, via [`docusaurus-plugin-llms`](https://github.com/rachfop/docusaurus-plugin-llms)
(configured in `docusaurus.config.ts`):

- `/llms.txt` - one line per doc: its title, an absolute link to its Markdown copy, and its
  `description`
- `/docs/<page>.md` - a Markdown copy of each doc, next to its HTML page

Both are **generated**. Don't edit or commit them; they're rebuilt from `docs/` on every build.

The in-app AI assistant (planufacture-chat) relies on both. It picks pages to read from
the descriptions in `llms.txt`, then reads the `.md` copies. A page with a missing or vague
description is unlikely to be read.

**Every doc needs a front-matter `description`:** one sentence, in a planner's words, saying
what the page helps them do and the main screens or settings it covers. Keep it to
**150 characters or fewer**, or the plugin cuts it off with `...`. For example:

```md
---
description: "Set up processes: pick the process type (incl. Stepped Batch Release), set batch parameters, and add resource configurations with rates and lot sizes."
sidebar_position: 14
---
```

Only describe what the page actually covers. Pages under `src/pages/` (for example
`/markdown-page`) are not docs and are not included.

`npm run build` first runs `scripts/check-doc-descriptions.mjs`, which fails the build if a
doc has no description or one longer than 150 characters.

`npm start` does not serve `/llms.txt` or the `.md` copies, because they're only written by a
production build. To point the assistant at local docs, run `npm run build && npm run serve`.

## Deployment
This repository is configured to deploy to GitHub Pages using a GitHub Actions workflow.

Push changes to `main` and GitHub Actions will:

1. Install dependencies
2. Build the Docusaurus site
3. Deploy the generated `build` output to GitHub Pages

If you want to validate the production output locally first:

```bash
npm run build
npm run serve
```
