"use client";

import { motion } from "framer-motion";
import { ExternalLink, FolderSearch, Code2, ListChecks, Coins, Users } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/Motion";
import { loopcode } from "@/data/portfolio";

const icons = { FolderSearch, Code2, ListChecks, Coins };

const loopcodeIconStyles: Record<string, { bg: string; text: string }> = {
  FolderSearch: {
    bg: "bg-amber-500/10",
    text: "text-amber-400",
  },
  Code2: {
    bg: "bg-sky-500/10",
    text: "text-sky-400",
  },
  ListChecks: {
    bg: "bg-emerald-500/10",
    text: "text-emerald-400",
  },
  Coins: {
    bg: "bg-yellow-500/10",
    text: "text-yellow-400",
  },
};

export default function LoopCode() {
  return (
    <section id="loopcode" className="relative overflow-hidden py-20 md:py-28">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-violet-600/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          title={loopcode.heading}
          subtitle="The product I'm building with my team — live and evolving."
        />

        <Reveal>
          <div className="overflow-hidden rounded-2xl border border-violet-500/20 bg-gradient-to-br from-night-800/80 to-night-850/90 shadow-2xl">
            {/* Product header */}
            <div className="flex flex-col gap-6 border-b border-white/10 p-6 sm:p-10 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-2xl">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                    {loopcode.name}
                  </h3>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    </span>
                    {loopcode.status}
                  </span>
                </div>

                <div className="mt-5 space-y-4">
                  {loopcode.description.map((paragraph) => (
                    <p key={paragraph.slice(0, 40)} className="text-sm leading-relaxed text-slate-400 sm:text-base">
                      {paragraph}
                    </p>
                  ))}
                </div>

                <p className="mt-5 flex items-start gap-2 text-sm italic text-slate-500">
                  <Users className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                  {loopcode.contribution}
                </p>

                <motion.a
                  href={loopcode.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  className="mt-7 inline-flex items-center gap-2 rounded-lg bg-violet-600 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-violet-600/25 transition-colors hover:bg-violet-500"
                >
                  Visit Live Product
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  <span className="sr-only">(opens in a new tab)</span>
                </motion.a>
              </div>

              {/* Decorative interactive terminal mockup */}
              <div className="w-full max-w-sm shrink-0 lg:w-80" aria-hidden="true">
                <div className="rounded-xl border border-violet-500/30 bg-night-950/90 shadow-2xl backdrop-blur-sm">
                  {/* macOS / Unix window header */}
                  <div className="flex items-center justify-between border-b border-white/10 px-4 py-2.5">
                    <div className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80 shadow-sm shadow-rose-500/50" />
                      <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80 shadow-sm shadow-amber-500/50" />
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80 shadow-sm shadow-emerald-500/50" />
                    </div>
                    <span className="text-[11px] font-mono text-slate-500 tracking-wide">bash ~ loopcode-cli</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-violet-400 animate-pulse" />
                  </div>
                  {/* Terminal body */}
                  <div className="space-y-3 px-4 py-4 font-mono text-xs">
                    <p className="text-slate-300">
                      <span className="text-violet-400 font-semibold">&gt;</span> <span className="text-sky-300">loopcode</span> <span className="text-amber-300">analyze</span> <span className="text-slate-400">./repo</span>
                    </p>
                    <div className="space-y-1.5 rounded-lg border border-white/5 bg-white/[0.02] p-3 text-[11px]">
                      <p className="text-slate-400">Parsing AST & dependency graph…</p>
                      <p className="text-slate-300">→ src/components <span className="text-slate-500">(12 files)</span></p>
                      <p className="text-slate-300">→ src/data <span className="text-slate-500">(portfolio.ts)</span></p>
                      <p className="text-emerald-400 font-medium flex items-center gap-1.5">
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                        context & vectors indexed
                      </p>
                    </div>
                    <p className="text-slate-300">
                      <span className="text-violet-400 font-semibold">&gt;</span> <span className="text-sky-300">agent</span> <span className="text-slate-400">generate-tests</span>
                    </p>
                    <p className="pl-3 text-slate-400 flex items-center gap-1.5 text-[11px]">
                      <span>Synthesizing edge cases</span>
                      <span className="inline-block h-3.5 w-1.5 bg-violet-400 animate-pulse" />
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Product goals */}
            <Stagger className="grid gap-px bg-white/5 sm:grid-cols-2 lg:grid-cols-4">
              {loopcode.features.map((feature) => {
                const Icon = icons[feature.icon];
                const style = loopcodeIconStyles[feature.icon] ?? {
                  bg: "bg-violet-500/10",
                  text: "text-violet-300",
                };
                return (
                  <StaggerItem key={feature.title} className="bg-night-850">
                    <div className="group h-full p-6 transition-colors hover:bg-night-800">
                      <div className={`mb-3 flex h-9 w-9 items-center justify-center rounded-lg ${style.bg} ${style.text} transition-transform duration-200 group-hover:scale-110`}>
                        <Icon className="h-4.5 w-4.5" aria-hidden="true" />
                      </div>
                      <h4 className="text-sm font-semibold text-white">{feature.title}</h4>
                      <p className="mt-1.5 text-[13px] leading-relaxed text-slate-400">
                        {feature.description}
                      </p>
                    </div>
                  </StaggerItem>
                );
              })}
            </Stagger>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
