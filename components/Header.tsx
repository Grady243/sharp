"use client";

import { useActiveSection } from "@/hooks/use-active-section";
import { cn } from "@/lib/utils";
import { Github, Linkedin, Menu, Twitter, X } from "lucide-react";
import { Chivo } from "next/font/google";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const chivo = Chivo({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

const nav = [
  { label: "Home", href: "#home", id: "home" },
  { label: "About", href: "#about", id: "about" },
  { label: "Services", href: "#services", id: "services" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  let active = "home";
  try {
    active = useActiveSection?.() || "home";
  } catch {
    active = "home";
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        {/* LOGO */}
        <a href="#home" className="text-2xl font-semibold tracking-tight text-foreground">
          Grady Masirika
        </a>

        {/* DESKTOP NAV - CENTERED */}
        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex">
          {nav.map((n) => {
            const isActive = active === n.id;

            return (
              <a
                key={n.href}
                href={n.href}
                className={cn(
                  "text-sm transition-all duration-200",
                  isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                )}
              >
                {n.label}
              </a>
            );
          })}
        </nav>

        {/* RIGHT ICONS */}
        <div className="hidden items-center gap-1 md:flex">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Grady243"
            aria-label="GitHub"
            className="p-2 text-muted-foreground transition-colors hover:text-foreground"
          >
            <Github className="h-4 w-4" />
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://x.com/GradyMasirika"
            aria-label="Twitter"
            className="p-2 text-muted-foreground transition-colors hover:text-foreground"
          >
            <Twitter className="h-4 w-4" />
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/grady-masirika-aa92b6327/"
            aria-label="LinkedIn"
            className="p-2 text-muted-foreground transition-colors hover:text-foreground"
          >
            <Linkedin className="h-4 w-4" />
          </a>

          <div className="ml-2 h-4 w-px bg-border" />

          <div className="ml-2">
            <ThemeToggle />
          </div>
        </div>

        {/* MOBILE BUTTON */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />

          <button
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            className="inline-flex h-9 w-9 items-center justify-center border border-border text-foreground"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-6 py-4">
            {nav.map((n) => {
              const isActive = active === n.id;

              return (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "py-3 text-sm transition-colors",
                    isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {n.label}
                </a>
              );
            })}

            <div className="mt-4 flex items-center gap-2 border-t border-border pt-4">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/Grady243"
                aria-label="GitHub"
                className="p-2 text-muted-foreground transition-colors hover:text-foreground"
              >
                <Github className="h-4 w-4" />
              </a>

              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://x.com/GradyMasirika"
                aria-label="Twitter"
                className="p-2 text-muted-foreground transition-colors hover:text-foreground"
              >
                <Twitter className="h-4 w-4" />
              </a>

              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/grady-masirika-aa92b6327/"
                aria-label="LinkedIn"
                className="p-2 text-muted-foreground transition-colors hover:text-foreground"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
