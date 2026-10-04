import type { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/* Shared shell for this year's hackathon pages: the same backdrop as every
   other page, plus a tab bar so a sponsor or someone from the school can move
   between the pages during a meeting. The 2026 archive is deliberately not a
   tab; it is history, not part of this year's event. */

const tabs = [
  { name: "Overview", path: "/hackathon" },
  { name: "Sponsors", path: "/hackathon/sponsors" },
  { name: "Mentors", path: "/hackathon/mentors" },
  { name: "Schedule", path: "/hackathon/schedule" },
];

export const sectionLabel =
  "mb-5 text-sm font-medium uppercase tracking-[0.25em] text-brand-green";

export const primaryButton =
  "group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-3 text-lg font-medium text-primary-foreground shadow-[0_8px_24px_hsl(var(--brand-blue)/0.25)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-[0_12px_44px_hsl(var(--brand-blue)/0.5)] active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:ring-offset-2 focus-visible:ring-offset-background motion-reduce:transition-none motion-reduce:hover:translate-y-0";

export const secondaryButton =
  "group inline-flex items-center justify-center gap-2 rounded-full border border-foreground/25 px-8 py-3 text-lg font-medium text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-green hover:bg-brand-green/10 hover:text-brand-green hover:shadow-[0_12px_44px_hsl(var(--brand-green)/0.25)] active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:ring-offset-2 focus-visible:ring-offset-background motion-reduce:transition-none motion-reduce:hover:translate-y-0";

export const card = "rounded-2xl border border-white/10 bg-card p-8";

export const inlineLink = "text-brand-green underline-offset-4 hover:underline";

interface Props {
  eyebrow: string;
  title: string;
  lead: ReactNode;
  /** Buttons or chips under the lead. */
  actions?: ReactNode;
  children: ReactNode;
}

const HackathonLayout = ({ eyebrow, title, lead, actions, children }: Props) => {
  const { pathname } = useLocation();
  /* Same normalisation as Header: prerender sees no trailing slash, the
     browser does. */
  const current = pathname.replace(/\/+$/, "") || "/";

  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-0 bg-gradient-hero" />
      <div className="pointer-events-none absolute inset-0 x-pattern" />

      <div className="relative">
        <Header />

        <div className="container px-4 py-12">
          <div className="mx-auto max-w-5xl">
            <nav aria-label="Hackathon pages" className="mb-12 overflow-x-auto">
              <ul className="flex w-max gap-1 rounded-full border border-white/10 bg-card/60 p-1">
                {tabs.map((tab) => {
                  const active = current === tab.path;
                  return (
                    <li key={tab.path}>
                      <Link
                        to={`${tab.path}/`}
                        aria-current={active ? "page" : undefined}
                        className={`block rounded-full px-3 py-1.5 text-xs font-medium sm:px-4 sm:text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green ${
                          active
                            ? "bg-brand-green text-background"
                            : "text-foreground/70 hover:bg-white/5 hover:text-foreground"
                        }`}
                      >
                        {tab.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-brand-green">
              {eyebrow}
            </p>
            <h1 className="mb-4 text-4xl font-medium tracking-tight md:text-6xl">
              {title}
            </h1>
            <div className="max-w-3xl text-lg font-light leading-relaxed text-muted-foreground md:text-xl">
              {lead}
            </div>
            {actions && <div className="mt-8">{actions}</div>}

            <div className="mt-14 space-y-14">{children}</div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default HackathonLayout;
