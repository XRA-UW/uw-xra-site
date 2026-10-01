import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

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
