"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CircleCheckBig } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { thumb } from "@/lib/unsplash";

const programs = [
  {
    title: "Humanitarian activities",
    points: [
      "Community outreach and ongoing support for vulnerable households.",
      "Case studies that showcase impact — from relief to long-term recovery.",
    ],
    image: thumb.community,
    href: "/programs#humanitarian",
  },
  {
    title: "Educational development",
    points: [
      "Literacy programs, scholarships, and learning materials for children and youth.",
      "Religious education that emphasizes values, ethics, and service to community.",
    ],
    image: thumb.education,
    href: "/programs#education",
  },
  {
    title: "Training programs",
    points: [
      "Workshops and vocational training so people can earn with dignity.",
      "Calendar of upcoming sessions — skills, facilitation, and digital literacy.",
    ],
    image: thumb.workshop,
    href: "/programs#training",
  },
];

export function ProgramsSection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our programs"
          title="Where we focus our impact"
          subtitle="Humanitarian support on the ground, education that opens doors, and training that builds livelihoods — rooted in community partnership."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {programs.map((p, i) => (
            <motion.article
              key={p.title}
              className="group cursor-pointer flex flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-md ring-1 ring-slate-200/50"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: i * 0.07, ease: [0.25, 0.1, 0.25, 1] }}
              whileHover={{
                y: -6,
                boxShadow: "0 20px 40px -12px rgba(15, 23, 42, 0.14)",
              }}
            >
              <div className="relative aspect-16/10 overflow-hidden">
                <Image
                  src={p.image}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="heading-font text-xl uppercase font-bold text-slate-900">
                  {p.title}
                </h3>
                <ul className="mt-4 flex-1 space-y-3">
                  {p.points.map((line) => (
                    <li
                      key={line}
                      className="flex gap-3 items-start text-base leading-relaxed text-slate-600"
                    >
                      <CircleCheckBig
                        className="mt-2 h-5 w-5 shrink-0 text-primary"
                        strokeWidth={2.25}
                        aria-hidden
                      />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={p.href}
                  className="mt-5 text-sm font-semibold text-primary hover:text-primary-dark"
                >
                  Learn more →
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
