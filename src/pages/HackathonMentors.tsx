import { ArrowRight, Check, X } from "lucide-react";
import HackathonLayout, {
  card,
  inlineLink,
  primaryButton,
  sectionLabel,
} from "@/components/hackathon/HackathonLayout";
import {
  DISCORD,
  EVENT,
  mentorContactHref,
  mentorDoes,
  mentorDoesNot,
  mentorRequirements,
  mentorShifts,
} from "@/data/hackathon";

/* Mentor expectations, from the planning notes. This page doubles as the
   mentor expectation document: link mentors here rather than keeping a
   second copy that can drift. */

const HackathonMentors = () => (
  <HackathonLayout
    eyebrow="Mentors"
    title={`Mentor at ${EVENT.name}`}
    lead={
      <p>
        Mentors keep teams moving. You help them sharpen an idea, get past a
        build error, and turn a rough prototype into a demo, without building
        it for them.
      </p>
    }
    actions={
      <a href={mentorContactHref} className={primaryButton}>
        Apply to mentor
        <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
      </a>
    }
  >
    <section>
      <h2 className={sectionLabel}>The role</h2>
      <div className="grid gap-6 md:grid-cols-2">
        <div className={card}>
          <h3 className="mb-5 text-xl font-medium">What mentors do</h3>
          <ul className="space-y-3">
            {mentorDoes.map((item) => (
              <li key={item} className="flex gap-3 font-light text-muted-foreground">
                <Check className="mt-1 h-4 w-4 shrink-0 text-brand-green" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className={card}>
          <h3 className="mb-5 text-xl font-medium">What mentors do not do</h3>
          <ul className="space-y-3">
            {mentorDoesNot.map((item) => (
              <li key={item} className="flex gap-3 font-light text-muted-foreground">
                <X className="mt-1 h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    <section>
      <h2 className={sectionLabel}>What we ask</h2>
      <div className={card}>
        <ul className="space-y-3">
          {mentorRequirements.map((item) => (
            <li key={item} className="flex gap-3 font-light text-muted-foreground">
              <Check className="mt-1 h-4 w-4 shrink-0 text-brand-green" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>

    <section>
      <h2 className={sectionLabel}>Shifts on {EVENT.date}</h2>
      <div className="grid gap-6 sm:grid-cols-3">
        {mentorShifts.map((shift) => (
          <div key={shift} className={`${card} text-center`}>
            <p className="text-xl font-medium tabular-nums">{shift}</p>
          </div>
        ))}
      </div>
      <p className="mt-6 max-w-3xl font-light leading-relaxed text-muted-foreground">
        Food is provided for mentors on shift. Between visits, questions come
        in through the mentor channel of the{" "}
        <a href={DISCORD} target="_blank" rel="noopener noreferrer" className={inlineLink}>
          XRA Discord
        </a>
        .
      </p>
    </section>

    <section className={`${card} md:p-10`}>
      <h2 className="mb-3 text-xl font-medium tracking-tight">Apply</h2>
      <p className="mb-6 max-w-3xl font-light leading-relaxed text-muted-foreground">
        Tell us about your XR development experience and which shifts you can
        take.
      </p>
      <a href={mentorContactHref} className={primaryButton}>
        Apply to mentor
        <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
      </a>
    </section>
  </HackathonLayout>
);

export default HackathonMentors;
