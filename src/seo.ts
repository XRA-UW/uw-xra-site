/* Per-route metadata, shared by the client (DocumentMeta in App.tsx, for
   client-side navigation) and the build-time prerenderer (scripts/prerender.mjs,
   which bakes these into each page's static HTML).

   Titles deliberately target "UW XRA" / "XRA UW" / "extended reality
   association uw". The bare query "XRA" is not a realistic target: the acronym
   belongs to too many unrelated organisations. */

/* Both are set by the build, so canonical URLs, the sitemap and og:url follow
   the deploy target automatically instead of being hardcoded in two places.
   BASE_PATH comes from Vite's `base`; SITE_ORIGIN from VITE_SITE_ORIGIN.
   Defaults are the GitHub Pages deploy. See scripts/deploy-uw.sh. */
export const SITE_ORIGIN =
  import.meta.env.VITE_SITE_ORIGIN || "https://xra-uw.github.io";
export const BASE_PATH = import.meta.env.BASE_URL.replace(/\/$/, "");
export const SITE_URL = `${SITE_ORIGIN}${BASE_PATH}/`;

/* Where the canonical copy of this content lives, which is not always where
   this build is served from.
   
   students.washington.edu/xra is the canonical home. The GitHub Pages build
   serves the same pages, so it points its canonical and og:url here rather
   than competing with the UW site in search; Google then consolidates the two
   instead of treating them as duplicates. GitHub Pages cannot issue real 301s
   for a project site, so a cross-origin canonical is the tool available.

   This is a property of the project, not of the CI config, so it lives here
   rather than in an environment variable the workflow has to remember to set.
   Change it if the site's permanent home ever moves. */
const CANONICAL_HOME = "https://students.washington.edu/xra";

/** Where this build is actually served from. */
const SELF = `${SITE_ORIGIN}${BASE_PATH}`;

export const CANONICAL_ROOT = import.meta.env.VITE_CANONICAL_ROOT || CANONICAL_HOME;

/** False on a build that defers to the canonical copy on another host. */
export const IS_CANONICAL_HOST = CANONICAL_ROOT === SELF;

export interface RouteMeta {
  /** Route path as react-router sees it, with no basename. */
  path: string;
  title: string;
  description: string;
  /** Link-preview image under public/, if this page has its own. Defaults to
   *  DEFAULT_OG_IMAGE. Must be 1200 x 630. */
  image?: string;
}

/* The ?v= query is a cache-buster: Discord, Slack and others cache preview
   images by URL, so replacing the file alone can leave the old art showing for
   weeks. Bump it whenever an image changes. */
export const DEFAULT_OG_IMAGE = "og-image.png?v=2";

/** Absolute preview-image URL. Always on the canonical host: crawlers fetch it
 *  from there, and the GitHub Pages build only serves redirect stubs. */
export function ogImageUrl(image: string = DEFAULT_OG_IMAGE): string {
  return `${CANONICAL_ROOT}/${image.replace(/^\//, "")}`;
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
    title: "Hackathons | XRA at the University of Washington",
    description:
      "Why the Extended Reality Association runs XR hackathons at the University of Washington: headsets provided, useful XR built in a day, workshops and mentors. This year's hackathon and past runs.",
  },
  {
    path: "/hackathon/2026",
    title: "Hack the AM 2026 | XRA at the University of Washington",
    description:
      "Hack the AM, the first XR hackathon run by XRA at the University of Washington: Saturday 18 April 2026, Apple Vision Pro and Meta Quest tracks, headsets provided, free to attend. Schedule, winners, and FAQ.",
  },
  {
    path: "/hackathon/2027",
    title: "Bark to Reality 2027 | XRA at the University of Washington",
    description:
      "Bark to Reality, XRA's one-day XR hackathon at the University of Washington, Saturday, January 30, 2027. Teams of 1 to 4, Apple Vision Pro and Meta Quest, headsets to check out.",
  },
  {
    path: "/hackathon/2027/mentors",
    title: "Mentor at Bark to Reality 2027 | XRA at the University of Washington",
    description:
      "Mentor at Bark to Reality, XRA's January 2027 XR hackathon at the University of Washington: help student teams debug and refine XR projects during a shift. XR development experience required; a few judging spots may open.",
  },
  {
    path: "/hackathon/2027/schedule",
    title: "Bark to Reality 2027 Schedule | XRA at the University of Washington",
    description:
      "The draft schedule for Bark to Reality, XRA's one-day XR hackathon at the University of Washington on January 30, 2027: workshops, headset checkout, meals, judging, and the closing ceremony.",
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

/** Retired URLs that still circulate (emails, printed QR codes), mapped to
 *  their replacement: a route path, or an absolute URL on another site. The
 *  prerenderer writes a redirect stub at each
 *  `from` on every build, so the GitHub Pages copy forwards them too and a
 *  stale page left on the UW server (deploy-uw.sh never deletes) is
 *  overwritten. The UW host also 301s them in deploy/htaccess; keep the two
 *  in step. Not in ROUTE_META, so they stay out of the sitemap. */
export const LEGACY_REDIRECTS: { from: string; to: string }[] = [
  /* The partner pitch moved to the design team's site in November 2026
     (PARTNER_SITE in src/data/hackathon.ts). /sponsors was its first URL and
     is in outreach emails; /partners was live for a day. */
  { from: "/hackathon/2027/sponsors", to: "https://barktoreality.vercel.app/" },
  { from: "/hackathon/2027/partners", to: "https://barktoreality.vercel.app/" },
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
 *  pointing at a redirect is a self-inflicted SEO defect.
 *
 *  Strips any trailing slashes before adding exactly one. The prerenderer
 *  passes "/people", but in the browser the path is "/people/", and appending
 *  to that rewrote the canonical to "/people//" after load. Google renders
 *  JavaScript, followed that canonical, and each render added another slash:
 *  Search Console logged /people///, /hackathon//, and so on. */
export function canonicalUrl(path: string): string {
  if (/^https?:\/\//.test(path)) return path;
  const clean = path.replace(/\/+$/, "");
  return `${CANONICAL_ROOT}${clean}/`;
}
