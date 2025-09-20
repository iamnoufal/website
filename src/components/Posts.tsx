"use client"

import { PostSchema } from "@/utils/types"
import { motion } from "framer-motion"
import { Calendar, Clock, Tag } from "lucide-react"
import Link from "next/link"

export default function Posts({ posts }: { posts: PostSchema[] }) {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, index) => (
          <motion.article
            key={post.slug}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group"
          >
            <Link href={`/blog/${post.slug}`}>
              <div className="bg-white/5 rounded-xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105">
                {post.feature_image && (
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.feature_image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                )}
                
                <div className="p-6">
                  <h2 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-gradient transition-colors duration-300">
                    {post.title}
                  </h2>
                  
                  {post.excerpt && (
                    <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                  )}
                  
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar size={12} />
                      <span>{new Date(post.published_at).toDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={12} />
                      <span>{post.reading_time} min</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag.id}
                        className="inline-flex items-center gap-1 px-2 py-1 bg-white/10 text-gray-400 text-xs rounded-full"
                      >
                        <Tag size={8} />
                        {tag.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          </motion.article>
        ))}
      </div>
    </div>
  )
}
