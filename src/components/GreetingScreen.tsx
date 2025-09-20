"use client"

import { cn } from '@/utils/cn'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const greetings = [
  { text: "Hello" },
  { text: "Bonjour" },
  { text: "नमस्ते" },
  { text: "வணக்கம்" },
]

interface GreetingScreenProps {
  children: React.ReactNode
}

export default function GreetingScreen({ children }: GreetingScreenProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showGreeting, setShowGreeting] = useState(true)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if user has visited before in this session
    const visited = sessionStorage.getItem('hasVisited')
    if (visited === 'true') {
      setShowGreeting(false)
    }
    
    setIsLoading(false)
  }, [])

  useEffect(() => {
    if (!showGreeting || isLoading) return

    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev === greetings.length - 1) {
          const timeout = setTimeout(() => {
            setShowGreeting(false)
            sessionStorage.setItem('hasVisited', 'true')
          }, 800)
          
          // Store timeout reference for cleanup
          return prev
        }
        return prev + 1
      })
    }, 1000)

    // Proper cleanup of timer
    return () => {
      clearInterval(timer)
    }
  }, [showGreeting, isLoading])

  // Show nothing while loading to prevent flash
  if (isLoading) {
    return <div className="min-h-screen bg-black" />
  }

  // Show children if greeting is complete
  if (!showGreeting) {
    return <>{children}</>
  }

  // Show greeting screen
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-blue-900/30 to-purple-900/30" />
      
      {/* Reduced Animated Background Dots - from 50 to 15 for memory optimization */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center">
        <div className="flex flex-col items-center space-y-6">
          <AnimatePresence mode="wait">
            <motion.h1
              key={`text-${currentIndex}`}
              initial={{ opacity: 0, y: 20, rotateX: -90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              exit={{ opacity: 0, y: -20, rotateX: 90 }}
              transition={{ 
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1]
              }}
              className={cn(
                "greeting-text text-6xl md:text-8xl lg:text-9xl font-bold",
                "bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
              )}
            >
              {greetings[currentIndex]?.text}
            </motion.h1>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  )
} 