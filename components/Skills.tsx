"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion, Variants } from "framer-motion";

export function Skills() {
  const { t } = useLanguage();

  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Responsive Design",
    "Axios",
    "Framer Motion",
    "Figma",
    "Adobe Illustrator",
    "UX Design",
    "Wireframing",
    "Prototyping",
    "Brand Identity",
    "Logo Design",
    "Design Systems",
    "GitHub",
    "VS Code",
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
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
    <section id="skills" className="border-b border-border bg-background overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <h2 className="text-xs font-heading font-semibold uppercase tracking-[0.2em] text-primary">
            {t.skills.tag}
          </h2>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            {t.skills.title}
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 gap-px border border-border bg-border sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill}
              variants={itemVariants}
              className="group flex aspect-[2/1] items-center justify-center bg-background p-4 text-center transition-colors duration-300 hover:bg-muted/50 sm:aspect-[3/2] sm:p-6"
            >
              <span className="text-sm font-medium text-muted-foreground transition-colors group-hover:text-foreground">
                {skill}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
