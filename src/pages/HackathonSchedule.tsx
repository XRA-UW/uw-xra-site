import HackathonLayout, { card, inlineLink, sectionLabel } from "@/components/hackathon/HackathonLayout";
import { DISCORD, EVENT, schedule } from "@/data/hackathon";

/* The day-of schedule from the planning notes. It is a draft until
   participant applications open, and the page says so. */

const HackathonSchedule = () => (
  <HackathonLayout
    eyebrow={EVENT.date}
    title="The day"
    lead={
      <p>
        {EVENT.hours} on the {EVENT.location}. Workshops in the morning, then
        teams build until judging in the evening.
      </p>
    }
  >
    <section>
      <h2 className={sectionLabel}>Schedule</h2>
      <ul className="overflow-hidden rounded-2xl border border-white/10 bg-card">
        {schedule.map(([time, item]) => (
          <li
            key={time + item}
            className="flex flex-col gap-1 border-b border-white/10 px-6 py-4 last:border-b-0 sm:flex-row sm:items-center sm:gap-6"
          >
            <span className="w-24 shrink-0 text-sm font-medium tabular-nums text-brand-green">{time}</span>
            <span className="font-light text-muted-foreground">{item}</span>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-sm font-light text-muted-foreground">
        Draft schedule. Times may shift before applications open on November 22.
      </p>
    </section>

    <section>
      <h2 className={sectionLabel}>Before the day</h2>
      <div className="grid gap-6 md:grid-cols-2">
        <div className={card}>
          <h3 className="mb-3 text-xl font-medium">Teams of 1 to 4</h3>
          <p className="font-light leading-relaxed text-muted-foreground">
            Come with a team or find one in the team formation channel of the{" "}
            <a href={DISCORD} target="_blank" rel="noopener noreferrer" className={inlineLink}>
              XRA Discord
            </a>
            .
          </p>
        </div>
        <div className={card}>
          <h3 className="mb-3 text-xl font-medium">Headsets</h3>
          <p className="font-light leading-relaxed text-muted-foreground">
            Demo headsets from 9 a.m., and check one out for your team once
            checkout opens.
          </p>
        </div>
      </div>
    </section>
  </HackathonLayout>
);

export default HackathonSchedule;
