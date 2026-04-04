"use client";

import { useActionState } from "react";
import { subscribe } from "@/utils/actions";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

const initialState = {
  success: false,
  message: "",
};

function SubmitButton() {
  // We can use useFormStatus here if we want loading state, but let's keep it simple first
  return (
    <button
      type="submit"
      className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-background transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(79,255,176,0.4)] disabled:opacity-50 disabled:cursor-not-allowed"
    >
      <span className="mr-2">Subscribe</span>
      <Send className="h-4 w-4" />
    </button>
  );
}

export default function Subscribe() {
  const [state, formAction] = useActionState(subscribe, initialState);

  return (
    <section className="relative w-full py-12 overflow-hidden">
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-surface/30 p-8 md:p-12 backdrop-blur-md"
        >
          {/* Decorative background gradient */}
          <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />

          <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Stay in the loop
          </h2>
          <p className="mb-8 text-lg text-text-muted max-w-2xl mx-auto">
            Get the latest insights on web development, design systems, and tech trends delivered straight to your inbox.
          </p>

          {!state.success ? (
            <form action={formAction} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="flex-1 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-white placeholder-text-muted focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary backdrop-blur-sm"
              />
              <SubmitButton />
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="rounded-xl border border-primary/20 bg-primary/10 p-4 text-primary"
            >
              🎉 {state.message}
            </motion.div>
          )}

          {state.message && !state.success && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-4 text-sm text-red-400"
            >
              {state.message}
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
