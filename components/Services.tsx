"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Code2, Gauge, Layout, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1] as const,
      },
    },
  };

  return (
    <section id="services" className="border-b border-border bg-muted/50 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-xs font-heading font-semibold uppercase tracking-[0.2em] text-primary">
            {t.services.tag}
          </h2>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            {t.services.title}
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group flex flex-col bg-background p-6 transition-colors duration-300 hover:bg-muted/50 md:p-8"
            >
              <service.icon className="h-5 w-5 text-primary" strokeWidth={1.5} />

              <h3 className="mt-6 text-base font-medium">{service.title}</h3>

              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>

              <div className="mt-6 text-xs text-muted-foreground">0{index + 1}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
