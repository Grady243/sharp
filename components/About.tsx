"use client";

import { useLanguage } from "@/context/LanguageContext";
import { FileText } from "lucide-react";
import { motion } from "framer-motion";

export function About() {
  const { t } = useLanguage();

  const stats = [
    { value: "10+", label: t.about.stats.projects },
    { value: "500+", label: t.about.stats.hours },
    { value: "15+", label: t.about.stats.tech },
    { value: "100%", label: t.about.stats.commitment },
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
    <section id="about" className="border-b border-border overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-2 md:items-start md:gap-20">
          {/* LEFT */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.h2
              variants={itemVariants}
              className="text-xs font-heading font-semibold uppercase tracking-[0.2em] text-primary"
            >
              {t.about.tag}
            </motion.h2>

            <motion.h2
              variants={itemVariants}
              className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl"
            >
              {t.about.title}
            </motion.h2>

            <motion.div variants={itemVariants} className="mt-6 space-y-4 text-muted-foreground">
              <p className="leading-relaxed">{t.about.p1}</p>
              <p className="leading-relaxed">{t.about.p2}</p>
              <p className="leading-relaxed">{t.about.p3}</p>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-10">
              <a
                href="/GradyCV.pdf"
                download
                className="inline-flex items-center gap-2 border border-foreground bg-foreground px-6 py-3 text-sm font-medium text-background transition-all hover:bg-transparent hover:text-foreground"
              >
                <FileText className="h-4 w-4" />
                {t.about.cv}
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT - STATS */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid grid-cols-2 gap-px border border-border bg-border"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="flex aspect-square flex-col items-center justify-center bg-background p-8 text-center md:p-10"
              >
                <span className="text-3xl font-semibold tracking-tight md:text-4xl">
                  {stat.value}
                </span>
                <span className="mt-2 text-xs font-heading uppercase tracking-widest text-muted-foreground">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
