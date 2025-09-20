"use client"

import { PostSchema } from "@/utils/types"
import { motion } from "framer-motion"
import Link from "next/link"
import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import { Autoplay, EffectCoverflow, Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import Heading from "./Heading"

export default function FeaturedPosts({ posts }: { posts: PostSchema[] }) {
  return (
    <div className="py-20 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-indigo-900/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Heading variant="h2" className="text-gradient mb-4">
            Featured Posts
          </Heading>
          <p className="text-gray-400 text-lg">
            Explore my latest thoughts and insights
          </p>
        </motion.div>

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
          className="py-8"
        >
          {posts.map((post) => {
            return (
              <SwiperSlide
                key={post.slug}
                className="w-80 h-80"
              >
                {({ isActive }: { isActive: boolean }) => (
                  <Link href={`/blog/${post.slug}`}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      className={`
                        w-full h-full bg-cover bg-center rounded-xl overflow-hidden
                        transition-transform duration-500 ${isActive ? 'scale-100' : 'scale-90'}
                      `}
                      style={{
                        backgroundImage: `url(${post.feature_image})`,
                      }}
                    >
                      <div className={`
                        h-full w-full bg-black/70 p-6 flex flex-col justify-between
                        transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}
                      `}>
                        <div>
                          <h3 className="text-xl font-bold text-white mb-2 line-clamp-3">
                            {post.title}
                          </h3>
                          <p className="text-gray-300 text-sm">
                            {new Date(post.published_at).toDateString()}
                          </p>
                        </div>
                        
                        <div className="flex flex-wrap gap-2">
                          <span className="px-2 py-1 bg-gradient-primary text-white text-xs rounded-full">
                            featured
                          </span>
                          {post.tags
                            .filter((tag) => tag.name.toLowerCase() !== "blog")
                            .slice(0, 2)
                            .map((tag) => (
                              <span
                                key={tag.id}
                                className="px-2 py-1 bg-white/20 text-white text-xs rounded-full"
                              >
                                {tag.name}
                              </span>
                            ))}
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                )}
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </div>
  )
}
