"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Languages } from "lucide-react";
import { cn } from "@/lib/utils";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === "en" ? "fr" : "en")}
      className="group relative inline-flex h-9 items-center gap-2 border border-border px-3 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
      aria-label="Toggle language"
    >
      <Languages className="h-3.5 w-3.5" />
      <span className="uppercase">{language}</span>
      
      {/* Tooltip or indicator could be added here if needed */}
    </button>
  );
}
