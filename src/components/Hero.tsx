import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero.jpg";

export function Hero() {
  return (
    <section id="home" className="border-b border-border">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center md:py-32">
        <div>
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-primary">
            — Independent Designer & Developer
          </p>
          <h1 className="text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl">
            Design that speaks. Code that performs.
          </h1>
          <p className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
            Minimal interfaces, sharp execution. I help teams ship products
            that feel inevitable.
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
        <div className="relative">
          <div className="absolute -inset-2 border border-border md:-inset-3" aria-hidden />
          <img
            src={heroImg}
            alt="Abstract minimalist composition"
            width={1024}
            height={1024}
            className="relative aspect-square w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
