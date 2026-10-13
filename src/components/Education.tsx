"use client";

import { GraduationCap, Award } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { Reveal, SpotlightCard } from "@/components/Motion";
import { education, certification, achievement } from "@/data/portfolio";

export default function Education() {
  return (
    <section id="education" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading title="Education & Recognition" subtitle="Academic background and key achievements" />

        <div className="mx-auto mt-12 max-w-3xl space-y-8">
          {/* Education */}
          <Reveal>
            <SpotlightCard spotlightColor="rgba(99, 102, 241, 0.14)">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400 transition-transform group-hover:scale-110 duration-200">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{education.degree}</h3>
                  <p className="text-base text-slate-300">{education.university}</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between border-t border-white/10 pt-4">
                  <span className="text-sm font-medium text-slate-400">Graduation Year</span>
                  <span className="text-sm text-white">{education.graduationYear}</span>
                </div>
                <div className="flex justify-between border-t border-white/10 pt-4">
                  <span className="text-sm font-medium text-slate-400">CGPA</span>
                  <span className="text-sm text-white">{education.cgpa}</span>
                </div>
              </div>
            </SpotlightCard>
          </Reveal>

          {/* Certification */}
          <Reveal delay={0.1}>
            <SpotlightCard spotlightColor="rgba(255, 153, 0, 0.14)">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#FF9900]/10 text-[#FF9900] transition-transform group-hover:scale-110 duration-200">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{certification.name}</h3>
                  <p className="text-base text-slate-300">{certification.provider}</p>
                </div>
              </div>
              <div className="flex justify-between border-t border-white/10 pt-4">
                <span className="text-sm font-medium text-slate-400">Date</span>
                <span className="text-sm text-white">{certification.date}</span>
              </div>
            </SpotlightCard>
          </Reveal>

          {/* Achievement */}
          <Reveal delay={0.2}>
            <SpotlightCard spotlightColor="rgba(245, 158, 11, 0.14)">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-amber-500/10 text-amber-400 transition-transform group-hover:scale-110 duration-200">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{achievement.title}</h3>
                  <p className="text-base text-slate-300">{achievement.event}</p>
                </div>
              </div>
            </SpotlightCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}