const stats = [
  { value: "10+", label: "Projects built" },
  { value: "500+", label: "Hours of coding" },
  { value: "15+", label: "Technologies" },
  { value: "100%", label: "Commitment" },
];

export function About() {
  return (
    <section id="about" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-2 md:items-start md:gap-16">
          {/* LEFT */}
          <div>
            <p className="text-sm text-muted-foreground">About</p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Building clean interfaces with purpose.
            </h2>

            <div className="mt-6 space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                {"I'm"} Grady, a frontend developer and UI designer focused on building minimal,
                functional, and high-performance digital products.
              </p>

              <p className="leading-relaxed">
                My approach is simple: understand the problem, design with clarity, and build with
                clean, scalable code.
              </p>

              <p className="leading-relaxed">
                I care about performance, usability, and simplicity — removing everything
                unnecessary to focus on what really matters.
              </p>
            </div>
          </div>

          {/* RIGHT - STATS */}
          <div className="grid grid-cols-2 gap-px border border-border bg-border">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center justify-center bg-background p-6 text-center md:p-8"
              >
                <span className="text-2xl font-semibold tracking-tight md:text-3xl">
                  {stat.value}
                </span>
                <span className="mt-1 text-xs text-muted-foreground">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
