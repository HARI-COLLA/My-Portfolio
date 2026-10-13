"use client";

import { motion } from "framer-motion";
import { ArrowDown, ExternalLink, Mail, FileText } from "lucide-react";
import { hero, profile } from "@/data/portfolio";

export default function Hero() {
  return (
    <section id="top" className="bg-grid relative overflow-hidden pt-16">
      {/* Organic floating gradient glows */}
      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.15, 0.24, 0.15],
        }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -top-40 left-1/2 h-96 w-[42rem] -translate-x-1/2 rounded-full bg-accent-600 blur-3xl"
        aria-hidden="true"
      />
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.1, 0.18, 0.1],
          y: [0, 12, 0],
        }}
        transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="pointer-events-none absolute right-0 top-1/3 h-72 w-72 rounded-full bg-violet-600 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 pb-20 pt-16 sm:px-6 md:pt-24 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
        {/* Text column */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-xs font-semibold uppercase tracking-[0.3em] text-accent-400"
          >
            {hero.introLabel}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-[3.4rem]"
          >
            {hero.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 bg-gradient-to-r from-accent-400 to-violet-400 bg-clip-text text-lg font-semibold text-transparent sm:text-xl"
          >
            {hero.title}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-xl space-y-4 text-base leading-relaxed text-slate-400"
          >
            <p>{hero.paragraph1}</p>
            <p>{hero.paragraph2}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 flex flex-wrap items-center gap-3.5"
          >
            {/* 1. Primary Portfolio Action */}
            <motion.a
              href="#projects"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="inline-flex items-center gap-2 rounded-lg bg-accent-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-accent-600/30 transition-all hover:bg-accent-500 hover:shadow-accent-500/40"
            >
              Explore My Work
              <ArrowDown className="h-4 w-4" aria-hidden="true" />
            </motion.a>

            {/* 2. Direct Recruiter Action: Resume */}
            <motion.a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="inline-flex items-center gap-2 rounded-lg border border-emerald-500/40 bg-emerald-500/10 px-5 py-2.5 text-sm font-medium text-emerald-300 shadow-sm transition-all hover:border-emerald-400/70 hover:bg-emerald-500/20 hover:text-white"
            >
              Resume
              <FileText className="h-4 w-4 text-emerald-400" aria-hidden="true" />
            </motion.a>

            {/* 3. Product Action: LoopCode */}
            <motion.a
              href={profile.loopcodeUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="inline-flex items-center gap-2 rounded-lg border border-violet-500/40 bg-violet-500/10 px-5 py-2.5 text-sm font-medium text-violet-300 shadow-sm transition-all hover:border-violet-400/70 hover:bg-violet-500/20 hover:text-white"
            >
              Visit LoopCode
              <ExternalLink className="h-4 w-4 text-violet-400" aria-hidden="true" />
            </motion.a>

            {/* 4. Secondary Action: Contact */}
            <motion.a
              href="#contact"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-slate-300 transition-all hover:border-white/25 hover:bg-white/[0.07] hover:text-white"
            >
              Contact Me
              <Mail className="h-4 w-4 text-slate-400" aria-hidden="true" />
            </motion.a>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-8 flex flex-wrap gap-2"
            aria-label="Technologies I work with"
          >
            {hero.techPills.map((pill) => (
              <motion.li
                key={pill}
                whileHover={{ scale: 1.08, borderColor: "rgba(255,255,255,0.25)" }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="cursor-default rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300 transition-colors"
              >
                {pill}
              </motion.li>
            ))}
          </motion.ul>
        </div>

        {/* Profile photo with gentle floating animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center lg:justify-end"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            {/* Glow ring with slow breathing pulse */}
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.6, 0.9, 0.6],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -inset-1.5 rounded-full bg-gradient-to-br from-accent-500/50 to-violet-500/50 blur-xl"
            />
            <div className="relative h-64 w-64 overflow-hidden rounded-full border-2 border-white/15 sm:h-72 sm:w-72 lg:h-80 lg:w-80 shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/profile.jpg"
                alt="Mallangi Harinath Reddy"
                className="h-full w-full object-cover object-top"
              />
            </div>
            {/* Status badge */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="absolute bottom-4 right-0 flex items-center gap-2 rounded-full border border-white/10 bg-night-850/90 px-3 py-1.5 shadow-xl backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="text-xs font-medium text-slate-300">Open to opportunities</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
