"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { Reveal, SpotlightCard } from "@/components/Motion";
import { contact, profile } from "@/data/portfolio";

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading title="Get in Touch" subtitle={contact.description} />

        <div className="mx-auto mt-12 max-w-3xl">
          <Reveal>
            <SpotlightCard spotlightColor="rgba(59, 130, 246, 0.15)" className="p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-white">Let's Connect</h3>
                  <p className="mt-2 text-sm text-slate-400">
                    I'm open to full-time opportunities, project collaborations, and discussions about
                    cloud-native and AI-powered applications.
                  </p>
                </div>

                <div className="space-y-4">
                  <motion.div
                    whileHover={{ y: -3, scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 400, damping: 22 }}
                    className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-4 transition-colors hover:border-red-500/30"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/10 text-[#EA4335]">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-300">Email</p>
                      <a
                        href={`mailto:${profile.email}`}
                        className="text-base text-white hover:text-[#EA4335] hover:underline"
                      >
                        {profile.email}
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ y: -3, scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 400, damping: 22 }}
                    className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-4 transition-colors hover:border-[#0A66C2]/40"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0A66C2]/15 text-[#0A66C2]">
                      <Linkedin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-300">LinkedIn</p>
                      <a
                        href={profile.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base text-white hover:text-[#0A66C2] hover:underline"
                      >
                        View profile
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ y: -3, scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 400, damping: 22 }}
                    className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-4 transition-colors hover:border-white/30"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white">
                      <Github className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-300">GitHub</p>
                      <a
                        href={profile.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base text-white hover:text-slate-200 hover:underline"
                      >
                        View repositories
                      </a>
                    </div>
                  </motion.div>
                </div>

                <div className="border-t border-white/10 pt-6">
                  <p className="text-sm text-slate-400">
                    {profile.workPreferences}
                  </p>
                </div>
              </div>
            </SpotlightCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}