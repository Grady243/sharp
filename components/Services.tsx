"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Code2, Gauge, Layout, Sparkles } from "lucide-react";

export function Services() {
  const { t } = useLanguage();

  const services = [
    {
      icon: Layout,
      title: t.services.items[0].title,
      description: t.services.items[0].description,
    },
    {
      icon: Code2,
      title: t.services.items[1].title,
      description: t.services.items[1].description,
    },
    {
      icon: Sparkles,
      title: t.services.items[2].title,
      description: t.services.items[2].description,
    },
    {
      icon: Gauge,
      title: t.services.items[3].title,
      description: t.services.items[3].description,
    },
  ];

  return (
    <section id="services" className="border-b border-border bg-muted/50">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="mb-12">
          <h2 className="text-xs font-heading font-semibold uppercase tracking-[0.2em] text-primary">
            {t.services.tag}
          </h2>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            {t.services.title}
          </h2>
        </div>

        <div className="grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group flex flex-col bg-background p-6 transition-colors duration-300 hover:bg-muted/50 md:p-8"
            >
              <service.icon className="h-5 w-5 text-primary" strokeWidth={1.5} />

              <h3 className="mt-6 text-base font-medium">{service.title}</h3>

              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>

              <div className="mt-6 text-xs text-muted-foreground">0{index + 1}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
