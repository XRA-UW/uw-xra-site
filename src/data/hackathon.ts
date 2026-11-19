/* Single source for this year's hackathon. Every hackathon page reads from
   here, so a decision made in a planning meeting is a one-line change.

   Sourced from the fall 2026 planning meeting notes. Anything marked OPEN is
   still undecided; keep it off the pages until it is settled. */

import { REVEAL_AT_MS, REVEAL_DATE } from "./reveal";

export { REVEAL_DATE };

export const EVENT = {
  year: 2027,
  /** Route of this edition. Every edition lives under /hackathon/<year>. */
  path: "/hackathon/2027",
  /* Decided October 2026. "Hack the AM" was the 2026 name; do not reuse it. */
  name: "Bark to Reality",
  /* Moved from January 23 to January 30 in October 2026. Still the target
     rather than locked in; confirm before anything is printed. */
  date: "Saturday, January 30, 2027",
  hours: "9 a.m. to 8:30 p.m.",
  location: "UW Seattle campus",
  teamSize: "Teams of 1 to 4",
};

export const DISCORD = "https://discord.gg/4hvsCDhb5p";
export const EMAIL = "xra@uw.edu";

/* Replace with the real form URLs once they exist. Until then the buttons fall
   back to a prefilled email, so the pages work today. */
export const SPONSOR_FORM_URL: string | null = null;
export const MENTOR_FORM_URL: string | null = "https://forms.gle/YKpHWDKBdzCUCfDc6";

export const sponsorContactHref =
  SPONSOR_FORM_URL ??
  `mailto:${EMAIL}?subject=${encodeURIComponent(`Supporting ${EVENT.name}`)}`;
export const mentorContactHref =
  MENTOR_FORM_URL ??
  `mailto:${EMAIL}?subject=${encodeURIComponent(`Mentoring at ${EVENT.name}`)}`;

export const REVEAL_AT = new Date(REVEAL_AT_MS);

/* Public dates only. The internal timeline (merch, catering, card access,
   signage) belongs in the planning doc, not on the website. So does the
   sponsor funds due date, December 1: it is a payment term for confirmed
   sponsors and goes in their confirmation email or agreement. The November 20
   partner confirmation deadline was dropped in November 2026; partnerships
   stay open without a published cutoff. */
export const keyDates: [string, string][] = [
  [REVEAL_DATE, "Participant applications open, with tracks and partners announced (tentative)"],
  ["January 30", "Hackathon day"],
];

export interface SponsorTier {
  /** What the gift supports. Also heads each group on the logo wall. */
  label: string;
  amount: string;
  /** What the gift helps make possible. */
  description: string;
}

/* Contributions are donations, not purchases: a partner is not buying a track,
   an award, a table, or a logo. Describe what each gift helps students do, and
   keep any thanks (website, communications, the event itself) worded as
   something we may do, never as a benefit owed. Highest first; the logo wall
   follows the same order. */
export const sponsorTiers: SponsorTier[] = [
  {
    label: "Main Track Support",
    amount: "$5,000",
    description:
      "Supports a main track, helping students explore an XR challenge, develop prototypes, and share what they build.",
  },
  {
    label: "Student Achievement Support",
    amount: "$2,500",
    description:
      "Supports a student achievement award that encourages creative problem solving and recognizes student work in XR.",
  },
  {
    label: "Project Development Support",
    amount: "$1,000",
    description:
      "Helps provide resources for project development so students can test ideas, refine prototypes, and build practical XR skills.",
  },
  {
    label: "Student Participation Support",
    amount: "Under $1,000",
    description:
      "Helps meet shared event needs and create a welcoming environment where students can collaborate and learn.",
  },
];

/* Sentence case, not title case: the sponsors page joins these into running
   prose ("Device loans, XR mentorship, development workshops, ..."), so only
   the first item starts the sentence. Re-case them if they are ever shown as a
   standalone list. */
export const otherContributions = [
  "Device loans",
  "XR mentorship",
  "development workshops",
  "prizes",
  "software credits or trials",
];

export interface Sponsor {
  name: string;
  /** Index into sponsorTiers: 0 is the top tier. Drives order and logo size. */
  tier: number;
  logo?: string;
  href?: string;
}

/* ── EMBARGOED until the reveal (REVEAL_DATE in ./reveal.ts) ──────────────
   Rule: anything announced at the reveal (confirmed sponsors, tracks, track
   prizes) goes in an `embargoed*` array below and nowhere else. Never put it
   straight into page copy, a description in src/seo.ts, or an unguarded
   export.

   The site side is enforced: each public export below is gated on
   __REVEALED__, which a build made before the reveal compiles to false, so
   the arrays are dropped from the build entirely, not merely hidden. Preview
   locally with `REVEAL=1 npm run dev`. On the reveal date, deploy after the
   reveal time and the content appears.

   The repo side is not: XRA-UW/uw-xra-site is public, so anything pushed to
   GitHub is readable there. Keep embargoed edits on a local branch until
   the reveal. */

/* Confirmed sponsors. The logo wall sorts them by tier. */
const embargoedSponsors: Sponsor[] = [];

export interface Track {
  name: string;
  blurb: string;
  /** Sponsor running the track, if any. */
  sponsor?: string;
}

const embargoedTracks: Track[] = [];

export const sponsors: Sponsor[] = __REVEALED__ ? embargoedSponsors : [];
export const tracks: Track[] = __REVEALED__ ? embargoedTracks : [];

/* Times follow the UW Brand editorial guide, as on the 2026 page. */
export const schedule: [string, string][] = [
  ["9 a.m.", "Arrive and demo headsets"],
  ["9:30 a.m.", "Opening ceremony"],
  ["10 a.m.", "Apple Vision Pro and Meta Quest workshops, running at the same time"],
  /* OPEN: may move to 10 a.m. so nobody rushes for a device. */
  ["11 a.m.", "Headset checkout opens"],
  ["noon", "Lunch"],
  ["5 p.m.", "Dinner"],
  ["7 p.m.", "Judging"],
  ["8:30 p.m.", "Closing ceremony"],
];

/* Named by part of day, with times as the secondary line. Not "Noon": under
   the UW editorial guide that means 12 p.m. exactly, not a 1 to 5 p.m. block.
   Evening is shorter because mentoring stops when judging starts at 7 p.m. */
export const mentorShifts = [
  { name: "Morning", time: "9 a.m. to 1 p.m." },
  { name: "Afternoon", time: "1 to 5 p.m." },
  { name: "Evening", time: "5 to 7 p.m." },
];

export const mentorDoes = [
  "Give feedback on ideas and demos",
  "Help teams debug and answer their questions",
  "Walk the floor and check in with teams",
  "Answer questions in the mentor channel of the XRA Discord",
];

export const mentorDoesNot = [
  "Judge a team they mentored",
  "Work directly on a team's project",
  "Take part as a participant on the same day",
];

export const mentorRequirements = [
  "Experience with XR development. The application asks about it.",
  "At least one shift. Pick as many as you like.",
];
