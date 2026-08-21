import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { XMark } from "@/components/Logo";
import { ArrowRight } from "lucide-react";

const keywords = [
  { word: "Future", tilt: "-rotate-6" },
  { word: "Community", tilt: "rotate-3" },
  { word: "Reality", tilt: "-rotate-2" },
  { word: "Explore", tilt: "rotate-6" },
  { word: "Create", tilt: "-rotate-3" },
  { word: "Build", tilt: "rotate-2" },
  { word: "Experience", tilt: "-rotate-1" },
];

const pillars = [
  {
    title: "Explore",
    accent: "bg-primary text-primary-foreground",
    text: "Get hands-on with the latest headsets and demos at our meetups — from Vision Pro to Quest — and see what spatial computing can really do.",
  },
  {
    title: "Build",
    accent: "bg-accent text-accent-foreground",
    text: "Ship XR projects with other students using Unity, Unreal, WebXR, and everything in between — no prior experience required.",
  },
  {
    title: "Community",
    accent: "bg-secondary text-secondary-foreground",
    text: "Meet designers, developers, and researchers from across campus, and hear from guest speakers working in the XR industry.",
  },
];

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      {/* Background: brand gradient wash + faint tiled X pattern */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-hero" />
      <div className="pointer-events-none absolute inset-0 x-pattern" />

      <div className="relative">
        <Header />

        {/* Hero */}
        <section className="container px-4 pb-16 pt-20 text-center md:pt-28">
          <div className="mx-auto max-w-4xl">
            <p className="animate-fade-up mb-4 text-sm font-medium uppercase tracking-[0.25em] text-brand-green">
              University of Washington
            </p>
            <h1 className="animate-fade-up mb-6 text-5xl font-medium tracking-tight md:text-7xl">
              Extended Reality Association
            </h1>
            <p className="animate-fade-up mx-auto mb-10 max-w-2xl text-lg font-light text-muted-foreground md:text-xl">
              A community of builders and designers exploring the frontiers of
              virtual reality, augmented reality &amp; spatial intelligence.
            </p>

            <div className="animate-fade-up flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="https://discord.gg/AA6wF9f63p"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-3 text-lg font-medium text-primary-foreground transition-all hover:shadow-glow-blue"
              >
                Join Our Discord
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/uw_xra"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-foreground/25 px-8 py-3 text-lg font-medium text-foreground transition-all hover:border-brand-green hover:text-brand-green"
              >
                Follow on Instagram
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Keyword pills, straight from the brand sheet */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-3">
            {keywords.map(({ word, tilt }) => (
              <span
                key={word}
                className={`${tilt} rounded-full bg-primary px-5 py-2 font-medium text-primary-foreground transition-transform hover:rotate-0 hover:scale-105`}
              >
                {word}
              </span>
            ))}
          </div>
        </section>

        {/* Events */}
        <section className="container px-4 py-16">
          <div className="mb-10 text-center">
            <h2 className="mb-3 text-3xl font-medium tracking-tight md:text-4xl">
              Upcoming Events
            </h2>
            <p className="text-lg font-light text-muted-foreground">
              Join us for XR demos, workshops, and networking.
            </p>
          </div>

          <div className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-card p-4 md:p-6">
            <iframe
              src="https://lu.ma/embed/calendar/cal-rx7JDbb4ZqgZ8lR/events"
              style={{
                border: "none",
                borderRadius: "12px",
                width: "100%",
                height: "500px",
                minHeight: "400px",
              }}
              allowFullScreen
              aria-hidden="false"
              tabIndex={0}
              title="XRA events calendar"
            />
          </div>

          <p className="mt-6 text-center">
            <a
              href="https://luma.com/xra_uw"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-muted-foreground transition-colors hover:text-brand-green"
            >
              Browse all events on Luma →
            </a>
          </p>
        </section>

        {/* About */}
        <section className="container px-4 py-16">
          <div className="mb-10 text-center">
            <h2 className="mb-3 text-3xl font-medium tracking-tight md:text-4xl">
              What We Do
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-2xl border border-white/10 bg-card p-8 transition-colors hover:border-white/25"
              >
                <div
                  className={`mb-5 flex h-12 w-12 items-center justify-center rounded-full ${pillar.accent}`}
                >
                  <XMark className="h-5 w-5" />
                </div>
                <h3 className="mb-3 text-xl font-medium">{pillar.title}</h3>
                <p className="font-light leading-relaxed text-muted-foreground">
                  {pillar.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ICXR */}
        <section className="container px-4 py-16">
          <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-8 rounded-2xl border border-white/10 bg-card p-10 md:flex-row md:items-center">
            <div>
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-brand-green">
                Beyond UW
              </p>
              <h2 className="mb-3 text-2xl font-medium tracking-tight md:text-3xl">
                Part of a global student XR community
              </h2>
              <p className="max-w-xl font-light leading-relaxed text-muted-foreground">
                Through ICXR — the Intercollegiate Extended Reality community —
                student XR builders across 45+ university chapters worldwide
                share hackathons, events, and industry connections.
              </p>
            </div>
            <a
              href="https://icxr.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-primary px-8 py-3 font-medium text-primary-foreground transition-all hover:shadow-glow-blue"
            >
              Visit ICXR
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default Index;
