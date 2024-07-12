import PostIntro from "@/components/PostIntro";
import PrismWrapper from "@/components/PrismWrapper";
import { getPostBySlug } from "@/utils/ghost";
import { PostSchema } from "@/utils/types";
import { Box, Container } from "@mui/material";
import { notFound } from "next/navigation";

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
      <Box sx={{ pt: 10, bgcolor: "rgb(10, 10, 10)", color: "white" }}>
        <Container maxWidth="md" className="post">
          <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
        </Container>
      </Box>
    </Box>
  );
}
