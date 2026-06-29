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
