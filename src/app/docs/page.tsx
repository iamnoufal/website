"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BookOpen,
  Briefcase,
  Code2,
  GraduationCap,
  MapPin,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

// --- Data ---

const journey = [
  {
    company: "Zoho Corporation",
    role: "Member Technical Staff",
    period: "Feb 2024 – Present",
    location: "Madurai",
    summary: "Building and owning core modules of the Zoho Expense app. Shipping features that make expense management less painful for thousands of users.",
    skills: ["Java", "MySQL", "Apache Tomcat", "Redis"],
    highlight: true,
  },
  {
    company: "Optigon Ventures",
    role: "Tech Lead",
    period: "Sept 2023 – Feb 2024",
    location: "Chennai",
    summary: "Led a small team to build a genAI-powered interviewing platform that aimed to cut hiring time by 3x. Also learned how to manage budgets (and cut them by 30%).",
    skills: ["Next.js", "FastAPI", "Supabase", "GCP"],
  },
  {
    company: "Bosch Global Software Technologies",
    role: "Trainee",
    period: "July – Aug 2023",
    location: "Coimbatore",
    summary: "Built internal tools for employee mentorship. Got a peek into the world of automotive software — AUTOSAR, ARXML, and all that.",
    skills: ["Java", "React", "MySQL"],
  },
  {
    company: "C1Exchange",
    role: "Software Development Intern",
    period: "May – July 2023",
    location: "Remote",
    summary: "Worked on a customer data platform — segmenting users, building targeted audiences for marketing campaigns across paid channels.",
    skills: ["AngularJS", "Node.js"],
  },
  {
    company: "RMarketing M8",
    role: "Web Development Intern",
    period: "July 2022 – Jan 2023",
    location: "Remote",
    summary: "My first real gig. Implemented SEO solutions that pushed client websites to 5000+ daily visitors. Rebuilt the company's own site from scratch.",
    skills: ["Next.js", "Shopify", "Strapi", "AWS"],
  },
];

const education = [
  {
    institution: "IIT Madras",
    degree: "B.S. Data Science and Applications",
    period: "2020 – 2024",
    note: "CGPA 7.7 · Head of WebOps",
  },
  {
    institution: "GCT Coimbatore",
    degree: "B.E. Computer Science",
    period: "2020 – 2024",
    note: "CGPA 7.8 · Web Lead, Coding Club",
  },
];

const allSkills = [
  "TypeScript", "JavaScript", "Java", "Python", "SQL", "Dart",
  "React", "Next.js", "AngularJS", "Tailwind CSS", "Flutter", "Framer Motion",
  "Node.js", "Express", "FastAPI", "Spring Boot", "Redis",
  "MySQL", "PostgreSQL", "Firebase", "Supabase", "MongoDB",
  "Git", "Docker", "AWS", "GCP", "Linux", "Figma",
];

const projects = [
  {
    title: "This Website",
    description: "The thing you're looking at. Built with Next.js 16, Tailwind, and Framer Motion. Powered by Ghost for the blog and Spotify API for the vibes.",
    link: "https://noufal.dev",
    tech: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    title: "GenAI Interview Platform",
    description: "An AI-driven hiring tool that automates the screening process. Built this from the ground up as Tech Lead at Optigon.",
    link: "#",
    tech: ["Next.js", "FastAPI", "Supabase", "GCP"],
  },
  {
    title: "E-commerce Photo Assistant",
    description: "Point your camera at a product, and let Gemini AI generate stunning catalog-ready photos. Built with Flutter and Firebase.",
    link: "#",
    tech: ["Flutter", "Firebase", "Gemini AI"],
  },
];

// --- Components ---

const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div
    className={`p-6 rounded-2xl bg-surface/50 border border-white/10 backdrop-blur-sm hover:border-primary/30 transition-colors ${className}`}
  >
    {children}
  </div>
);

