"use client";

import { Briefcase } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { Reveal, Stagger, StaggerItem, SpotlightCard } from "@/components/Motion";
import { experience } from "@/data/portfolio";

const roleStyles = [
  {
    iconBg: "bg-cyan-500/10 text-cyan-400",
    bullet: "bg-cyan-400",
    glow: "rgba(6, 182, 212, 0.14)",
  },
  {
    iconBg: "bg-[#FF9900]/10 text-[#FF9900]",
    bullet: "bg-[#FF9900]",
    glow: "rgba(255, 153, 0, 0.14)",
  },
  {
    iconBg: "bg-purple-500/10 text-purple-400",
    bullet: "bg-purple-400",
    glow: "rgba(168, 85, 247, 0.14)",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading title="Experience" subtitle="Professional experience and hands-on learning" />

        <Stagger className="mt-12 space-y-10">
          {experience.map((item, idx) => {
            const style = roleStyles[idx] ?? roleStyles[0];
            return (
              <StaggerItem key={idx}>
                <SpotlightCard spotlightColor={style.glow}>
                  <div className="mb-5 flex items-start justify-between">
                    <div>
                      <div className="mb-2 flex items-center gap-3">
                        <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${style.iconBg}`}>
                          <Briefcase className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white">{item.role}</h3>
                          <p className="text-base text-slate-300">{item.company}</p>
                        </div>
                      </div>
                    </div>
                    <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-medium text-slate-300">
                      {item.dates}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {item.responsibilities.map((resp, respIdx) => (
                      <Reveal key={respIdx} delay={respIdx * 0.1}>
                        <li className="flex items-start text-sm leading-relaxed text-slate-400">
                          <span className={`mr-2 mt-1 inline-block h-1 w-1 flex-shrink-0 rounded-full ${style.bullet}`} />
                          {resp}
                        </li>
                      </Reveal>
                    ))}
                  </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {item.technologies.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
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