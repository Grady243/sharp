import { Code2, Layout, Sparkles, Gauge } from "lucide-react";

const services = [
  {
    icon: Layout,
    title: "Product Design",
    description: "Interfaces and design systems built around real user workflows and brand clarity.",
  },
  {
    icon: Code2,
    title: "Web Development",
    description: "Production-grade React and TypeScript front-ends with a focus on performance.",
  },
  {
    icon: Sparkles,
    title: "Brand Identity",
    description: "Marks, type systems and digital guidelines that stay sharp at every scale.",
  },
  {
    icon: Gauge,
    title: "Performance Audits",
    description: "Deep dives into Core Web Vitals, accessibility and code quality with a clear plan.",
  },
];

export function Services() {
  return (
    <section id="services" className="border-b border-border bg-muted/50">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="mb-12">
          <p className="text-sm text-muted-foreground">Services</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            What I do, end to end.
          </h2>
        </div>

        <div className="grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group flex flex-col bg-background p-6 transition-colors hover:bg-muted/50 md:p-8"
            >
              <service.icon className="h-5 w-5 text-primary" strokeWidth={1.5} />

              <h3 className="mt-6 text-base font-medium">{service.title}</h3>

              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>

              <div className="mt-6 text-xs text-muted-foreground">
                0{index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
