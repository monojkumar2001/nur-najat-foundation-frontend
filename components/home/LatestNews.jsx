"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/ButtonLink";

import "swiper/css";

const posts = [
  {
    id: "1",
    href: "/blog/field-update-spring",
    title: "Spring outreach: notes from the field",
    author: "Sarah Ahmed",
    date: "Tuesday 4 March, 2025",
    image:
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&w=800&q=80",
  },
  {
    id: "2",
    href: "/blog/literacy-program",
    title: "Expanding literacy circles across districts",
    author: "James Okonkwo",
    date: "Monday 24 February, 2025",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&w=800&q=80",
  },
  {
    id: "3",
    href: "/blog/training-calendar",
    title: "Q2 training calendar now open for registration",
    author: "Maria Lopez",
    date: "Wednesday 12 February, 2025",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&w=800&q=80",
  },
  {
    id: "4",
    href: "/blog",
    title: "Volunteer spotlight: mentors who showed up weekly",
    author: "David Chen",
    date: "Friday 31 January, 2025",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&w=800&q=80",
  },
  {
    id: "5",
    href: "/blog",
    title: "How your donations funded school kits this winter",
    author: "Amina Yusuf",
    date: "Tuesday 21 January, 2025",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&w=800&q=80",
  },
  {
    id: "6",
    href: "/blog",
    title: "Partnership update: local clinics and referral pathways",
    author: "Tom Reed",
    date: "Thursday 9 January, 2025",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&w=800&q=80",
  },
  {
    id: "7",
    href: "/blog",
    title: "Field audio: community voices from the latest rollout",
    author: "Matthew Johnson",
    date: "Saturday 13 December, 2024",
    image:
      "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&w=800&q=80",
  },
  {
    id: "8",
    href: "/blog",
    title: "Year in review: milestones and what is next",
    author: "Rachel Kim",
    date: "Wednesday 18 December, 2024",
    image:
      "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&w=800&q=80",
  },
];

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

export function LatestNews() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section className="bg-[#F5F2F0] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6">
          <SectionHeading
            align="left"
            title="News and updates"
            subtitle="Stories from programs, partners, and communities—swipe or drag to explore; autoplay pauses on hover."
            className="max-w-3xl"
          />
          <div className="hidden shrink-0 sm:block">
            <ButtonLink href="/blog" variant="primary" className="px-6 py-2 text-sm normal-case">
              View all
            </ButtonLink>
          </div>
        </div>

        <div className="mt-12 latest-news-swiper [-webkit-tap-highlight-color:transparent]">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            loop
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
              640: { slidesPerView: 1, spaceBetween: 10 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
              1280: { slidesPerView: 4, spaceBetween: 24 },
            }}
            className="pb-1"
          >
            {posts.map((post) => (
              <SwiperSlide key={post.id} className="h-auto!">
                <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-slate-200/90 bg-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-xl">
                  <Link
                    href={post.href}
                    className="relative aspect-16/10 block overflow-hidden rounded-t-lg"
                  >
                    <Image
                      src={post.image}
                      alt=""
                      fill
                      className="object-cover transition-transform duration-500 motion-reduce:transform-none group-hover:scale-105"
                      sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    />
                  </Link>
                  <div className="flex flex-1 flex-col p-3 sm:p-5">
                    <h3 className="heading-font text-base font-medium line-clamp-2 leading-snug tracking-tight text-slate-900 sm:text-lg">
                      <Link
                        href={post.href}
                        className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                      >
                        {post.title}
                      </Link>
                    </h3>
                    <p className="mt-4 text-sm text-slate-600">
                      By <span className="font-medium text-slate-800">{post.author}</span>
                    </p>
                    <p className="mt-1 text-sm text-slate-500">{post.date}</p>
                    <Link
                      href={post.href}
                      className="mt-auto pt-5 text-sm font-semibold text-primary hover:text-primary-dark"
                    >
                      Read more →
                    </Link>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="mt-8 sm:hidden">
          <ButtonLink href="/blog" variant="outlineDark" className="w-full px-6 py-2.5 text-sm normal-case">
            View all
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
