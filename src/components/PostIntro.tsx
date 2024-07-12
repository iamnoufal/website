"use client";

import { Box, Typography, Link } from "@mui/material";
import {
  WhatsApp,
  LinkedIn,
  Twitter,
  FacebookOutlined,
  Share,
} from "@mui/icons-material";
import { PostSchema } from "@/utils/types";
import Heading from "./Heading";

const PostIntro = (props: PostSchema) => {
  const blogShare = {
    title: props.title,
    text: props.excerpt,
    url: "https://noufal.dev/blog/" + props.slug,
  };
  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        backgroundImage: props.feature_image
          ? `url(${props.feature_image})`
          : `linear-gradient(0deg, black, transparent 100%), linear-gradient(300deg, #08083a, transparent 21%), linear-gradient(198deg, rgba(255, 193, 7, 0.2) 11%, transparent 0%), linear-gradient(50deg, #6610f2 10%, #6f42c1 20%, #d63384 35%, #dc3545 65%, #fd7e14 83%, #ffc107 91%)`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <Box
        sx={{
          minHeight: "100vh",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "end",
          p: { xs: 2, md: 4, lg: 8 },
          pt: { xs: 8, lg: 0 },
          background:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(10, 10, 10, 1))",
        }}
      >
        <Heading variant="h1" component="h1" sx={{ mb: 2 }}>
          {props.title}
        </Heading>
        <Heading
          variant="h6"
          component="h4"
          sx={{ opacity: 0.8 }}
        >
          {props.excerpt}
        </Heading>
        <Typography variant="body2" sx={{ mt: 1 }} textAlign="center">
          {props.reading_time} mins read •{" "}
          {new Date(props.published_at).toDateString()}
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
          <Link
            sx={{ mr: 2 }}
            target="_blank"
            rel="noreferrer"
            href={`https://api.whatsapp.com/send?text=${blogShare.title.replaceAll(
              " ",
              "+"
            )}%0A${blogShare.text.replaceAll(" ", "+")}%0A${blogShare.url}`}
          >
            <Typography color="white">
              <WhatsApp />
            </Typography>
          </Link>
          <Link
            sx={{ mr: 2 }}
            target="_blank"
            rel="noreferrer"
            href={`http://www.facebook.com/sharer.php?u=${blogShare.url}`}
          >
            <Typography color="white">
              <FacebookOutlined />
            </Typography>
          </Link>
          <Link
            sx={{ mr: 2 }}
            target="_blank"
            rel="noreferrer"
            href={`https://twitter.com/intent/tweet?url=${
              blogShare.url
            }&text=${blogShare.title.replaceAll(
              " ",
              "+"
            )}%0A${blogShare.text.replaceAll(" ", "+")}%0A`}
          >
            <Typography color="white">
              <Twitter />
            </Typography>
          </Link>
          <Link
            sx={{ mr: 2 }}
            target="_blank"
            rel="noreferrer"
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${blogShare.url}`}
          >
            <Typography color="white">
              <LinkedIn />
            </Typography>
          </Link>
          <Link
            sx={{ cursor: "pointer" }}
            onClick={() => navigator.share(blogShare)}
          >
            <Typography color="white">
              <Share />
            </Typography>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default PostIntro;
