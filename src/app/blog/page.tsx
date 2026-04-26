import type { Metadata } from "next";
import { getPosts } from "@/utils/ghost";
import { BlogGrid } from "@/components/blog/BlogGrid";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Thoughts on technology, life, and everything in between. Insights, tutorials, and stories from my journey as a developer.",
  openGraph: {
    title: "Blog | Noufal Rahman",
    description:
      "Thoughts on technology, life, and everything in between. Insights, tutorials, and stories from my journey.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://noufal.dev"}/blog`,
  },
};

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className="min-h-screen pt-20 pb-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto mb-16 text-center py-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-foreground tracking-tight">Writing</h1>
          <p className="text-xl text-muted leading-relaxed">
            Insights, tutorials, and stories from my journey.
          </p>
        </div>

        <BlogGrid posts={posts || []} />
      </div>
    </div>
  );
}
