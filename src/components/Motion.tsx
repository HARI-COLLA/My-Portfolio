"use client";

import { motion, useScroll, useSpring, useMotionTemplate, useMotionValue, type Variants } from "framer-motion";
import { type MouseEvent, type ReactNode } from "react";

// Ultra-refined ease curve modeled after Apple / Linear design systems
export const smoothEase = [0.16, 1, 0.3, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li" | "span";
};

/** Fade + rise into view with fluid spring-like easing when scrolled into viewport. */
export function Reveal({ children, delay = 0, className }: RevealProps) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, delay, ease: smoothEase }}
    >
      {children}
    </motion.div>
  );
}

type StaggerProps = {
  children: ReactNode;
  className?: string;
};

/** Parent container that smoothly staggers the entrance of its children. */
export function Stagger({ children, className }: StaggerProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      transition={{ staggerChildren: 0.07, delayChildren: 0.05 }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: StaggerProps) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      transition={{ duration: 0.6, ease: smoothEase }}
    >
      {children}
    </motion.div>
  );
}

/** Interactive card with smooth mouse-tracking radial spotlight and spring hover physics */
export function SpotlightCard({
  children,
  className = "",
  spotlightColor = "rgba(59, 130, 246, 0.12)",
}: {
  children: ReactNode;
  className?: string;
  spotlightColor?: string;
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      whileHover={{ y: -6, scale: 1.008 }}
      whileTap={{ scale: 0.995 }}
      transition={{ type: "spring", stiffness: 350, damping: 25 }}
      className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-night-850/60 p-6 transition-colors hover:border-white/20 hover:shadow-2xl hover:shadow-black/40 ${className}`}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, ${spotlightColor}, transparent 80%)`,
        }}
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

/** Ultra-smooth spring-damped scroll progress indicator */
export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-accent-500 via-violet-500 to-emerald-400"
      style={{ scaleX }}
    />
  );
}
