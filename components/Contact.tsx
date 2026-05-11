"use client";

import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";

export function Contact() {
  const { t } = useLanguage();
  const [sent, setSent] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "gradyaganzemasirika@gmail.com",
      href: "mailto:gradyaganzemasirika@gmail.com",
    },
    {
      icon: Phone,
      label: t.contact.labels.email === "E-mail" ? "Téléphone" : "Phone",
      value: "+243 857 292 985",
      href: "tel:+243857292985",
    },
    {
      icon: MapPin,
      label: t.contact.labels.email === "E-mail" ? "Localisation" : "Location",
      value: "Goma, DRC",
    },
  ];

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

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
        ease: [0.215, 0.61, 0.355, 1],
      },
    },
  };

  return (
    <section id="contact" className="border-b border-border overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-5 md:gap-16">
          {/* LEFT SIDE */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="md:col-span-2"
          >
            <motion.h2
              variants={itemVariants}
              className="text-xs font-heading font-semibold uppercase tracking-[0.2em] text-primary"
            >
              {t.contact.tag}
            </motion.h2>

            <motion.h2
              variants={itemVariants}
              className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl"
            >
              {t.contact.title}
            </motion.h2>

            <motion.p variants={itemVariants} className="mt-4 text-muted-foreground">
              {t.contact.description}
            </motion.p>

            <motion.ul variants={containerVariants} className="mt-8 space-y-4">
              {contactInfo.map((item) => (
                <motion.li key={item.label} variants={itemVariants} className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center border border-border">
                    <item.icon className="h-4 w-4 text-muted-foreground" strokeWidth={1.5} />
                  </div>

                  <div>
                    <div className="text-xs text-muted-foreground">{item.label}</div>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm text-foreground hover:underline underline-offset-4"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div className="text-sm text-foreground">{item.value}</div>
                    )}
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* RIGHT SIDE - FORM */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-3"
          >
            <form onSubmit={onSubmit} className="space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-xs text-muted-foreground">{t.contact.labels.name}</label>
                  <input
                    required
                    name="name"
                    type="text"
                    placeholder={t.contact.placeholders.name}
                    className="w-full border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-foreground"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs text-muted-foreground">{t.contact.labels.email}</label>
                  <input
                    required
                    name="email"
                    type="email"
                    placeholder={t.contact.placeholders.email}
                    className="w-full border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-foreground"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-xs text-muted-foreground">{t.contact.labels.subject}</label>
                <input
                  required
                  name="subject"
                  type="text"
                  placeholder={t.contact.placeholders.subject}
                  className="w-full border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-foreground"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs text-muted-foreground">{t.contact.labels.message}</label>
                <textarea
                  required
                  rows={5}
                  placeholder={t.contact.placeholders.message}
                  className="w-full resize-none border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-foreground"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="group inline-flex items-center gap-2 bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
              >
                {sent ? t.contact.sent : t.contact.button}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
