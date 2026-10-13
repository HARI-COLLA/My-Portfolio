"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { Skill } from "@/data/portfolio";

/**
 * Maps brand color hex to a CSS filter string that colorizes a black-fill SVG.
 * Precomputed for the brand colors used in this portfolio.
 */
const COLOR_FILTERS: Record<string, string> = {
  "#FF9900": "brightness(0) saturate(100%) invert(63%) sepia(98%) saturate(1200%) hue-rotate(1deg) brightness(103%)",
  "#844FBA": "brightness(0) saturate(100%) invert(35%) sepia(60%) saturate(800%) hue-rotate(255deg) brightness(90%)",
  "#FCC624": "brightness(0) saturate(100%) invert(80%) sepia(80%) saturate(900%) hue-rotate(5deg) brightness(100%)",
  "#2496ED": "brightness(0) saturate(100%) invert(47%) sepia(90%) saturate(1000%) hue-rotate(195deg) brightness(100%)",
  "#326CE5": "brightness(0) saturate(100%) invert(38%) sepia(70%) saturate(1200%) hue-rotate(210deg) brightness(95%)",
  "#F05032": "brightness(0) saturate(100%) invert(42%) sepia(80%) saturate(1200%) hue-rotate(345deg) brightness(105%)",
  "#ffffff": "brightness(0) invert(1)",
  "#2088FF": "brightness(0) saturate(100%) invert(42%) sepia(80%) saturate(1200%) hue-rotate(205deg) brightness(105%)",
  "#D24939": "brightness(0) saturate(100%) invert(35%) sepia(80%) saturate(1000%) hue-rotate(350deg) brightness(100%)",
  "#EF7B4D": "brightness(0) saturate(100%) invert(55%) sepia(70%) saturate(800%) hue-rotate(345deg) brightness(105%)",
  "#E6522C": "brightness(0) saturate(100%) invert(45%) sepia(80%) saturate(900%) hue-rotate(345deg) brightness(105%)",
  "#F46800": "brightness(0) saturate(100%) invert(55%) sepia(90%) saturate(1100%) hue-rotate(15deg) brightness(105%)",
  "#3776AB": "brightness(0) saturate(100%) invert(40%) sepia(80%) saturate(800%) hue-rotate(195deg) brightness(90%)",
  "#ED8B00": "brightness(0) saturate(100%) invert(60%) sepia(90%) saturate(1000%) hue-rotate(15deg) brightness(105%)",
  "#4479A1": "brightness(0) saturate(100%) invert(40%) sepia(70%) saturate(700%) hue-rotate(195deg) brightness(90%)",
  "#47A248": "brightness(0) saturate(100%) invert(55%) sepia(60%) saturate(800%) hue-rotate(90deg) brightness(95%)",
  "#61DAFB": "brightness(0) saturate(100%) invert(80%) sepia(60%) saturate(700%) hue-rotate(165deg) brightness(105%)",
  "#339933": "brightness(0) saturate(100%) invert(50%) sepia(60%) saturate(900%) hue-rotate(90deg) brightness(90%)",
  "#1C3C3C": "brightness(0) saturate(100%) invert(20%) sepia(20%) saturate(400%) hue-rotate(140deg) brightness(90%)",
  "#FF6F00": "brightness(0) saturate(100%) invert(55%) sepia(90%) saturate(1000%) hue-rotate(10deg) brightness(105%)",
};

export default function SkillIcon({ skill }: { skill: Skill }) {
  const [failed, setFailed] = useState(false);
  const useBadge = !skill.icon || failed;

  const imgFilter = skill.color
    ? (COLOR_FILTERS[skill.color] ?? "brightness(0) invert(1)")
    : "brightness(0) invert(1)";

  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.05 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
      className="group flex h-full cursor-default flex-col items-center justify-center gap-3 rounded-xl border border-white/10 bg-night-850/60 px-2 py-5 transition-colors hover:border-white/25 hover:bg-night-800"
      title={skill.label}
    >
      {useBadge ? (
        <motion.span
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-[11px] font-bold tracking-tight"
          style={{ color: skill.color ?? "#93c5fd" }}
          aria-hidden="true"
        >
          {skill.badge ?? skill.label.slice(0, 3)}
        </motion.span>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <motion.img
          whileHover={{ scale: 1.12 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
          src={`/skills/${skill.icon}.svg`}
          alt=""
          width={36}
          height={36}
          loading="lazy"
          onError={() => setFailed(true)}
          className="h-9 w-9 transition-opacity group-hover:opacity-100"
          style={{ filter: imgFilter, opacity: 0.9 }}
        />
      )}
      <span className="text-center text-[11px] font-medium leading-tight text-slate-400 transition-colors group-hover:text-slate-200">
        {skill.label}
      </span>
    </motion.div>
  );
}
