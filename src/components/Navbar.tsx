"use client";

import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight, FileText } from "lucide-react";
import { navLinks, profile } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { ScrollProgressBar } from "@/components/Motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track which section is in view
  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Lock body scroll when the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open
          ? "border-b border-white/10 bg-night-950/80 backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <ScrollProgressBar />
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6"
        aria-label="Main navigation"
      >
        <a
          href="#top"
          className="text-base font-semibold tracking-tight text-white transition-colors hover:text-slate-200"
          onClick={() => setOpen(false)}
        >
          {profile.shortName} Reddy
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={cn(
                  "rounded-md px-3 py-2 text-sm transition-colors",
                  active === link.href
                    ? "text-white"
                    : "text-slate-400 hover:text-white"
                )}
                aria-current={active === link.href ? "true" : undefined}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1.5 rounded-lg border border-white/10 px-3.5 py-2 text-sm font-medium text-slate-300 transition-colors hover:border-white/25 hover:text-white sm:inline-flex"
          >
            Resume
            <FileText className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href="#contact"
            className="hidden items-center gap-1.5 rounded-lg bg-accent-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-500 lg:inline-flex"
          >
            Let&apos;s Connect
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-slate-300 transition-colors hover:text-white lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "overflow-hidden border-b border-white/10 bg-night-950/95 backdrop-blur-md transition-[max-height,opacity] duration-300 lg:hidden",
          open ? "max-h-[30rem] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <ul className="space-y-1 px-4 py-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={cn(
                  "block rounded-lg px-3 py-2.5 text-sm transition-colors",
                  active === link.href
                    ? "bg-white/5 text-white"
                    : "text-slate-400 hover:bg-white/5 hover:text-white"
                )}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2 flex flex-col gap-2">
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 rounded-lg border border-white/10 px-4 py-2.5 text-sm font-medium text-slate-200 transition-colors hover:bg-white/5"
              onClick={() => setOpen(false)}
            >
              Resume
              <FileText className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className="flex items-center justify-center gap-1.5 rounded-lg bg-accent-600 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-500"
              onClick={() => setOpen(false)}
            >
              Let&apos;s Connect
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
