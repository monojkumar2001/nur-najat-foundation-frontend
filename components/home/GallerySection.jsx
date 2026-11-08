"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { galleryGrid } from "@/lib/unsplash";
import { ButtonLink } from "@/components/ui/ButtonLink";

const baseTitles = [
  "Education",
  "Health",
  "Community",
  "Livelihood",
  "Volunteer",
];

export function GallerySection() {
  const slides = useMemo(
    () =>
      galleryGrid.slice(0, 8).map((src, i) => ({
        src,
        title: baseTitles[i % baseTitles.length],
      })),
    [],
  );

  const [active, setActive] = useState(null);

  useEffect(() => {
    if (!active) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKeyDown(e) {
      if (e.key === "Escape") setActive(null);
    }

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [active]);

  return (
    <section className="w-full bg-white py-16 sm:py-24">
      <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 sm:flex-row sm:items-end sm:px-6 lg:px-8">
        <SectionHeading
          title="Gallery"
          subtitle="A glimpse into programs, people, and progress across our communities."
          align="left"
        />
        <div className="hidden shrink-0 sm:block">
          <ButtonLink
            href="/photography"
            variant="primary"
            className="px-6 py-2 text-sm normal-case"
          >
            View all
          </ButtonLink>
        </div>
      </div>

      <div className="mt-10 flex w-full flex-col gap-6">
        {/* Left Slider */}
        <div className="gallery-marquee w-full overflow-hidden">
          <div className="gallery-marquee-track">
            {[false, true].map((duplicate) => (
              <div
                className="gallery-marquee-set"
                key={duplicate ? "duplicate" : "original"}
                aria-hidden={duplicate || undefined}
              >
                {slides.map((slide, idx) => (
                  <button
                    type="button"
                    key={`${duplicate ? "duplicate" : "original"}-${idx}-${slide.src}`}
                    onClick={duplicate ? undefined : () => setActive(slide)}
                    tabIndex={duplicate ? -1 : 0}
                    className="gallery-marquee-slide group relative h-80 shrink-0 overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100 text-left shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 cursor-pointer"
                    aria-label={duplicate ? undefined : `Open image: ${slide.title}`}
                  >
                    <Image
                      src={slide.src}
                      alt={duplicate ? "" : slide.title}
                      fill
                      sizes="(min-width: 1024px) 300px, (min-width: 640px) 320px, 85vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 flex w-full items-center sm:hidden">
        <ButtonLink
          href="/photography"
          variant="primary"
          className="w-full px-6 py-2.5 text-sm normal-case"
        >
          View all
        </ButtonLink>
      </div>

      {active ? (
        <div
          className="fixed inset-0 z-60 flex items-center justify-center bg-black/70 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Gallery image modal"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setActive(null);
          }}
        >
          <div className="relative w-full max-w-5xl overflow-hidden rounded-2xl bg-white shadow-xl">
            <button
              type="button"
              onClick={() => setActive(null)}
              className="absolute cursor-pointer right-3 top-3 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-neutral-900 shadow-sm backdrop-blur transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              aria-label="Close modal"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-5 w-5"
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="relative aspect-video w-full bg-neutral-100">
              <Image
                src={active.src}
                alt={active.title}
                fill
                sizes="(min-width: 1024px) 1024px, 100vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
