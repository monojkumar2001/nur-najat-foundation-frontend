"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { thumb } from "@/lib/unsplash";
import { EASE, DURATION } from "@/lib/motion";

const view = {
  once: true,
  amount: 0.15,
};

const cardMotion = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: view,
  transition: { duration: DURATION.section, ease: EASE },
};

export default function MissionVision() {
  return (
    <section aria-labelledby="mission-vision-heading">
      <div className="grid gap-8 lg:grid-cols-12 lg:items-start lg:gap-10">
        <motion.div
          className="lg:col-span-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={view}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-md">
            <div className="relative aspect-[4/3]">
              <Image
                src={thumb.education}
                alt="Youth learning and leadership"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
            <div
              className="absolute inset-0 bg-linear-to-t from-black/40 via-black/5 to-transparent"
              aria-hidden
            />
            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-slate-900 shadow-sm">
                Mission & vision
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="lg:col-span-7"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={view}
          transition={{ duration: DURATION.section, ease: EASE }}
        >
          <SectionHeading
            eyebrow="Mission & vision"
            title="Opportunity, dignity and lasting change"
            titleId="mission-vision-heading"
            subtitle="We respond to urgent needs today while strengthening the capacity of people and communities for tomorrow—so development reaches those who have historically been left behind."
            align="left"
            className="max-w-none"
          />
        </motion.div>
      </div>

      <div className="mt-8 grid gap-6 lg:mt-10 lg:grid-cols-2">
        <motion.div
          className="rounded-2xl border border-primary/20 bg-primary/5 p-6 shadow-sm sm:p-7"
          {...cardMotion}
        >
          <h3 className="text-xl font-semibold uppercase text-primary md:text-2xl">
            Mission
          </h3>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-muted sm:text-lg">
            <p>
              NNF’s mission is to empower youth, women and underserved
              communities in Panchagarh through education, skills, healthcare,
              humanitarian support and sustainable opportunities. We aim to
              reach people whose needs and potential are often overlooked,
              especially women in rural communities and students whose education
              is threatened by financial hardship.
            </p>
            <p>
              Through practical and community-based programmes, we seek to help
              individuals develop the confidence, knowledge, resources and
              opportunities required to improve their own lives and contribute
              meaningfully to the development of their communities. Our mission
              combines compassion with long-term thinking: responding to urgent
              needs today while strengthening the capacity of people and
              communities for tomorrow.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7"
          {...cardMotion}
          transition={{
            duration: DURATION.section,
            ease: EASE,
            delay: 0.06,
          }}
        >
          <h3 className="text-xl font-semibold uppercase text-primary md:text-2xl">
            Vision
          </h3>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-muted sm:text-lg">
            <p>
              NNF envisions a just, inclusive and compassionate society where
              poverty and lack of opportunity no longer prevent people from
              living with dignity, security and purpose. We envision communities
              in which women and young people are empowered to participate, lead
              and create positive change; students can pursue education
              regardless of economic background; families can access essential
              services; and development reaches people who have historically
              been left behind.
            </p>
            <p>
              Our vision is a society beyond poverty, powered not only by
              charity, but by opportunity, participation, knowledge and shared
              responsibility. We want the people we serve to be able to move
              beyond survival and toward a future defined by confidence, choice
              and meaningful progress.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
