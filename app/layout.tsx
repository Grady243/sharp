import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
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
    <html lang="en" className={`${inter.variable} bg-background`} suppressHydrationWarning>
      <body className="bg-background text-foreground font-sans">
        {children}
      </body>
    </html>
  );
}
