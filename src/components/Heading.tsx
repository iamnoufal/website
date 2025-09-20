"use client"

import { cn } from "@/utils/cn"
import { motion } from "framer-motion"

interface HeadingProps {
  children: React.ReactNode
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  component?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "div"
  delay?: number
  className?: string
}

const variantStyles = {
  h1: "text-4xl md:text-6xl lg:text-7xl font-bold",
  h2: "text-3xl md:text-4xl lg:text-5xl font-bold",
  h3: "text-2xl md:text-3xl lg:text-4xl font-semibold",
  h4: "text-xl md:text-2xl lg:text-3xl font-semibold",
  h5: "text-lg md:text-xl lg:text-2xl font-medium",
  h6: "text-base md:text-lg lg:text-xl font-medium",
}

export default function Heading({
  children,
  variant = "h1",
  component,
  delay = 0,
  className
}: HeadingProps) {
  const Component = component || variant || "div"
  
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <Component 
        className={cn(
          variantStyles[variant],
          "font-playfair leading-snug mb-6",
          className
        )}
        style={{ fontFamily: 'var(--font-playfair, "Playfair Display", serif)' }}
      >
        {children}
      </Component>
    </motion.div>
  )
}
