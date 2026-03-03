import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Subscribe from "@/components/layout/Subscribe";
import TransitionProvider from "@/components/transition/TransitionProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://noufal.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Noufal Rahman — Full Stack Developer & Creative Thinker",
    template: "%s | Noufal Rahman",
  },
  description:
    "Full Stack Developer & Creative Thinker. Building stuff that matters with React, Next.js, and TypeScript. Currently at Zoho Corporation.",
  keywords: [
    "Noufal Rahman",
    "Full Stack Developer",
    "Software Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "Web Developer",
    "Zoho",
    "IIT Madras",
  ],
  authors: [{ name: "Noufal Rahman", url: siteUrl }],
  creator: "Noufal Rahman",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Noufal Rahman",
    title: "Noufal Rahman — Full Stack Developer & Creative Thinker",
    description:
      "Full Stack Developer & Creative Thinker. Building stuff that matters with React, Next.js, and TypeScript.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Noufal Rahman — Full Stack Developer & Creative Thinker",
    description:
      "Full Stack Developer & Creative Thinker. Building stuff that matters with React, Next.js, and TypeScript.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${outfit.variable} antialiased min-h-screen flex flex-col font-sans`}
      >
        <TransitionProvider>
          <Navbar />
          <main className="grow flex flex-col">{children}</main>
          <Subscribe />
          <Footer />
        </TransitionProvider>
      </body>
    </html>
  );
}
