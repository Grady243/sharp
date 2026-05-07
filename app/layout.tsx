import type { Metadata, Viewport } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["300", "400", "500", "600"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "Grady Masirika - Developer & Designer",
  description: "Independent developer and designer crafting minimal, functional digital products. Product design, web development, brand identity and performance audits.",
  authors: [{ name: "Grady Masirika" }],
  openGraph: {
    title: "Grady Masirika - Developer & Designer",
    description: "Independent developer and designer crafting minimal, functional digital products.",
    type: "website",
  },
  twitter: {
    card: "summary",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

import { LanguageProvider } from "@/context/LanguageContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} ${spaceGrotesk.variable} bg-background`} suppressHydrationWarning>
      <body className="bg-background text-foreground font-mono leading-relaxed">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
