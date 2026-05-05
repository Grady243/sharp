import { Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-6 md:flex-row">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Grady Masirika. All rights reserved.
        </p>

        <div className="flex items-center gap-1">
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
      </div>
    </footer>
  );
}
