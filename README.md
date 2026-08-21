# UW XRA Site

The website for the Extended Reality Association at the University of Washington, live at https://xra-uw.github.io/uw-xra-site/

## How can I edit this code?

**Local Development**

1. Clone the repository and navigate to the project directory
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
4. Make your changes to the code
5. Commit your changes and push to the main branch

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

Deployment is fully automatic: every push to the `main` branch triggers the GitHub Actions workflow in `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages. There is no manual deploy step.

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

Typography is **Google Sans Flex** (via Google Fonts). Color tokens live in `src/index.css` (HSL custom properties) and are mapped to Tailwind utilities in `tailwind.config.ts`. The X logo mark is drawn as an SVG path in `src/components/Logo.tsx`, `public/favicon.svg`, and the raster assets in `public/`.
