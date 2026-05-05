import { FileText } from "lucide-react";

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
        <div className="grid gap-12 md:grid-cols-2 md:items-start md:gap-20">
          {/* LEFT */}
          <div>
            <h2 className="text-xs font-heading font-semibold uppercase tracking-[0.2em] text-muted-foreground">- About</h2>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Building clean interfaces with purpose.
            </h2>

            <div className="mt-6 space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                I&apos;m Grady, a frontend developer and UI designer focused on building minimal,
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

            <div className="mt-10">
              <a
                href="/cv.pdf"
                download
                className="inline-flex items-center gap-2 border border-foreground bg-foreground px-6 py-3 text-sm font-medium text-background transition-all hover:bg-transparent hover:text-foreground"
              >
                <FileText className="h-4 w-4" />
                Download CV
              </a>
            </div>
          </div>

          {/* RIGHT - STATS */}
          <div className="grid grid-cols-2 gap-px border border-border bg-border">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex aspect-square flex-col items-center justify-center bg-background p-8 text-center md:p-10"
              >
                <span className="text-3xl font-semibold tracking-tight md:text-4xl">
                  {stat.value}
                </span>
                <span className="mt-2 text-xs font-heading uppercase tracking-widest text-muted-foreground">
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
