"use client";

import { Brain, MessagesSquare, DatabaseZap, Bot } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { Reveal, Stagger, StaggerItem, SpotlightCard } from "@/components/Motion";
import { learningFocus } from "@/data/portfolio";

const icons = { Brain, MessagesSquare, DatabaseZap, Bot };

const iconStyles: Record<string, { bg: string; text: string; glow: string }> = {
  Brain: {
    bg: "bg-pink-500/10 group-hover:bg-pink-500/20",
    text: "text-pink-400",
    glow: "rgba(244, 114, 182, 0.14)",
  },
  MessagesSquare: {
    bg: "bg-emerald-500/10 group-hover:bg-emerald-500/20",
    text: "text-emerald-400",
    glow: "rgba(52, 211, 153, 0.14)",
  },
  DatabaseZap: {
    bg: "bg-amber-500/10 group-hover:bg-amber-500/20",
    text: "text-amber-400",
    glow: "rgba(251, 191, 36, 0.14)",
  },
  Bot: {
    bg: "bg-violet-500/10 group-hover:bg-violet-500/20",
    text: "text-violet-400",
    glow: "rgba(167, 139, 250, 0.14)",
  },
};

export default function LearningFocus() {
  return (
    <section id="learning" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading title={learningFocus.heading} subtitle={learningFocus.description} />

        <div className="mx-auto mt-8 max-w-3xl">
          <Reveal>
            <p className="mb-12 text-center text-base leading-relaxed text-slate-400">
              {learningFocus.closing}
            </p>
          </Reveal>
        </div>

        <Stagger className="mt-6 grid gap-5 sm:grid-cols-2">
          {learningFocus.areas.map((area) => {
            const Icon = icons[area.icon];
            const style = iconStyles[area.icon] ?? {
              bg: "bg-violet-500/10 group-hover:bg-violet-500/20",
              text: "text-violet-400",
              glow: "rgba(167, 139, 250, 0.14)",
            };
            return (
              <StaggerItem key={area.title}>
                <SpotlightCard spotlightColor={style.glow} className="h-full">
                  <div className={`mb-4 flex h-11 w-11 items-center justify-center rounded-lg ${style.bg} ${style.text} transition-colors group-hover:scale-110 duration-200`}>
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="text-base font-semibold text-white">{area.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{area.description}</p>
                </SpotlightCard>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}