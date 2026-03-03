"use client";

import TransitionLink from "@/components/transition/TransitionLink";
import { cn } from "@/utils/tailwind";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { name: "home", href: "/" },
  { name: "docs", href: "/docs" },
  { name: "life", href: "/life" },
  { name: "blog", href: "/blog" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname().split("/")[1];

  // Prevent scrolling when menu is open
  if (typeof window !== "undefined") {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }

  return (
    <>
      <nav className="fixed top-0 z-50 w-full backdrop-blur-lg transition-all duration-300">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <TransitionLink href="/" className="flex items-center gap-2 z-50" onClick={() => setIsOpen(false)}>
            <span className="text-lg font-bold tracking-tight text-white font-heading">
              noufal<span className="text-primary">.dev</span>
            </span>
          </TransitionLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-8">
            {navItems.map((item) => (
              <TransitionLink
                key={item.name}
                href={item.href}
                className={cn(
                  "relative text-sm font-medium transition-colors hover:text-primary",
                  pathname === item.href.split("/")[1] ? "text-primary" : "text-text-muted"
                )}
              >
                {item.name}
              </TransitionLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden z-50">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="flex h-10 w-10 items-center justify-center text-white hover:text-primary focus:outline-none"
              aria-label="Toggle menu"
            >
              <div className="flex w-5 h-2 flex-col justify-between">
                <motion.span
                  className="h-0.5 w-full bg-current rounded-full origin-middle"
                  animate={isOpen ? { rotate: -45, y: 3 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="h-0.5 w-full bg-current rounded-full origin-middle"
                  animate={isOpen ? { rotate: 45, y: -3 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-surface/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col items-center space-y-8 p-6">
              {navItems.map((item) => (
                <TransitionLink
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-3xl font-bold transition-colors hover:text-primary font-heading",
                    pathname === item.href.split("/")[1] ? "text-primary" : "text-white"
                  )}
                >
                  {item.name}
                </TransitionLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
