import PortfolioLayout from "@/components/PortfolioLayout";
import { getFeaturedPosts, getPosts } from "@/utils/ghost";
import FeaturedPosts from "@/components/FeaturedPosts";
import Posts from "@/components/Posts";
import { Box } from "@mui/material";
import { Fragment } from "react";

export default async function BlogsPage() {
  const posts = await getPosts();
  const featuredPosts = await getFeaturedPosts();

  return (
    <Fragment>
      <Box>
        <PortfolioLayout
          title="Noufal's Blog"
          subtitle="Penning down my thoughts in 0s and 1s"
        />
      </Box>
      <FeaturedPosts posts={featuredPosts} />
      <Posts posts={posts} />
    </Fragment>
  );
}
