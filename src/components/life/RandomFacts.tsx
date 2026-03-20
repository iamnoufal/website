"use client";

import { motion } from "framer-motion";
import { Lightbulb } from "lucide-react";

interface RandomFactsProps {
  facts: Fact[];
}

export default function RandomFacts({ facts }: RandomFactsProps) {
  if (!facts.length) return null;

  return (
    <section className="h-full">
      <div className="flex items-center gap-4 mb-8">
        <div className="h-12 w-12 rounded-xl bg-yellow-500/10 flex items-center justify-center border border-yellow-500/20">
          <Lightbulb className="text-yellow-500 h-6 w-6" />
        </div>
        <div>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Random Facts
          </h2>
          <p className="text-xs font-sans text-text-muted mt-1">
            shuf -n {facts.length} facts.txt
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        {facts.map((fact, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.06 }}
            viewport={{ once: true }}
            className="group px-4 py-3 rounded-xl bg-surface/50 border border-white/5 hover:border-yellow-500/30 transition-all duration-300 hover:bg-surface/80 hover:shadow-[0_0_16px_rgba(255,200,0,0.06)] flex items-center gap-2.5"
          >
            <span className="text-lg group-hover:scale-110 transition-transform duration-300">
              {fact.icon}
            </span>
            <span className="text-sm text-text-muted group-hover:text-white transition-colors font-medium whitespace-nowrap">
              {fact.text}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
