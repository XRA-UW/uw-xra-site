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
export const pastProjects: Project[] = [
  {
    title: "AR Virtual RC Car",
    period: "Engineering Discovery Days 2026",
    blurb:
      "An augmented reality RC car built for Engineering Discovery Days, the UW College of Engineering's K-12 outreach event. We ran it to show younger visitors the kind of work the UW Reality Lab, one of our partners, does.",
    tags: ["Augmented reality", "K-12 outreach", "UW Reality Lab"],
    href: "https://www.engr.washington.edu/about/k12/discovery-days",
  },
  {
    title: "Campus 360",
    period: "HUB scan complete",
    blurb:
      "A 3D scan of the HUB to improve the building's accessibility. The HUB is done; the rest of campus hasn't been scanned yet. The finished scan is walkable online.",
    tags: ["3D scanning", "Accessibility"],
    href: "https://my.matterport.com/show/?m=r5dNEJxndJx",
  },
  {
    title: "CARE: Clinician Augmented Reality Environment",
    period: "2024–25",
    blurb:
      "An Apple Vision Pro framework that streams surgical video into the surgeon's field of view. Led by an XRA member under UW RHLab; XRA helped recruit the team from our members.",
    tags: ["Apple Vision Pro", "Medical AR", "UW RHLab"],
    href: "https://digital.lib.washington.edu/researchworks/items/293ed921-5464-40c3-99cc-2d3f702b215c/full",
  },
  {
    title: "Metaverse Academia",
    period: "Now independent",
    blurb:
      "Immersive classes in social VR. XRA helped its founder, a former UW student, build the framework; it now runs independently of XRA.",
    tags: ["Social VR", "Education"],
    href: "https://metaverseacademia.org/",
  },
];

/** Shown under the past projects grid. */
export const pastProjectsNote =
  "Plus other member-built projects over the past few years, not written up here yet.";
