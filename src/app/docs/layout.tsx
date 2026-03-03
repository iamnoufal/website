import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Docs",
  description:
    "Noufal Rahman's experience, education, skills, and projects. Full Stack Developer currently at Zoho Corporation, with a background from IIT Madras and GCT Coimbatore.",
  keywords: [
    "Noufal Rahman resume",
    "software engineer portfolio",
    "full stack developer experience",
    "Zoho developer",
    "IIT Madras",
  ],
  openGraph: {
    title: "Docs | Noufal Rahman",
    description:
      "Experience, education, skills, and projects. Full Stack Developer at Zoho Corporation.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://noufal.dev"}/docs`,
  },
};

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
