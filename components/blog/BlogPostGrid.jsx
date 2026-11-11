"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Calendar } from "lucide-react";
import { EASE, DURATION } from "@/lib/motion";

export function BlogPostGrid({ posts }) {
  return (
    <ul className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
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
            className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm ring-1 ring-slate-200/60"
            whileHover={{
              y: -6,
              boxShadow: "0 20px 40px -12px rgba(15, 23, 42, 0.15)",
            }}
            transition={{ duration: 0.22, ease: EASE }}
          >
            <Link
              href={`/blog/${post.slug}`}
              className="relative aspect-16/10 block overflow-hidden bg-slate-100"
            >
              {post.image ? (
                <Image
                  src={post.image}
                  alt={post.title || ""}
                  fill
                  className="object-cover transition-transform duration-500 motion-reduce:transform-none group-hover:scale-105"
                  sizes="(min-width: 1024px) 33vw, 50vw"
                />
              ) : null}
            </Link>
            <div className="flex flex-1 flex-col p-6">
              <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-slate-500">
                <Calendar className="h-4 w-4 text-primary/70" aria-hidden />
                <time>{post.date}</time>
              </div>
              <h2 className="heading-font mt-3 text-lg font-bold text-slate-900">
                <Link
                  href={`/blog/${post.slug}`}
                  className="transition-colors hover:text-primary"
                >
                  {post.title}
                </Link>
              </h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                {post.excerpt}
              </p>
              <Link
                href={`/blog/${post.slug}`}
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
