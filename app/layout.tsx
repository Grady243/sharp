import type { Metadata, Viewport } from "next";
import { Chivo, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["300", "400", "500", "600"],
});

const chivo = Chivo({
  subsets: ["latin"],
  variable: "--font-chivo",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} ${chivo.variable} bg-background`} suppressHydrationWarning>
      <body className="bg-background text-foreground font-mono leading-relaxed">
        {children}
      </body>
    </html>
  );
}
