import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import HackathonLayout, {
  card,
  primaryButton,
  secondaryButton,
  sectionLabel,
} from "@/components/hackathon/HackathonLayout";
import { DISCORD, EVENT } from "@/data/hackathon";

/* The program page: why XRA runs hackathons, above any single year. Each
   edition lives under /hackathon/<year>, so this page outlasts any one name,
   date, or format. Aims are grounded in what the 2026 run actually did and
   what 2027 has decided; keep them as aims, not promises about a given year. */

const aims = [
  {
    title: "Headsets in every hand",
    body: "Hardware is the biggest barrier to building XR. We bring Apple Vision Pro and Meta Quest headsets, so nobody needs to own one to take part.",
  },
  {
    title: "XR that is useful",
    body: "We push teams toward apps that solve one clear problem in everyday life or work, rather than demos for their own sake.",
  },
  {
    title: "Learn by building",
    body: "Workshops open the day and mentors stay on the floor, so nobody has to arrive an expert. Good UX and clear product thinking count as much as code.",
  },
  {
    title: "Students meet industry",
    body: "Sponsors bring their platforms, tools, and challenges, and students show what they can build with them in a single day.",
  },
];

const editions = [
  {
    year: String(EVENT.year),
    status: "Upcoming",
    name: EVENT.name,
    detail: `${EVENT.date}. Sponsorship and mentoring are open now; participant applications open November 22.`,
    to: `${EVENT.path}/`,
    cta: `See ${EVENT.year}`,
    current: true,
  },
  {
    year: "2026",
    status: "Archive",
    name: "Hack the AM",
    detail: "Saturday, April 18, 2026. Our first run: two headset tracks, one day on the UW Seattle campus, and the winning projects.",
    to: "/hackathon/2026/",
    cta: "Read the 2026 archive",
    current: false,
  },
];

const Hackathon = () => (
  <HackathonLayout
    edition={false}
    eyebrow="XRA Hackathons"
    title="Build XR in a day"
    lead={
      <p>
        The Extended Reality Association runs hackathons to get more students
        at the University of Washington building for headsets. One day, real
        hardware, and a team: enough to go from an idea to a working demo.
      </p>
    }
    actions={
      <div className="flex flex-col gap-4 sm:flex-row">
        <Link to={`${EVENT.path}/`} className={primaryButton}>
          Hackathon {EVENT.year}
          <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
        <a href={DISCORD} target="_blank" rel="noopener noreferrer" className={secondaryButton}>
          Get announcements
          <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
        </a>
      </div>
    }
  >
    <section>
      <h2 className={sectionLabel}>What we aim for</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {aims.map((aim) => (
          <div key={aim.title} className={card}>
            <h3 className="mb-3 text-xl font-medium">{aim.title}</h3>
            <p className="font-light leading-relaxed text-muted-foreground">{aim.body}</p>
          </div>
        ))}
      </div>
    </section>

    <section>
      <h2 className={sectionLabel}>Hackathons</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {editions.map((e) => (
          <div
            key={e.year}
            className={`${card} flex flex-col ${e.current ? "border-brand-green/40 shadow-glow-green" : ""}`}
          >
            <p className="mb-1 text-sm font-light text-muted-foreground">
              {e.year} · {e.status}
            </p>
            <h3 className="mb-3 text-2xl font-medium tracking-tight">{e.name}</h3>
            <p className="mb-6 flex-1 font-light leading-relaxed text-muted-foreground">{e.detail}</p>
            <Link
              to={e.to}
              className="group inline-flex items-center gap-2 font-medium text-brand-green transition-colors hover:text-foreground"
            >
              {e.cta}
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        ))}
      </div>
    </section>
  </HackathonLayout>
);

export default Hackathon;
