import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { currentProjects, pastProjects } from "@/data/projects";
import type { Project } from "@/data/projects";

const ProjectGroup = ({
  title,
  projects,
  emptyMessage,
}: {
  title: string;
  projects: Project[];
  emptyMessage: string;
}) => (
  <section className="mb-14">
    <h2 className="mb-5 text-sm font-medium uppercase tracking-[0.25em] text-brand-green">
      {title}
    </h2>

    {projects.length > 0 ? (
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    ) : (
      <div className="rounded-2xl border border-dashed border-white/15 bg-card/40 p-8 text-center">
        <p className="font-light text-muted-foreground">{emptyMessage}</p>
      </div>
    )}
  </section>
);

const Projects = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-0 bg-gradient-hero" />
      <div className="pointer-events-none absolute inset-0 x-pattern" />

      <div className="relative">
        <Header />

        <div className="container px-4 py-16">
          <div className="mb-14 text-center">
            <h1 className="mb-4 text-4xl font-medium tracking-tight md:text-6xl">
              Projects
            </h1>
            <p className="text-lg font-light text-muted-foreground md:text-xl">
              What members have built together.
            </p>
          </div>

          <div className="mx-auto max-w-5xl">
            <ProjectGroup
              title="In progress"
              projects={currentProjects}
              emptyMessage="Nothing running right now. New builds kick off through the quarter — they get announced in the Discord first."
            />
            <ProjectGroup
              title="Past projects"
              projects={pastProjects}
              emptyMessage="Write-ups of past projects are on the way."
            />
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Projects;
