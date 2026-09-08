"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { EASE, DURATION } from "@/lib/motion";

const workWithUs = [
  "Meaningful social change requires people with different skills, experiences and perspectives. NNF welcomes individuals who want to contribute to community development with commitment, integrity, compassion and respect. Opportunities to work with us may include professional roles, programme support, field coordination, research and documentation, communications, community engagement, event support and volunteering.",
  "We value people who are willing to listen to communities, work collaboratively, take responsibility and learn continuously. Whether someone contributes as a professional, volunteer, mentor, content creator or community supporter, every role should strengthen the quality and reach of our work.",
  "As opportunities become available, vacancy notices, role descriptions and application instructions can be published through this section. NNF is committed to fair and respectful engagement and to building a team that reflects the values of service, accountability and inclusion.",
];

const view = { once: true, amount: 0.15 };

export default function WorkWithUs() {
  return (
    <section aria-labelledby="work-with-us-heading">
      <motion.div
        className="rounded-2xl border border-primary/15 bg-primary/5 p-6 sm:p-8 lg:p-10"
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={view}
        transition={{ duration: DURATION.section, ease: EASE }}
      >
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">
              Work with us
            </p>
            <h2
              id="work-with-us-heading"
              className="heading-font mt-2 text-2xl font-bold uppercase leading-tight text-slate-900 sm:text-3xl lg:text-4xl"
            >
              Join a team built on service and inclusion
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-muted sm:text-lg">
              {workWithUs.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col">
            <ButtonLink href="/get-involved" variant="primary" className="px-7">
              Get involved
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
            </ButtonLink>
            <ButtonLink href="/contact" variant="outlineDark" className="px-7">
              Contact us
            </ButtonLink>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
