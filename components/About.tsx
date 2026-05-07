"use client";

import { useLanguage } from "@/context/LanguageContext";
import { FileText } from "lucide-react";

export function About() {
  const { t } = useLanguage();

  const stats = [
    { value: "10+", label: t.about.stats.projects },
    { value: "500+", label: t.about.stats.hours },
    { value: "15+", label: t.about.stats.tech },
    { value: "100%", label: t.about.stats.commitment },
  ];

  return (
    <section id="about" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-2 md:items-start md:gap-20">
          {/* LEFT */}
          <div>
            <h2 className="text-xs font-heading font-semibold uppercase tracking-[0.2em] text-primary">
              {t.about.tag}
            </h2>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              {t.about.title}
            </h2>

            <div className="mt-6 space-y-4 text-muted-foreground">
              <p className="leading-relaxed">{t.about.p1}</p>
              <p className="leading-relaxed">{t.about.p2}</p>
              <p className="leading-relaxed">{t.about.p3}</p>
            </div>

            <div className="mt-10">
              <a
                href="/GradyCV.pdf"
                download
                className="inline-flex items-center gap-2 border border-foreground bg-foreground px-6 py-3 text-sm font-medium text-background transition-all hover:bg-transparent hover:text-foreground"
              >
                <FileText className="h-4 w-4" />
                {t.about.cv}
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
