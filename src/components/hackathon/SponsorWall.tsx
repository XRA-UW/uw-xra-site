import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { EVENT, sponsors, sponsorTiers } from "@/data/hackathon";

/* Sponsors appear in order of contribution, and a bigger contribution gets a
   bigger logo. That is a commitment made to sponsors, so the order and sizes
   come from the tier, never from where an entry sits in the data file. */
const logoHeight = ["h-20", "h-14", "h-10", "h-8"];

const SponsorWall = () => {
  if (sponsors.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-white/20 p-8 text-center md:p-10">
        {/* The page already heads this section "Sponsors", so repeating the word
            here reads as "Sponsors Sponsors" once text is flattened, which is
            exactly what DubBot's repeated-word check scans. */}
        <p className="mb-2 text-lg font-medium">Announced November 22</p>
        <p className="mb-6 font-light text-muted-foreground">
          Logos appear here in order of contribution, sized by tier.
        </p>
        <Link
          to={`${EVENT.path}/sponsors/`}
          className="group inline-flex items-center gap-2 font-medium text-brand-green transition-colors hover:text-foreground"
        >
          Put your logo here
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </div>
    );
  }

  const ordered = [...sponsors].sort((a, b) => a.tier - b.tier);
  return (
    <div className="space-y-10">
      {sponsorTiers.map((tier, index) => {
        const inTier = ordered.filter((s) => s.tier === index);
        if (inTier.length === 0) return null;
        return (
          <div key={tier.label}>
            <h3 className="mb-4 text-sm font-light text-muted-foreground">{tier.label}</h3>
            <ul className="flex flex-wrap items-center gap-x-10 gap-y-6">
              {inTier.map((sponsor) => {
                const mark = sponsor.logo ? (
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className={`${logoHeight[index] ?? "h-8"} w-auto`}
                  />
                ) : (
                  <span className="text-lg font-medium">{sponsor.name}</span>
                );
                return (
                  <li key={sponsor.name}>
                    {sponsor.href ? (
                      <a href={sponsor.href} target="_blank" rel="noopener noreferrer">
                        {mark}
                      </a>
                    ) : (
                      mark
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default SponsorWall;
