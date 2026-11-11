"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { thumb } from "@/lib/unsplash";
import { EASE, DURATION } from "@/lib/motion";

const view = {
  once: true,
  amount: 0.15,
};

const DEFAULT_PARAGRAPHS = [
  "NNF was founded on the understanding that poverty and vulnerability are rarely caused by a single problem. A family may struggle with income while also facing poor access to healthcare. A talented student may be forced to leave education because of financial hardship. A woman may have the ability and determination to become self-reliant but lack access to information, training, healthcare or a supportive platform. A village may have active students and workers, yet unsafe roads and insufficient lighting can restrict mobility after dark.",
  "Our response is therefore designed around people rather than isolated problems. We work to connect humanitarian support with education, health, skills, community infrastructure, environmental responsibility and opportunities for participation. This integrated approach reflects our belief that sustainable development becomes possible when communities are supported from multiple directions and when people are treated as partners in change rather than passive recipients of assistance.",
  "The Foundation gives special attention to women, young people, students and families facing social or economic disadvantage. Our goal is not simply to count activities. We want to see what those activities make possible: a woman who feels heard and supported, a student who can continue learning, a family that gains greater stability, a young person who discovers purpose, or a community that becomes safer and more resilient.",
  "NNF remains rooted in charitable values, but our ambition goes beyond charity. We seek to strengthen human dignity, equality of opportunity, community participation and self-reliance. True change is rarely created by one act of assistance. It grows through consistent support, trust, local participation and the belief that every person deserves the opportunity to build a better future.",
];

export function AboutUS({
  intro,
  side,
  paragraphs,
  cta,
} = {}) {
  const eyebrow = intro?.eyebrow || "Who we are";
  const title = intro?.title || "Grassroots work. Long-term impact.";
  const subtitle =
    intro?.subtitle ||
    "Nur and Najat Foundation (NNF) is a community-focused non-governmental, non-profit and non-political organization based in Panchagarh, Bangladesh. Since its establishment in January 2025, the Foundation has worked to support underserved people through humanitarian assistance, social welfare, educational support, women’s development and sustainable community initiatives.";
  const sideImage = side?.image || thumb.handHeart;
  const sideAlt = side?.alt || "Community support and youth-led action";
  const sideBadge = side?.badge || "Panchagarh, Bangladesh";
  const body = paragraphs?.length ? paragraphs : DEFAULT_PARAGRAPHS;
  const primaryLabel = cta?.primary?.label || "Get involved";
  const primaryHref = cta?.primary?.href || "/get-involved";
  const secondaryLabel = cta?.secondary?.label || "Donate";
  const secondaryHref = cta?.secondary?.href || "/donate";

  return (
    <section className="space-y-10 lg:space-y-12">
      <div className="grid gap-8 lg:grid-cols-12 lg:items-start lg:gap-12">
        <motion.div
          className="lg:col-span-7"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={view}
          transition={{ duration: DURATION.section, ease: EASE }}
        >
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            subtitle={subtitle}
            align="left"
            className="max-w-none"
          />
        </motion.div>

        <motion.div
          className="lg:col-span-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={view}
          transition={{ duration: 0.7, ease: EASE, delay: 0.05 }}
        >
          <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-md">
            <div className="relative aspect-[4/3]">
              <Image
                src={sideImage}
                alt={sideAlt}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
            <div
              className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent"
              aria-hidden
            />
            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-slate-900 shadow-sm">
                <span
                  className="inline-block h-2 w-2 rounded-full bg-primary"
                  aria-hidden
                />
                {sideBadge}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="grid gap-6 text-base leading-relaxed text-muted sm:text-lg lg:grid-cols-2 lg:gap-x-12 lg:gap-y-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={view}
        transition={{ duration: DURATION.section, ease: EASE }}
      >
        {body.map((paragraph) => (
          <p key={paragraph.slice(0, 48)}>{paragraph}</p>
        ))}
      </motion.div>

      <motion.div
        className="flex flex-wrap gap-4"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={view}
        transition={{ duration: DURATION.section, ease: EASE }}
      >
        <ButtonLink href={primaryHref} variant="primary" className="px-7">
          {primaryLabel}
        </ButtonLink>
        <ButtonLink href={secondaryHref} variant="outlineDark">
          {secondaryLabel}
        </ButtonLink>
      </motion.div>
    </section>
  );
}

export default AboutUS;
