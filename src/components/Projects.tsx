import { ArrowUpRight } from "lucide-react";
import p1 from "@/assets/project1.jpg";
import p2 from "@/assets/project2.jpg";
import p3 from "@/assets/project3.jpg";

const projects = [
  {
    img: p1,
    title: "Northwind Commerce",
    tag: "E-commerce / 2025",
    desc: "Headless storefront rebuild with a 38% increase in conversion.",
  },
  {
    img: p2,
    title: "Kava Banking",
    tag: "Fintech / 2024",
    desc: "Mobile-first banking app with sharp typography and clear flows.",
  },
  {
    img: p3,
    title: "Pulse Analytics",
    tag: "SaaS / 2024",
    desc: "Real-time dashboard system designed for clarity at a glance.",
  },
];

export function Projects() {
  return (
    <section id="projects" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="mb-14 flex items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              03 — Projects
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
              Selected work.
            </h2>
          </div>
        </div>

        <div className="grid gap-px border border-border bg-border md:grid-cols-3">
          {projects.map((p) => (
            <a
              key={p.title}
              href="#"
              className="group flex flex-col bg-background p-6 transition-colors hover:bg-muted"
            >
              <div className="overflow-hidden border border-border">
                <img
                  src={p.img}
                  alt={p.title}
                  width={1024}
                  height={768}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-6 flex items-start justify-between gap-3">
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    {p.tag}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold">{p.title}</h3>
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-foreground" />
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{p.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
