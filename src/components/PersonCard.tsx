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

const PersonCard = ({ name, position, index }: Person & { index: number }) => (
  <div className="rounded-2xl border border-white/10 bg-card p-8 text-center transition-colors hover:border-white/25">
    <div
      className={`mx-auto mb-5 flex h-24 w-24 items-center justify-center rounded-full text-2xl font-medium ${
        avatarStyles[index % avatarStyles.length]
      }`}
    >
      {initials(name)}
    </div>
    <h3 className="mb-1 text-lg font-medium">{name}</h3>
    <p className="font-light text-muted-foreground">{position}</p>
  </div>
);

export default PersonCard;
