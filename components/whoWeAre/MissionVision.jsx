"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { thumb } from "@/lib/unsplash";
import { EASE, DURATION } from "@/lib/motion";

const view = {
  once: true,
  amount: 0.18,
};

const cardMotion = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: view,
  transition: { duration: DURATION.section, ease: EASE },
};

const MissionVision = () => {
  return (
    <>
      <section id="mission" className="scroll-mt-28 py-16 md:py-20">
        <div className="relative mx-auto max-w-7xl overflow-hidden px-4 sm:px-6 lg:px-8">
          <div className="pointer-events-none absolute inset-0 opacity-70" aria-hidden />

          <div className="relative grid gap-6 lg:grid-cols-12 lg:items-center lg:gap-6">
            <motion.div
              className="lg:col-span-6"
              initial={{ opacity: 0, scale: 1.04 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={view}
              transition={{ duration: 0.75, ease: EASE }}
            >
              <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-slate-100 shadow-lg">
                <div className="relative aspect-video">
                  <Image
                    src={thumb.education}
                    alt="Youth learning and leadership"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 40vw, 100vw"
                  />
                </div>
                <div
                  className="absolute inset-0 bg-linear-to-t from-black/35 via-black/5 to-transparent"
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
              className="lg:col-span-6"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={view}
              transition={{ duration: DURATION.section, ease: EASE }}
            >
              <SectionHeading
                eyebrow="Mission & vision"
                title="A poverty-free future, led by empowered youth"
                subtitle="We envision communities that are resilient, self-reliant, and socially responsible—where dignity and opportunity are shared."
                align="left"
                className="max-w-none"
              />
            </motion.div>
          </div>

          <div className="relative grid py-6 md:py-10">
            <div className="hidden lg:block lg:col-span-5" aria-hidden />

            <div className="lg:col-span-7">
              <div className="grid gap-6 md:grid-cols-2">
                <motion.div
                  className="rounded-2xl border border-primary/20 bg-primary/5 p-6 shadow-sm transition-shadow hover:shadow-md"
                  {...cardMotion}
                >
                  <h3 className="text-xl font-semibold uppercase text-primary md:text-2xl">
                    Mission
                  </h3>
                  <p className="mt-3 text-lg leading-relaxed text-muted">
                    To empower youth, women, and disadvantaged communities in
                    Panchagarh through a holistic and sustainable approach that
                    integrates education, skill development, healthcare, and
                    economic empowerment.
                  </p>
                </motion.div>
                <motion.div
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
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
                  <p className="mt-3 text-lg leading-relaxed text-muted">
                    To create a poverty-free society where every individual,
                    especially youth and marginalized communities, has equal
                    access to opportunities, resources, and dignity. NNF
                    envisions empowered young leaders driving inclusive growth,
                    social justice, and sustainable development.
                  </p>
                </motion.div>
              </div>

              <motion.div
                className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={view}
                transition={{ duration: DURATION.section, ease: EASE, delay: 0.08 }}
              >
                <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                  <h3 className="text-xl font-semibold uppercase text-primary md:text-2xl">
                    What we commit to
                  </h3>
                  <ButtonLink
                    href="/get-involved"
                    variant="outlineDark"
                    className="px-5 py-2 text-sm normal-case"
                  >
                    Work with us
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                  </ButtonLink>
                </div>

                <ul className="mt-5 grid gap-4 text-sm leading-relaxed text-slate-600 sm:grid-cols-2">
                  {[
                    "Providing access to quality education and lifelong learning opportunities to build knowledge, confidence, and leadership capacity.",
                    "Developing practical skills and entrepreneurship initiatives that enable financial independence and strengthen local economies.",
                    "Promoting accessible healthcare and awareness programs to improve overall well-being and quality of life.",
                    "Supporting women’s empowerment and gender equality by creating pathways for participation, leadership, and economic inclusion.",
                    "Implementing community-driven and environmentally sustainable initiatives that ensure long-term impact and resilience.",
                  ].map((line) => (
                    <li key={line} className="flex gap-3">
                      <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <span
                          className="h-2 w-2 rounded-full bg-primary"
                          aria-hidden
                        />
                      </span>
                      <span className="text-base leading-relaxed text-muted">
                        {line}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MissionVision;
