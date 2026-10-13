"use client";

import { Cloud, Activity, Sparkles } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { Reveal, Stagger, StaggerItem, SpotlightCard } from "@/components/Motion";
import { about } from "@/data/portfolio";

const icons = { Cloud, Activity, Sparkles };

const iconStyles: Record<string, { bg: string; text: string; glow: string }> = {
  Cloud: {
    bg: "bg-sky-500/10 group-hover:bg-sky-500/20",
    text: "text-sky-400",
    glow: "rgba(56, 189, 248, 0.14)",
  },
  Activity: {
    bg: "bg-emerald-500/10 group-hover:bg-emerald-500/20",
    text: "text-emerald-400",
    glow: "rgba(52, 211, 153, 0.14)",
  },
  Sparkles: {
    bg: "bg-amber-500/10 group-hover:bg-amber-500/20",
    text: "text-amber-400",
    glow: "rgba(251, 191, 36, 0.14)",
  },
};

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading title={about.heading} subtitle={about.subtitle} />

        <div className="mx-auto max-w-3xl space-y-5">
          {about.paragraphs.map((paragraph) => (
            <Reveal key={paragraph.slice(0, 32)}>
              <p className="text-base leading-relaxed text-slate-400">{paragraph}</p>
            </Reveal>
          ))}
        </div>

        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {about.highlights.map((card) => {
            const Icon = icons[card.icon];
            const style = iconStyles[card.icon] ?? {
              bg: "bg-sky-500/10 group-hover:bg-sky-500/20",
              text: "text-sky-400",
              glow: "rgba(56, 189, 248, 0.14)",
            };
            return (
              <StaggerItem key={card.title}>
                <SpotlightCard spotlightColor={style.glow} className="h-full">
                  <div className={`mb-4 flex h-11 w-11 items-center justify-center rounded-lg ${style.bg} ${style.text} transition-colors group-hover:scale-110 duration-200`}>
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="text-base font-semibold text-white">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{card.description}</p>
                </SpotlightCard>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
