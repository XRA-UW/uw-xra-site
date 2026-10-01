import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/* This page is about the hackathon we are running now. The record of the April
   2026 run lives at /hackathon/2026 so that a change of format or name does not
   force a rewrite of history, and so the archive keeps its own URL. Do not put
   details about the next run here until they are actually decided. */

const DISCORD = "https://discord.gg/4hvsCDhb5p";

const Hackathon = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-0 bg-gradient-hero" />
      <div className="pointer-events-none absolute inset-0 x-pattern" />

      <div className="relative">
        <Header />

        <div className="container px-4 py-16">
          <div className="mb-14 text-center">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-brand-green">
              Coming this year
            </p>
            <h1 className="mb-4 text-4xl font-medium tracking-tight md:text-6xl">
              Hackathon
            </h1>
            <p className="mx-auto max-w-2xl text-lg font-light text-muted-foreground md:text-xl">
              We are running an XR hackathon again this year. The format is
              being reworked off the back of our first run, so dates, tracks,
              and the name are still open. Announcements go out in the Discord
              first.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href={DISCORD}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-3 text-lg font-medium text-primary-foreground shadow-[0_8px_24px_hsl(var(--brand-blue)/0.25)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-[0_12px_44px_hsl(var(--brand-blue)/0.5)] active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:ring-offset-2 focus-visible:ring-offset-background motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                Get the announcement
                <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
              <Link
                to="/hackathon/2026"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-foreground/25 px-8 py-3 text-lg font-medium text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-green hover:bg-brand-green/10 hover:text-brand-green hover:shadow-[0_12px_44px_hsl(var(--brand-green)/0.25)] active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:ring-offset-2 focus-visible:ring-offset-background motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                See how 2026 went
                <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          <div className="mx-auto max-w-5xl">
            <div className="rounded-2xl border border-white/10 bg-card p-8 md:p-10">
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-brand-green">
                Our first run
              </p>
              <h2 className="mb-4 text-2xl font-medium tracking-tight md:text-3xl">
                Hack the AM, April 2026
              </h2>
              <p className="mb-8 max-w-3xl font-light leading-relaxed text-muted-foreground">
                One day on the UW Seattle campus, two headset tracks, teams
                building XR that is genuinely useful in everyday workflows.
                The full record is still up: what teams built, how the day ran,
                the schedule, the winners, and the questions people asked.
              </p>
              <Link
                to="/hackathon/2026"
                className="group inline-flex items-center gap-2 font-medium text-brand-green transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                Read the 2026 archive
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Hackathon;
