import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-28 md:py-40">
        <p className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-primary">
          — Independent Designer & Developer
        </p>
        <h1 className="max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
          Crafting precise digital products with focus on detail.
        </h1>
        <p className="mt-8 max-w-2xl text-base text-muted-foreground md:text-lg">
          I build modern websites and interfaces for ambitious teams. Minimal,
          fast, and engineered to last — no noise, just signal.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-80"
          >
            Start a project
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-muted"
          >
            View services
          </a>
        </div>
      </div>
    </section>
  );
}
