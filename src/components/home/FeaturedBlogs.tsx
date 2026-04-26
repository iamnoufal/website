"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react";
import TransitionLink from "@/components/transition/TransitionLink";

export default function FeaturedBlogs({ posts }: { posts: PostSchema[] }) {
	if (!posts || posts.length === 0) {
		return null;
	}

	return (
		<section className="relative w-full py-24 overflow-hidden bg-bg-dark">
			<div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="flex flex-row justify-between items-center mb-12 gap-6">
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5 }}
						viewport={{ once: true }}
					>
						<h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
							Featured Thoughts
						</h2>
						<div className="h-1 w-20 rounded-full bg-primary shadow-[0_0_10px_rgba(79,255,176,0.5)]" />
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5 }}
						viewport={{ once: true }}
					>
						<TransitionLink
							href="/blog"
							className="group inline-flex items-center text-sm font-semibold text-white hover:text-primary transition-colors"
						>
							View all posts
							<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
						</TransitionLink>
					</motion.div>
				</div>

				<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
					{posts.map((post, index) => (
						<motion.article
							key={post.slug}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							whileHover={{ y: -5 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							viewport={{ once: true }}
							className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-surface/50 p-6 backdrop-blur-sm transition-colors duration-300 hover:border-primary/50 hover:bg-surface/80 hover:shadow-lg hover:shadow-primary/5"
						>
							<div>
								<div className="flex items-center gap-4 text-xs text-text-muted mb-4">
									<div className="flex items-center gap-1">
										<Calendar className="h-3 w-3" />
										<span suppressHydrationWarning>
											{new Date(post.published_at).toLocaleDateString()}
										</span>
									</div>
									<div className="flex items-center gap-1">
										<Clock className="h-3 w-3" />
										{post.reading_time} min read
									</div>
								</div>

								<h3 className="mb-3 font-heading text-xl font-bold text-white group-hover:text-primary transition-colors">
									<TransitionLink href={`/blog/${post.slug}`}>
										<span className="absolute inset-0" />
										{post.title}
									</TransitionLink>
								</h3>

								<p className="text-sm text-text-muted leading-relaxed mb-6">
									{post.excerpt}
								</p>
							</div>

							<div className="flex flex-wrap gap-2">
								{post.tags.filter((tag) => tag.name !== "blog").map((tag) => (
									<span
										key={tag.id}
										className="inline-flex items-center rounded-full bg-white/5 px-2.5 py-0.5 text-xs font-medium text-primary border border-white/10"
									>
										<Tag className="mr-1 h-3 w-3" />
										{tag.name}
									</span>
								))}
							</div>
						</motion.article>
					))}
				</div>
			</div>
		</section>
	);
}

