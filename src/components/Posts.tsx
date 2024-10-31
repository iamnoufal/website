"use client";

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
    setPosts(posts.slice(0, page * LIMIT + LIMIT));
  }, [page]);
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gridTemplateAreas: constructGridAreaTemplate(postsList),
      }}
    >
      <Box sx={{ gridArea: "filter", px: 3, py: 10 }}>
        <Heading variant="h6" sx={{ m: 0 }}>
          Recent Posts
        </Heading>
      </Box>
      {postsList.map((post) => (
        <Box key={post.id} sx={{ gridArea: post.slug }}>
          <Box
            sx={{
              height: "100%",
              background: `url(${post.feature_image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <Box
              sx={{
                background: "rgba(0, 0, 0, 0.6)",
                px: 3,
                py: 10,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                height: "100%",
                transition: "0.4s",
                ":hover": {
                  background: "rgba(0, 0, 0, 0.8)",
                  transition: "0.4s",
                }
              }}
              component={"a"}
              href={`/blog/${post.slug}`}
            >
              <Heading variant="h5">{post.title}</Heading>
              <Paragraph>{post.excerpt}</Paragraph>
            </Box>
          </Box>
        </Box>
      ))}
      <Box
        onClick={() => setPage(page + 1)}
        sx={{
          gridArea: "next",
          cursor: ((page + 1) * LIMIT) > postsList.length ? "default" : "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          px: 3,
          background: "rgba(0, 0, 0, 0)",
          py: 10,
          transition: "0.4s",
          ":hover": {
            background: "rgba(0, 0, 0, 0.3)",
            transition: "0.4s",
          }
        }}
      >
        <Paragraph>{((page + 1) * LIMIT) > postsList.length ? "The end.." : "Load more.."}</Paragraph>
      </Box>
    </Box>
  );
};

export default Posts;
