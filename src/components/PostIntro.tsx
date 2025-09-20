"use client"

import { PostSchema } from "@/utils/types"
import { Calendar, Clock, Tag } from "lucide-react"
import Heading from "./Heading"
import Paragraph from "./Paragraph"

export default function PostIntro({ post }: { post: PostSchema }) {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <Heading variant="h1" className="mb-6">
          {post.title}
        </Heading>
        
        <div className="flex flex-wrap justify-center gap-6 text-gray-400 text-sm mb-8">
          <div className="flex items-center gap-2">
            <Calendar size={16} />
            <span>{new Date(post.published_at).toDateString()}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={16} />
            <span>{post.reading_time} min read</span>
          </div>
        </div>

        {post.feature_image && (
          <div className="mb-8">
            <img 
              src={post.feature_image} 
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover rounded-xl"
            />
          </div>
        )}

        {post.excerpt && (
          <Paragraph className="text-xl text-gray-300 leading-relaxed mb-8">
            {post.excerpt}
          </Paragraph>
        )}

        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap justify-center gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag.id}
                className="inline-flex items-center gap-1 px-3 py-1 bg-white/10 text-gray-300 text-sm rounded-full"
              >
                <Tag size={12} />
                {tag.name}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
