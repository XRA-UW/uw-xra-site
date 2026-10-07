import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { currentProjects, pastProjects, pastProjectsNote } from "@/data/projects";
import type { Project } from "@/data/projects";
import {
  BUILDSPACE_APPLY,
  BUILDSPACE_CLOSES,
  CSEED,
  isBuildspaceOpen,
} from "@/data/buildspace";
import cseedLogo from "@/assets/cseed-logo-white.png";
import { XraWordmark } from "@/components/Logo";
import Countdown from "@/components/Countdown";
import { useNow } from "@/hooks/use-now";

const EmptyNote = ({ children }: { children: ReactNode }) => (
  <div className="rounded-2xl border border-dashed border-white/15 bg-card/40 p-8 text-center">
    <p className="font-light text-muted-foreground">{children}</p>
  </div>
);

const ProjectGroup = ({
  title,
  projects,
  emptyMessage,
  note,
}: {
  title: string;
  projects: Project[];
  /** A sentence, or a whole card, shown while there are no projects. */
  emptyMessage: ReactNode;
  note?: string;
}) => (
  <section className="mb-14">
    <h2 className="mb-5 text-sm font-medium uppercase tracking-[0.25em] text-brand-green">
      {title}
    </h2>

    {projects.length > 0 ? (
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    ) : typeof emptyMessage === "string" ? (
      <EmptyNote>{emptyMessage}</EmptyNote>
    ) : (
      emptyMessage
    )}

    {note && projects.length > 0 && (
      <p className="mt-6 text-center font-light text-muted-foreground">{note}</p>
    )}
  </section>
);

/* Shown in place of the empty "In progress" state while Buildspace is taking
   applications, so the empty slot reads as an invitation rather than a gap.
   Disappears with the home page section at the deadline in data/buildspace.ts,
   and once a real project is listed it never shows at all. */
const StartAProject = ({ now }: { now: number | null }) => (
  <div className="rounded-2xl border border-dashed border-brand-green/40 bg-card/60 p-8 md:p-10">
    {/* Same lockup as the home page Buildspace section. */}
    <div className="mb-6 flex items-center gap-4" aria-hidden="true">
      <XraWordmark className="h-6 w-auto text-foreground" />
      <span className="text-xl font-light text-muted-foreground">×</span>
      <img src={cseedLogo} alt="" width={640} height={147} className="h-6 w-auto" />
    </div>
    <h3 className="mb-3 text-2xl font-medium tracking-tight md:text-3xl">
      Your project could be the first one here
    </h3>
    <p className="mb-6 max-w-2xl font-light leading-relaxed text-muted-foreground">
      Nothing is in progress yet. The way in this quarter is{" "}
      <a
        href={CSEED}
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium text-foreground underline decoration-brand-green/60 underline-offset-4 transition-colors hover:text-brand-green"
      >
        cseed
      </a>{" "}
      Buildspace: six weeks of weekly build nights, October 15 to the November 17
      Demo Day, with an Extended Reality track run with XRA and access to Apple
      Vision Pro and Quest 3 headsets. Come solo or with a team, and pick the XR
      track on the application. Applications close October 10 at 11:59 a.m.
    </p>
    <div className="mb-8">
      <Countdown to={BUILDSPACE_CLOSES} now={now} label="Applications close in" />
    </div>
    <a
      href={BUILDSPACE_APPLY}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-3 text-lg font-medium text-accent-foreground shadow-[0_8px_24px_hsl(var(--brand-green)/0.25)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent/90 hover:shadow-[0_12px_44px_hsl(var(--brand-green)/0.45)] active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:ring-offset-2 focus-visible:ring-offset-background motion-reduce:transition-none motion-reduce:hover:translate-y-0"
    >
      Start it at Buildspace
      <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
    </a>
  </div>
);

const EMPTY_IN_PROGRESS =
  "Nothing running right now. New builds kick off through the quarter — they get announced in the Discord first.";

/* Decides between the invite and the plain empty note on the live clock, so
   the card swaps out at the deadline without a reload. Before mount (and in
   the prerender) it falls back to a one-off check. */
const InProgressEmpty = () => {
  const now = useNow();
  const open = now === null ? isBuildspaceOpen() : now < BUILDSPACE_CLOSES.getTime();
  return open ? <StartAProject now={now} /> : <EmptyNote>{EMPTY_IN_PROGRESS}</EmptyNote>;
};

const Projects = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-0 bg-gradient-hero" />
      <div className="pointer-events-none absolute inset-0 x-pattern" />

      <div className="relative">
        <Header />

        <div className="container px-4 py-16">
          <div className="mb-14 text-center">
            <h1 className="mb-4 text-4xl font-medium tracking-tight md:text-6xl">
              Projects
            </h1>
            <p className="text-lg font-light text-muted-foreground md:text-xl">
              What members have built together.
            </p>
          </div>

          <div className="mx-auto max-w-5xl">
            <ProjectGroup
              title="In progress"
              projects={currentProjects}
              emptyMessage={<InProgressEmpty />}
            />
            <ProjectGroup
              title="Past projects"
              projects={pastProjects}
              emptyMessage="Write-ups of past projects are on the way."
              note={pastProjectsNote}
            />
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Projects;
