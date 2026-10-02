import type { Person } from "@/data/people";

const avatarStyles = [
  "bg-primary text-primary-foreground",
  "bg-accent text-accent-foreground",
  "bg-secondary text-secondary-foreground",
];

const initials = (name: string) => {
  const parts = name.trim().split(/\s+/);
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
};

interface PeopleMarqueeProps {
  title: string;
  subtitle?: string;
  people: Person[];
}

const PeopleMarquee = ({ title, subtitle, people }: PeopleMarqueeProps) => {
  if (people.length === 0) return null;

  /* The list is rendered twice so the scroll loops seamlessly. The second
     copy is decorative: without aria-hidden a screen reader announces every
     person on this page twice. */
  const loop = [...people, ...people];

  return (
    <div className="mb-16 last:mb-0">
      <h2 className="mb-2 text-center text-2xl font-medium text-brand-green">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mb-8 max-w-md text-center font-light text-muted-foreground">
          {subtitle}
        </p>
      )}
      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="animate-marquee flex w-max gap-4 py-2 hover:[animation-play-state:paused]">
          {loop.map((person, i) => (
            <div
              key={`${person.name}-${i}`}
              aria-hidden={i >= people.length || undefined}
              className="flex shrink-0 items-center gap-3 whitespace-nowrap rounded-full border border-white/10 bg-card px-4 py-2"
            >
              <div
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-medium ${
                  /* Indexed within one copy, not the doubled list, so the clone
                     matches the original. Otherwise the colours shift at the
                     loop seam whenever the count is not a multiple of three. */
                  avatarStyles[(i % people.length) % avatarStyles.length]
                }`}
              >
                {initials(person.name)}
              </div>
              <div className="text-left">
                <p className="text-sm font-medium leading-tight">
                  {person.name}
                </p>
                <p className="text-xs font-light leading-tight text-muted-foreground">
                  {person.position}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PeopleMarquee;
