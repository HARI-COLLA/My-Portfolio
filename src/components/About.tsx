"use client";

import { GraduationCap, Target, Heart, Award, Cloud, Activity, Sparkles } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { Reveal, Stagger, StaggerItem, SpotlightCard } from "@/components/Motion";
import { about } from "@/data/portfolio";

const icons = { GraduationCap, Target, Heart, Award, Cloud, Activity, Sparkles };

const iconStyles: Record<string, { bg: string; text: string; glow: string }> = {
  GraduationCap: {
    bg: "bg-sky-500/10 group-hover:bg-sky-500/20",
    text: "text-sky-400",
    glow: "rgba(56, 189, 248, 0.16)",
  },
  Target: {
    bg: "bg-emerald-500/10 group-hover:bg-emerald-500/20",
    text: "text-emerald-400",
    glow: "rgba(52, 211, 153, 0.16)",
  },
  Heart: {
    bg: "bg-rose-500/10 group-hover:bg-rose-500/20",
    text: "text-rose-400",
    glow: "rgba(244, 63, 94, 0.16)",
  },
  Award: {
    bg: "bg-amber-500/10 group-hover:bg-amber-500/20",
    text: "text-amber-400",
    glow: "rgba(251, 191, 36, 0.16)",
  },
};

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading title={about.heading} subtitle={about.subtitle} />

        <div className="mt-10">
          <Reveal>
            <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              {about.headlinePrefix}{" "}
              <span className="text-sky-400">{about.headlineHighlight}</span>
            </h3>
          </Reveal>

          <div className="mt-6 space-y-5">
            {about.paragraphs.map((paragraph) => (
              <Reveal key={paragraph.slice(0, 32)}>
                <p className="text-base leading-relaxed text-slate-400 sm:text-[17px]">
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>
        </div>

        <Stagger className="mt-12 grid gap-5 sm:grid-cols-2">
          {about.highlights.map((card) => {
            const Icon = icons[card.icon];
            const style = iconStyles[card.icon] ?? {
              bg: "bg-sky-500/10 group-hover:bg-sky-500/20",
              text: "text-sky-400",
              glow: "rgba(56, 189, 248, 0.16)",
            };
            return (
              <StaggerItem key={card.title}>
                <SpotlightCard
                  spotlightColor={style.glow}
                  className="h-full transition-all duration-300 hover:border-sky-500/45 hover:shadow-[0_0_35px_-8px_rgba(14,165,233,0.3)]"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/5 ${style.bg} ${style.text} transition-all duration-200 group-hover:scale-110`}
                    >
                      <Icon className="h-5.5 w-5.5" aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-white transition-colors group-hover:text-sky-400">
                        {card.title}
                      </h4>
                      <p className="mt-1.5 text-sm leading-relaxed text-slate-400">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </SpotlightCard>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
