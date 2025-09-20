"use client"

import logo from '@/assets/images/logo.webp'
import { cn } from '@/utils/cn'
import { AnimatePresence, motion } from 'framer-motion'
import { BookOpen, Briefcase, Home, Mail, User } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

const navigationItems = [
  { name: 'Home', href: '/', icon: Home, description: 'Welcome' },
  { name: 'About', href: '/about', icon: User, description: 'My Story' },
  { name: 'Blog', href: '/blog', icon: BookOpen, description: 'Thoughts' },
  { name: 'Flow', href: '/flow', icon: Briefcase, description: 'Journey' },
  { name: 'Contact', href: '/contact', icon: Mail, description: 'Connect' },
]

export default function ModernNav() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const isComponentMounted = useRef(true)

  useEffect(() => {
    let ticking = false
    
    const handleScroll = () => {
      if (!ticking && isComponentMounted.current) {
        requestAnimationFrame(() => {
          if (isComponentMounted.current) {
            setScrolled(window.scrollY > 50)
          }
          ticking = false
        })
        ticking = true
      }
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  // Component unmount cleanup
  useEffect(() => {
    return () => {
      isComponentMounted.current = false
    }
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  return (
    <>
      {/* Navigation Bar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
          scrolled 
            ? "bg-navy-950/90 backdrop-blur-custom border-b border-teal-500/20" 
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src={logo}
                alt="Noufal Rahman"
                width={50}
                height={50}
                className="h-12 w-auto"
                priority
              />
            </Link>

            {/* Hamburger Menu Button */}
            <button
              onClick={toggleMenu}
              className="relative z-50 p-2 text-white hover:text-blue-400 transition-colors duration-300"
              aria-label="Toggle menu"
            >
              <motion.div
                animate={isOpen ? "open" : "closed"}
                className="w-6 h-6 relative"
              >
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: 0, opacity: 1 },
                    open: { rotate: -45, y: 3, opacity: 1 }
                  }}
                  className="absolute w-6 h-0.5 bg-current top-2 left-0 origin-center transition-all duration-300"
                />
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: 0, opacity: 1 },
                    open: { rotate: 45, y: -3, opacity: 1 }
                  }}
                  className="absolute w-6 h-0.5 bg-current top-4 left-0 origin-center transition-all duration-300"
                />
              </motion.div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Full Page Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-30 bg-navy-950/95 backdrop-blur-md"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-900/20 via-ocean-900/20 to-navy-900/20" />
              
              {/* Reduced Floating Particles - from 20 to 8 for memory optimization */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-gradient-to-r from-teal-400 to-ocean-500 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [-10, 10, -10],
                    opacity: [0.3, 0.8, 0.3],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>

            {/* Menu Content */}
            <div className="relative z-10 h-full flex flex-col justify-center px-6 py-8 overflow-y-auto">
              <div className="max-w-4xl w-full mx-auto">
                {/* Navigation Grid - Center aligned */}
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="flex flex-wrap justify-center gap-4 lg:gap-6 mb-8 lg:mb-12"
                >
                  {navigationItems.map((item, index) => {
                    const Icon = item.icon
                    const isActive = pathname === item.href
                    
                    return (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ 
                          delay: 0.1 * index + 0.3,
                          duration: 0.4,
                          ease: [0.22, 1, 0.36, 1]
                        }}
                        className="w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-1rem)] max-w-[280px]"
                      >
                        <Link
                          href={item.href}
                          onClick={closeMenu}
                          className={cn(
                            "group relative block p-6 lg:p-8 rounded-2xl border transition-all duration-300 hover:scale-105 h-full",
                            isActive 
                              ? "bg-teal-500/10 border-teal-400/50 shadow-lg shadow-teal-400/20" 
                              : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-teal-400/20"
                          )}
                        >
                          <div className="text-center">
                            <Icon 
                              size={28} 
                              className={cn(
                                "mx-auto mb-3 lg:mb-4 transition-all duration-300 group-hover:scale-110",
                                                              isActive 
                                ? "text-teal-400" 
                                : "text-gray-400 group-hover:text-teal-400"
                              )}
                            />
                            <h3 className={cn(
                              "text-lg lg:text-xl font-playfair font-semibold mb-2 transition-colors duration-300",
                              isActive ? "text-white" : "text-gray-300 group-hover:text-white"
                            )}>
                              {item.name}
                            </h3>
                            <p className="text-xs lg:text-sm text-gray-500 group-hover:text-gray-400 transition-colors duration-300">
                              {item.description}
                            </p>
                          </div>
                          
                          {/* Active indicator */}
                          {isActive && (
                            <motion.div
                              layoutId="activeMenuItem"
                              className="absolute inset-0 rounded-2xl border-2 border-teal-400/50"
                              transition={{ type: "spring", stiffness: 400, damping: 30 }}
                            />
                          )}
                        </Link>
                      </motion.div>
                    )
                  })}
                </motion.div>

                {/* Connect Section - At the bottom */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: 0.1 * navigationItems.length + 0.3,
                    duration: 0.4,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  className="group relative p-6 lg:p-8 rounded-2xl border bg-gradient-to-br from-teal-500/5 to-ocean-500/10 border-teal-400/20 mx-auto"
                >
                  <div className="text-center">
                                          <div className="w-8 h-8 bg-gradient-to-r from-teal-400 to-ocean-500 rounded-full mx-auto mb-4" />
                    <h3 className="text-xl font-playfair font-semibold mb-4 text-white">
                      Connect
                    </h3>
                    <div className="flex flex-col gap-2 mb-4">
                      {[
                        { name: 'GitHub', href: 'https://github.com/iamnoufal' },
                        { name: 'LinkedIn', href: 'https://linkedin.com/in/iamnoufal' },
                        { name: 'Email', href: 'mailto:iam@noufal.dev' },
                      ].map((social) => (
                        <a
                          key={social.name}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                                                      className="text-sm text-gray-400 hover:text-teal-400 transition-colors duration-300"
                        >
                          {social.name}
                        </a>
                      ))}
                    </div>
                    {/* "Let's create something amazing together" text inside Connect box */}
                    <p className="text-gray-400 text-sm font-light border-t border-white/10 pt-4">
                      Let&apos;s create something amazing together
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
} 