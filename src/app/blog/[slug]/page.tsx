// import { Container } from "@/components/layout/Container";
import { getPostBySlug } from "@/utils/ghost";
import { Calendar, Clock } from "lucide-react";
import PrismLoader from "@/components/blog/PrismLoader";
import Image from "next/image";
import { notFound } from "next/navigation";

export const revalidate = 60;

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found | Noufal",
    };
  }

  return {
    title: `${post.title} | Noufal`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.feature_image],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-background pb-24">
      <PrismLoader />

      <div className="relative min-h-screen w-full flex flex-col justify-end overflow-hidden pb-16">
        {post.feature_image && (
          <>
            <Image
              src={post.feature_image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
          </>
        )}
        {!post.feature_image && <div className="absolute inset-0 bg-linear-to-br from-gray-900 to-black" />}

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center mt-12 animate-in fade-in zoom-in-95 duration-700">

          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
              {post.tags
                .filter(t => t.name.toLowerCase() !== 'blog')
                .map(tag => (
                  <span key={tag.id} className="bg-white/10 hover:bg-white/20 border border-white/10 text-primary px-4 py-1.5 rounded-full backdrop-blur-md transition-colors text-xs font-bold tracking-wider lowercase">
                    {tag.name}
                  </span>
                ))}
            </div>
          )}

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 leading-tight tracking-tight drop-shadow-2xl">
            {post.title}
          </h1>

          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed drop-shadow-md font-medium mb-8">
            {post.excerpt}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-300 font-bold tracking-wide">
            <span className="flex items-center gap-1.5"><Clock size={14} className="text-primary" /> {post.reading_time} min read</span>
            <span className="w-1 h-1 bg-gray-500 rounded-full" />
            <span className="flex items-center gap-1.5"><Calendar size={14} className="text-primary" /> {new Date(post.published_at).toLocaleDateString("en-US", { month: 'short', day: 'numeric', year: 'numeric' })}</span>
          </div>
        </div>
      </div>

      <div className="relative z-20 py-16 md:py-24 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto prose prose-invert prose-lg prose-headings:font-heading prose-headings:font-bold prose-headings:text-foreground prose-a:text-primary hover:prose-a:text-primary/80 prose-img:rounded-2xl prose-blockquote:border-primary prose-blockquote:bg-white/5 prose-blockquote:px-6 prose-blockquote:py-2 prose-blockquote:rounded-r-lg prose-code:text-primary">
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </div>
    </article>
  );
}
