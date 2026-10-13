"use client";

import { type MouseEvent } from "react";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import { Github, ExternalLink, Check } from "lucide-react";
import ProjectVisual from "@/components/ProjectVisual";
import { Reveal } from "@/components/Motion";
import type { Project } from "@/data/portfolio";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <Reveal delay={index * 0.09}>
      <motion.article
        onMouseMove={handleMouseMove}
        whileHover={{ y: -7, scale: 1.01 }}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
        className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-night-850/60 shadow-lg transition-colors hover:border-white/20 hover:shadow-2xl hover:shadow-black/50"
      >
        {/* Interactive mouse spotlight glow */}
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: useMotionTemplate`radial-gradient(450px circle at ${mouseX}px ${mouseY}px, rgba(96, 165, 250, 0.12), transparent 80%)`,
          }}
        />

        {/* Architecture visual */}
        <div className="relative z-10 border-b border-white/10 bg-night-950/60 p-4">
          <ProjectVisual kind={project.visual} />
        </div>

        <div className="relative z-10 flex flex-1 flex-col p-6">
          <h3 className="text-lg font-semibold leading-snug text-white">{project.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-400">{project.description}</p>

          <ul className="mt-4 space-y-2">
            {project.keyPoints.map((point) => (
              <li key={point} className="flex items-start gap-2 text-[13px] leading-relaxed text-slate-400">
                <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-400" aria-hidden="true" />
                {point}
              </li>
            ))}
          </ul>

          <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Technologies used">
            {project.technologies.map((tech) => (
              <motion.li
                key={tech}
                whileHover={{ scale: 1.07 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="cursor-default rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] font-medium text-slate-300"
              >
                {tech}
              </motion.li>
            ))}
          </ul>

          <div className="mt-6 flex items-center gap-3 pt-2">
            {project.repoUrl ? (
              <motion.a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 px-3.5 py-2 text-xs font-medium text-slate-300 transition-colors hover:border-white/25 hover:text-white"
              >
                <Github className="h-3.5 w-3.5" aria-hidden="true" />
                GitHub
              </motion.a>
            ) : (
              <span className="text-xs italic text-slate-600">Repository link coming soon</span>
            )}
            {project.demoUrl && (
              <motion.a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="inline-flex items-center gap-1.5 rounded-lg bg-accent-600 px-3.5 py-2 text-xs font-medium text-white shadow-md shadow-accent-600/20 transition-colors hover:bg-accent-500"
              >
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                Live Demo
              </motion.a>
            )}
          </div>
        </div>
      </motion.article>
    </Reveal>
  );
}
