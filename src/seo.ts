/* Per-route metadata, shared by the client (DocumentMeta in App.tsx, for
   client-side navigation) and the build-time prerenderer (scripts/prerender.mjs,
   which bakes these into each page's static HTML).

   Titles deliberately target "UW XRA" / "XRA UW" / "extended reality
   association uw". The bare query "XRA" is not a realistic target: the acronym
   belongs to too many unrelated organisations. */

export const SITE_ORIGIN = "https://xra-uw.github.io";
export const BASE_PATH = "/uw-xra-site";
export const SITE_URL = `${SITE_ORIGIN}${BASE_PATH}/`;

export interface RouteMeta {
  /** Route path as react-router sees it, with no basename. */
  path: string;
  title: string;
  description: string;
}

export const ROUTE_META: RouteMeta[] = [
  {
    path: "/",
    title: "XRA | Extended Reality Association at the University of Washington",
    description:
      "XRA is the University of Washington's student community for virtual reality, augmented reality, and spatial computing: workshops, demo nights, and student-built XR projects.",
  },
  {
    path: "/hackathon",
    title: "Hackathon | XRA at the University of Washington",
    description:
      "XRA is running an XR hackathon at the University of Washington again this year. Here is what our first run, Hack the AM, looked like: two headset tracks, a one-day build, and the winning projects.",
  },
  {
    path: "/projects",
    title: "Projects | XRA at the University of Washington",
    description:
      "XR work built by University of Washington students through XRA, including Campus 360, the CARE clinician augmented reality environment, and Metaverse Academia.",
  },
  {
    path: "/people",
    title: "Our Team | XRA at the University of Washington",
    description:
      "The officers and members running the Extended Reality Association at the University of Washington.",
  },
];

/** Used for 404.html. Deliberately not in ROUTE_META: it is not a real URL and
 *  must stay out of the sitemap. */
export const NOT_FOUND_META: Omit<RouteMeta, "path"> = {
  title: "Page not found | XRA at the University of Washington",
  description:
    "That page does not exist. Head back to the Extended Reality Association at the University of Washington.",
};

export function metaForPath(pathname: string): Omit<RouteMeta, "path"> {
  const normalised =
    pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
  return ROUTE_META.find((r) => r.path === normalised) ?? NOT_FOUND_META;
}

/** Absolute, canonical URL for a route path.
 *
 *  Always trailing-slashed. GitHub Pages serves each route from
 *  dist/<route>/index.html and 301s "/hackathon" to "/hackathon/", so the
 *  slashless form is a redirect, not a page. A canonical or a sitemap entry
 *  pointing at a redirect is a self-inflicted SEO defect. */
export function canonicalUrl(path: string): string {
  return path === "/" ? SITE_URL : `${SITE_ORIGIN}${BASE_PATH}${path}/`;
}
