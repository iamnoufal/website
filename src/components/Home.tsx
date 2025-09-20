"use client"

import { cn } from '@/utils/cn'
import { motion } from 'framer-motion'
import { ArrowDown, CheckSquare, Coffee, ExternalLink, Gift, Github, Heart, Linkedin, Mail, MapPin, Music } from 'lucide-react'
import { useEffect, useState } from 'react'

const hexValues = ["68", "65", "6C", "6C", "6F", "20", "1F44B"]
const finalText = Array.from("hello 👋🏼")

const randomFacts = [
  { emoji: "🎉", icon: Gift, text: "I love surprises!", color: "from-pink-400 to-red-400" },
  { emoji: "☕️", icon: Coffee, text: "I drink a lot of coffee", color: "from-amber-400 to-orange-400" },
  { emoji: "🤚🏼", icon: Heart, text: "I got 1 extra here", color: "from-rose-400 to-pink-400" },
  { emoji: "🗺️", icon: MapPin, text: "I love journeys", color: "from-green-400 to-teal-400" },
  { emoji: "🍋", icon: Heart, text: "Design freak", color: "from-yellow-400 to-amber-400" },
  { emoji: "🎶", icon: Music, text: "Music soothes my heart", color: "from-purple-400 to-indigo-400" },
  { emoji: "📋", icon: CheckSquare, text: "I have a bucket list 😉", color: "from-blue-400 to-cyan-400" },
]

