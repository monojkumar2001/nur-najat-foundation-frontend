"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { target: 5000, label: "Lives impacted" },
  { target: 1000, label: "In students supported" },
  { target: 24, label: "Health camps" },
  { target: 23, label: "Communities reached" },
];

const DURATION_MS = 2200;

function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

export function StatsBar() {
  const sectionRef = useRef(null);
  const [counts, setCounts] = useState(() => stats.map(() => 0));
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting || hasAnimated.current) return;
        hasAnimated.current = true;

        const targets = stats.map((s) => s.target);
        if (
          typeof window !== "undefined" &&
          window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ) {
          setCounts(targets);
          return;
        }

        const start = performance.now();

        function frame(now) {
          const elapsed = now - start;
          const p = Math.min(elapsed / DURATION_MS, 1);
          const eased = easeOutCubic(p);
          setCounts(targets.map((t) => Math.floor(t * eased)));
          if (p < 1) {
            requestAnimationFrame(frame);
          } else {
            setCounts(targets);
          }
        }

        requestAnimationFrame(frame);
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-primary py-12 sm:py-16"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-15"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.35'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
   

        <div className="grid grid-cols-2 gap-y-10 md:grid-cols-4 md:gap-y-0">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`text-center px-2 sm:px-4 ${
                i > 0 ? "md:border-l md:border-white/35" : ""
              }`}
            >
              <p className="heading-font text-4xl font-bold tabular-nums text-white sm:text-5xl">
                {counts[i].toLocaleString("en-US")}
                <span className="font-bold">+</span>
              </p>
              <p className="mt-4 text-xs font-medium uppercase leading-snug tracking-wide text-white/95 sm:text-sm">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
