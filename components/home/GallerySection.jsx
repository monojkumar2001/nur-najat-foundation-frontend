"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { galleryGrid } from "@/lib/unsplash";
import { ButtonLink } from "@/components/ui/ButtonLink";

const baseTitles = ["Education", "Health", "Community", "Livelihood", "Volunteer"];

export function GallerySection() {
  const slides = useMemo(
    () =>
      galleryGrid.slice(0, 8).map((src, i) => ({
        src,
        title: baseTitles[i % baseTitles.length],
      })),
    []
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
            href="/gallery"
            variant="primary"
            className="px-6 py-2 text-sm normal-case"
          >
            View all
          </ButtonLink>
        </div>
      </div>

      <div className="mt-10 flex w-full flex-col gap-6">
        {/* Left Slider */}
        <div className="w-full overflow-hidden">
          <Swiper
            modules={[Autoplay]}
            className="w-full"
            loop={true}
            grabCursor={true}
            centeredSlides={false}
            spaceBetween={10}
            speed={3000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 10 },
              640: { slidesPerView: 4, spaceBetween: 10 },
              1024: { slidesPerView: 6, spaceBetween: 10 },
            }}
          >
            {slides.map((s, idx) => (
              <SwiperSlide key={`left-${idx}-${s.src}`} virtualIndex={idx}>
                <button
                  type="button"
                  onClick={() => setActive(s)}
                  className="group relative h-[320px] w-full overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100 text-left shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 cursor-pointer"
                  aria-label={`Open image: ${s.title}`}
                >
                  <Image
                    src={s.src}
                    alt={s.title}
                    fill
                    sizes="(min-width: 1024px) 50vw, (min-width: 640px) 50vw, 90vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/65 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="text-xs font-semibold uppercase tracking-widest text-white/80">
                      Featured
                    </p>
                    <h3 className="mt-1 text-lg font-semibold text-white">
                      {s.title}
                    </h3>
                  </div>
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="mt-8 flex w-full items-center sm:hidden">
        <ButtonLink
          href="/gallery"
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
              className="absolute right-3 top-3 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-neutral-900 shadow-sm backdrop-blur transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
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
            <div className="flex items-center justify-between gap-4 px-5 py-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
                  Featured
                </p>
                <p className="mt-1 text-base font-semibold text-neutral-900">
                  {active.title}
                </p>
              </div>
              <div className="flex justify-end w-full">
                <Link
                  href="/gallery"
                  onClick={() => setActive(null)}
                  className="inline-flex shrink-0 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  Open gallery
                </Link>
              </div>
            </div>
          </div>
          </div>
      ) : null}
    </section>
  );
}
