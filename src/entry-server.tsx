/* Server entry used only at build time by scripts/prerender.mjs. It renders
   each route to static HTML so a crawler receives real content instead of an
   empty <div id="root">, which is why the site was not being indexed.

   Deliberately renders AppRoutes rather than App: the providers in App
   (toasts, tooltips) contribute nothing to the markup a crawler reads and are
   the parts most likely to touch browser globals during render. */
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { AppRoutes } from "./App";
import { BASE_PATH } from "./seo";

export function render(path: string): string {
  return renderToString(
    <StaticRouter basename={BASE_PATH} location={`${BASE_PATH}${path}`}>
      <AppRoutes />
    </StaticRouter>,
  );
}

/* Re-exported so the prerenderer reads the route table from one place rather
   than keeping its own copy in sync by hand. */
export {
  ROUTE_META,
  NOT_FOUND_META,
  SITE_URL,
  IS_CANONICAL_HOST,
  canonicalUrl,
} from "./seo";
