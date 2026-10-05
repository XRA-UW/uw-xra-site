# UW XRA Site

The website for the Extended Reality Association at the University of Washington, live at https://students.washington.edu/xra/

## How can I edit this code?

**Local Development**

1. Clone the repository and navigate to the project directory
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
4. Make your changes to the code
5. Commit your changes and push to the main branch
6. Deploy to the live site (see [Deployment](#deployment); pushing alone does not update it)

**Development Commands**

```sh
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview the production build locally
npm run preview
```

**Requirements**

- Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

## Deployment

The live site is https://students.washington.edu/xra/, on UW student web hosting. Deploying it is a manual step, run from the repo root in **Git Bash** (not PowerShell, which hands `.sh` files off and silently does nothing):

```sh
bash ./scripts/deploy-uw.sh            # build and upload
bash ./scripts/deploy-uw.sh --dry-run  # build only and list what would be uploaded
```

The script builds for the `/xra/` path, copies `deploy/htaccess` in as `.htaccess` (the 301 redirects for the old Hack the AM URLs), refuses to upload a build aimed at the wrong site, and uploads over SSH to `xra@vergil.u.washington.edu:~/public_html`, so you need that account's login. It never deletes files on the server.

**GitHub Pages is not the live site.** Every push to `main` still runs `.github/workflows/deploy.yml`, but that build publishes only redirect pages that send each old `xra-uw.github.io/uw-xra-site/` URL to its UW equivalent. Pushing to `main` does not update the live content.

A normal release: merge to `main`, push, then run `bash ./scripts/deploy-uw.sh`.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Brand

The site follows the 2026 XRA rebrand:

| Token          | Hex       |
| -------------- | --------- |
| Primary Blue   | `#3A22FF` |
| Secondary Blue | `#201383` |
| Primary Green  | `#4CF190` |
| Off-White      | `#EFFFF7` |
| Grey           | `#848484` |
| Black          | `#121212` |

Typography is **Google Sans Flex** (via Google Fonts). Color tokens live in `src/index.css` (HSL custom properties) and are mapped to Tailwind utilities in `tailwind.config.ts`.

Logo geometry is exported from the [XRA brand file](https://www.figma.com/design/Lw03Q631UpcQlLA3AKnKve/XRA) — nodes `18:48` (X), `18:59` (R), `18:56` (A) — and lives in `src/components/Logo.tsx`, `public/favicon.svg`, and the tiled `.x-pattern` texture in `src/index.css`. `public/og-image.png` and the app icons are built from that same path data. Re-export from Figma rather than redrawing any of these by hand.
