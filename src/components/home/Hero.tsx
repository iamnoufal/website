"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles, Terminal } from "lucide-react";
import TransitionLink from "@/components/transition/TransitionLink";

export default function Hero() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);

  return (
    <section className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-8 md:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-6 inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary"
          >
            <Sparkles className="mr-2 h-3 w-3" />
            <span>Available for collaboration</span>
          </motion.div>

          <h1 className="font-heading text-5xl font-bold tracking-tight text-white md:text-7xl lg:text-8xl">
            Building{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-accent">
              stuff
            </span>
            <br />
            that matters
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-text-muted md:text-xl leading-relaxed">
            Hi, I'm Noufal. I'm a Full Stack Developer & Creative Thinker.
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          className="flex gap-4 flex-row"
        >
          <TransitionLink
            href="/life"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-primary px-6 py-3 text-sm font-semibold text-background transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(79,255,176,0.4)]"
          >
            <span className="mr-2">Explore Life</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </TransitionLink>

          <TransitionLink
            href="/docs"
            className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:scale-105"
          >
            <Terminal className="mr-2 h-4 w-4 text-gray-400" />
            <span>Read Docs</span>
          </TransitionLink>
        </motion.div>
      </div>
      <motion.div
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <span className="text-sm text-text-muted opacity-50">
          Scroll to explore
        </span>
      </motion.div>
    </section>
  );
}
