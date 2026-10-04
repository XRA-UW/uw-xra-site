import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { EVENT } from "@/data/hackathon";
import winnersEnact from "@/assets/winners-enact.jpg";
import winnersOnbeat from "@/assets/winners-onbeat.jpg";

/* The record of Hack the AM, the April 2026 run. Everything here is sourced
   from the event's own site, which used to live at /xra/hacktheam/ and now
   301s here. That makes this page the only copy, so do not link back to the
   old URLs: they redirect to this one. Year-scoped on purpose: the format and
   the name for the next run are still open, so nothing here should be read as
   a promise about it. Do not add detail to this page that was not true on the
   day. */

const DISCORD = "https://discord.gg/4hvsCDhb5p";
const EMAIL = "xra@uw.edu";

const facts = [
  "Saturday, April 18, 2026",
  "9 a.m. to 9 p.m.",
  "UW Seattle campus",
  "Headsets provided",
  "No coding experience required",
  "Open to all students",
  "Free to attend",
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

/* Times follow the UW Brand editorial guide: lowercase with periods and a
   space before a.m./p.m. The guide's own example is "10 a.m.", so the :00 is
   dropped, and noon is spelled out per AP, which the guide follows elsewhere.
   DubBot scans this page against that guide, so keep the format. */
const schedule: [string, string][] = [
  ["9 a.m.", "Arrive and demo headsets"],
  ["9:30 a.m.", "Opening ceremony"],
  ["10 a.m.", "Apple Vision Pro and Quest workshop"],
  ["noon", "Lunch"],
  ["12:30 p.m.", "Project pitches and team formation"],
  ["1 p.m.", "Hacking"],
  ["5 p.m.", "Dinner"],
  ["5:30 p.m.", "Hacking"],
  ["7 p.m.", "Judging"],
  ["8 p.m.", "Closing ceremony"],
];

const winners = [
  {
    track: "Apple Vision Pro",
    project: "Enact",
    team: "Spencer Morga & Sydney Lai",
    photo: winnersEnact,
    alt: "The Enact team with their awards at the Hack the AM closing ceremony, in front of a screen reading Apple Vision Pro Track",
  },
  {
    track: "Meta Quest",
    project: "OnBeat",
    team: "William Hong",
    photo: winnersOnbeat,
    alt: "The OnBeat team with their award at the Hack the AM closing ceremony, in front of a screen reading Meta Quest Track Winner",
  },
];

/* How projects were judged, from the event's tracks page. */
const priorities = [
  [
    "Utility and innovation",
    "Practical solutions with a clear use case and thoughtful novelty.",
  ],
  [
    "User experience",
    "Strong UX decisions, understandable flows, and focused scope.",
  ],
  [
    "Platform synergy",
    "Projects that use the hardware capabilities of their chosen platform to solve a specific problem.",
  ],
];

/* Verbatim from the event FAQ, which is why the answers are in the present
   tense of that event rather than rewritten as history. */
const faq: [string, string][] = [
  [
    "What is a hackathon?",
    "A time-boxed event where people collaborate to design and build a project. At Hack the AM, teams focused on useful XR demos for Apple Vision Pro or Meta Quest.",
  ],
  ["Who was eligible?", "Hack the AM was open to all students."],
  ["Did it cost anything?", "No. Attending was free."],
  [
    "Did projects have to pick a track?",
    "Yes. Every project chose one main track, either Apple Vision Pro or Meta Quest.",
  ],
  [
    "Did you need your own headset?",
    "No. Apple Vision Pros and Meta Quest 3 and 3S headsets were provided.",
  ],
  [
    "What about food?",
    "Lunch and dinner were provided, along with refreshments and snacks through the day.",
  ],
  [
    "Did you have to submit a project?",
    "No. Submission was encouraged for anyone who wanted to take part in voting and awards, but you could attend, learn, and join in without submitting.",
  ],
];

const sectionLabel =
  "mb-5 text-sm font-medium uppercase tracking-[0.25em] text-brand-green";

const Hackathon2026 = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-0 bg-gradient-hero" />
      <div className="pointer-events-none absolute inset-0 x-pattern" />

      <div className="relative">
        <Header />

        <div className="container px-4 py-16">
          <div className="mx-auto max-w-5xl">
            <Link
              to="/hackathon/"
              className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-brand-green focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <ArrowLeft className="h-4 w-4" />
              This year&apos;s hackathon
            </Link>

            <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-brand-green">
              Archive
            </p>
            <h1 className="mb-4 text-4xl font-medium tracking-tight md:text-6xl">
              Hack the AM 2026
            </h1>
            <p className="max-w-3xl text-lg font-light leading-relaxed text-muted-foreground md:text-xl">
              Our first hackathon: one day on the UW Seattle campus building XR
              that is genuinely useful for people using Apple Vision Pro or Meta
              Quest in everyday workflows. It was a trial run to see what we
              could pull off, and this is what that day looked like.
            </p>

            <ul className="mt-8 flex flex-wrap gap-2">
              {facts.map((fact) => (
                <li
                  key={fact}
                  className="rounded-full border border-white/15 px-3 py-1 text-xs font-light text-muted-foreground"
                >
                  {fact}
                </li>
              ))}
            </ul>

            <div className="mt-12 space-y-12">
              <section className="rounded-2xl border border-white/10 bg-card p-8 md:p-10">
                <h2 className="mb-4 text-xl font-medium tracking-tight">
                  What teams built
                </h2>
                <p className="max-w-3xl font-light leading-relaxed text-muted-foreground">
                  Teams prototyped a focused feature, a small app, or a proof of
                  concept that solved one clear problem well. The day opened
                  with a tutorial workshop covering Unity and Xcode, including
                  how to build to Apple Vision Pro and Meta Quest 3, so nobody
                  had to arrive an expert. Strong UX ideas and clear product
                  thinking counted as much as code, and headsets were provided.
                </p>
              </section>

              <section>
                <h2 className={sectionLabel}>The two tracks</h2>
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
                <h2 className={sectionLabel}>How projects were judged</h2>
                <div className="grid gap-6 md:grid-cols-3">
                  {priorities.map(([name, blurb]) => (
                    <div
                      key={name}
                      className="rounded-2xl border border-white/10 bg-card p-8"
                    >
                      <h3 className="mb-3 text-lg font-medium">{name}</h3>
                      <p className="font-light leading-relaxed text-muted-foreground">
                        {blurb}
                      </p>
                    </div>
                  ))}
                </div>
                <p className="mt-6 max-w-3xl font-light leading-relaxed text-muted-foreground">
                  Voting was democratic rather than panel-led. Every participant
                  picked their top three projects, points were assigned by rank,
                  and nobody could vote for their own project. The highest point
                  totals won.
                </p>
              </section>

              <section>
                <h2 className={sectionLabel}>How the day ran</h2>
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
                <h2 className={sectionLabel}>Winners</h2>
                <p className="mb-8 max-w-3xl font-light leading-relaxed text-muted-foreground">
                  Thank you to everyone who took part. After a full day of
                  building, judging, and showcasing XR demos on campus, these
                  were the winning projects.
                </p>
                <div className="grid gap-6 md:grid-cols-2">
                  {winners.map((winner) => (
                    <div
                      key={winner.project}
                      className="overflow-hidden rounded-2xl border border-white/10 bg-card"
                    >
                      {/* Natural aspect ratio, no object-cover: these are group
                          photos and a fixed-ratio crop cuts people out of them.
                          width/height are the real pixel dimensions so the
                          browser reserves the space and the page does not jump. */}
                      <img
                        src={winner.photo}
                        alt={winner.alt}
                        width={1200}
                        height={1600}
                        loading="lazy"
                        className="w-full"
                      />
                      <div className="p-8">
                        <p className="mb-2 text-sm font-light text-muted-foreground">
                          {winner.track} track, best design, first place
                        </p>
                        <h3 className="mb-1 text-xl font-medium">
                          {winner.project}
                        </h3>
                        <p className="font-light text-muted-foreground">
                          {winner.team}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className={sectionLabel}>Questions people asked</h2>
                <dl className="overflow-hidden rounded-2xl border border-white/10 bg-card">
                  {faq.map(([q, a]) => (
                    <div
                      key={q}
                      className="border-b border-white/10 px-6 py-5 last:border-b-0"
                    >
                      <dt className="mb-2 font-medium">{q}</dt>
                      <dd className="font-light leading-relaxed text-muted-foreground">
                        {a}
                      </dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-5 font-light text-muted-foreground">
                  Anything else, ask in the{" "}
                  <a
                    href={DISCORD}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-green underline-offset-4 hover:underline"
                  >
                    XRA Discord
                  </a>{" "}
                  or email{" "}
                  <a
                    href={`mailto:${EMAIL}`}
                    className="text-brand-green underline-offset-4 hover:underline"
                  >
                    {EMAIL}
                  </a>
                  .
                </p>
              </section>

              <section className="rounded-2xl border border-white/10 bg-card p-8 md:p-10">
                <h2 className="mb-3 text-xl font-medium tracking-tight">
                  What about this year?
                </h2>
                <p className="mb-6 max-w-3xl font-light leading-relaxed text-muted-foreground">
                  We are running an XR hackathon again, on {EVENT.date}.
                  Sponsorship, mentoring, and the schedule are up
                  now; tracks and participant details follow on November 22.
                </p>
                <div>
                  <Link
                    to="/hackathon/"
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground shadow-[0_8px_24px_hsl(var(--brand-blue)/0.25)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-[0_12px_44px_hsl(var(--brand-blue)/0.5)] active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:ring-offset-2 focus-visible:ring-offset-background motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                  >
                    This year&apos;s hackathon
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Hackathon2026;
