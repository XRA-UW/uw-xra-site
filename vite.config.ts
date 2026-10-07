import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { REVEAL_AT_MS } from "./src/data/reveal";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Deploy target. Defaults to the GitHub Pages path so `npm run build` and
  // the Actions workflow keep behaving exactly as before. The UW student web
  // deploy (scripts/deploy-uw.sh) overrides it with DEPLOY_PATH=xra.
  //
  // DEPLOY_PATH is a bare path segment, NOT a leading-slash path, on purpose:
  // Git Bash on Windows rewrites env values that look like POSIX paths into
  // Windows paths, so DEPLOY_BASE=/xra/ silently became "/Program Files/Git/xra/".
  // A bare segment is never touched. Do not "tidy" this back to a full path.
  base: `/${process.env.DEPLOY_PATH || 'uw-xra-site'}/`,
  /* Embargo switch for the 2027 tracks and sponsors (src/data/hackathon.ts).
     Decided when the build runs, not in the browser: a build made before the
     reveal compiles __REVEALED__ to the literal false, so the embargoed data
     is dropped as dead code and never ships in the HTML or the JS bundle.
     REVEAL=1 forces a revealed build for previewing locally; never deploy one
     early. */
  define: {
    __REVEALED__: JSON.stringify(
      process.env.REVEAL === "1" || Date.now() >= REVEAL_AT_MS,
    ),
  },
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
