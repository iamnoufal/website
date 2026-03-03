import AtAGlance from "@/components/home/AtAGlance";
import FeaturedBlogs from "@/components/home/FeaturedBlogs";
import Hero from "@/components/home/Hero";
import Subscribe from "@/components/layout/Subscribe";
import { getFeaturedPosts } from "@/utils/ghost";

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

