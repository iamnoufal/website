import PostIntro from "@/components/PostIntro"
import { getPostBySlug, getPosts } from "@/utils/ghost"
import { PostSchema } from "@/utils/types"
import { Metadata } from "next"
import { notFound } from "next/navigation"
import '../../../styles/blog-content.css'
import PrismWrapper from "@/theme/PrismWrapper"

interface Props {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPostBySlug(params.slug)
  
  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.feature_image ? [post.feature_image] : [],
    },
  }
}

export async function generateStaticParams() {
  const posts = await getPosts()
  return posts.map((post: PostSchema) => ({
    slug: post.slug,
  }))
}

export default async function BlogPost({ params }: Props) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <PrismWrapper />
      <PostIntro post={post} />
      
      <div className="max-w-4xl mx-auto px-6 pb-12">
        <article 
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </div>
  )
}
