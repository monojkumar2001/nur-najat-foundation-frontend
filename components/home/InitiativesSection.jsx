"use client";

import Image from "next/image";
import {
  Baby,
  GraduationCap,
  Play,
  UtensilsCrossed,
  Users,
  X,
} from "lucide-react";
import { useCallback, useEffect, useId, useState } from "react";
import { thumb } from "@/lib/unsplash";

/** YouTube video ID only (the value after v= in the watch URL). Change to your film. */
const INITIATIVES_YOUTUBE_VIDEO_ID = "https://www.youtube.com/watch?v=ztlEK-9LLrE&list=RDZMLoJEgI2mY&index=27";

const initiatives = [
  {
    title: "Scholarships",
    description:
      "Helping students continue education without financial barriers.",
    Icon: GraduationCap,
  },
  {
    title: "Food distribution",
    description: "Providing meals to families in need across our focus areas.",
    Icon: UtensilsCrossed,
  },
  {
    title: "Community workshops",
    description: "Building skills for better livelihoods and local leadership.",
    Icon: Users,
  },
  {
    title: "Day care programs",
    description:
      "Supporting children with safe, nurturing care while parents work or study.",
    Icon: Baby,
  },
];

export function InitiativesSection() {
  const [videoOpen, setVideoOpen] = useState(false);
  const titleId = useId();

  const closeVideo = useCallback(() => setVideoOpen(false), []);

  useEffect(() => {
    if (!videoOpen) return;
    document.body.style.overflow = "hidden";
    function onKey(e) {
      if (e.key === "Escape") closeVideo();
    }
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [videoOpen, closeVideo]);

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-3xl text-center">
          <h2 className="heading-font text-3xl font-bold uppercase tracking-wide text-slate-900 sm:text-4xl">
            Our initiatives
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            From scholarships to daily care, our programs meet urgent needs while
            building long-term strength in the communities we serve.
          </p>
        </header>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:mt-14">
          {initiatives.map(({ title, description, Icon }) => (
            <article
              key={title}
              className="flex flex-col items-center rounded-2xl border border-slate-100 bg-white p-6 text-center shadow-md ring-1 ring-slate-100/80 transition-shadow hover:shadow-lg"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-sm">
                <Icon className="h-7 w-7" strokeWidth={2} aria-hidden />
              </div>
              <h3 className="heading-font mt-5 text-sm font-bold uppercase tracking-wide text-slate-900 sm:text-base">
                {title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-slate-600">
                {description}
              </p>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-12 w-full md:w-[80%] max-w-6xl sm:mt-16">
          <div className="relative overflow-hidden rounded-2xl shadow-xl ring-1 ring-slate-200/60">
            <div className="relative aspect-video w-full max-h-[min(70vh,560px)] sm:aspect-[16/9]">
              <Image
                src={thumb.health}
                alt="Team member professional care setting — click to watch video"
                fill
                className="object-cover object-center"
                sizes="80vw"
              />
              <div className="absolute inset-0 bg-slate-900/20" aria-hidden />
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  type="button"
                  onClick={() => setVideoOpen(true)}
                  className="initiatives-play-btn group flex cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                  aria-haspopup="dialog"
                  aria-expanded={videoOpen}
                  aria-controls={videoOpen ? "initiatives-yt-dialog" : undefined}
                  aria-label="Play initiative video on YouTube"
                >
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg transition-transform duration-200 ease-out animate-initiatives-play group-hover:animate-none group-hover:scale-[1.12] group-focus-visible:animate-none group-focus-visible:scale-[1.12] motion-reduce:animate-none motion-reduce:group-hover:scale-100 motion-reduce:group-focus-visible:scale-100 sm:h-20 sm:w-20">
                    <Play
                      className="ml-1 h-8 w-8 fill-accent text-accent sm:h-10 sm:w-10"
                      strokeWidth={0}
                      aria-hidden
                    />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {videoOpen ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          id="initiatives-yt-dialog"
        >
          <button
            type="button"
            className="absolute inset-0 bg-black/70 backdrop-blur-[2px]"
            aria-label="Close video"
            onClick={closeVideo}
          />
          <div className="relative z-10 w-full max-w-5xl overflow-hidden rounded-xl bg-black shadow-2xl ring-1 ring-white/10">
            <div className="flex items-center justify-between gap-2 border-b border-white/10 bg-slate-950 px-4 py-3 sm:px-5">
              <p id={titleId} className="text-sm font-medium text-white">
                Initiative highlight
              </p>
              <button
                type="button"
                onClick={closeVideo}
                className="rounded-lg p-2 text-white/90 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:ring-2 focus-visible:ring-primary"
                aria-label="Close"
              >
                <X className="h-5 w-5" aria-hidden />
              </button>
            </div>
            <div className="relative aspect-video w-full bg-black">
              <iframe
                title="YouTube — initiative video"
                src={`https://www.youtube.com/embed/${INITIATIVES_YOUTUBE_VIDEO_ID}?autoplay=1&rel=0`}
                className="absolute inset-0 h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
