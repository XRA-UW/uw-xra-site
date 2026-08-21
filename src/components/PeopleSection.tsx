import PersonCard from "@/components/PersonCard";
import type { Person } from "@/data/people";

interface PeopleSectionProps {
  title: string;
  people: Person[];
  maxWidth?: string;
  cols?: string;
}

const PeopleSection = ({
  title,
  people,
  maxWidth = "max-w-5xl",
  cols = "md:grid-cols-2 lg:grid-cols-3",
}: PeopleSectionProps) => {
  if (people.length === 0) return null;

  return (
    <div className="mb-16 last:mb-0">
      <h2 className="mb-8 text-center text-2xl font-medium text-brand-green">
        {title}
      </h2>
      <div className={`mx-auto grid grid-cols-1 gap-6 ${cols} ${maxWidth}`}>
        {people.map((person, i) => (
          <PersonCard key={person.name} {...person} index={i} />
        ))}
      </div>
    </div>
  );
};

export default PeopleSection;
