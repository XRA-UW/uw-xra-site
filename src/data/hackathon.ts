/* Single source for this year's hackathon. Every hackathon page reads from
   here, so a decision made in a planning meeting is a one-line change.

   Sourced from the fall 2026 planning meeting notes. Anything marked OPEN is
   still undecided; keep it off the pages until it is settled. */

export const EVENT = {
  year: 2027,
  /** Route of this edition. Every edition lives under /hackathon/<year>. */
  path: "/hackathon/2027",
  /* OPEN: no official name yet. "Hack the AM" in the planning notes is only a
     placeholder too, so do not put it on these pages. */
  name: "XRA Hackathon 2027",
  /* OPEN: the notes' timeline says "Jan 23-24, 2027", but the event is one day
     and the schedule ends at 8:30 p.m. Saturday the 23rd is assumed here. */
  date: "Saturday, January 23, 2027",
  hours: "9 a.m. to 8:30 p.m.",
  location: "UW Seattle campus",
  teamSize: "Teams of 1 to 4",
};

export const DISCORD = "https://discord.gg/4hvsCDhb5p";
export const EMAIL = "xra@uw.edu";

/* Replace with the real form URLs once they exist. Until then the buttons fall
   back to a prefilled email, so the pages work today. */
export const SPONSOR_FORM_URL: string | null = null;
export const MENTOR_FORM_URL: string | null = null;

export const sponsorContactHref =
  SPONSOR_FORM_URL ??
  `mailto:${EMAIL}?subject=${encodeURIComponent(`Sponsoring ${EVENT.name}`)}`;
export const mentorContactHref =
  MENTOR_FORM_URL ??
  `mailto:${EMAIL}?subject=${encodeURIComponent(`Mentoring at ${EVENT.name}`)}`;

/* Public dates only. The internal timeline (merch, catering, card access,
   signage) belongs in the planning doc, not on the website. */
export const keyDates: [string, string][] = [
  ["November 20", "Sponsor commitment deadline"],
  ["November 22", "Participant applications open, with tracks and sponsors announced"],
  ["December 1", "Sponsor funds due"],
  ["January 23", "Hackathon day"],
];

export interface SponsorTier {
  /** Descriptive label, derived from what the tier unlocks. */
  label: string;
  amount: string;
  benefits: string[];
}

/* Highest first. Logos on the site follow the same order and scale with tier. */
export const sponsorTiers: SponsorTier[] = [
  {
    label: "Track sponsor",
    amount: "$5,000 or a device loan",
    benefits: [
      "A main track built around your platform",
      "Speak at the opening and closing ceremonies",
      "A table at the event",
      "Your logo on the website, largest tier",
    ],
  },
  {
    label: "Award sponsor",
    amount: "$2,500",
    benefits: [
      "A special award in your name",
      "Speak at the opening and closing ceremonies",
      "A table at the event",
      "Your logo on the website",
    ],
  },
  {
    label: "Table sponsor",
    amount: "$1,000",
    benefits: ["A table at the event", "Your logo on the website"],
  },
  {
    label: "Supporter",
    amount: "Mentors, or support under $1,000",
    benefits: ["Your name on the website"],
  },
];

export interface Sponsor {
  name: string;
  /** Index into sponsorTiers: 0 is the top tier. Drives order and logo size. */
  tier: number;
  logo?: string;
  href?: string;
}

/* Empty until sponsors confirm. Add entries here; the logo wall sorts by tier. */
export const sponsors: Sponsor[] = [];

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

export const mentorShifts = ["9 a.m. to 1 p.m.", "1 to 5 p.m.", "5 to 9 p.m."];

export const mentorDoes = [
  "Give feedback on ideas and demos",
  "Help teams debug and answer their questions",
  "Walk the floor and check in with teams",
  "Answer questions in the mentor channel of the XRA Discord",
];

export const mentorDoesNot = [
  "Judge projects",
  "Work directly on a team's project",
  "Take part as a participant on the same day",
];

export const mentorRequirements = [
  "Experience with XR development. The application asks about it.",
  "At least one four-hour shift. Pick as many as you like.",
];
