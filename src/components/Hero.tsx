import Profil from "@/assets/profil.png";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="min-h-[calc(100vh-4rem)] border-b border-border">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-2 md:items-center md:py-24 lg:py-32">
        {/* TEXT */}
        <div className="order-2 md:order-1">
          <p className="mb-4 text-sm text-muted-foreground">
            Independent Developer & Designer
          </p>

          <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            Design that speaks.
            <br />
            <span className="text-muted-foreground">Code that performs.</span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
            Minimal interfaces, sharp execution. I help teams ship products that feel inevitable.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              Start a project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>

            <a
              href="#services"
              className="inline-flex items-center gap-2 border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              View services
            </a>
          </div>
        </div>

        {/* IMAGE */}
        <div className="relative order-1 md:order-2">
          <div className="relative border border-border">
            <img
              src={Profil}
              alt="Grady Masirika - Developer and Designer"
              className="aspect-square w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
