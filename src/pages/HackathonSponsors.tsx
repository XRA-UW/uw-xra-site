import { ArrowRight, Check } from "lucide-react";
import HackathonLayout, {
  card,
  inlineLink,
  primaryButton,
  sectionLabel,
} from "@/components/hackathon/HackathonLayout";
import { EMAIL, EVENT, sponsorContactHref, sponsorTiers } from "@/data/hackathon";

/* The page a sponsor is pointed at in or after a meeting. Tiers and deadlines
   come from src/data/hackathon.ts. Still OPEN, so not stated here: whether
   award prizes are bought from sponsor funds or provided by the sponsor, and
   which tier in-kind support (credits, trials) counts toward. */

const HackathonSponsors = () => (
  <HackathonLayout
    eyebrow="Sponsorship"
    title={`Sponsor ${EVENT.name}`}
    lead={
      <p>
        One day, {EVENT.location}, students building XR from scratch. Your
        support pays for the headsets, food, and space that make that day
        possible, and puts your platform in the hands of the people building
        on it.
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
      <h2 className={sectionLabel}>Tiers</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {sponsorTiers.map((tier, index) => (
          <div
            key={tier.label}
            className={`${card} ${index === 0 ? "border-brand-green/40 shadow-glow-green" : ""}`}
          >
            <p className="mb-1 text-sm font-light text-muted-foreground">{tier.label}</p>
            <h3 className="mb-6 text-2xl font-medium tracking-tight">{tier.amount}</h3>
            <ul className="space-y-3">
              {tier.benefits.map((benefit) => (
                <li key={benefit} className="flex gap-3 font-light text-muted-foreground">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-brand-green" aria-hidden="true" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="mt-6 max-w-3xl font-light leading-relaxed text-muted-foreground">
        Sponsors are listed on the site in order of contribution, and larger
        contributions get larger logos.
      </p>
    </section>

    <section>
      <h2 className={sectionLabel}>Beyond funding</h2>
      <div className="grid gap-6 md:grid-cols-2">
        <div className={card}>
          <h3 className="mb-3 text-xl font-medium">Product access</h3>
          <p className="font-light leading-relaxed text-muted-foreground">
            Give participants credits, trial access, or API access to your
            product for the day. Teams build with what is in front of them, so
            this is the most direct way to see what students make with your
            tools.
          </p>
        </div>
        <div className={card}>
          <h3 className="mb-3 text-xl font-medium">Awards</h3>
          <p className="font-light leading-relaxed text-muted-foreground">
            Track and award sponsors shape their award with us ahead of the
            event, so the criteria are set before teams start building.
          </p>
        </div>
      </div>
    </section>

    <section>
      {/* Commitment date only. The funds due date is a payment term for
          confirmed sponsors and goes in their confirmation, not on the site. */}
      <h2 className={sectionLabel}>Deadline</h2>
      <div className={card}>
        <p className="mb-1 text-sm font-light text-muted-foreground">Commit by</p>
        <h3 className="text-2xl font-medium tracking-tight">November 20</h3>
        <p className="mt-3 font-light text-muted-foreground">
          So your track or award is in the announcement on November 22.
        </p>
      </div>
    </section>

    <section className={`${card} md:p-10`}>
      <h2 className="mb-3 text-xl font-medium tracking-tight">Talk to us</h2>
      <p className="mb-6 max-w-3xl font-light leading-relaxed text-muted-foreground">
        Tell us which tier you are considering, or what else you could offer.
        We reply from{" "}
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
