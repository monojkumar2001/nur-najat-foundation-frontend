"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { AlertTriangle, ArrowUpRight, Calendar } from "lucide-react";
import { EASE, DURATION } from "@/lib/motion";

export function EmergencyPostGrid({ posts }) {
  return (
    <ul className="grid gap-6 md:grid-cols-3 lg:grid-cols-4">
      {posts.map((post, index) => (
        <motion.li
          key={post.slug}
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: DURATION.section,
            delay: index * 0.05,
            ease: EASE,
          }}
        >
          <motion.article
            className="group flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm ring-1 ring-slate-200/60"
            whileHover={{
              y: -6,
              boxShadow: "0 20px 40px -12px rgba(15, 23, 42, 0.15)",
            }}
            transition={{ duration: 0.22, ease: EASE }}
          >
            <Link
              href={`/emergencies/${post.slug}`}
              className="relative aspect-16/10 block overflow-hidden"
            >
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-500 motion-reduce:transform-none group-hover:scale-105"
                sizes="(min-width: 1024px) 25vw, 50vw"
              />
            </Link>
            <div className="flex flex-1 flex-col p-6">
              <div className="flex items-center justify-between gap-2">
                <div className="flex min-w-0 items-center gap-2 text-xs font-medium uppercase tracking-wide text-slate-500">
                  <AlertTriangle className="h-4 w-4 shrink-0 text-primary/70" aria-hidden />
                  <span className="truncate">{post.category ?? "Emergency"}</span>
                </div>
                <div className="flex shrink-0 items-center gap-2 text-xs font-medium uppercase tracking-wide text-slate-500">
                  <Calendar className="h-4 w-4 text-primary/70" aria-hidden />
                  <time>{post.date}</time>
                </div>
              </div>
              <h2 className="heading-font mt-3 line-clamp-2 text-lg font-bold text-slate-900">
                <Link
                  href={`/emergencies/${post.slug}`}
                  className="transition-colors hover:text-primary"
                >
                  {post.title}
                </Link>
              </h2>
              {post.excerpt ? (
                <p className="mt-3 line-clamp-2 flex-1 text-base leading-relaxed text-slate-600">
                  {post.excerpt}
                </p>
              ) : null}
              {post.author ? (
                <p className="mt-2 text-xs font-medium text-slate-500">By {post.author}</p>
              ) : null}
              <Link
                href={`/emergencies/${post.slug}`}
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
              >
                Read now
                <ArrowUpRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden
                />
              </Link>
            </div>
          </motion.article>
        </motion.li>
      ))}
    </ul>
  );
}
