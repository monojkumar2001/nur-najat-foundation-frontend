"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { thumb } from "@/lib/unsplash";
import { EASE, DURATION } from "@/lib/motion";

const view = {
  once: true,
  amount: 0.2,
};

export function AboutUS() {
  return (
    <>
      <section className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-14">
        <motion.div
          className="lg:col-span-5"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={view}
          transition={{ duration: DURATION.section, ease: EASE }}
        >
          <SectionHeading
            eyebrow="Who we are"
            title="Grassroots work. Long-term impact."
            subtitle="Nur and Najat Foundation (NNF) works at the grassroots level in Panchagarh, Bangladesh to support social welfare, youth and women development, and poverty reduction through practical, community-driven initiatives."
            align="left"
            className="max-w-none"
          />
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
            <p className="text-lg">
              We are part of a global movement for change, committed to
              empowering young people to build a future that is secure,
              dignified, and free from poverty. At NNF, we believe real progress
              starts with youth and women. When they are educated, skilled, and
              supported, they become leaders who can transform communities.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <ButtonLink href="/get-involved" variant="primary" className="px-7">
              Get involved
            </ButtonLink>
            <ButtonLink href="/donate" variant="outlineDark">
              Donate
            </ButtonLink>
          </div>
        </motion.div>

        <motion.div
          className="lg:col-span-7"
          initial={{ opacity: 0, scale: 1.04 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={view}
          transition={{ duration: 0.75, ease: EASE }}
        >
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-lg">
            <div className="relative aspect-4/3">
              <Image
                src={thumb.handHeart}
                alt="Community support and youth-led action"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 60vw, 100vw"
              />
            </div>
            <div
              className="absolute inset-0 bg-linear-to-t from-black/35 via-transparent to-transparent"
              aria-hidden
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-slate-900 shadow-sm">
                <span
                  className="inline-block h-2 w-2 rounded-full bg-primary"
                  aria-hidden
                />
                Panchagarh, Bangladesh
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}

export default AboutUS;
