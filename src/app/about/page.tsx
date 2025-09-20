"use client"

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useRef } from 'react'

// Conversational story data
const conversationData = [
  {
    speaker: "me",
    message: "Hey there! 👋 So you want to know more about me?",
    emoji: "👋",
    delay: 0.2
  },
  {
    speaker: "me",
    message: "Well, let me tell you a story that started way back in 2002...",
    emoji: "📖",
    delay: 0.4
  },
  {
    speaker: "me",
    message: "I was this curious kid who always wondered how things worked. You know that feeling when you see something and think 'I want to build that'? That was me, all the time.",
    emoji: "🤔",
    delay: 0.6
  },
  {
    speaker: "me",
    message: "Fast forward to 2010, I got my first computer. Oh boy, that was a game-changer! I spent hours exploring, clicking around, trying to understand what made it tick.",
    emoji: "💻",
    delay: 0.8
  },
  {
    speaker: "me",
    message: "Then came 2018 - the year I wrote my first line of HTML. I still remember that moment. It was like discovering a superpower! I could create things that other people could see and use.",
    emoji: "🌐",
    delay: 1.0
  },
  {
    speaker: "me",
    message: "University happened, and suddenly I was surrounded by people who spoke the same language. Computer Science became more than just coding - it became problem-solving, creativity, and innovation.",
    emoji: "🎓",
    delay: 1.2
  },
  {
    speaker: "me",
    message: "React came along in 2022, and I fell in love. Component-based architecture, state management, the whole ecosystem... it was like finding the perfect puzzle pieces.",
    emoji: "⚛️",
    delay: 1.4
  },
  {
    speaker: "me",
    message: "Now? I&apos;m building full-stack applications, solving real problems, and loving every minute of it. Every project is a new adventure, every bug a new challenge to conquer.",
    emoji: "🚀",
    delay: 1.6
  }
]

// What I actually do
const whatIDo = [
  {
    area: "Frontend Magic",
    description: "I turn designs into living, breathing experiences. React, Next.js, TypeScript - these aren't just tools, they're my paintbrushes.",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    color: "from-teal-400 to-ocean-500",
    icon: "🎨"
  },
  {
    area: "Backend Wizardry",
    description: "Building the invisible foundation that makes everything work. APIs, databases, server logic - the unsung heroes of every app.",
    skills: ["Node.js", "FastAPI", "Flask", "MySQL", "PostgreSQL", "MongoDB", "Express"],
    color: "from-ocean-400 to-teal-500",
    icon: "⚙️"
  },
  {
    area: "DevOps & Tools",
    description: "Making sure everything runs smoothly, from development to deployment. Because great code deserves great infrastructure.",
    skills: ["Docker", "AWS", "Vercel", "Git", "CI/CD"],
    color: "from-teal-500 to-ocean-600",
    icon: "🛠️"
  }
]

// Random things about me
const randomThings = [
  {
    category: "Daily Life",
    items: [
      { emoji: "☕", text: "Coffee is my fuel. I've lost count of how many cups I drink daily." },
      { emoji: "🎵", text: "Music is my coding companion. Lofi beats help me focus like nothing else." },
      { emoji: "🌙", text: "I'm a night owl. My best code happens when the world is asleep." }
    ]
  },
  {
    category: "Work Style",
    items: [
      { emoji: "🔍", text: "I love debugging. There's something satisfying about finding that one elusive bug." },
      { emoji: "📚", text: "I'm always learning. New technologies, frameworks, approaches - bring them on!" },
      { emoji: "🎯", text: "I focus on user experience. Code should work, but it should also feel good to use." }
    ]
  },
  {
    category: "Fun Facts",
    items: [
      { emoji: "✈️", text: "I love traveling. Different cultures, different perspectives, different ways of solving problems." },
      { emoji: "🍨", text: "Ice cream is my comfort food. Perfect for those late-night coding sessions." }
    ]
  }
]

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div ref={containerRef} className="min-h-screen bg-navy-950 text-white">
      {/* Animated Background */}
      <motion.div
        className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-teal-950/20 to-ocean-950/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(20,184,166,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(14,165,233,0.08),transparent_50%)]" />
      </motion.div>

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold mb-8 text-gradient">
              Let&apos;s have a chat
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
              Grab a coffee, get comfortable, and let me tell you my story
            </p>
          </motion.div>

          {/* Conversation Starter */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-teal-500/20 max-w-2xl mx-auto"
          >
            <div className="text-6xl mb-6">💬</div>
            <h2 className="text-2xl font-bold mb-4">
              Ready to dive in?
            </h2>
            <p className="text-gray-300">
              I promise to keep it interesting. No boring corporate speak, just real talk about what I do and why I love it.
            </p>
          </motion.div>
        </div>
      </section>

      {/* My Story - Conversational */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-gradient">
              My Story
            </h2>
            <p className="text-xl text-gray-300">
              The journey that brought me here, told like we&apos;re catching up over coffee
            </p>
          </motion.div>

          {/* Conversation Flow */}
          <div className="space-y-8">
            {conversationData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: item.delay }}
                viewport={{ once: true }}
                className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
              >
                <div className={`max-w-2xl ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                  <div className={`
                    bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-teal-400/20 
                    hover:border-teal-400/40 transition-all duration-300
                    ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}
                  `}>
                    <div className="text-3xl mb-3">{item.emoji}</div>
                    <p className="text-gray-300 leading-relaxed">{item.message}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What I Actually Do */}
      <section className="relative z-10 py-20 px-6 bg-gradient-to-br from-navy-900/50 to-navy-950">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-gradient">
              So, what do you actually do?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Great question! Let me break down the technical stuff in a way that actually makes sense
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {whatIDo.map((area, index) => (
              <motion.div
                key={area.area}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group cursor-pointer"
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-teal-400/30 transition-all duration-300 h-full">
                  <div className={`w-16 h-16 bg-gradient-to-r ${area.color} rounded-2xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-2xl">{area.icon}</span>
                  </div>

                  <h3 className="text-xl font-bold mb-4">{area.area}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{area.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {area.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 group-hover:border-teal-400/30 transition-colors duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Random Things About Me */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-gradient">
              Random things about me
            </h2>
            <p className="text-xl text-gray-300">
              Because why not? These little details make me, well, me
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {randomThings.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
              >
                <h3 className="text-xl font-bold mb-6 text-teal-400">{category.category}</h3>
                <div className="space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <motion.div
                      key={itemIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: categoryIndex * 0.2 + itemIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3"
                    >
                      <div className="text-2xl">{item.emoji}</div>
                      <p className="text-gray-300 text-sm leading-relaxed">{item.text}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Let's Connect */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-6xl mb-8">🤝</div>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-8 text-gradient">
              Want to keep the conversation going?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              I love meeting new people, especially those who share my passion for technology and creativity. Let&apos;s build something amazing together!
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.a
                href="mailto:iam@noufal.dev"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-teal-500 to-ocean-500 rounded-full text-white font-medium hover:shadow-2xl hover:shadow-teal-500/25 transition-all duration-300 flex items-center gap-2"
              >
                Send me a message
                <ArrowRight size={20} />
              </motion.a>
              <motion.a
                href="/flow"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-teal-400/30 rounded-full text-white font-medium hover:bg-teal-500/10 hover:border-teal-400/50 transition-all duration-300"
              >
                Check out my work
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
