import { useState } from "react";
import { Github, Linkedin, Twitter, Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { useActiveSection } from "@/hooks/use-active-section";
import { cn } from "@/lib/utils";

const nav = [
  { label: "Home", href: "#home", id: "home" },
  { label: "About", href: "#about", id: "about" },
  { label: "Services", href: "#services", id: "services" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#home" className="font-mono text-base font-bold tracking-tight">
          Grady<span className="text-primary">.</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((n) => {
            const isActive = active === n.id;
            return (
              <a
                key={n.href}
                href={n.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "relative text-sm transition-colors",
                  isActive
                    ? "font-medium text-foreground after:absolute after:-bottom-[21px] after:left-0 after:right-0 after:h-[2px] after:bg-primary"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {n.label}
              </a>
            );
          })}
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
            {nav.map((n) => {
              const isActive = active === n.id;
              return (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "border-l-2 py-3 pl-3 text-sm transition-colors",
                    isActive
                      ? "border-primary text-foreground"
                      : "border-transparent text-muted-foreground hover:text-foreground",
                  )}
                >
                  {n.label}
                </a>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
