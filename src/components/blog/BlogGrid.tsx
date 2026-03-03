"use client";

import { motion } from "framer-motion";
import TransitionLink from "@/components/transition/TransitionLink";
import Image from "next/image";
import { ArrowRight, Calendar, Clock } from "lucide-react";

interface BlogGridProps {
  posts: PostSchema[];
}

export function BlogGrid({ posts }: BlogGridProps) {
  if (!posts || posts.length === 0) {
    return (
      <div className="col-span-full text-center py-20">
        <p className="text-xl text-gray-400">No posts found.</p>
      </div>
    );
  }

  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post, index) => (
        <motion.div
          key={post.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <TransitionLink
            href={`/blog/${post.slug}`}
            className="group flex flex-col h-full bg-surface border border-white/5 rounded-2xl overflow-hidden hover:border-primary/50 hover:bg-surface-glass hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300"
          >
            {/* Image Container */}
            <div className="relative aspect-16/10 w-full overflow-hidden bg-gray-900">
              {post.feature_image && (
                <Image
                  src={post.feature_image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              )}
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

              {/* Tag Badges */}
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                {post.tags &&
                  post.tags
                    .filter((tag) => !["blog", "featured", "roundup"].includes(tag.name.toLowerCase()))
                    .slice(0, 3)
                    .map((tag) => (
                      <span
                        key={tag.id}
                        className="bg-secondary/90 backdrop-blur-md text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider shadow-lg"
                      >
                        {tag.name}
                      </span>
                    ))}
              </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col h-full relative">
              <div className="flex items-center gap-3 text-xs text-muted mb-3 font-medium">
                <div className="flex items-center gap-1">
                  <Calendar size={12} className="text-primary" />
                  {new Date(post.published_at).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </div>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <Clock size={12} className="text-primary" />
                  {post.reading_time} min read
                </div>
              </div>

              <h2 className="text-xl font-heading font-bold text-foreground mb-3 group-hover:text-primary transition-colors leading-snug">
                {post.title}
              </h2>

              <p className="text-muted text-sm mb-6 line-clamp-3 leading-relaxed grow">
                {post.excerpt}
              </p>

              <div className="flex items-center gap-2 text-sm font-semibold text-primary group-hover:text-primary/80 transition-colors mt-auto">
                Read Article <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </TransitionLink>
        </motion.div>
      ))}
    </div>
  );
}
