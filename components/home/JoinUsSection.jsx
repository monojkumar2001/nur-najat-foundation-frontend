"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { EASE, DURATION } from "@/lib/motion";

export function JoinUsSection() {
  return (
    <section id="join-us" className="scroll-mt-24 bg-slate-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl py-16 sm:py-24">
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.05, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.75, ease: EASE }}
          >
            <Image
              src="/assets/images/join.png"
              alt="Join us"
              fill
              className="object-cover"
              sizes="100vw"
              priority={false}
            />
          </motion.div>
          <div className="absolute inset-0 bg-slate-950/55" />

          <div className="relative">
            <div className="mx-auto max-w-4xl">
              <motion.div
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/10 px-6 py-10 shadow-2xl backdrop-blur-sm sm:px-10 sm:py-14"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: DURATION.section, ease: EASE }}
              >
                <div
                  className="pointer-events-none absolute right-10 top-6 hidden h-30 w-30 text-accent/90 sm:block"
                  aria-hidden
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                  </svg>
                </div>

                <h2 className="heading-font text-4xl font-bold uppercase tracking-tight text-white sm:text-5xl">
                  Join us today
                </h2>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/85 sm:text-base">
                  Your support can help us create lasting change in communities.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <ButtonLink
                    href="/get-involved"
                    variant="primary"
                    className="px-10"
                  >
                    Become a Volunteer
                  </ButtonLink>
                  <ButtonLink href="/donate" variant="outline" className="px-10">
                    Donate
                  </ButtonLink>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
