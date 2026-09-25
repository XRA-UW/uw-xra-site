import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";

const SITE = "https://students.washington.edu/xra/hacktheam/home.html";

const facts = [
  "One day, Saturday",
  "UW Seattle campus",
  "Headsets provided",
  "No coding experience required",
  "Open to students",
  "Lunch and dinner provided",
];

const tracks = [
  {
    name: "Apple Vision Pro",
    blurb:
      "Utility-first ideas that feel natural in spatial interfaces: widgets, productivity surfaces, and focused workflow helpers.",
  },
  {
    name: "Meta Quest",
    blurb:
      "Practical Quest experiences with clear real-world value and strong UX: task-focused utilities, collaboration workflows, and learning tools.",
  },
];

const schedule: [string, string][] = [
  ["9:00 AM", "Arrive and demo headsets"],
  ["9:30 AM", "Opening ceremony"],
  ["10:00 AM", "Apple Vision Pro and Quest workshop"],
  ["12:00 PM", "Lunch"],
  ["12:30 PM", "Project pitches and team formation"],
  ["1:00 PM", "Hacking"],
  ["5:00 PM", "Dinner"],
  ["5:30 PM", "Hacking"],
  ["7:00 PM", "Judging"],
  ["8:00 PM", "Closing ceremony"],
];

/* Winners of the April 2026 edition, as announced on the Hack the AM site. */
const winners = [
  {
    track: "Apple Vision Pro",
    project: "Enact",
    team: "Spencer Morga & Sydney Lai",
  },
  { track: "Meta Quest", project: "OnBeat", team: "William Hong" },
];

const Hackathon = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-0 bg-gradient-hero" />
      <div className="pointer-events-none absolute inset-0 x-pattern" />

      <div className="relative">
        <Header />

        <div className="container px-4 py-16">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-brand-green">
              Our hackathon
            </p>
            <h1 className="mb-4 text-4xl font-medium tracking-tight md:text-6xl">
              Hack the AM
            </h1>
            <p className="mx-auto max-w-2xl text-lg font-light text-muted-foreground md:text-xl">
              A one-day XR hackathon we run on the UW Seattle campus. Build
              something genuinely useful for people using Apple Vision Pro or
              Meta Quest in everyday workflows.
            </p>

            <div className="mt-8 flex justify-center">
              <a
                href={SITE}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-3 text-lg font-medium text-primary-foreground shadow-[0_8px_24px_hsl(var(--brand-blue)/0.25)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-[0_12px_44px_hsl(var(--brand-blue)/0.5)] active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:ring-offset-2 focus-visible:ring-offset-background motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                Visit the Hack the AM site
                <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </div>

            <ul className="mt-8 flex flex-wrap justify-center gap-2">
              {facts.map((fact) => (
                <li
                  key={fact}
                  className="rounded-full border border-white/15 px-3 py-1 text-xs font-light text-muted-foreground"
                >
                  {fact}
                </li>
              ))}
            </ul>
          </div>

          <div className="mx-auto max-w-5xl space-y-12">
            <section className="rounded-2xl border border-white/10 bg-card p-8 md:p-10">
              <h2 className="mb-4 text-2xl font-medium tracking-tight">
                What you build
              </h2>
              <p className="max-w-3xl font-light leading-relaxed text-muted-foreground">
                Teams prototype a focused feature, a small app, or a proof of
                concept that solves one clear problem well. The day opens with a
                tutorial workshop covering Unity and Xcode, including how to
                build to Apple Vision Pro and Meta Quest 3, so nobody needs to
                arrive an expert. Strong UX ideas and clear product thinking
                count as much as code, and headsets are provided.
              </p>
            </section>

            <section>
              <h2 className="mb-5 text-sm font-medium uppercase tracking-[0.25em] text-brand-green">
                Tracks
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                {tracks.map((track) => (
                  <div
                    key={track.name}
                    className="rounded-2xl border border-white/10 bg-card p-8"
                  >
                    <h3 className="mb-3 text-xl font-medium">{track.name}</h3>
                    <p className="font-light leading-relaxed text-muted-foreground">
                      {track.blurb}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="mb-5 text-sm font-medium uppercase tracking-[0.25em] text-brand-green">
                How the day runs
              </h2>
              <ul className="overflow-hidden rounded-2xl border border-white/10 bg-card">
                {schedule.map(([time, item]) => (
                  <li
                    key={time + item}
                    className="flex flex-col gap-1 border-b border-white/10 px-6 py-4 last:border-b-0 sm:flex-row sm:items-center sm:gap-6"
                  >
                    <span className="w-24 shrink-0 text-sm font-medium tabular-nums text-brand-green">
                      {time}
                    </span>
                    <span className="font-light text-muted-foreground">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="mb-5 text-sm font-medium uppercase tracking-[0.25em] text-brand-green">
                Last edition, April 2026
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                {winners.map((winner) => (
                  <div
                    key={winner.project}
                    className="rounded-2xl border border-white/10 bg-card p-8"
                  >
                    <p className="mb-2 text-sm font-light text-muted-foreground">
                      {winner.track} track, best design
                    </p>
                    <h3 className="mb-1 text-xl font-medium">
                      {winner.project}
                    </h3>
                    <p className="font-light text-muted-foreground">
                      {winner.team}
                    </p>
                  </div>
                ))}
              </div>
              <p className="mt-6 font-light text-muted-foreground">
                The next edition is in planning. Dates get announced in the{" "}
                <a
                  href="https://discord.gg/4hvsCDhb5p"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground underline underline-offset-4 transition-colors hover:text-brand-green"
                >
                  Discord
                </a>{" "}
                first.
              </p>
            </section>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Hackathon;
