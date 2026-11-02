"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { EASE, DURATION } from "@/lib/motion";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.hero, ease: EASE },
  },
};

export function Hero() {
  return (
    <section className="relative min-h-[85vh] overflow-hidden">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.06, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.85, ease: EASE }}
      >
        <Image
          src="/assets/images/home-bg.png"
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </motion.div>
      <div className="absolute inset-0 bg-linear-to-r from-navy/70 via-navy/45 to-navy/25" />

      <div className="relative mx-auto flex max-w-7xl min-h-[85vh] flex-col justify-center px-4 py-20 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-2xl"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.h1
            variants={item}
            className="heading-font text-4xl font-bold uppercase leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            TOGETHER FOR <br /> A BETTER TOMORROW
          </motion.h1>
          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-lg text-white/90"
          >
          SUPPORTING COMMUNITIES THROUGH EDUCATION, WOMEN&rsquo;S EMPOWERMENT, AND SOCIAL WELFARE
          </motion.p>
          <motion.div
            variants={item}
            className="mt-8 flex flex-wrap gap-4"
          >
            <ButtonLink href="/get-involved" variant="primary" className="px-8 py-3">
              Get Involved
            </ButtonLink>
            <ButtonLink href="/donate" variant="outline" className="px-8 py-3">
              Donate Now
            </ButtonLink>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
