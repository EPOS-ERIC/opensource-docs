# Agent Guidelines for EPOS open source documentation

## Project Overview

- This repo is a Docusaurus 3 site using the classic preset with a single docs plugin mounted at `routeBasePath: '/'`, so docs routes do not use a `/docs/` prefix.
- The published site also uses `baseUrl: '/opensource-docs/'`. That mostly matters when editing `docusaurus.config.js`, the custom homepage, footer HTML, or other hard-coded routes outside normal relative doc links.
- The main sidebar-driven documentation lives under `docs/documentation/` and is wired into the manual `documentationSidebar` defined in `sidebars.js`.
- Standalone navbar-linked docs currently live under `docs/citation/index.md` and `docs/contributors/index.md`.
- Navigation is explicit in this repo: `sidebars.js` controls the left sidebar and doc ordering, while `docusaurus.config.js` controls the docs plugin settings, navbar, footer, Mermaid support, and local search plugin.

## Core Commands

- **Install**: `npm install`
- **Development**: `npm run start`
- **Build**: `npm run build`
- **Clear Docusaurus cache**: `npm run clear`
- There is no dedicated lint or test script in `package.json`; `npm run build` is the main verification step.

## Important Paths

- `docs/documentation/`: main sidebar-driven docs tree
- `docs/citation/index.md`, `docs/contributors/index.md`: standalone docs linked from the navbar
- `docs/documentation/index.md`: documentation landing page
- `docs/documentation/**/index.md`: overview pages, section landing pages, and top-level docs in `documentationSidebar`
- `sidebars.js`: manual sidebar structure, ordering, and category doc links
- `docusaurus.config.js`: docs plugin config, navbar, footer, Mermaid, search, and site `baseUrl`
- `src/pages/index.js`: custom homepage sections and promoted links into the docs
- `src/components/`: React/MDX helpers used inside docs, including `MermaidFullScreen.tsx`, `RemoteCodeBlock.js`, and `ContributorCard.jsx`
- `static/img`, `static/examples`, `static/documents`: screenshots, example payloads, and downloadable assets

## Adding or Updating Docs

- Put new content in the closest matching folder under `docs/documentation/`, unless you are intentionally creating a standalone navbar page such as `citation` or `contributors`.
- Prefer folders with an `index.md` page for section landing pages and top-level standalone docs inside `docs/documentation/`.
- Front matter should be used on docs. In this repo, `title` is commonly set; add `id` only when you need a stable custom doc id or need to decouple the doc id from the filename.
- This repo uses `.md` files with MDX features enabled, so imports such as `@theme/Tabs`, `@theme/TabItem`, or `@site/src/components/...` are valid inside docs.
- Existing docs already use admonitions, tabs, Mermaid, and custom helpers such as `RemoteCodeBlock` and `MermaidFullScreen`; reuse those patterns when they fit.
- Store screenshots and attachments in `static/`. In markdown docs, screenshots are commonly referenced with `/img/...`; in custom React or raw HTML, make sure links remain compatible with the published `/opensource-docs/` base URL.
- Prefer relative links between nearby docs. When editing config, homepage React, or raw HTML, remember that the deployed site lives under `/opensource-docs/`.

## Sidebar, Navbar, and Route Updates

- In this repo, `sidebars.js` is the source of truth for sidebar order.
- Update `sidebars.js` whenever a new doc should appear in the left sidebar, when a doc moves, or when the order of a section changes.
- Sidebar doc ids usually follow the file path under `docs/` without the extension. Example: `docs/documentation/installation/index.md` maps to `documentation/installation/index`.
- Front matter `id` can override the final path segment when needed, so check the doc front matter before assuming the id from the filename alone.
- When a sidebar category uses `link: { type: 'doc' }`, make sure the linked overview doc exists and matches the configured id. In this repo those overview docs are usually nested `index.md` files.
- If a new page should appear in the top navigation or footer, add or update the corresponding item in `docusaurus.config.js`.
- If new docs should be featured from the homepage, update the relevant links or sections in `src/pages/index.js`.
- After renaming or moving docs, check for stale references in `sidebars.js`, `docusaurus.config.js`, `src/pages/index.js`, and cross-links inside other docs.

## Content and MDX Patterns

- The repo already uses standard markdown, fenced code blocks, tables, admonitions, tabs, imported React components, and Mermaid diagrams.
- Task-oriented guides are concentrated under `docs/documentation/guides/` and `docs/documentation/installation/`, while descriptive reference pages mostly live under `docs/documentation/system-reference/`.
- Reuse existing Docusaurus components like tabs and admonitions before creating new custom UI.
- If documentation needs custom rendering or interactive behavior, prefer the existing focused helpers in `src/components/` before adding new ones.
- Keep MDX imports minimal and only add them when the doc actually uses them.
- Prefer ASCII unless a source file already uses non-ASCII content intentionally.

## File Naming Conventions

- For markdown docs and folders, use lowercase kebab-case.
- Use `index.md` for nested overview pages and section landing pages. Top-level docs under `docs/documentation/` currently use descriptive filenames instead of `index.md`.
- For static assets, prefer descriptive lowercase kebab-case names.
- For components in `src/components/`, prefer PascalCase filenames.
- Keep related style files next to the component they belong to, following the existing directory-based pattern used by `src/components/HomepageFeatures/`.

## React and Styling Conventions

- Docs import lightweight React helpers directly from `src/components/`.
- Existing components are small and single-purpose, for example `MermaidFullScreen.tsx` and `RemoteCodeBlock.js`.
- When editing `.tsx` components, keep the explicit prop typing pattern already used in `MermaidFullScreen.tsx`.
- Keep filename and symbol casing aligned when renaming or importing components.
- Add comments only when the reason for a non-obvious implementation needs explaining.

## Verification Checklist

- Run `npm run build` after changing docs structure, front matter, sidebars, navbar/footer config, homepage links, Docusaurus config, or MDX imports.
- Confirm the new or moved page renders at the expected route and appears in the intended sidebar or navbar position.
- Check next/previous navigation when editing sidebar sequences.
- Verify all images, downloadable assets, and example files resolve correctly from `static/`.
- If you touched imported MDX components or custom React helpers, make sure the affected pages still render without MDX or build errors.
