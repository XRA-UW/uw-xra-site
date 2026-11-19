import { ArrowRight, Check, X } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import HackathonLayout, {
  card,
  inlineLink,
  primaryButton,
  sectionLabel,
} from "@/components/hackathon/HackathonLayout";
import {
  DISCORD,
  EVENT,
  MENTOR_FORM_URL,
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
    eyebrow="Mentors and judges"
    title={`Mentor at ${EVENT.name}`}
    lead={
      <p>
        Mentors keep teams moving. You help them sharpen an idea, get past a
        build error, and turn a rough prototype into a demo, without building
        it for them. A few judging spots may also open for people with strong
        XR experience.
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
      <h2 className={sectionLabel}>Mentoring</h2>
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
      <h2 className={sectionLabel}>What we ask of mentors</h2>
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
          <div key={shift.name} className={`${card} text-center`}>
            <p className="text-xl font-medium">{shift.name}</p>
            <p className="mt-1 font-light tabular-nums text-muted-foreground">{shift.time}</p>
          </div>
        ))}
      </div>
      <p className="mt-6 max-w-3xl font-light leading-relaxed text-muted-foreground">
        Mentoring ends when judging starts at 7 p.m. You are welcome to stay
        through the closing ceremony at 8:30 p.m. to see the demos and meet
        the students. Food is provided for mentors on shift. Between visits, questions come
        in through the mentor channel of the{" "}
        <a href={DISCORD} target="_blank" rel="noopener noreferrer" className={inlineLink}>
          XRA Discord
        </a>
        .
      </p>
    </section>

    <section>
      <h2 className={sectionLabel}>Judging</h2>
      <div className={card}>
        <p className="max-w-3xl font-light leading-relaxed text-muted-foreground">
          Judging starts at 7 p.m., when hacking ends. We expect most judges to
          come from our partners, so spots are limited. We may also invite a
          few people with strong XR industry or research experience. If that
          sounds like you, mention it on the application and we will reach out
          if a spot opens. Anyone who both mentors and judges will not judge a
          team they mentored.
        </p>
      </div>
    </section>

    <section className={`${card} md:p-10`}>
      <h2 className="mb-3 text-xl font-medium tracking-tight">Apply</h2>
      <p className="mb-6 max-w-3xl font-light leading-relaxed text-muted-foreground">
        Tell us about your XR development experience, which shifts you can
        take, and whether you are interested in judging.
      </p>
      <div className="flex flex-col gap-8 sm:flex-row sm:items-center">
        <a href={mentorContactHref} className={primaryButton}>
          Apply to mentor
          <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
        </a>
        {/* Rendered from MENTOR_FORM_URL rather than a saved image, so the code
            can never point somewhere the button does not. Kept black on a
            white tile in both themes: inverted or low-contrast codes fail on
            many phone scanners. Hidden while the button is still a mailto. */}
        {MENTOR_FORM_URL && (
          <figure className="w-fit">
            <div className="rounded-xl bg-white p-3">
              <QRCodeSVG
                value={MENTOR_FORM_URL}
                size={144}
                level="M"
                fgColor="hsl(0, 0%, 0%)"
                bgColor="hsl(0, 0%, 100%)"
                title="QR code for the mentor application form"
              />
            </div>
            <figcaption className="mt-2 text-sm font-light text-muted-foreground">
              Scan to apply
            </figcaption>
          </figure>
        )}
      </div>
    </section>
  </HackathonLayout>
);

export default HackathonMentors;
