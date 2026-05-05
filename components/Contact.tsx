"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, Mail, MapPin } from "lucide-react";

const contactInfo = [
  { 
    icon: Mail, 
    label: "Email", 
    value: "hello@grady.studio", 
    href: "mailto:hello@grady.studio" 
  },
  { 
    icon: MapPin, 
    label: "Location", 
    value: "Berlin, Germany" 
  },
];

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-5 md:gap-16">
          {/* LEFT SIDE */}
          <div className="md:col-span-2">
            <h2 className="text-xs font-heading font-semibold uppercase tracking-[0.2em] text-muted-foreground">Contact</h2>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Let&apos;s build something sharp.
            </h2>

            <p className="mt-4 text-muted-foreground">
              Tell me about your project. I usually respond within two business days.
            </p>

            <ul className="mt-8 space-y-4">
              {contactInfo.map((item) => (
                <li key={item.label} className="flex items-center gap-3">
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
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT SIDE - FORM */}
          <div className="md:col-span-3">
            <form onSubmit={onSubmit} className="space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-xs text-muted-foreground">
                    Name
                  </label>
                  <input
                    required
                    name="name"
                    type="text"
                    placeholder="Jane Doe"
                    className="w-full border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-foreground"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs text-muted-foreground">
                    Email
                  </label>
                  <input
                    required
                    name="email"
                    type="email"
                    placeholder="jane@example.com"
                    className="w-full border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-foreground"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-xs text-muted-foreground">
                  Subject
                </label>
                <input
                  required
                  name="subject"
                  type="text"
                  placeholder="Website redesign, portfolio..."
                  className="w-full border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-foreground"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs text-muted-foreground">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="Tell me what you&apos;re working on..."
                  className="w-full resize-none border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-foreground"
                />
              </div>

              <button
                type="submit"
                className="group inline-flex items-center gap-2 bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
              >
                {sent ? "Message sent" : "Send message"}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
