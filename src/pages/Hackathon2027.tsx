import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import HackathonLayout, {
  card,
  primaryButton,
  secondaryButton,
  sectionLabel,
} from "@/components/hackathon/HackathonLayout";
import SponsorWall from "@/components/hackathon/SponsorWall";
import { DISCORD, EVENT, keyDates } from "@/data/hackathon";

/* Overview of the 2027 edition. Written first for sponsors and the school,
   who see it before participants do: participant details land on November
   22. Event facts come from src/data/hackathon.ts; keep anything still
   undecided out of the copy. /hackathon itself is the program page, and each
   edition, like /hackathon/2026, keeps its own year. */

/* Date and place are already in the eyebrow above the title. */
const facts = [
  EVENT.hours,
  EVENT.teamSize,
  "Headsets available to check out",
  "Apple Vision Pro and Meta Quest workshops",
];

const audiences = [
  {
    title: "Sponsors",
    body: "Put your platform in front of UW students for a full day of building. Tiers start with a mention on the site and go up to a main track built around your product.",
    to: `${EVENT.path}/sponsors/`,
    cta: "Sponsorship tiers",
  },
  {
    title: "Mentors",
    body: "Spend a four-hour shift helping teams shape ideas, debug builds, and get a demo working. Mentors need XR development experience.",
    to: `${EVENT.path}/mentors/`,
    cta: "What mentors do",
  },
  {
    title: "Participants",
    body: "Applications open November 22, with tracks and sponsors announced the same day. Join the Discord to hear first and to find a team.",
    to: `${EVENT.path}/schedule/`,
    cta: "See the day",
  },
];

const Hackathon2027 = () => (
  <HackathonLayout
    eyebrow={`${EVENT.date} · ${EVENT.location}`}
    title={EVENT.name}
    lead={
      <p>
        A one-day XR hackathon run by the Extended Reality Association at the
        University of Washington. Teams of one to four build useful apps for
        headsets in a single day, with workshops in the morning and mentors on
        the floor throughout.
      </p>
    }
    actions={
      <>
        <ul className="mb-8 flex flex-wrap gap-2">
          {facts.map((fact) => (
            <li
              key={fact}
              className="rounded-full border border-white/15 px-3 py-1 text-xs font-light text-muted-foreground"
            >
              {fact}
            </li>
          ))}
        </ul>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link to={`${EVENT.path}/sponsors/`} className={primaryButton}>
            Sponsor the hackathon
            <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
          <a href={DISCORD} target="_blank" rel="noopener noreferrer" className={secondaryButton}>
            Get announcements
            <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>
      </>
    }
  >
    <section>
      <h2 className={sectionLabel}>Get involved</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {audiences.map((a) => (
          <div key={a.title} className={`${card} flex flex-col`}>
            <h3 className="mb-3 text-xl font-medium">{a.title}</h3>
            <p className="mb-6 flex-1 font-light leading-relaxed text-muted-foreground">{a.body}</p>
            <Link
              to={a.to}
              className="group inline-flex items-center gap-2 font-medium text-brand-green transition-colors hover:text-foreground"
            >
              {a.cta}
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        ))}
      </div>
    </section>

    <section>
      <h2 className={sectionLabel}>Key dates</h2>
      <ol className="overflow-hidden rounded-2xl border border-white/10 bg-card">
        {keyDates.map(([date, what]) => (
          <li
            key={date}
            className="flex flex-col gap-1 border-b border-white/10 px-6 py-4 last:border-b-0 sm:flex-row sm:items-center sm:gap-6"
          >
            <span className="w-32 shrink-0 text-sm font-medium tabular-nums text-brand-green">{date}</span>
            <span className="font-light text-muted-foreground">{what}</span>
          </li>
        ))}
      </ol>
    </section>

    <section>
      <h2 className={sectionLabel}>Sponsors</h2>
      <SponsorWall />
    </section>

  </HackathonLayout>
);

export default Hackathon2027;
