import PortfolioLayout from "@/components/PortfolioLayout";
import { PostSchema } from "@/utils/types";
import { getPosts } from "@/utils/ghost";
import FeaturedPosts from "@/components/FeaturedPosts";
import Posts from "@/components/Posts";

export default async function BlogsPage() {
  const posts: Array<PostSchema> = await getPosts();
  console.log(posts)
  const featuredPosts = posts.filter((post) => post.featured);

  return (
    <main>
      <PortfolioLayout
        title="Noufal's Blog"
        subtitle="Penning down my thoughts in 0s and 1s"
        style={{
          background: `
            linear-gradient(0deg, black, transparent 100%), 
            linear-gradient(300deg, #08083a, transparent 21%), 
            linear-gradient(198deg, rgba(255, 193, 7, 0.2) 11%, transparent 0%), 
            linear-gradient(50deg, #6610f2 10%, #6f42c1 20%, #d63384 35%, #dc3545 65%, #fd7e14 83%, #ffc107 91%)
        `,
        }}
      />
      <FeaturedPosts posts={featuredPosts} />
      <Posts posts={posts} />
    </main>
  );
}
