"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, ArrowRight } from "lucide-react";
import TransitionLink from "@/components/transition/TransitionLink";

const features = [
	{
		icon: Briefcase,
		title: "Experience",
		subtitle: "Software Engineer at Zoho",
		description: "2+ Years",
	},
	{
		icon: GraduationCap,
		title: "Education",
		subtitle: "IIT Madras",
		description: "2020 - 2025",
	},
	{
		icon: GraduationCap,
		title: "Education",
		subtitle: "GCT Coimbatore",
		description: "2020 - 2024",
	},
];


export default function AtAGlance() {
	return (
		<section className="py-64 relative bg-surface-dark/20 backdrop-blur-xl">
			{/* Grid Background */}
			<div className="absolute inset-0 bg-[linear-gradient(to_right,#4FFFB020_2px,transparent_2px),linear-gradient(to_bottom,#4FFFB020_2px,transparent_2px)] bg-size-[48px_48px] blur-[1px] mask-[linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]"></div>

			<div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="grid gap-12 lg:grid-cols-3 lg:gap-8 items-center">
					{/* Left Column: Text */}
					<div className="flex flex-col justify-start lg:col-span-1">
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5 }}
							viewport={{ once: true }}
						>
							<h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
								At a Glance
							</h2>
							<div className="h-1 w-20 rounded-full bg-primary shadow-[0_0_10px_rgba(79,255,176,0.5)]" />
							<p className="text-lg my-6 leading-relaxed text-text-muted">
								A quick summary of my professional background and technical expertise.
							</p>

							<TransitionLink
								href="/docs"
								className="group mt-4 inline-flex items-center text-sm font-semibold text-white hover:text-primary transition-colors"
							>
								More details
								<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
							</TransitionLink>
						</motion.div>
					</div>

					{/* Right Column: Cards */}
					<div className="lg:col-span-2 grid gap-6 sm:grid-cols-3">
						{features.map((feature, index) => (
							<motion.div
								key={feature.title + "_" + index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								viewport={{ once: true }}
								className="relative overflow-hidden rounded-2xl border border-white/10 bg-surface/70 p-6 backdrop-blur-sm transition-colors hover:border-primary/50 hover:bg-surface/80"
							>
								<div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-primary">
									<feature.icon className="h-6 w-6" />
								</div>
								<h3 className="mb-2 font-heading text-lg font-bold text-white">
									{feature.title}
								</h3>
								<p className="text-sm text-text-muted">{feature.subtitle}</p>

								<div className="mt-4 inline-flex items-center rounded bg-white/5 px-2.5 py-1 text-xs font-medium text-primary border border-white/10">
									{feature.description}
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
