"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { Minus, Plus, X } from "lucide-react";
import { photographyGalleryImages } from "@/lib/photography";

const INITIAL_COUNT = 12;

export function PhotographyGallerySection() {
  const items = photographyGalleryImages;
  const [expanded, setExpanded] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [zoom, setZoom] = useState(1);

  const showSeeToggle = items.length > INITIAL_COUNT;
  const visible = showSeeToggle
    ? expanded
      ? items
      : items.slice(0, INITIAL_COUNT)
    : items;
  const active = lightboxIndex !== null ? items[lightboxIndex] : null;

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
    setZoom(1);
  }, []);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") closeLightbox();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [lightboxIndex, closeLightbox]);

  return (
    <section className="scroll-mt-28" aria-labelledby="photography-gallery-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2
          id="photography-gallery-heading"
          className="heading-font text-2xl font-bold uppercase tracking-wide text-slate-900 sm:text-3xl"
        >
          Gallery
        </h2>
        <p className="mt-3 max-w-2xl text-base text-slate-600">
          Moments from programs, outreach, and community life. Tap an image to view it larger.
        </p>

        <ul className="mt-8 grid list-none grid-cols-2 gap-3 p-0 sm:gap-4 md:grid-cols-4">
          {visible.map((img, idx) => (
              <li key={img.id} className="aspect-square overflow-hidden rounded-xl bg-slate-100 ring-1 ring-slate-200/70">
                <button
                  type="button"
                  onClick={() => {
                    setLightboxIndex(idx);
                    setZoom(1);
                  }}
                  className="group relative h-full w-full cursor-zoom-in"
                  aria-label={`Open image: ${img.alt}`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(min-width: 768px) 25vw, 50vw"
                  />
                </button>
              </li>
          ))}
        </ul>

        {showSeeToggle ? (
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => setExpanded((e) => !e)}
              className="rounded-full border border-slate-300 bg-white px-6 py-2.5 text-sm font-semibold text-slate-800 shadow-sm transition-colors hover:border-primary hover:text-primary"
            >
              {expanded ? "See less" : "See more"}
            </button>
          </div>
        ) : null}
      </div>

      {active ? (
        <div
          className="fixed inset-0 z-100 flex flex-col bg-black/92 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
        >
          <div className="flex items-center justify-between gap-2 px-4 py-3 sm:px-6">
            <p className="truncate text-sm font-medium text-white/90">{active.alt}</p>
            <div className="flex shrink-0 items-center gap-2">
              <div className="flex items-center rounded-lg bg-white/10 p-1 ring-1 ring-white/20">
                <button
                  type="button"
                  onClick={() => setZoom((z) => Math.max(1, Math.round((z - 0.25) * 100) / 100))}
                  className="rounded-md p-2 text-white hover:bg-white/10"
                  aria-label="Zoom out"
                >
                  <Minus className="h-4 w-4" aria-hidden />
                </button>
                <button
                  type="button"
                  onClick={() => setZoom((z) => Math.min(3, Math.round((z + 0.25) * 100) / 100))}
                  className="rounded-md p-2 text-white hover:bg-white/10"
                  aria-label="Zoom in"
                >
                  <Plus className="h-4 w-4" aria-hidden />
                </button>
              </div>
              <button
                type="button"
                onClick={closeLightbox}
                className="rounded-full bg-white/10 p-2.5 text-white ring-1 ring-white/20 hover:bg-white/20"
                aria-label="Close"
              >
                <X className="h-5 w-5" aria-hidden />
              </button>
            </div>
          </div>
          <button
            type="button"
            className="flex min-h-0 flex-1 cursor-default items-center justify-center overflow-auto p-4"
            onClick={closeLightbox}
            aria-label="Close overlay"
          >
            <div
              className="relative inline-block max-h-[85vh] max-w-[95vw] transition-transform duration-200 ease-out"
              style={{ transform: `scale(${zoom})` }}
              onClick={(e) => e.stopPropagation()}
              role="presentation"
            >
              <Image
                src={active.src}
                alt={active.alt}
                width={1600}
                height={1200}
                className="max-h-[85vh] w-auto max-w-[95vw] object-contain"
                unoptimized
              />
            </div>
          </button>
        </div>
      ) : null}
    </section>
  );
}
