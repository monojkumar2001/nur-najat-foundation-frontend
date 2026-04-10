"use client";

import { useCallback, useEffect, useState } from "react";
import { ArrowUpRight, Play, X } from "lucide-react";
import {
  photographyVideos,
  youtubeEmbedUrl,
  youtubeThumbUrl,
} from "@/lib/photography";

const INITIAL_COUNT = 4;
const TOTAL = 12;

export function PhotographyVideoSection() {
  const items = photographyVideos.slice(0, TOTAL);
  const [expanded, setExpanded] = useState(false);
  const [openId, setOpenId] = useState(null);

  const showSeeToggle =
    items.length > INITIAL_COUNT && items.length < TOTAL;
  const visible = showSeeToggle
    ? expanded
      ? items
      : items.slice(0, INITIAL_COUNT)
    : items;
  const openVideo = openId ? items.find((v) => v.id === openId) : null;

  const closeModal = useCallback(() => setOpenId(null), []);

  useEffect(() => {
    if (!openId) return;
    const onKey = (e) => {
      if (e.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [openId, closeModal]);

  return (
    <section
      className="scroll-mt-28 bg-[#e6f8ff] pb-24 my-24 pt-14 sm:pb-24 sm:pt-24"
      aria-labelledby="photography-videos-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              Watch
            </p>
            <h2
              id="photography-videos-heading"
              className="heading-font mt-2 text-2xl font-bold uppercase tracking-wide text-slate-900 sm:text-3xl"
            >
              Video library
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-600">
              Short features, field notes, and stories from our programs—open any tile to play.
            </p>
          </div>
          <div className="hidden h-px flex-1 max-w-md bg-linear-to-r from-transparent via-slate-300 to-transparent sm:block sm:self-center" aria-hidden />
        </div>

        <ul className="mt-10 grid list-none grid-cols-1 gap-6 p-0 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((video) => (
            <li key={video.id} className="min-w-0">
              <button
                type="button"
                onClick={() => setOpenId(video.id)}
                className="group relative w-full cursor-pointer overflow-hidden rounded-2xl bg-white text-left shadow-md ring-1 ring-slate-200/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-primary/25 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={youtubeThumbUrl(video.youtubeId)}
                    alt=""
                    className="h-full w-full object-cover transition duration-500 ease-out group-hover:scale-[1.06]"
                  />
                  <div
                    className="absolute inset-0 bg-linear-to-t from-slate-950/90 via-slate-950/35 to-slate-950/10 transition-opacity duration-300 group-hover:via-slate-950/45"
                    aria-hidden
                  />
                  <div
                    className="absolute inset-0 flex items-center justify-center"
                    aria-hidden
                  >
                    <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/15 text-white shadow-lg backdrop-blur-md ring-2 ring-white/40 transition duration-300 group-hover:scale-110 group-hover:bg-white/25 group-hover:ring-white/60">
                      <Play className="ml-1 h-7 w-7 fill-current drop-shadow-sm" aria-hidden />
                    </span>
                  </div>
                  <span className="absolute bottom-3 left-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/85">
                    Play video
                  </span>
                </div>
                <div className="flex items-start gap-3 border-t border-slate-100 bg-white px-4 py-4">
                  <div className="min-w-0 flex-1">
                    <span className="line-clamp-2 text-sm font-semibold leading-snug text-slate-900 transition-colors group-hover:text-primary">
                      {video.title}
                    </span>
                    <span className="mt-1.5 inline-flex items-center gap-1 text-xs font-medium text-slate-500 transition-colors group-hover:text-primary">
                      Watch now
                      <ArrowUpRight className="h-3.5 w-3.5 opacity-80" aria-hidden />
                    </span>
                  </div>
                </div>
              </button>
            </li>
          ))}
        </ul>

        {showSeeToggle ? (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setExpanded((e) => !e)}
              className="rounded-full border border-slate-200/90 bg-white px-8 py-3 text-sm font-semibold text-slate-800 shadow-sm transition-all hover:border-primary/40 hover:bg-primary/5 hover:text-primary hover:shadow-md"
            >
              {expanded ? "See less" : "See more"}
            </button>
          </div>
        ) : null}
      </div>

      {openVideo ? (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center bg-slate-950/88 p-4 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label={openVideo.title}
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-3 flex items-center justify-between gap-3 px-1 sm:px-0">
              <p className="min-w-0 text-sm font-semibold text-white sm:text-base">
                {openVideo.title}
              </p>
              <button
                type="button"
                onClick={closeModal}
                className="flex shrink-0 items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white ring-1 ring-white/20 transition hover:bg-white/20"
              >
                <span className="hidden sm:inline">Close</span>
                <X className="h-5 w-5 sm:h-4 sm:w-4" aria-hidden />
              </button>
            </div>
            <div className="overflow-hidden rounded-2xl bg-black shadow-2xl ring-1 ring-white/15">
              <div className="relative aspect-video w-full">
                <iframe
                  key={openVideo.id}
                  src={youtubeEmbedUrl(openVideo.youtubeId)}
                  title={openVideo.title}
                  className="absolute inset-0 h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