export default function DocsPage() {
  return (
    <div className="min-h-screen pt-28 pb-24 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Hero / Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <h1 className="text-4xl md:text-6xl font-bold font-heading text-white mb-6 tracking-tight">
            Hey, I'm Noufal<span className="text-primary">.</span>
          </h1>
          <p className="text-lg text-text-muted leading-relaxed max-w-2xl">
            I'm a software engineer who loves building things that live on the internet.
            Currently at <strong className="text-white">Zoho</strong>, previously led a small AI startup,
            and always tinkering with something on the side. I studied Data Science at <strong className="text-white">IIT Madras</strong> and
            Computer Science at <strong className="text-white">GCT Coimbatore</strong>.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <Link href="mailto:iam@noufal.dev" className="inline-flex items-center gap-2 text-sm text-primary border border-primary/30 bg-primary/10 px-4 py-2 rounded-full hover:bg-primary/20 transition-colors">
              iam@noufal.dev <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
            <Link href="https://github.com/noufal" target="_blank" className="inline-flex items-center gap-2 text-sm text-text-muted border border-white/10 bg-white/5 px-4 py-2 rounded-full hover:bg-white/10 transition-colors">
              GitHub <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
            <Link href="https://linkedin.com/in/noufal" target="_blank" className="inline-flex items-center gap-2 text-sm text-text-muted border border-white/10 bg-white/5 px-4 py-2 rounded-full hover:bg-white/10 transition-colors">
              LinkedIn <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </motion.div>

        {/* The Journey — Timeline */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-2xl font-bold font-heading text-white mb-2">The Journey So Far</h2>
          <p className="text-text-muted mb-10 text-sm">From first internship to owning production modules.</p>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 bottom-0 w-px bg-white/10" />

            <div className="space-y-8">
              {journey.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="relative pl-12"
                >
                  {/* Timeline dot */}
                  <div className={`absolute left-2.5 top-1.5 w-3 h-3 rounded-full border-2 ${job.highlight ? "bg-primary border-primary shadow-[0_0_10px_rgba(79,255,176,0.5)]" : "bg-surface border-white/20"}`} />

                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-1">
                    <div>
                      <h3 className="text-lg font-bold text-white">{job.role}</h3>
                      <div className="text-primary text-sm font-medium">{job.company}</div>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-text-muted shrink-0">
                      <MapPin className="w-3 h-3" />
                      {job.location} · {job.period}
                    </div>
                  </div>

                  <p className="text-text-muted text-sm leading-relaxed mt-2 mb-3">
                    {job.summary}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {job.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs text-text-muted bg-white/5 px-2 py-0.5 rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Education — Compact */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-2xl font-bold font-heading text-white mb-2">Education</h2>
          <p className="text-text-muted mb-8 text-sm">Where the foundations were laid.</p>

          <div className="grid sm:grid-cols-2 gap-4">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white">{edu.institution}</h3>
                      <p className="text-xs text-text-muted">{edu.period}</p>
                    </div>
                  </div>
                  <p className="text-sm text-primary/90 font-medium mb-1">{edu.degree}</p>
                  <p className="text-xs text-text-muted">{edu.note}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Skills — Flowing Tags */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-2xl font-bold font-heading text-white mb-2">Things I Work With</h2>
          <p className="text-text-muted mb-8 text-sm">Languages, frameworks, tools — the usual suspects.</p>

          <div className="flex flex-wrap gap-2">
            {allSkills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2, delay: index * 0.02 }}
                viewport={{ once: true }}
                className="text-sm text-text-muted bg-surface/50 border border-white/5 px-3 py-1.5 rounded-lg hover:border-primary/30 hover:text-primary transition-colors cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.section>

        {/* Projects */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold font-heading text-white mb-2">Things I've Built</h2>
          <p className="text-text-muted mb-8 text-sm">A few highlights from what I've shipped.</p>

          <div className="grid gap-4">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <Card className="group hover:-translate-y-0.5 transition-all duration-300">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    {project.link !== "#" && (
                      <Link href={project.link} target="_blank" className="text-text-muted hover:text-primary transition-colors shrink-0 ml-4">
                        <ArrowUpRight className="w-5 h-5" />
                      </Link>
                    )}
                  </div>
                  <p className="text-text-muted text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="text-xs text-text-muted/80">
                        #{t}
                      </span>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

      </div>
    </div>
  );
}
