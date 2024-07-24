"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { PostSchema } from "@/utils/types";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Box, Chip, Typography } from "@mui/material";
import { Autoplay, EffectCoverflow, Navigation } from "swiper/modules";
import Heading from "./Heading";
import Link from "next/link";

const FeaturedPosts = ({ posts }: { posts: PostSchema[] }) => {
  return (
    <Box sx={{ my: 30 }}>
      <Swiper
        effect="coverflow"
        centeredSlides={true}
        slidesPerView={1}
        breakpoints={{
          700: {
            slidesPerView: 3,
          },
          1500: {
            slidesPerView: 4,
          },
        }}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        speed={500}
        coverflowEffect={{
          rotate: 50,
          stretch: -30,
          depth: 150,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow, Navigation, Autoplay]}
        className="featuredPostsComponent"
        style={{ padding: "20px 0" }}
      >
        {posts.map((post) => {
          return (
            <SwiperSlide
              key={post.slug}
              style={{ width: "300px", height: "300px" }}
            >
              {({ isActive }: { isActive: boolean }) => (
                <Link href={`/blog/${post.slug}`}>
                  <Box
                    sx={{
                      width: "100%",
                      height: "100%",
                      backgroundImage: `url(${post.feature_image})`,
                      backgroundSize: "cover",
                      transform: isActive ? "scale(1)" : "scale(0.9)",
                      transition: "transform 0.5s ease-in-out",
                    }}
                  >
                    <Box
                      className="featuredPostCardContent"
                      sx={{
                        height: "100%",
                        width: "100%",
                        background: "rgba(0, 0, 0, 0.7)",
                        p: 3,
                        display: "flex",
                        justifyContent: "space-between",
                        flexDirection: "column",
                      }}
                    >
                      <Box>
                        <Heading variant="h5" sx={{ mb: 1 }}>
                          {post.title}
                        </Heading>
                        <Typography variant="caption">
                          {new Date(post.published_at).toDateString()}
                        </Typography>
                      </Box>
                      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                        {post.tags
                          .filter((tag) => tag.name.toLowerCase() !== "blog")
                          .map((tag) => (
                            <Chip
                              key={tag.id}
                              label={tag.name}
                              sx={{ mr: 1, mt: 1 }}
                              size="small"
                            />
                          ))}
                      </Box>
                    </Box>
                  </Box>
                </Link>
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
};

export default FeaturedPosts;
