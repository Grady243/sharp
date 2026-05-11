"use client";

import { useLanguage } from "@/context/LanguageContext";
import { ArrowUpRight, FolderOpen } from "lucide-react";
import { motion } from "framer-motion";

export function Projects() {
  const { t } = useLanguage();

  const projects = [
    {
      title: "Afrix Global",
      description: t.projects.items.afrix.description,
      tech: ["Next.js", "TypeScript", "Tailwind CSS"],
      link: "https://afrix-global.vercel.app/",
    },
    {
      title: "LOVIA",
      description: t.projects.items.lovia.description,
      tech: ["Next.js", "Node.js", "PostgreSQL", "Tailwind CSS"],
      link: "https://lovia-zeta.vercel.app/",
    },
    {
      title: "Zua Place",
      description: t.projects.items.zuaplace.description,
      tech: ["Next.js", "TypeScript", "PHP", "MongoDB"],
      link: "https://zuaplace.vercel.app/",
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1],
      },
    },
  };

  return (
    <section id="projects" className="border-b border-border bg-background overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-xs font-heading font-semibold uppercase tracking-[0.2em] text-primary">
            {t.projects.tag}
          </h2>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            {t.projects.title}
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-px border border-border bg-border md:grid-cols-3"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="group flex flex-col bg-background p-6 transition-colors duration-300 hover:bg-muted/50 md:p-8"
            >
              <div className="flex items-center justify-between">
                <FolderOpen className="h-5 w-5 text-primary" strokeWidth={1.5} />
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex">
                  <ArrowUpRight
                    className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100"
                    strokeWidth={1.5}
                  />
                </a>
              </div>

              <h3 className="mt-6 text-base font-medium">{project.title}</h3>

              <p className="mt-2 flex-grow text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center border border-border bg-transparent px-2 py-1 text-xs font-medium text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
