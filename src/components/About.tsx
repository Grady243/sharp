import aboutImg from "@/assets/about.jpg";

const stats = [
  { k: "08+", v: "Years experience" },
  { k: "60+", v: "Shipped projects" },
  { k: "20+", v: "Happy clients" },
  { k: "100%", v: "Remote-first" },
];

export function About() {
  return (
    <section id="about" className="border-b border-border">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-2 md:py-32">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            01 — About
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
            A studio of one, with a focus on craft.
          </h2>
          <div className="mt-8 space-y-6">
            <p className="text-muted-foreground">
              I'm a product designer and frontend engineer based in Berlin. I
              help startups and design teams turn complex problems into clear,
              functional interfaces — from positioning to pixels.
            </p>
            <p className="text-muted-foreground">
              My approach is direct: research the problem, design the smallest
              useful thing, ship it, then iterate. No fluff, no over-engineering.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-px border border-border bg-border md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.v} className="bg-background p-5">
                <div className="text-2xl font-bold tracking-tight">{s.k}</div>
                <div className="mt-1 text-xs text-muted-foreground">{s.v}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-2 border border-border md:-inset-3" aria-hidden />
          <img
            src={aboutImg}
            alt="Minimalist workspace"
            width={1024}
            height={1024}
            loading="lazy"
            className="relative aspect-square w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
