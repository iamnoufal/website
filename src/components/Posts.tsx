"use client"

import { useEffect, useState } from "react";
import { PostSchema } from "@/utils/types";
import { Box } from "@mui/material";
import Heading from "./Heading";
import { constructGridAreaTemplate } from "@/utils/grid";
import Paragraph from "./Paragraph";

const Posts = ({ posts }: { posts: PostSchema[] }) => {
  const [page, setPage] = useState<number>(0);
  const LIMIT = parseInt(process.env.NEXT_PUBLIC_GHOST_POST_LIMIT as string);
  const [postsList, setPosts] = useState<PostSchema[]>(posts?.slice(0, LIMIT));
  useEffect(() => {
    setPosts(posts.slice(0, (page * LIMIT) + LIMIT));
  }, [page]);
  return (
    <Box sx={{display: "grid", gridTemplateColumns: 'repeat(2, 1fr)', gridTemplateAreas: constructGridAreaTemplate(postsList)}}>
      <Box sx={{gridArea: "filter"}}>
        <Heading variant="h3">Recent Posts</Heading>
      </Box>
      {postsList.map((post) => (
        <Box key={post.id} sx={{gridArea: post.slug}}>
          <Box sx={{ height: "100%", background: `url(${post.feature_image})` }}>
            <Box sx={{background: "rgba(0, 0, 0, 0.6)", p: 3, height: "100%"}}>
              <Heading variant="h5">{post.title}</Heading>
              <Paragraph>{post.excerpt}</Paragraph>
            </Box>
          </Box>
        </Box>
      ))}
      <Box onClick={() => setPage(page+1)} sx={{gridArea: "next", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", p: 4}}>
        <Paragraph>Load more..</Paragraph>
      </Box>
    </Box>
  );
};

export default Posts;
