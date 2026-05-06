import { ArrowUpRight, FolderOpen } from "lucide-react";

const projects = [
  {
    title: "Afrix Global",
    description:
      "Afrix Global is an innovative EdTech company improving education in Africa through technology, making learning accessible for students, professionals, and entrepreneurs.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://afrix-global.vercel.app/",
  },
  {
    title: "etax solution RDC",
    description:
      "An all-in-one SaaS platform that simplifies store management by handling inventory, billing, and sales, helping businesses run efficiently and stay organized.",
    tech: ["Next.js", "Node.js", "MongoDB"],
    link: "#",
  },
  {
    title: "Zua Place",
    description:
      "Zua Place is a centralized platform for managing hotel room bookings in the Ituri province of the Democratic Republic of Congo. Currently under development.",
    tech: ["Next.js", "TypeScript", "PHP", "MongoDB"],
    link: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="border-b border-border bg-background">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="mb-12">
          <h2 className="text-xs font-heading font-semibold uppercase tracking-[0.2em] text-primary">
            - Projects
          </h2>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            Selected works.
          </h2>
        </div>

        <div className="grid gap-px border border-border bg-border md:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group flex flex-col bg-background p-6 transition-colors duration-300 hover:bg-muted/50 md:p-8"
            >
              <div className="flex items-center justify-between">
                <FolderOpen className="h-5 w-5 text-primary" strokeWidth={1.5} />
                <a href={project.link} className="inline-flex">
                  <ArrowUpRight
                    className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100"
                    strokeWidth={1.5}
                  />
                </a>
              </div>

              <h3 className="mt-6 text-base font-medium">{project.title}</h3>

              <p className="mt-2 flex-grow text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center border border-border bg-transparent px-2 py-1 text-xs font-medium text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
