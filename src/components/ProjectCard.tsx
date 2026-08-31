import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";

const ProjectCard = ({ title, period, blurb, tags, href }: Project) => {
  const Wrapper = href ? "a" : "div";

  return (
    <Wrapper
      {...(href
        ? { href, target: "_blank", rel: "noopener noreferrer" }
        : {})}
      className={`group flex h-full flex-col rounded-2xl border border-white/10 bg-card p-8 transition-all ${
        href
          ? "hover:-translate-y-0.5 hover:border-white/25 hover:shadow-[0_12px_44px_hsl(var(--brand-blue)/0.25)] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
          : ""
      }`}
    >
      <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-brand-green">
        {period}
      </p>
      <h3 className="mb-3 flex items-start gap-2 text-xl font-medium">
        {title}
        {href && (
          <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        )}
      </h3>
      <p className="font-light leading-relaxed text-muted-foreground">{blurb}</p>

      {tags && tags.length > 0 && (
        <ul className="mt-5 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-white/15 px-3 py-1 text-xs font-light text-muted-foreground"
            >
              {tag}
            </li>
          ))}
        </ul>
      )}
    </Wrapper>
  );
};

export default ProjectCard;
