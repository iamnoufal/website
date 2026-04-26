"use client";

import { motion } from "framer-motion";
import { Terminal, ArrowLeft, Home } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-secondary/10 blur-3xl filter -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-accent/5 blur-3xl filter translate-x-1/3 translate-y-1/3" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 text-center max-w-xl"
      >
        {/* Terminal-style badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary mb-8"
        >
          <Terminal className="w-3.5 h-3.5" />
          <span className="font-mono">Error 404</span>
        </motion.div>

        {/* Glitch-style 404 */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-8xl md:text-9xl font-heading font-bold tracking-tighter mb-4"
        >
          <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-accent to-primary">
            404
          </span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-2xl md:text-3xl font-heading font-bold text-white mb-4"
        >
          You&apos;re lost, aren&apos;t you<span className="text-primary">?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-text-muted text-lg leading-relaxed mb-4"
        >
          You seem to have stumbled upon a page that doesn&apos;t exist.
          Don&apos;t worry, I won&apos;t tell anyone that you got lost.
        </motion.p>

        {/* Terminal output */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="rounded-xl bg-surface/50 border border-white/10 backdrop-blur-sm p-4 mb-10 text-left font-mono text-sm"
        >
          <div className="flex items-center gap-1.5 mb-3">
            <span className="w-3 h-3 rounded-full bg-red-500/80" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <span className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <p className="text-text-muted">
            <span className="text-primary">$</span> curl -I{" "}
            <span className="text-white/70">noufal.dev/???</span>
          </p>
          <p className="text-red-400/90 mt-1">
            HTTP/1.1 404 Not Found
          </p>
          <p className="text-text-muted/60 mt-1">
            Connection: lost in the void
          </p>
        </motion.div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-background bg-primary hover:bg-primary-hover px-6 py-3 rounded-full transition-colors"
          >
            <Home className="w-4 h-4" />
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 text-sm font-medium text-text-muted border border-white/10 bg-white/5 px-6 py-3 rounded-full hover:bg-white/10 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}
