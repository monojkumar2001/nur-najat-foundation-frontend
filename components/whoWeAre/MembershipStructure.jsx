"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EASE, DURATION } from "@/lib/motion";

function IconFacebook({ className = "h-4 w-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M24 12.073C24 5.446 18.627.073 12 .073S0 5.446 0 12.073c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function IconTwitter({ className = "h-4 w-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function IconLinkedIn({ className = "h-4 w-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const DEFAULT_MEMBERS = [
  { name: "MUHAMMAD NAWSHAD ZAMIR", designation: "Chairman", image: "/assets/images/team/1.png" },
  { name: "Muhammad Naufal Arshad Zamir", designation: "Vice-Chairman", image: "/assets/images/team/2.png" },
  { name: "Md.Montu Alam", designation: "Vice-Chairman", image: "/assets/images/team/3.png" },
  { name: "Md.Mahmudul Hasan", designation: "General Secretary", image: "/assets/images/team/4.png" },
  { name: "Md.Shafiul Islam", designation: "Treasurer", image: "/assets/images/team/5.png" },
  { name: "Md.Abu Kalam", designation: "Executive Member", image: "/assets/images/team/6.png" },
  { name: "Tushar Kanti Roy", designation: "Executive Member", image: "/assets/images/team/7.png" },
];

const viewport = { once: true, amount: 0.15 };

function HoverPhoto({ src, alt, sizes, fillCell = false }) {
  return (
    <div
      className={
        fillCell
          ? "group relative h-full min-h-[16rem] w-full overflow-hidden bg-slate-200 sm:min-h-[22rem] lg:min-h-0"
          : "group relative aspect-3/2 w-full overflow-hidden bg-slate-200"
      }
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-500 ease-out motion-reduce:transition-none group-hover:scale-110"
        sizes={sizes}
      />
    </div>
  );
}

function ExecutiveCard({ member }) {
  const social = member.social;

  return (
    <motion.article
      className="flex w-full max-w-sm cursor-pointer flex-col overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-slate-200/50 sm:max-w-[18rem]"
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration: DURATION.section, ease: EASE }}
      whileHover={{ y: -5 }}
    >
      <div className="group relative aspect-4/5 w-full overflow-hidden bg-slate-100">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover object-top transition-transform duration-500 ease-out motion-reduce:transition-none group-hover:scale-110"
          sizes="(min-width: 1024px) 200px, (min-width: 640px) 50vw, 100vw"
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-linear-to-t from-black/45 via-black/15 to-transparent"
          aria-hidden
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 px-4 pb-5 pt-4 sm:gap-4 sm:px-6 sm:pb-6 sm:pt-5">
        <div>
          <h4 className="heading-font text-sm font-bold uppercase leading-snug tracking-tight text-slate-900 sm:text-base">
            {member.name}
          </h4>
          <p className="mt-1 text-sm font-normal text-slate-500 sm:text-base">
            {member.designation}
          </p>
        </div>
        {social && (
          <div className="flex items-center gap-3 text-slate-900">
            {social.facebook ? (
              <a href={social.facebook} target="_blank" rel="noopener noreferrer" className="transition-colors duration-300 hover:text-primary hover:opacity-70" aria-label={`${member.name} on Facebook`}>
                <IconFacebook className="h-5 w-5" />
              </a>
            ) : null}
            {social.twitter ? (
              <a href={social.twitter} target="_blank" rel="noopener noreferrer" className="transition-colors duration-300 hover:text-primary hover:opacity-70" aria-label={`${member.name} on X`}>
                <IconTwitter className="h-5 w-5" />
              </a>
            ) : null}
            {social.linkedin ? (
              <a href={social.linkedin} target="_blank" rel="noopener noreferrer" className="transition-colors duration-300 hover:text-primary hover:opacity-70" aria-label={`${member.name} on LinkedIn`}>
                <IconLinkedIn className="h-5 w-5" />
              </a>
            ) : null}
          </div>
        )}
      </div>
    </motion.article>
  );
}

export default function MembershipStructure({
  intro,
  general,
  executive,
  life,
  program,
  duties,
} = {}) {
  const introTitle = intro?.title || "Membership structure";
  const introSubtitle =
    intro?.subtitle ||
    "Nur & Najat Foundation recognizes four categories of membership, each designed to support and strengthen its mission of social development.";

  const generalSectionTitle = general?.sectionTitle || "General member";
  const founderTitle = general?.founder?.title || "Founder members";
  const founderText =
    general?.founder?.text ||
    "Individuals who were present at the founding meeting of the Foundation and expressed willingness to contribute—financially or otherwise—toward social development shall be recognized as Founder Members. Founder Members, or their nominated representatives, will receive priority consideration for election to the Executive Board.";
  const generalMemberTitle = general?.member?.title || "General members";
  const generalMemberText =
    general?.member?.text ||
    "Any individual may apply for General Membership. Admission is subject to approval by the Executive Board and final acceptance by the President upon recommendation from the Secretary.";

  const executiveTitle = executive?.title || "Executive board member";
  const executiveSubtitle =
    executive?.subtitle ||
    "Executive Board Members are responsible for the governance and strategic direction of the Foundation.";
  const executiveBullets = executive?.bullets?.length
    ? executive.bullets
    : [
        "Individuals elected or selected by the General Committee.",
        "Individuals are admitted to the Board with the approval of the Executive Board.",
      ];
  const boardMembers = executive?.members?.length ? executive.members : DEFAULT_MEMBERS;

  const lifeTitle = life?.title || "Life member";
  const lifeText =
    life?.text ||
    "Individuals who are inspired by the objectives and programs of the Foundation may become Life Members by making a one-time contribution of BDT 20,000.00 (or any amount set by the Executive Board), either in cash or in property of equivalent value.";
  const lifeImage =
    life?.image ||
    "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&w=960&q=80";

  const programTitle = program?.title || "Program member";
  const programSubtitle =
    program?.subtitle ||
    "Program Members are individuals who participate in and benefit from the Foundation’s various initiatives and development programs.";
  const programHeading = program?.heading || "Program membership";
  const programIntro =
    program?.intro ||
    "Any individual seeking to benefit from the Foundation’s programs may apply through the local office. Membership is granted upon:";
  const programSteps = program?.steps?.length
    ? program.steps
    : [
        "Submission of an application",
        "Payment of an admission fee of BDT 50.00 (by the Executive Board)",
        "Payment of a minimum monthly fee of BDT 100.00 (by the Executive Board)",
        "Approval by the authorized local officer (appointed by the President)",
      ];
  const programFooter =
    program?.footer ||
    "Approved applicants will be considered members of the respective program under the Foundation.";
  const programImage = program?.image || "/assets/images/program.png";

  const dutiesEyebrow = duties?.eyebrow || "Expectations";
  const dutiesTitle = duties?.title || "Duties & responsibilities of program members";
  const dutiesIntro = duties?.intro || "Program Members are expected to:";
  const dutiesItems = duties?.items?.length
    ? duties.items
    : [
        "Maintain regular payment of weekly or monthly fees.",
        "Actively participate in training programs organized by the Foundation.",
        "Engage in activities and initiatives conducted under the Foundation’s programs.",
      ];
  const dutiesImage =
    duties?.image ||
    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&w=960&q=80";

  return (
    <section
      id="membership"
      className="scroll-mt-28"
      aria-label="Membership structure"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-4xl text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: DURATION.section, ease: EASE }}
        >
          <h2 className="heading-font text-2xl font-bold uppercase leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
            {introTitle}
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-slate-600 sm:mt-5 sm:text-lg">
            {introSubtitle}
          </p>
        </motion.div>

        <motion.div
          className="mx-auto mt-8 max-w-6xl sm:mt-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: DURATION.section, ease: EASE, delay: 0.04 }}
        >
          <h3 className="heading-font text-xl font-bold uppercase text-slate-900 sm:text-3xl">
            {generalSectionTitle}
          </h3>
          <div className="mt-6 grid gap-4 sm:mt-8 sm:gap-6 md:grid-cols-2">
            <div className="rounded-bl-3xl rounded-tr-3xl bg-[#e8f4fc] px-5 py-6 shadow-sm ring-1 ring-sky-100/80 sm:px-8 sm:py-8">
              <h3 className="text-lg font-bold uppercase tracking-wide text-black sm:text-xl md:text-2xl">
                {founderTitle}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-muted sm:mt-4 md:text-lg">
                {founderText}
              </p>
            </div>
            <div className="rounded-bl-3xl rounded-tr-3xl bg-[#e8f4fc] px-5 py-6 shadow-sm ring-1 ring-sky-100/80 sm:px-8 sm:py-8">
              <h3 className="text-lg font-bold uppercase tracking-wide text-black sm:text-xl md:text-2xl">
                {generalMemberTitle}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-muted sm:mt-4 md:text-lg">
                {generalMemberText}
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-10 py-10 sm:mt-12 sm:py-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: DURATION.section, ease: EASE, delay: 0.05 }}
        >
          <h3 className="heading-font text-center text-xl font-bold uppercase text-slate-900 sm:text-3xl">
            {executiveTitle}
          </h3>
          <p className="mx-auto mt-4 max-w-3xl text-center text-base leading-relaxed text-muted sm:mt-6 sm:text-lg">
            {executiveSubtitle}
          </p>
          <ul className="mx-auto mt-5 flex max-w-3xl flex-col gap-3 text-left text-base text-muted sm:mt-6 sm:text-lg">
            {executiveBullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-2">
                <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 grid grid-cols-1 justify-items-center gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-x-6 lg:gap-y-10">
            {boardMembers.slice(0, 4).map((m) => (
              <ExecutiveCard key={m.id || m.name} member={m} />
            ))}
          </div>
          <div className="mt-5 flex flex-col items-center gap-5 sm:mt-6 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-6 lg:mt-10 lg:gap-x-6">
            {boardMembers.slice(4).map((m) => (
              <ExecutiveCard key={m.id || m.name} member={m} />
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        className="bg-[#F5F2F0] py-10 sm:py-20"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
        transition={{ duration: DURATION.section, ease: EASE }}
      >
        <div className="mx-auto grid max-w-7xl items-center gap-6 px-4 sm:gap-12 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: DURATION.section, ease: EASE }}
          >
            <h3 className="heading-font text-xl font-bold uppercase text-slate-900 sm:text-3xl">
              {lifeTitle}
            </h3>
            <p className="mt-4 text-base leading-relaxed text-muted sm:mt-5 sm:text-lg">
              {lifeText}
            </p>
          </motion.div>
          <motion.div
            className="order-1 overflow-hidden rounded-xl ring-1 ring-slate-200/60 lg:order-2"
            initial={{ opacity: 0, scale: 1.04 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewport}
            transition={{ duration: 0.75, ease: EASE }}
          >
            <HoverPhoto
              src={lifeImage}
              alt="Community members together"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="bg-white py-10 sm:py-20"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
        transition={{ duration: DURATION.section, ease: EASE }}
      >
        <div className="mx-auto grid max-w-7xl items-stretch gap-6 px-4 sm:gap-12 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <motion.div
            className="flex h-full min-h-[16rem] w-full sm:min-h-[22rem]"
            initial={{ opacity: 0, scale: 1.03 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewport}
            transition={{ duration: 0.75, ease: EASE }}
          >
            <div className="relative h-full min-h-[16rem] w-full flex-1 overflow-hidden rounded-xl ring-1 ring-slate-200/60 sm:min-h-[22rem] lg:min-h-0">
              <HoverPhoto
                fillCell
                src={programImage}
                alt="Multi-generational family in a rural village setting"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </motion.div>
          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: DURATION.section, ease: EASE, delay: 0.06 }}
          >
            <SectionHeading
              title={programTitle}
              subtitle={programSubtitle}
              align="left"
            />
            <h4 className="mt-6 text-lg font-bold leading-tight tracking-tight text-slate-900 md:text-xl">
              {programHeading}
            </h4>
            <p className="mt-3 text-base leading-relaxed text-muted sm:text-lg">
              {programIntro}
            </p>
            <ul className="mt-4 flex flex-col gap-2.5 text-base leading-relaxed text-muted">
              {programSteps.map((step) => (
                <li key={step} className="flex items-start gap-2">
                  <CheckCircle className="mt-1 h-4 w-4 shrink-0 text-primary" aria-hidden />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
              {programFooter}
            </p>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="bg-[#f5f2eb] py-10 sm:py-20"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
        transition={{ duration: DURATION.section, ease: EASE }}
      >
        <div className="mx-auto grid max-w-7xl items-stretch gap-6 px-4 sm:gap-12 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <motion.div
            className="order-2 flex flex-col justify-center lg:order-1"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: DURATION.section, ease: EASE }}
          >
            <div className="rounded-2xl border border-white/60 bg-white/95 p-5 shadow-md ring-1 ring-slate-200/40 backdrop-blur-sm sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-wide text-primary">
                {dutiesEyebrow}
              </p>
              <h3 className="heading-font mt-2 text-xl font-bold uppercase leading-tight text-slate-900 sm:text-3xl">
                {dutiesTitle}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
                {dutiesIntro}
              </p>
              <ul className="mt-6 flex flex-col gap-3 sm:mt-8 sm:gap-4">
                {dutiesItems.map((duty) => (
                  <li
                    key={duty}
                    className="flex gap-3 rounded-xl bg-[#f5f2eb]/90 px-3.5 py-3 ring-1 ring-slate-200/60 sm:px-5 sm:py-4"
                  >
                    <CheckCircle
                      className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                      aria-hidden
                    />
                    <span className="text-sm leading-relaxed text-muted sm:text-base">
                      {duty}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
          <motion.div
            className="order-1 flex h-full min-h-[16rem] w-full sm:min-h-[22rem] lg:order-2"
            initial={{ opacity: 0, scale: 1.03 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewport}
            transition={{ duration: 0.75, ease: EASE, delay: 0.05 }}
          >
            <div className="relative h-full min-h-[16rem] w-full flex-1 overflow-hidden rounded-2xl shadow-md ring-1 ring-slate-200/50 sm:min-h-[22rem] lg:min-h-0">
              <HoverPhoto
                fillCell
                src={dutiesImage}
                alt="Children learning in a classroom"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
