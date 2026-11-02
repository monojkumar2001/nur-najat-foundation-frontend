"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { EASE, DURATION } from "@/lib/motion";

const headerText = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.07, delayChildren: 0.05 },
  },
};

const line = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.hero, ease: EASE },
  },
};

/**
 * @param {{ eyebrow?: string; title: string; description?: string; image?: string; imageAlt?: string }} props
 */
export function PageHeader({ eyebrow, title, description, image, imageAlt = "" }) {
  if (image) {
    return (
      <header className="relative z-0 min-h-[260px] w-full sm:min-h-[340px] lg:min-h-[380px]">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.04, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.75, ease: EASE }}
        >
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </motion.div>
        <div
          className="absolute inset-0 bg-linear-to-r from-slate-950/70 via-slate-900/50 to-slate-900/30"
          aria-hidden
        />
        <div className="relative z-10 mx-auto flex min-h-[260px] max-w-7xl flex-col justify-end px-4 pb-10 pt-28 sm:min-h-[340px] sm:px-6 sm:pb-14 sm:pt-32 lg:min-h-[380px] lg:px-8">
          <motion.div variants={headerText} initial="hidden" animate="show">
            {eyebrow ? (
              <motion.p
                variants={line}
                className="text-xs font-semibold uppercase tracking-[0.2em] text-primary sm:text-sm"
              >
                {eyebrow}
              </motion.p>
            ) : null}
            <motion.h1
              variants={line}
              className="heading-font mt-3 max-w-4xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl"
            >
              {title}
            </motion.h1>
            {description ? (
              <motion.p
                variants={line}
                className="mt-4 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg"
              >
                {description}
              </motion.p>
            ) : null}
          </motion.div>
        </div>
      </header>
    );
  }

  return (
    <header className="border-b border-slate-200/90 bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <motion.div
          variants={headerText}
          initial="hidden"
          animate="show"
        >
          {eyebrow ? (
            <motion.p
              variants={line}
              className="text-xs font-semibold uppercase tracking-[0.2em] text-primary sm:text-sm"
            >
              {eyebrow}
            </motion.p>
          ) : null}
          <motion.h1
            variants={line}
            className="heading-font mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
          >
            {title}
          </motion.h1>
          {description ? (
            <motion.p
              variants={line}
              className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg"
            >
              {description}
            </motion.p>
          ) : null}
        </motion.div>
      </div>
    </header>
  );
}
