import Countdown from "@/components/Countdown";
import { useNow } from "@/hooks/use-now";
import { DISCORD, REVEAL_AT } from "@/data/hackathon";
import { card, inlineLink, sectionLabel } from "@/components/hackathon/HackathonLayout";

/* Counts down to November 22, when tracks and sponsors are announced and
   applications open. The site only changes when someone deploys, so at zero
   this does not claim the details are out: it settles on the date and points
   at the Discord, where announcements land first. */
const RevealCountdown = () => {
  const now = useNow();
  /* A revealed build shows the tracks and sponsors themselves instead. */
  if (__REVEALED__) return null;
  const counting = now !== null && now < REVEAL_AT.getTime();

  return (
    <section className={`${card} md:p-10`}>
      <p className={sectionLabel}>November 22</p>
      <h2 className="mb-3 text-2xl font-medium tracking-tight md:text-3xl">
        Tracks and sponsors revealed
      </h2>
      <p className="mb-6 max-w-3xl font-light leading-relaxed text-muted-foreground">
        Participant applications open the same day. Announcements land in the{" "}
        <a href={DISCORD} target="_blank" rel="noopener noreferrer" className={inlineLink}>
          XRA Discord
        </a>{" "}
        first.
      </p>
      {counting && (
        <Countdown to={REVEAL_AT} now={now} label="Tracks and sponsors revealed in" />
      )}
    </section>
  );
};

export default RevealCountdown;
