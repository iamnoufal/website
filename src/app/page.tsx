import type { Metadata } from "next";
import AtAGlance from "@/components/home/AtAGlance";
import FeaturedBlogs from "@/components/home/FeaturedBlogs";
import Hero from "@/components/home/Hero";
import Subscribe from "@/components/layout/Subscribe";
import { getFeaturedPosts } from "@/utils/ghost";

export const metadata: Metadata = {
  title: "Noufal Rahman — Full Stack Developer & Creative Thinker",
  description:
    "Hi, I'm Noufal. A Full Stack Developer & Creative Thinker currently at Zoho Corporation. Explore my work, blog, and side projects.",
  openGraph: {
    title: "Noufal Rahman — Full Stack Developer & Creative Thinker",
    description:
      "Hi, I'm Noufal. A Full Stack Developer & Creative Thinker currently at Zoho Corporation.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://noufal.dev",
  },
};

export default async function Home() {
  const posts = await getFeaturedPosts();

  return (
    <div className="relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute -top-20 -left-20 h-96 w-96 rounded-full bg-secondary/10 blur-3xl filter" />
      <div className="absolute top-40 -right-20 h-72 w-72 rounded-full bg-accent/5 blur-3xl filter" />

      {/* Hero Section */}
      <Hero />

      {/* At a Glance Section */}
      <AtAGlance />

      {/* Featured Blogs Section */}
      <FeaturedBlogs posts={posts || []} />

      {/* Subscribe Section */}
      {/* <Subscribe /> */}
    </div>
  );
}

