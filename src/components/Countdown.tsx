/* Time left until a deadline. Days and hours while it is a day or more away,
   where a ticking seconds digit is just noise; hours, minutes and seconds in
   the final day, when it is worth watching. Renders nothing until the client
   clock is known (see useNow), and nothing once the deadline has passed: the
   caller decides what replaces it. */

const DAY = 86_400_000;
const FAR_UNITS = [
  { label: "days", ms: DAY },
  { label: "hours", ms: 3_600_000 },
];
const NEAR_UNITS = [
  { label: "hours", ms: 3_600_000 },
  { label: "min", ms: 60_000 },
  { label: "sec", ms: 1_000 },
];

interface Props {
  to: Date;
  now: number | null;
  /** Spoken label, e.g. "Applications close in". */
  label: string;
}

const Countdown = ({ to, now, label }: Props) => {
  if (now === null) return null;
  let left = to.getTime() - now;
  if (left <= 0) return null;

  const units = left >= DAY ? FAR_UNITS : NEAR_UNITS;
  const parts = units.map(({ label: unit, ms }) => {
    const value = Math.floor(left / ms);
    left -= value * ms;
    return { unit, value };
  });

  /* role="timer" is not announced on every tick, so screen readers are not
     interrupted each second; the label gives the full reading on focus. */
  const spoken = `${label} ${parts.map((p) => `${p.value} ${p.unit}`).join(", ")}`;

  return (
    <div role="timer" aria-label={spoken} className="flex gap-2 sm:gap-3">
      {parts.map(({ unit, value }) => (
        <div
          key={unit}
          aria-hidden="true"
          className="min-w-[4rem] rounded-xl border border-white/10 bg-background/60 px-3 py-2 text-center"
        >
          <div className="text-2xl font-medium tabular-nums text-brand-green md:text-3xl">
            {String(value).padStart(2, "0")}
          </div>
          <div className="text-xs font-light uppercase tracking-widest text-muted-foreground">
            {unit}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Countdown;
