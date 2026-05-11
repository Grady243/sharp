"use client";

import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export function Hero() {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
        ease: [0.215, 0.61, 0.355, 1], // easeOutCubic
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.4,
      },
    },
  };

  return (
    <section id="home" className="min-h-[calc(100vh-4rem)] border-b border-border overflow-hidden">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-2 md:items-center md:py-24 lg:py-32">
        {/* TEXT */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="order-2 md:order-1"
        >
          <motion.h2
            variants={itemVariants}
            className="mb-4 text-xs font-heading font-semibold uppercase tracking-[0.2em] text-primary"
          >
            {t.hero.tag}
          </motion.h2>

          <motion.h1
            variants={itemVariants}
            className="text-balance text-4xl font-semibold leading-tight tracking-tight md:text-5xl lg:text-6xl"
          >
            {t.hero.title}
            <br />
            <span className="text-muted-foreground">{t.hero.subtitle}</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground"
          >
            {t.hero.description}
          </motion.p>

          <motion.div variants={itemVariants} className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              {t.hero.cta}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>

            <a
              href="#services"
              className="inline-flex items-center gap-2 border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              {t.hero.services}
            </a>
          </motion.div>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={imageVariants}
          className="relative order-1 md:order-2"
        >
          <div className="relative border border-border">
            <Image
              src="/images/profil.png"
              alt="Grady Masirika - Developer and Designer"
              width={600}
              height={600}
              className="aspect-square w-full object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
