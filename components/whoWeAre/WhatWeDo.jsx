"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { EASE, DURATION } from "@/lib/motion";

const heroImage = "/assets/images/whatwedo.png";

const programmes = [
  {
    title: "Education & Scholarship",
    description:
      "Merit- and need-based educational support, mentoring, learning opportunities and initiatives that help students remain in education and reach their potential.",
  },
  {
    title: "Health",
    description:
      "Community health camps, basic medical support, health awareness and efforts to bring essential services closer to people, particularly women in underserved and hard-to-reach areas.",
  },
  {
    title: "Solar Light / Road Project",
    description:
      "Community infrastructure initiatives that improve safety, mobility and everyday living conditions, including solar-powered lighting for rural roads and pathways.",
  },
  {
    title: "Water, Sanitation and Hygiene (WASH)",
    description:
      "Community-based efforts to improve access to safe water, sanitation practices, hygiene awareness and healthier living environments.",
  },
  {
    title: "Environment",
    description:
      "Plantation, recycling and community awareness initiatives that encourage environmental responsibility and protect local surroundings for future generations.",
  },
  {
    title: "Women Empowerment",
    description:
      "Awareness building, door-to-door engagement, skills and knowledge development, and opportunities that strengthen women’s confidence, participation and self-reliance.",
  },
];

const view = { once: true, amount: 0.15 };

export default function WhatWeDo() {
  return (
    <section aria-labelledby="what-we-do-heading">
      <div className="grid gap-8 lg:grid-cols-12 lg:items-start lg:gap-10">
        <motion.div
          className="lg:col-span-7"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={view}
          transition={{ duration: DURATION.section, ease: EASE }}
        >
          <SectionHeading
            eyebrow="What we do"
            title="Programmes that strengthen community life"
            titleId="what-we-do-heading"
            subtitle="NNF works across interconnected areas of community life because health, education, safety, opportunity and dignity reinforce one another. Our programmes are designed to respond to immediate needs while contributing to stronger and more resilient communities over time."
            align="left"
            className="max-w-none"
          />
          <div className="mt-6">
            <ButtonLink
              href="/who-we-are/how-we-do-it"
              variant="outlineDark"
              className="px-5 py-2 text-sm normal-case"
            >
              How we do it
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
            </ButtonLink>
          </div>
        </motion.div>

        <motion.div
          className="lg:col-span-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={view}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <div className="group relative overflow-hidden rounded-2xl bg-slate-100 shadow-md ring-1 ring-slate-200/80">
            <div className="relative aspect-[4/3]">
              <Image
                src={heroImage}
                alt="Community support through NNF programmes"
                fill
                className="object-cover transition-transform duration-500 motion-reduce:transition-none group-hover:scale-[1.06]"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
          </div>
        </motion.div>
      </div>

      <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:mt-10 lg:grid-cols-3">
        {programmes.map((item, idx) => (
          <motion.li
            key={item.title}
            className="rounded-xl border border-slate-100 bg-slate-50/80 p-5"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={view}
            transition={{
              duration: DURATION.section,
              ease: EASE,
              delay: Math.min(idx * 0.04, 0.2),
            }}
          >
            <p className="text-sm font-bold uppercase leading-snug text-slate-900 sm:text-base">
              {idx + 1}. {item.title}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted sm:text-[0.9375rem]">
              {item.description}
            </p>
          </motion.li>
        ))}
      </ul>

      <motion.p
        className="mt-8 text-base leading-relaxed text-muted sm:text-lg"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={view}
        transition={{ duration: DURATION.section, ease: EASE }}
      >
        Our broader social welfare work may also include youth engagement,
        skills development, livelihood support, sustainable agriculture, reading
        and knowledge initiatives, sports and other community-based activities
        where these respond to identified local needs.
      </motion.p>
    </section>
  );
}
