"use client"

import { cn } from "@/utils/cn"
import { motion } from "framer-motion"

interface ParagraphProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

export default function Paragraph({
  children,
  delay = 0,
  className
}: ParagraphProps) {
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
      <p className={cn(
        "text-base md:text-lg text-gray-300 leading-relaxed mb-4",
        className
      )}>
        {children}
      </p>
    </motion.div>
  )
}
