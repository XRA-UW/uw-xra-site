export interface Project {
  title: string;
  /** Quarter or academic year the work ran, e.g. "Winter 2026" or "2024–25". */
  period: string;
  blurb: string;
  /** Tools/platforms, e.g. ["Unity", "Quest 3"]. */
  tags?: string[];
  /** Optional link out: repo, itch.io page, demo video, write-up. */
  href?: string;
}

/** Projects the club is actively building. Empty is a valid state — the
 *  section renders a "nothing running right now" card. */
export const currentProjects: Project[] = [];

/** Shipped/retired projects. Newest first. */
export const pastProjects: Project[] = [];
