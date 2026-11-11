"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EASE, DURATION } from "@/lib/motion";

const DEFAULT_PARAGRAPHS = [
  "We then design interventions around accessibility and participation. Where distance, cost, social barriers or lack of information prevent people from receiving support, we work to bring services closer to them. Our health camps are an example of this approach: instead of expecting underserved women to travel long distances for care, services are organized within or near their communities.",
  "We also believe that support should strengthen capacity. Educational assistance is connected with encouragement and opportunity; women’s programmes combine awareness with confidence and participation; environmental initiatives combine action with community responsibility; and infrastructure projects are intended to make everyday life safer and more enabling.",
  "Partnership and accountability are equally important. NNF seeks to work with communities, volunteers, professionals, local institutions, supporters and relevant authorities. Programmes and activities are undertaken in accordance with applicable laws, required approvals and the Foundation’s governance framework. We aim to use resources responsibly, learn from implementation and improve our programmes as community needs evolve.",
  "Above all, we work with respect. People are not statistics or beneficiaries without a voice. They are individuals with experiences, capabilities and aspirations. Our role is to stand beside them, reduce barriers and help create the conditions in which they can move forward.",
];

const view = { once: true, amount: 0.15 };

export default function HowWeDoIt({
  intro,
  side,
  paragraphs,
} = {}) {
  const eyebrow = intro?.eyebrow || "How we do it";
  const title = intro?.title || "Listening first. Acting with respect.";
  const subtitle =
    intro?.subtitle ||
    "We begin by listening. NNF seeks to understand community priorities through local engagement, field observation, conversations with residents and collaboration with people who know the realities of their communities. This helps us avoid one-size-fits-all solutions and focus resources where they can make a practical difference.";
  const sideImage = side?.image || "/assets/images/whatwedo.png";
  const sideAlt = side?.alt || "Listening to communities and acting with respect";
  const body = paragraphs?.length ? paragraphs : DEFAULT_PARAGRAPHS;

  return (
    <section aria-labelledby="how-we-do-it-heading">
      <div className="grid gap-8 lg:grid-cols-12 lg:items-start lg:gap-10">
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
            titleId="how-we-do-it-heading"
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
          transition={{ duration: 0.7, ease: EASE }}
        >
          <div className="group relative overflow-hidden rounded-2xl bg-slate-100 shadow-md ring-1 ring-slate-200/80">
            <div className="relative aspect-[4/3]">
              <Image
                src={sideImage}
                alt={sideAlt}
                fill
                className="object-cover transition-transform duration-500 motion-reduce:transition-none group-hover:scale-[1.06]"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="mt-8 space-y-5 text-base leading-relaxed text-muted sm:text-lg lg:mt-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={view}
        transition={{ duration: DURATION.section, ease: EASE }}
      >
        <div className="grid gap-5 lg:grid-cols-2 lg:gap-x-10">
          {body.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
