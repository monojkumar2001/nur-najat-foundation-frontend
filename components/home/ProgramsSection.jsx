"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getProgramExcerpt, programs } from "@/lib/programs";

export function ProgramsSection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our programs"
          title="Nur & Najat: Programme Areas"
          subtitle="Education, health, infrastructure, WASH, environment and women’s empowerment — interconnected programmes that respond to community needs."
        />

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((p, i) => (
            <motion.article
              key={p.slug}
              className="group flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-md ring-1 ring-slate-200/50"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.45,
                delay: i * 0.06,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              whileHover={{
                y: -6,
                boxShadow: "0 20px 40px -12px rgba(15, 23, 42, 0.14)",
              }}
            >
              <Link href={`/programs/${p.slug}`} className="flex h-full flex-col">
                <div className="relative aspect-16/10 overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.imageAlt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="heading-font text-xl font-bold uppercase text-slate-900">
                    {p.cardTitle}
                  </h3>
                  <p className="mt-4 flex-1 text-base leading-relaxed text-slate-600">
                    {getProgramExcerpt(p)}
                  </p>
                  <span className="mt-5 text-sm font-semibold text-primary group-hover:text-primary-dark">
                    Learn more →
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
