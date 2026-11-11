"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function GallerySection({ items = [] }) {
  const slides = useMemo(
    () =>
      (items || [])
        .filter((item) => item?.src || item?.image)
        .map((item) => ({
          id: item.id,
          src: item.src || item.image,
          title: item.title || item.alt || "Gallery",
        })),
    [items],
  );

  const [activeIndex, setActiveIndex] = useState(null);
  const active = activeIndex !== null ? slides[activeIndex] : null;
  const hasMultiple = slides.length > 1;

  const goPrev = () => {
    setActiveIndex((i) =>
      i === null ? i : (i - 1 + slides.length) % slides.length,
    );
  };

  const goNext = () => {
    setActiveIndex((i) => (i === null ? i : (i + 1) % slides.length));
  };

  useEffect(() => {
    if (activeIndex === null) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKeyDown(e) {
      if (e.key === "Escape") setActiveIndex(null);
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    }

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [activeIndex, slides.length]);

  if (!slides.length) {
    return null;
  }

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
                    key={`${duplicate ? "duplicate" : "original"}-${slide.id || idx}-${slide.src}`}
                    onClick={() => setActiveIndex(idx)}
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
            if (e.target === e.currentTarget) setActiveIndex(null);
          }}
        >
          {hasMultiple ? (
            <button
              type="button"
              onClick={goPrev}
              className="absolute left-3 top-1/2 z-20 inline-flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/90 text-neutral-900 shadow-md backdrop-blur transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:left-6"
              aria-label="Previous image"
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
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          ) : null}

          <div className="relative w-full max-w-5xl overflow-hidden rounded-2xl bg-white shadow-xl">
            <button
              type="button"
              onClick={() => setActiveIndex(null)}
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

          {hasMultiple ? (
            <button
              type="button"
              onClick={goNext}
              className="absolute right-3 top-1/2 z-20 inline-flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/90 text-neutral-900 shadow-md backdrop-blur transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:right-6"
              aria-label="Next image"
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
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          ) : null}
        </div>
      ) : null}
    </section>
  );
}
