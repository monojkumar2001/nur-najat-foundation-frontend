"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/ButtonLink";

import "swiper/css";

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

export function LatestNews({ posts = [] }) {
  const reducedMotion = usePrefersReducedMotion();

  if (!posts.length) {
    return null;
  }

  return (
    <section className="bg-[#F5F2F0] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <SectionHeading
            align="left"
            title="News and updates"
            subtitle="Stories from programs, partners, and communities—swipe or drag to explore; autoplay pauses on hover."
            className="max-w-3xl"
          />
          <div className="hidden shrink-0 sm:block">
            <ButtonLink
              href="/blog"
              variant="primary"
              className="px-6 py-2 text-sm normal-case"
            >
              View all
            </ButtonLink>
          </div>
        </div>

        <div className="mt-12 latest-news-swiper [-webkit-tap-highlight-color:transparent]">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            loop={posts.length > 1}
            speed={reducedMotion ? 0 : 520}
            autoplay={
              reducedMotion
                ? false
                : {
                    delay: 4200,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }
            }
            grabCursor
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 10 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
              1280: { slidesPerView: 4, spaceBetween: 24 },
            }}
            className="pb-1"
          >
            {posts.map((post) => (
              <SwiperSlide key={post.id || post.slug} className="h-auto!">
                <motion.article
                  className="group flex h-full flex-col overflow-hidden rounded-xl border border-slate-200/90 bg-white shadow-md ring-1 ring-slate-200/50"
                  whileHover={{
                    y: -5,
                    boxShadow: "0 16px 40px -12px rgba(15, 23, 42, 0.14)",
                  }}
                  transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <Link
                    href={post.href || `/blog/${post.slug}`}
                    className="relative aspect-16/10 block overflow-hidden rounded-t-lg"
                  >
                    {post.image ? (
                      <Image
                        src={post.image}
                        alt={post.title || ""}
                        fill
                        className="object-cover transition-transform duration-500 motion-reduce:transform-none group-hover:scale-105"
                        sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      />
                    ) : null}
                  </Link>
                  <div className="flex flex-1 flex-col p-3 sm:p-5">
                    <h3 className="heading-font text-base font-medium line-clamp-2 leading-snug tracking-tight text-slate-900 sm:text-lg">
                      <Link
                        href={post.href || `/blog/${post.slug}`}
                        className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                      >
                        {post.title}
                      </Link>
                    </h3>
                    <p className="mt-4 text-sm text-slate-600">
                      By{" "}
                      <span className="font-medium text-slate-800">
                        {post.author}
                      </span>
                    </p>
                    <p className="mt-1 text-sm text-slate-500">{post.date}</p>
                    <Link
                      href={post.href || `/blog/${post.slug}`}
                      className="mt-auto pt-5 text-sm font-semibold text-primary hover:text-primary-dark"
                    >
                      Read more →
                    </Link>
                  </div>
                </motion.article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="mt-8 flex w-full items-center sm:hidden">
          <ButtonLink
            href="/blog"
            variant="primary"
            className="w-full px-6 py-2.5 text-sm normal-case"
          >
            View all
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
