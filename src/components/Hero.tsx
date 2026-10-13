"use client";

import { motion } from "framer-motion";
import { ArrowDown, ExternalLink, Mail, Download, ChevronDown } from "lucide-react";
import { hero, profile } from "@/data/portfolio";

export default function Hero() {
  return (
    <section
      id="top"
      className="bg-grid relative flex min-h-screen flex-col justify-between overflow-hidden pt-20 pb-6"
    >
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

      <div className="relative mx-auto my-auto grid w-full max-w-6xl items-center gap-10 px-4 py-6 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
        {/* Text column */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-400"
          >
            {hero.introLabel}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="mt-2.5 bg-gradient-to-r from-sky-300 via-sky-400 to-accent-400 bg-clip-text text-4xl font-extrabold leading-tight tracking-tight text-transparent drop-shadow-[0_0_25px_rgba(56,189,248,0.28)] sm:text-5xl lg:text-[3.4rem]"
          >
            {hero.name}
          </motion.h1>

          {/* Tagline: Engineering Creative Solutions */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
            className="mt-3 text-xl font-semibold tracking-tight sm:text-2xl"
          >
            <span className="font-bold text-sky-400">{hero.taglineHighlight}</span>{" "}
            <span className="font-normal text-slate-300">{hero.taglineRest}</span>
          </motion.p>

          {/* Role Bar */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-3 text-sm font-medium text-slate-400 sm:text-base"
          >
            {hero.roleLine}
          </motion.p>

          {/* One-line Impact Statement */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mt-2 text-sm font-medium text-sky-400/90 sm:text-base"
          >
            {hero.summary}
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="mt-7 flex flex-wrap items-center gap-3.5"
          >
            {/* 1. Primary Action: View My Work */}
            <motion.a
              href="#projects"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="inline-flex items-center gap-2 rounded-xl bg-sky-500 px-6 py-2.5 text-sm font-semibold text-white shadow-[0_0_25px_rgba(14,165,233,0.4)] transition-all hover:bg-sky-400 hover:shadow-[0_0_32px_rgba(56,189,248,0.55)]"
            >
              View My Work
              <ArrowDown className="h-4 w-4" aria-hidden="true" />
            </motion.a>

            {/* 2. Download Resume */}
            <motion.a
              href={profile.resumeUrl}
              download="Harinath_Mallangi_DevOps.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="inline-flex items-center gap-2 rounded-xl border border-sky-500/40 bg-sky-500/10 px-5 py-2.5 text-sm font-medium text-sky-300 transition-all hover:border-sky-400/70 hover:bg-sky-500/20 hover:text-white"
            >
              <Download className="h-4 w-4 text-sky-400" aria-hidden="true" />
              Download Resume
            </motion.a>

            {/* 3. Get In Touch */}
            <motion.a
              href="#contact"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="inline-flex items-center gap-2 rounded-xl border border-sky-500/30 bg-night-900/60 px-5 py-2.5 text-sm font-medium text-sky-300 transition-all hover:border-sky-400/60 hover:bg-sky-500/15 hover:text-white"
            >
              <Mail className="h-4 w-4 text-sky-400" aria-hidden="true" />
              Get In Touch
            </motion.a>

            {/* 4. Visit LoopCode */}
            <motion.a
              href={profile.loopcodeUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="inline-flex items-center gap-2 rounded-xl border border-violet-500/40 bg-violet-500/10 px-5 py-2.5 text-sm font-medium text-violet-300 transition-all hover:border-violet-400/70 hover:bg-violet-500/20 hover:text-white"
            >
              Visit LoopCode
              <ExternalLink className="h-4 w-4 text-violet-400" aria-hidden="true" />
            </motion.a>
          </motion.div>

          {/* Quick Stats Row (10+ Projects | Fresher | 100% Dedication) */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 grid max-w-md grid-cols-3 gap-6 border-t border-white/10 pt-5"
          >
            {hero.stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-extrabold tracking-tight text-sky-400 sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs font-medium text-slate-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
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
            <div className="relative h-60 w-60 overflow-hidden rounded-full border-2 border-white/15 sm:h-68 sm:w-68 lg:h-76 lg:w-76 shadow-2xl">
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

      {/* Scroll Down Indicator anchored at bottom of first screen */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.55 }}
        className="relative z-10 flex shrink-0 justify-center pt-2"
      >
        <a
          href="#about"
          className="group flex flex-col items-center gap-1 text-xs font-medium tracking-wider text-sky-400/90 transition-colors hover:text-sky-300"
          aria-label="Scroll down to About section"
        >
          <span>Scroll Down</span>
          <motion.span
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="h-4.5 w-4.5" aria-hidden="true" />
          </motion.span>
        </a>
      </motion.div>
    </section>
  );
}
