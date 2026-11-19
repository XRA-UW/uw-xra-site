# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Website for the Extended Reality Association (XRA) at the University of Washington. Vite + React 18 + TypeScript + Tailwind + shadcn/ui, statically prerendered at build time. Originally scaffolded with Lovable (hence `lovable-tagger`, `public/lovable-uploads/`).

## Commands

```sh
npm install
npm run dev        # Vite dev server on port 8080, served under /uw-xra-site/
npm run build      # client build + SSR build + scripts/prerender.mjs
npm run lint       # eslint
npm run preview    # serve dist/
```

There is no test suite. `npm run build` is the real check: the prerenderer asserts every head-tag substitution and fails loudly if `index.html` drifts.

Deploy to the canonical host (run in Git Bash, not PowerShell; PowerShell silently does nothing with a `.sh`):

```sh
bash ./scripts/deploy-uw.sh            # build for students.washington.edu/xra/ and upload over SSH
bash ./scripts/deploy-uw.sh --dry-run  # build and list payload only
```

## Two deploy targets, one canonical

- **Canonical:** `https://students.washington.edu/xra/`, deployed manually by `scripts/deploy-uw.sh` (sets `DEPLOY_PATH=xra` and `VITE_SITE_ORIGIN`, copies `deploy/htaccess` to `dist/.htaccess`, tar-over-SSH, never deletes remote files).
- **GitHub Pages:** every push to `main` runs `.github/workflows/deploy.yml`. Because this build is not the canonical host (`IS_CANONICAL_HOST` false in `src/seo.ts`), the prerenderer emits **redirect stubs** to the UW site instead of content. Pushing to `main` does not update the live content.
- `vite.config.ts` reads `DEPLOY_PATH` as a bare path segment on purpose (Git Bash mangles values that look like POSIX paths). Do not change it to a leading-slash path.
- `deploy/htaccess` holds the 301s from the old `hacktheam/` and `hack/` paths into `/xra/hackathon/2026/`. It uses anchored `RedirectMatch`, not `Redirect`, deliberately.

## Rendering and routing architecture

- `BrowserRouter` with real paths (not `HashRouter`). `src/main.tsx` rewrites legacy `#/route` links before mounting; the root redirect stub does the same on the Pages build.
- `AppRoutes` in `src/App.tsx` is router-agnostic so the client (`BrowserRouter`) and `src/entry-server.tsx` (`StaticRouter`) share it.
- `scripts/prerender.mjs` renders each route in `ROUTE_META` to `dist/<route>/index.html`, rewrites title/description/canonical/og/twitter tags in the built `index.html`, writes `404.html` (noindex) and `sitemap.xml`.
- The client uses `createRoot`, not `hydrateRoot`, intentionally: some prerendered content is time-dependent (buildspace deadline in `Index.tsx`, copyright year in `Footer.tsx`), so hydration would mismatch as the snapshot ages.
- `DocumentMeta` in `App.tsx` keeps head tags in sync on client-side navigation.

**Adding a route** requires both a `<Route>` in `AppRoutes` (above the `*` catch-all) and an entry in `ROUTE_META` in `src/seo.ts`. Missing the latter ships the page with 404 metadata and leaves it out of the sitemap. Edit per-route titles/descriptions in `src/seo.ts`, not `index.html`; the `index.html` values are only the dev fallback and must keep their exact tag shapes for the prerenderer's regexes.

Canonical URLs are always trailing-slashed (`canonicalUrl()`); internal links should point at the trailing-slash form too.

## Content and branding

- Roster: `src/data/people.ts`. Projects: `src/data/projects.ts` (`currentProjects` may be empty; the page handles it). Most other copy lives inline in `src/pages/*.tsx`.
- Brand colors are HSL custom properties in `src/index.css`, mapped to Tailwind in `tailwind.config.ts`. All colors must be HSL. Font is Google Sans Flex from Google Fonts (`index.html`).
- Logo geometry comes from the XRA Figma file (nodes `18:48`, `18:59`, `18:56`) and appears in `src/components/Logo.tsx`, `public/favicon.svg`, the `.x-pattern` utility in `src/index.css`, `public/og-image.png`, and the app icons. Re-export from Figma rather than hand-editing paths.
- Organization JSON-LD lives in `index.html`; only include `sameAs` URLs XRA confirms it owns.
- Copy follows the UW Brand editorial guide (e.g. times as `10 a.m.`, `noon`; no `AM`/`PM`).
- `src/components/ui/` is stock shadcn; prefer composing over editing it.

## Conventions

- Commit messages: imperative, sentence-case subject; body explains why. Code comments likewise explain the reason for non-obvious choices, and many existing ones warn against specific "tidy-ups". Read them before changing nearby code.
- `Claude outputs/` holds generated preview/asset images, not site source.
