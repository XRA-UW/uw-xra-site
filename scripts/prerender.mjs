/* Build-time prerenderer.
 *
 * Runs after `vite build` (client) and `vite build --ssr` (server). For each
 * route it renders the React tree to a string, injects it into the client
 * build's index.html along with that route's title, description, canonical and
 * social tags, and writes the result as a real file on disk:
 *
 *   /            -> dist/index.html
 *   /hackathon   -> dist/hackathon/index.html
 *   ...          -> dist/<route>/index.html
 *   unmatched    -> dist/404.html  (noindex)
 *
 * GitHub Pages serves dist/<route>/index.html for /<route>, so every route is
 * a crawlable URL that works on direct load, with its content present in the
 * initial HTML response. It also writes dist/sitemap.xml from the same route
 * table.
 *
 * Every substitution is asserted: if index.html is edited such that a tag no
 * longer matches, the build fails loudly rather than silently shipping pages
 * with the wrong metadata.
 */
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const root = process.cwd();
const dist = path.join(root, "dist");
const ssrEntry = path.join(root, "dist-ssr", "entry-server.js");

if (!fs.existsSync(ssrEntry)) {
  throw new Error(
    `prerender: missing ${ssrEntry}. Run the --ssr build before this script.`,
  );
}

const {
  render,
  ROUTE_META,
  NOT_FOUND_META,
  canonicalUrl,
  SITE_URL,
  IS_CANONICAL_HOST,
  CANONICAL_ROOT,
} = await import(pathToFileURL(ssrEntry).href);

const template = fs.readFileSync(path.join(dist, "index.html"), "utf8");

const esc = (s) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

/** Replace the first match of `pattern`, or throw naming what went missing. */
function sub(html, pattern, replacement, label) {
  if (!pattern.test(html)) {
    throw new Error(
      `prerender: no match for ${label} in index.html. The tag was renamed or removed; update scripts/prerender.mjs.`,
    );
  }
  return html.replace(pattern, () => replacement);
}

function buildPage({ title, description, url, body, noindex = false }) {
  let html = template;
  html = sub(html, /<title>[\s\S]*?<\/title>/, `<title>${esc(title)}</title>`, "<title>");
  html = sub(
    html,
    /<meta name="description" content="[^"]*"\s*\/?>/,
    `<meta name="description" content="${esc(description)}" />`,
    'meta[name="description"]',
  );
  html = sub(
    html,
    /<meta property="og:title" content="[^"]*"\s*\/?>/,
    `<meta property="og:title" content="${esc(title)}" />`,
    'meta[property="og:title"]',
  );
  html = sub(
    html,
    /<meta property="og:description" content="[^"]*"\s*\/?>/,
    `<meta property="og:description" content="${esc(description)}" />`,
    'meta[property="og:description"]',
  );
  html = sub(
    html,
    /<meta property="og:url" content="[^"]*"\s*\/?>/,
    `<meta property="og:url" content="${esc(url)}" />`,
    'meta[property="og:url"]',
  );
  html = sub(
    html,
    /<meta name="twitter:title" content="[^"]*"\s*\/?>/,
    `<meta name="twitter:title" content="${esc(title)}" />`,
    'meta[name="twitter:title"]',
  );
  html = sub(
    html,
    /<meta name="twitter:description" content="[^"]*"\s*\/?>/,
    `<meta name="twitter:description" content="${esc(description)}" />`,
    'meta[name="twitter:description"]',
  );
  html = sub(
    html,
    /<link rel="canonical" href="[^"]*"\s*\/?>/,
    noindex
      ? '<meta name="robots" content="noindex" />'
      : `<link rel="canonical" href="${esc(url)}" />`,
    'link[rel="canonical"]',
  );
  html = sub(
    html,
    /<div id="root"><\/div>/,
    `<div id="root">${body}</div>`,
    '<div id="root">',
  );
  return html;
}

