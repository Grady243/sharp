import { useState } from "react";
import { Github, Linkedin, Twitter, Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const nav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#home" className="font-mono text-base font-bold tracking-tight">
          Grady<span className="text-primary">.</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a href="#" aria-label="GitHub" className="p-2 text-muted-foreground transition-colors hover:text-foreground">
            <Github className="h-4 w-4" />
          </a>
          <a href="#" aria-label="Twitter" className="p-2 text-muted-foreground transition-colors hover:text-foreground">
            <Twitter className="h-4 w-4" />
          </a>
          <a href="#" aria-label="LinkedIn" className="p-2 text-muted-foreground transition-colors hover:text-foreground">
            <Linkedin className="h-4 w-4" />
          </a>
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            className="inline-flex h-9 w-9 items-center justify-center border border-border"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-6 py-4">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="py-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {n.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
