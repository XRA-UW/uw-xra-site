# UW XRA Site

## How can I edit this code?

To modify this site, follow these steps:

**Local Development**

1. Clone the repository and navigate to the project directory
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
4. Make your changes to the code
5. Commit your changes and push to the main branch

**Deployment**

Once you've pushed your changes to the main branch:

1. Run the deployment command: `npm run deploy`
2. This will automatically build the site and push it to the `gh-pages` branch
3. GitHub Pages is configured to serve the site from the `gh-pages` branch and will auto-update

**Requirements**

- Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

**Development Commands**

```sh
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Deployment

This site is deployed using GitHub Pages. The deployment process works as follows:

1. Make changes and commit them to the `main` branch
2. Run `npm run deploy` from the main branch
3. The site is automatically built and pushed to the `gh-pages` branch
4. GitHub Pages serves the site from the `gh-pages` branch and updates automatically

The live site is available at the GitHub Pages URL configured for this repository.