function writePage(routePath, html) {
  const out =
    routePath === "/"
      ? path.join(dist, "index.html")
      : path.join(dist, routePath.replace(/^\//, ""), "index.html");
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, html, "utf8");
  return path.relative(dist, out).replace(/\\/g, "/");
}

/* A build that is not the canonical host does not publish the site at all: it
   publishes redirect stubs. A full content page carrying a meta refresh is
   what Google calls a sneaky redirect, and leaving the content in place with
   only a canonical leaves two copies competing. A dedicated stub is the honest
   version of "this moved", and combined with the canonical it is the strongest
   consolidation signal available without server-side 301s, which GitHub Pages
   cannot do for a project site. */
function redirectStub({ target, legacyHash = false }) {
  const t = esc(target);
  /* Old HashRouter links (#/hackathon) still exist in the wild. Without this
     the fragment is dropped and every one of them lands on the new home page
     instead of the page it named. Only the root stub sees them, because the
     fragment never reaches the server. */
  const hashFix = legacyHash
    ? `
      var h = window.location.hash;
      if (h.indexOf("#/") === 0) {
        var p = h.slice(1);
        while (p.length > 1 && p.charAt(p.length - 1) === "/") { p = p.slice(0, -1); }
        target = ${JSON.stringify(CANONICAL_ROOT)} + (p === "/" ? "/" : p + "/");
      }`
    : "";
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>XRA has moved</title>
    <link rel="canonical" href="${t}" />
    <meta http-equiv="refresh" content="0; url=${t}" />
    <meta name="description" content="The Extended Reality Association at the University of Washington has moved to students.washington.edu/xra." />
    <style>
      :root { color-scheme: light dark; }
      body {
        margin: 0; min-height: 100vh; display: grid; place-items: center;
        font: 400 16px/1.6 system-ui, -apple-system, "Segoe UI", sans-serif;
        background: #121212; color: #efeff7; padding: 24px;
      }
      main { max-width: 32rem; text-align: center; }
      h1 { font-size: 1.5rem; font-weight: 500; margin: 0 0 0.75rem; }
      p { margin: 0 0 1.25rem; color: #a9a9b3; }
      a { color: #4cf190; overflow-wrap: anywhere; }
    </style>
  </head>
  <body>
    <main>
      <h1>XRA has moved</h1>
      <p>This site now lives at <a href="${t}">${t}</a>.</p>
    </main>
    <script>
      var target = ${JSON.stringify(target)};${hashFix}
      window.location.replace(target);
    </script>
  </body>
</html>
`;
}

if (!IS_CANONICAL_HOST) {
  const made = [];
  for (const route of ROUTE_META) {
    made.push(
      writePage(
        route.path,
        redirectStub({
          target: canonicalUrl(route.path),
          legacyHash: route.path === "/",
        }),
      ),
    );
  }
  fs.writeFileSync(
    path.join(dist, "404.html"),
    redirectStub({ target: canonicalUrl("/") }),
    "utf8",
  );
  made.push("404.html");

  fs.rmSync(path.join(root, "dist-ssr"), { recursive: true, force: true });
  console.log(`wrote ${made.length} redirect stubs to ${CANONICAL_ROOT}:`);
  for (const f of made) console.log(`  dist/${f}`);
  process.exit(0);
}

const written = [];

for (const route of ROUTE_META) {
  const html = buildPage({
    title: route.title,
    description: route.description,
    url: canonicalUrl(route.path),
    body: render(route.path),
  });
  written.push(writePage(route.path, html));
}

/* 404.html: GitHub Pages serves this for any unmatched path under the project
   base, so the SPA still boots and routes to NotFound. noindex, and no
   canonical, because it is not a real URL. */
fs.writeFileSync(
  path.join(dist, "404.html"),
  buildPage({
    title: NOT_FOUND_META.title,
    description: NOT_FOUND_META.description,
    url: SITE_URL,
    body: render("/__prerender-not-found"),
    noindex: true,
  }),
  "utf8",
);
written.push("404.html");

const lastmod = new Date().toISOString().slice(0, 10);
const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...ROUTE_META.map(
    (r) =>
      `  <url><loc>${esc(canonicalUrl(r.path))}</loc><lastmod>${lastmod}</lastmod></url>`,
  ),
  "</urlset>",
  "",
].join("\n");
fs.writeFileSync(path.join(dist, "sitemap.xml"), sitemap, "utf8");
written.push("sitemap.xml");

fs.rmSync(path.join(root, "dist-ssr"), { recursive: true, force: true });

console.log(`prerendered ${written.length} files:`);
for (const f of written) console.log(`  dist/${f}`);
