import { ArrowRight } from "lucide-react";
import HackathonLayout, {
  card,
  inlineLink,
  primaryButton,
  sectionLabel,
} from "@/components/hackathon/HackathonLayout";
import {
  EMAIL,
  EVENT,
  otherContributions,
  sponsorContactHref,
  sponsorTiers,
} from "@/data/hackathon";

/* The page a partner is pointed at in or after a meeting. Levels come
   from src/data/hackathon.ts. Contributions are donations:
   word recognition as something we may do, never as a benefit owed. */

const HackathonSponsors = () => (
  <HackathonLayout
    eyebrow="Partnership Levels"
    title={`Support ${EVENT.name}`}
    lead={
      <p>
        {EVENT.date}. The hackathon brings students together to build projects
        in extended reality (XR). We are planning for approximately 150
        participants, with a focus on Apple Vision Pro and Meta Quest
        development. Your contribution helps students gain hands-on experience,
        learn from peers and mentors, and turn ideas into working projects.
      </p>
    }
    actions={
      <a href={sponsorContactHref} className={primaryButton}>
        Start a conversation
        <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
      </a>
    }
  >
    <section>
      <h2 className={sectionLabel}>Partnership opportunities</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {sponsorTiers.map((tier, index) => (
          <div
            key={tier.label}
            className={`${card} ${index === 0 ? "border-brand-green/40 shadow-glow-green" : ""}`}
          >
            <p className="mb-1 text-sm font-light text-muted-foreground">{tier.label}</p>
            <h3 className="mb-4 text-2xl font-medium tracking-tight">{tier.amount}</h3>
            <p className="font-light leading-relaxed text-muted-foreground">
              {tier.description}
            </p>
          </div>
        ))}
      </div>
    </section>

    <section>
      <h2 className={sectionLabel}>Recognition of support</h2>
      <div className={card}>
        <p className="max-w-3xl font-light leading-relaxed text-muted-foreground">
          We are grateful to the partners who help make the hackathon possible.
          As an expression of thanks, we may acknowledge contributions on our
          website, in event communications, or during the event.
        </p>
      </div>
    </section>

    <section>
      <h2 className={sectionLabel}>Additional ways to contribute</h2>
      <div className={card}>
        <p className="mb-4 max-w-3xl font-light leading-relaxed text-muted-foreground">
          {otherContributions.join(", ").replace(/, ([^,]*)$/, ", and $1")} can
          also expand student learning opportunities. We welcome conversations
          about how your team can help students access tools, receive guidance,
          and bring their projects to life.
        </p>
      </div>
    </section>

    <section className={`${card} md:p-10`}>
      <h2 className="mb-3 text-xl font-medium tracking-tight">Talk to us</h2>
      <p className="mb-6 max-w-3xl font-light leading-relaxed text-muted-foreground">
        Tell us which level you are considering, or what else your team could
        offer. We reply from{" "}
        <a href={`mailto:${EMAIL}`} className={inlineLink}>
          {EMAIL}
        </a>
        .
      </p>
      <a href={sponsorContactHref} className={primaryButton}>
        Start a conversation
        <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
      </a>
    </section>
  </HackathonLayout>
);

export default HackathonSponsors;
