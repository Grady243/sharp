const stats = [
  { k: "10+", v: "Projects built" },
  { k: "500+", v: "Hours of coding" },
  { k: "15+", v: "Technologies used" },
  { k: "100%", v: "Commitment" },
];

export function About() {
  return (
    <section id="about" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="grid gap-16 md:grid-cols-2 md:items-center">
          {/* LEFT */}
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              01 — About
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
              Building clean interfaces with purpose.
            </h2>

            <p className="mt-6 text-muted-foreground max-w-lg">
              I’m Grady, a frontend developer and UI designer focused on building minimal,
              functional, and high-performance digital products.
            </p>

            <div className="mt-6 space-y-4 text-muted-foreground max-w-lg">
              <p>
                My approach is simple: understand the problem, design with clarity, and build with
                clean, scalable code.
              </p>

              <p>
                I care about performance, usability, and simplicity — removing everything
                unnecessary to focus on what really matters.
              </p>
            </div>
          </div>

          {/* RIGHT - SQUARE STATS */}
          <div className="flex justify-center items-center">
            <div className="grid grid-cols-2 gap-px border border-border bg-border max-w-[360px] w-full">
              {stats.map((s) => (
                <div
                  key={s.v}
                  className="aspect-square bg-background flex flex-col items-center justify-center p-4 text-center"
                >
                  <div className="text-2xl font-bold tracking-tight">{s.k}</div>

                  <div className="mt-1 text-[11px] text-muted-foreground">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
