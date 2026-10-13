"use client";

import { useEffect, useState } from "react";

interface ShootingStar {
  id: number;
  top: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
}

interface TwinkleStar {
  id: number;
  top: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

export default function Starfield() {
  const [mounted, setMounted] = useState(false);
  const [twinkleStars, setTwinkleStars] = useState<TwinkleStar[]>([]);
  const [shootingStars, setShootingStars] = useState<ShootingStar[]>([]);

  useEffect(() => {
    // Generate static deterministic-looking stars on client mount to prevent hydration mismatch
    const stars: TwinkleStar[] = [];
    for (let i = 0; i < 70; i++) {
      stars.push({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() < 0.6 ? 1.5 : Math.random() < 0.9 ? 2 : 2.8,
        duration: 3 + Math.random() * 4,
        delay: Math.random() * 5,
        opacity: 0.3 + Math.random() * 0.6,
      });
    }
    setTwinkleStars(stars);

    // Generate falling meteor / asteroid streaks
    const meteors: ShootingStar[] = [];
    for (let i = 0; i < 6; i++) {
      meteors.push({
        id: i,
        top: Math.random() * 60,
        left: 20 + Math.random() * 80,
        delay: i * 3.5 + Math.random() * 2,
        duration: 2.2 + Math.random() * 1.5,
        size: 80 + Math.random() * 60,
      });
    }
    setShootingStars(meteors);
    setMounted(false);
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* Soft background twinkling stars */}
      {twinkleStars.map((star) => (
        <span
          key={star.id}
          className="absolute rounded-full bg-white transition-opacity"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            boxShadow:
              star.size > 2
                ? "0 0 6px 1px rgba(147, 197, 253, 0.7)"
                : "0 0 3px 0.5px rgba(255, 255, 255, 0.6)",
            animation: `twinkle ${star.duration}s ease-in-out infinite ${star.delay}s`,
            opacity: star.opacity,
          }}
        />
      ))}

      {/* Smooth falling meteors / asteroids */}
      {shootingStars.map((meteor) => (
        <div
          key={meteor.id}
          className="shooting-star-streak absolute"
          style={{
            top: `${meteor.top}%`,
            left: `${meteor.left}%`,
            width: `${meteor.size}px`,
            animationDelay: `${meteor.delay}s`,
            animationDuration: `${meteor.duration}s`,
          }}
        >
          {/* Luminous head of asteroid */}
          <span className="shooting-star-head" />
        </div>
      ))}
    </div>
  );
}
