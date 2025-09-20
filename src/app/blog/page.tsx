import Heading from "@/components/Heading"
import Posts from "@/components/Posts"
import { getPosts } from "@/utils/ghost"
import { PostSchema } from "@/utils/types"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog - Noufal Rahman",
  description: "Read my latest thoughts, tutorials, and insights on web development, technology, and more.",
}

export default async function Blog() {
  const posts: PostSchema[] = await getPosts()

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="text-center py-16">
        <Heading variant="h1" className="mb-6">
          Blog
        </Heading>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Thoughts, tutorials, and insights on web development, technology, and life.
        </p>
      </div>
      
      <Posts posts={posts} />
    </div>
  )
}
