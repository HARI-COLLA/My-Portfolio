"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-night-900 py-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="text-center md:text-left">
            <p className="text-sm text-slate-400">
              © {currentYear} Mallangi Harinath Reddy. All rights reserved.
            </p>
            <p className="mt-1 text-xs text-slate-500">
              Built with Next.js, Tailwind CSS, and Framer Motion
            </p>
          </div>
          <div className="flex items-center gap-1 text-sm text-slate-400">
            <span>Made with</span>
            <motion.span
              animate={{ scale: [1, 1.25, 1] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
              className="inline-flex"
            >
              <Heart className="h-4 w-4 fill-current text-rose-500" />
            </motion.span>
            <span>and contributions to</span>
            <a
              href="https://loopcode.heksync.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-accent-400 hover:text-accent-300 hover:underline"
            >
              LoopCode
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}