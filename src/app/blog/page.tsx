import PortfolioLayout from "@/components/PortfolioLayout";
import { PostSchema } from "@/utils/types";
import { getPosts } from "@/utils/ghost";
import FeaturedPosts from "@/components/FeaturedPosts";
import Posts from "@/components/Posts";
import { Box } from "@mui/material";

export default async function BlogsPage() {
  const posts: Array<PostSchema> = await getPosts();
  const featuredPosts = posts.filter((post) => post.featured);

  return (
    <main>
      <Box>
        <PortfolioLayout
          title="Noufal's Blog"
          subtitle="Penning down my thoughts in 0s and 1s"
        />
      </Box>
      <FeaturedPosts posts={featuredPosts} />
      <Posts posts={posts} />
    </main>
  );
}
