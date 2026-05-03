import { Code2, Layout, Sparkles, Gauge } from "lucide-react";

const services = [
  {
    icon: Layout,
    title: "Product Design",
    desc: "Interfaces and design systems built around real user workflows and brand clarity.",
  },
  {
    icon: Code2,
    title: "Web Development",
    desc: "Production-grade React and TypeScript front-ends with a focus on performance.",
  },
  {
    icon: Sparkles,
    title: "Brand Identity",
    desc: "Marks, type systems and digital guidelines that stay sharp at every scale.",
  },
  {
    icon: Gauge,
    title: "Performance Audits",
    desc: "Deep dives into Core Web Vitals, accessibility and code quality with a clear plan.",
  },
];

export function Services() {
  return (
    <section id="services" className="border-b border-border bg-muted/30">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="mb-14 max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            02 — Services
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
            What I do, end to end.
          </h2>
        </div>

        <div className="grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="group flex flex-col bg-background p-8 transition-colors hover:bg-muted"
            >
              <s.icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
              <h3 className="mt-8 text-lg font-semibold">{s.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{s.desc}</p>
              <div className="mt-8 font-mono text-xs text-muted-foreground transition-colors group-hover:text-foreground">
                0{services.indexOf(s) + 1} / 0{services.length}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
