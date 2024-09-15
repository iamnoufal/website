import PostIntro from "@/components/PostIntro";
import PrismWrapper from "@/theme/PrismWrapper";
import { getPostBySlug } from "@/utils/ghost";
import { PostSchema } from "@/utils/types";
import { Box, Container } from "@mui/material";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata({ params } : { params: { slug: string } }): Promise<Metadata> {
  const post: PostSchema = await getPostBySlug(params.slug);
  if (!post) {
    notFound();
  }
  return {
    title: post.title,
    description: post.excerpt
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post: PostSchema = await getPostBySlug(params.slug);
  if (!post) {
    notFound();
  }
  
  return (
    <Box>
      <PrismWrapper />
      <PostIntro {...post} />
      <Box sx={{ pt: 10, color: "white", background: "black" }}>
        <Container maxWidth="md" className="post">
          <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
        </Container>
      </Box>
    </Box>
  );
}
