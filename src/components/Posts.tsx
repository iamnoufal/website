import { PostSchema } from "@/utils/types";
import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import Heading from "./Heading";
import Link from "next/link";

const Posts = ({ posts }: { posts: PostSchema[] }) => {
  return (
    <Container maxWidth="lg" sx={{mb: 10}}>
      <Grid container spacing={2} sx={{ justifyContent: "center"}}>
        {posts.map((post) => (
          <Grid item xs={12} md={6} xl={4} key={post.slug}>
            <Paper
              elevation={2}
              sx={{
                p: 2,
                height: "100%",
                background:
                  "linear-gradient(rgb(37 36 36), transparent), linear-gradient(transparent, rgb(37 36 36)), linear-gradient(130deg, #6610f2 10%, #6f42c1 20%, #d63384 35%, #dc3545 65%, #fd7e14 83%, #ff5607 96%)",
              }}
            >
              <Link href={"/blog/" + post.slug}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    height: "100%",
                    flexDirection: "column",
                  }}
                >
                  <Box>
                    <Heading variant="h5">{post.title}</Heading>
                    <Typography variant="body2">
                      {post.excerpt}
                    </Typography>
                  </Box>
                  <Typography variant="caption" sx={{ mt: 3 }}>
                    {new Date(post.published_at).toDateString()}
                  </Typography>
                </Box>
              </Link>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Posts;