export default function NewHome() {
  const [msg, setMsg] = useState(hexValues.join(" "))
  const [translated, setTranslated] = useState(false)
  const [isTranslating, setIsTranslating] = useState(false)
  const [topTrack, setTopTrack] = useState<{ title: string; artist: string } | null>(null)

  useEffect(() => {
    const fetchTopTrack = async () => {
      try {
        const response = await fetch('/api/spotify/top-track')
        if (response.ok) {
          const data = await response.json()
          setTopTrack(data)
        }
      } catch (error) {
        console.error("Failed to fetch top track:", error)
      }
    }

    fetchTopTrack()
  }, [])

  const handleTranslate = () => {
    if (translated || isTranslating) return
    
    setIsTranslating(true)
    const hexGroups = msg.split(" ")
    
    const animateCharacter = (index: number) => {
      if (index >= hexGroups.length) {
        setTranslated(true)
        setIsTranslating(false)
        return
      }
      
      const delay = index * 80
      const timeout = setTimeout(() => {
        hexGroups[index] = index < finalText.length ? finalText[index] : ""
        setMsg(hexGroups.join(" "))
        animateCharacter(index + 1)
      }, delay)
      
      // Store timeout for potential cleanup
      return timeout
    }
    
    animateCharacter(0)
  }

  const scrollToContent = () => {
    // Use native scrollTo for immediate response, Lenis will smooth it out
    window.scrollTo({ top: window.innerHeight, behavior: 'auto' })
  }

  return (
    <div className="min-h-screen bg-navy-950 text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-900/20 via-ocean-900/20 to-navy-900/20" />
          
          {/* Reduced Floating Particles - from 30 to 8 for memory optimization */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-teal-400 to-ocean-500 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-20, 20, -20],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          {/* Greeting Message */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-16"
          >
            <motion.div 
              onClick={!translated && !isTranslating ? handleTranslate : undefined}
              whileHover={!translated && !isTranslating ? { scale: 1.02 } : {}}
              whileTap={!translated && !isTranslating ? { scale: 0.98 } : {}}
              className={cn(
                "text-xl md:text-2xl font-mono text-teal-400 mb-4 min-h-[2rem] flex items-center justify-center transition-all duration-300",
                !translated && !isTranslating && "cursor-pointer hover:text-teal-300",
                translated ? "gap-1" : "gap-2" // No gap when translated, gap for hex values
              )}
            >
              {msg.split(" ").map((char, index) => (
                <motion.span
                  key={`${index}-${char}`} // Key changes when character changes, triggering re-animation
                  initial={{ opacity: 0, y: 15, scale: 0.7, rotateX: -90 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0, 
                    scale: 1,
                    rotateX: 0
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 25,
                    delay: isTranslating ? 0 : index * 0.04,
                  }}
                  className="inline-block transform-gpu"
                >
                  {char === " " ? (translated ? "" : "\u00A0") : char}
                </motion.span>
              ))}
            </motion.div>
            
            {!translated && !isTranslating && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-gray-400 text-xs"
              >
                Click to decode
              </motion.p>
            )}
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl lg:text-8xl font-playfair font-bold mb-12"
          >
            I&apos;m <span className="text-gradient">Noufal Rahman</span>
          </motion.h1>

          {/* Static Subtitle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-xl md:text-2xl text-gray-300 mb-20"
          >
            Full Stack Developer
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-medium hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 flex items-center gap-2"
            >
              View My Work
              <ExternalLink size={18} />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-white/20 rounded-full text-white font-medium hover:bg-white/10 transition-all duration-300"
            >
              Get In Touch
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="flex justify-center gap-6 mb-20"
          >
            {[
              { icon: Github, href: "https://github.com/iamnoufal", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/in/noufal-rahman", label: "LinkedIn" },
              { icon: Mail, href: "mailto:iam@noufal.dev", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                whileHover={{ scale: 1.1, y: -2 }}
                className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                aria-label={label}
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.button
            onClick={scrollToContent}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.7 }}
            className="animate-bounce"
          >
            <ArrowDown size={24} className="text-gray-400" />
          </motion.button>
        </div>
      </section>

      {/* What Makes You Beautiful Section */}
      <section className="py-20 bg-gradient-to-r from-teal-900/10 to-ocean-900/10">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-teal-400 to-ocean-500 rounded-full flex items-center justify-center animate-pulse">
                <Music size={24} className="text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-playfair font-bold mb-2">
                  {topTrack ? (
                    <>
                      <span className="text-gradient">{topTrack.title}</span>
                      <span className="text-gray-300 font-normal text-xl"> by {topTrack.artist}</span>
                    </>
                  ) : (
                    <span className="text-gradient">What Makes You Beautiful</span>
                  )}
                </h2>
                <div className="relative h-5 overflow-hidden pointer-events-none select-none">
                  <div
                    className="absolute left-0 top-0 w-full h-full"
                    style={{
                      maskImage: "linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)",
                      WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)",
                    }}
                  >
                    <div
                      className="whitespace-nowrap text-gray-400 text-sm"
                      style={{
                        display: "inline-block",
                        minWidth: "100%",
                      }}
                    >
                      on repeat • on repeat • on repeat • on repeat • on repeat • on repeat • on repeat • on repeat • on repeat •
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Just like this song that keeps playing on repeat, I believe in creating things that people want to experience again and again.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Random Facts Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4 text-gradient">
              Random Facts
            </h2>
            <p className="text-gray-400 text-lg">
              Some things you might find interesting about me
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
            {randomFacts.map((fact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="group w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] xl:w-[calc(25%-1.125rem)] min-w-[280px] max-w-[320px]"
              >
                <div className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/10 h-full flex flex-col items-center text-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {fact.emoji}
                  </div>
                  <p className="text-gray-300 group-hover:text-white transition-colors duration-300 font-medium">
                    {fact.text}
                  </p>
                  <div className={cn(
                    "w-full h-1 rounded-full mt-4 bg-gradient-to-r",
                    fact.color
                  )} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-8 text-gradient">
                Crafting Digital Experiences
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                I&apos;m a passionate developer who transforms ideas into elegant, 
                functional solutions. With expertise in modern web technologies 
                and a keen eye for design, I create experiences that not only 
                look great but perform exceptionally.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-white/5 rounded-lg border border-white/10">
                  <h3 className="text-3xl font-bold text-teal-400 mb-2">50+</h3>
                  <p className="text-gray-400">Projects Completed</p>
                </div>
                <div className="text-center p-6 bg-white/5 rounded-lg border border-white/10">
                  <h3 className="text-3xl font-bold text-ocean-400 mb-2">3+</h3>
                  <p className="text-gray-400">Years Experience</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-ocean-500/20 rounded-full blur-3xl"
              />
              <div className="relative bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-white/10">
                <h3 className="text-2xl font-bold mb-6">Tech Stack</h3>
                <div className="grid grid-cols-3 gap-4">
                  {["React", "Next.js", "TypeScript", "Node.js", "Python", "TailwindCSS"].map((tech) => (
                    <motion.div
                      key={tech}
                      whileHover={{ scale: 1.05 }}
                      className="p-3 bg-white/5 rounded-lg text-center border border-white/10 hover:border-teal-400/50 transition-all duration-300"
                    >
                      <span className="text-sm font-medium">{tech}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Fun Outro Section */}
      <section className="py-20 bg-gradient-to-br from-navy-900/50 to-navy-950">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
              I just code in my free time 🙃
            </h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-xl text-gray-300 mb-8"
            >
              I&apos;m just kidding. I code almost all the time
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-6xl mb-8"
            >
              👋
            </motion.div>
            <p className="text-gray-400">
              You should&apos;ve known my name 😉
              <br />
              I just assumed, because you&apos;re here. Just in case if you didn&apos;t notice, I&apos;m Noufal Rahman
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 