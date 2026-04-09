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

const introSubtitle =
  "Nur & Najat Foundation recognizes four categories of membership, each designed to support and strengthen its mission of social development.";

const defaultSocial = {
  facebook: "#",
  twitter: "#",
  linkedin: "#",
};

const executiveBoardMembers = [
  {
    name: "MUHAMMAD NAWSHAD ZAMIR",
    cardTitle: "NAWSHAD ZAMIR",
    designation: "Chairman",
    image: "/assets/images/memeber.png",
    social: defaultSocial,
  },
  {
    name: "NILUFAR AKHTAR JAMIR",
    designation: "Vice-Chairman",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&w=640&q=80",
    social: defaultSocial,
  },
  {
    name: "MUHAMMAD NAUFAL ARSHAD ZAMIR",
    designation: "Vice-Chairman",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&w=640&q=80",
    social: defaultSocial,
  },
  {
    name: "MUHAMMAD OMAR NAJIB ZAMIR",
    designation: "Executive Member",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&w=640&q=80",
    social: defaultSocial,
  },
  {
    name: "MD MAHMUDUL HASAN",
    designation: "Secretary",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&w=640&q=80",
    social: defaultSocial,
  },
  {
    name: "MD SHAFIUL ALAM",
    designation: "Treasurer",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&w=640&q=80",
    social: defaultSocial,
  },
  {
    name: "MD ABU KALAM AZAD",
    designation: "Executive Member",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&w=640&q=80",
    social: defaultSocial,
  },
];

const programApplicationSteps = [
  "Submission of an application",
  "Payment of an admission fee of BDT 50.00 (by the Executive Board)",
  "Payment of a minimum monthly fee of BDT 100.00 (by the Executive Board)",
  "Approval by the authorized local officer (appointed by the President)",
];

const programMemberDuties = [
  "Maintain regular payment of weekly or monthly fees.",
  "Actively participate in training programs organized by the Foundation.",
  "Engage in activities and initiatives conducted under the Foundation’s programs.",
];

const lifeMemberImage =
  "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&w=960&q=80";
const programMemberImage = "/assets/images/program.png";
const dutiesImage =
  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&w=960&q=80";

const viewport = { once: true, amount: 0.15 };

function HoverPhoto({ src, alt, sizes, fillCell = false }) {
  return (
    <div
      className={
        fillCell
          ? "group relative h-full min-h-[22rem] w-full overflow-hidden bg-slate-200 lg:min-h-0"
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
  const social = member.social ?? defaultSocial;
  const title = member.cardTitle ?? member.name;

  return (
    <motion.article
      className="flex w-full max-w-[18rem] cursor-pointer flex-col overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-slate-200/50"
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
          sizes="(min-width: 1024px) 200px, 100vw"
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-linear-to-t from-black/45 via-black/15 to-transparent"
          aria-hidden
        />
      </div>
      <div className="flex flex-1 flex-col gap-4 px-6 pb-6 pt-5">
        <div>
          <h4 className="heading-font text-base font-bold uppercase leading-snug tracking-tight text-slate-900">
            {title}
          </h4>
          <p className="mt-1 text-sm font-normal text-slate-500">
            {member.designation}
          </p>
        </div>
        <div className="flex items-center gap-3 text-slate-900">
          <a
            href={social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-300 hover:text-primary hover:opacity-70"
            aria-label={`${member.name} on Facebook`}
          >
            <IconFacebook className="h-5 w-5" />
          </a>
          <a
            href={social.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-300 hover:text-primary hover:opacity-70"
            aria-label={`${member.name} on X`}
          >
            <IconTwitter className="h-5 w-5" />
          </a>
          <a
            href={social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-300 hover:text-primary hover:opacity-70"
            aria-label={`${member.name} on LinkedIn`}
          >
            <IconLinkedIn className="h-5 w-5" />
          </a>
        </div>
        <a
          href="#membership"
          className="mt-auto text-sm font-normal text-slate-500 underline-offset-4 hover:text-primary hover:underline"
          aria-label={`See more about ${member.name}`}
          title={`See more about ${member.name}`}
        >
          See more
        </a>
      </div>
    </motion.article>
  );
}

export default function MembershipStructure() {
  const boardFirstRow = executiveBoardMembers.slice(0, 4);
  const boardSecondRow = executiveBoardMembers.slice(4);

  return (
    <section
      id="membership"
      className="scroll-mt-28 py-16 md:py-20"
      aria-label="Membership structure"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-4xl px-4 text-center sm:px-6"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: DURATION.section, ease: EASE }}
        >
          <h2 className="heading-font text-3xl font-bold uppercase leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Membership structure
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
            {introSubtitle}
          </p>
        </motion.div>

        <motion.div
          className="mx-auto mt-8 max-w-6xl px-4 sm:mt-10 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: DURATION.section, ease: EASE, delay: 0.04 }}
        >
          <h3 className="heading-font text-2xl font-bold uppercase text-slate-900 sm:text-3xl">
            General member
          </h3>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-bl-3xl rounded-tr-3xl bg-[#e8f4fc] px-6 py-7 shadow-sm ring-1 ring-sky-100/80 sm:px-8 sm:py-8">
              <h3 className="text-xl font-bold uppercase tracking-wide text-black md:text-2xl">
                Founder members
              </h3>
              <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
                Individuals who were present at the founding meeting of the
                Foundation and expressed willingness to contribute—financially
                or otherwise—toward social development shall be recognized as
                Founder Members. Founder Members, or their nominated
                representatives, will receive priority consideration for
                election to the Executive Board.
              </p>
            </div>
            <div className="rounded-bl-3xl rounded-tr-3xl bg-[#e8f4fc] px-6 py-7 shadow-sm ring-1 ring-sky-100/80 sm:px-8 sm:py-8">
              <h3 className="text-xl font-bold uppercase tracking-wide text-black md:text-2xl">
                General members
              </h3>
              <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
                Any individual may apply for General Membership. Admission is
                subject to approval by the Executive Board and final acceptance
                by the President upon recommendation from the Secretary.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-8 bg-white py-16 sm:mt-10 sm:py-20"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: DURATION.section, ease: EASE, delay: 0.05 }}
        >
          <h3 className="heading-font text-center text-2xl font-bold uppercase text-slate-900 sm:text-3xl">
            Executive board member
          </h3>
          <p className="mx-auto mt-6 max-w-3xl text-center text-base leading-relaxed text-muted sm:text-lg">
            Executive Board Members are responsible for the governance and
            strategic direction of the Foundation.
          </p>
          <ul className="mx-auto mt-6 flex max-w-3xl flex-col gap-3 px-4 text-left text-base text-muted sm:text-lg">
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
              <span>
                Individuals elected or selected by the General Committee.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
              <span>
                Individuals are admitted to the Board with the approval of the
                Executive Board.
              </span>
            </li>
          </ul>

          <div className="mt-12 grid justify-items-center gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-6 lg:gap-y-10">
            {boardFirstRow.map((m) => (
              <ExecutiveCard key={m.name} member={m} />
            ))}
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-8 lg:mt-10 lg:gap-x-6">
            {boardSecondRow.map((m) => (
              <ExecutiveCard key={m.name} member={m} />
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        className="bg-[#F5F2F0] py-16 sm:py-20"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
        transition={{ duration: DURATION.section, ease: EASE }}
      >
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:gap-12 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: DURATION.section, ease: EASE }}
          >
            <h3 className="heading-font text-2xl font-bold uppercase text-slate-900 sm:text-3xl">
              Life member
            </h3>
            <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
              Individuals who are inspired by the objectives and programs of
              the Foundation may become Life Members by making a{" "}
              <strong className="font-semibold text-slate-900">
                one-time contribution of BDT 20,000.00
              </strong>{" "}
              (or any amount set by the Executive Board), either in cash or in
              property of equivalent value.
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
              src={lifeMemberImage}
              alt="Community members together"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="bg-white py-16 sm:py-20"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
        transition={{ duration: DURATION.section, ease: EASE }}
      >
        <div className="mx-auto grid max-w-7xl items-stretch gap-10 px-4 sm:gap-12 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <motion.div
            className="flex h-full min-h-[22rem] w-full"
            initial={{ opacity: 0, scale: 1.03 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewport}
            transition={{ duration: 0.75, ease: EASE }}
          >
            <div className="relative h-full min-h-[22rem] w-full flex-1 overflow-hidden rounded-xl ring-1 ring-slate-200/60 lg:min-h-0">
              <HoverPhoto
                fillCell
                src={programMemberImage}
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
              title="Program member"
              subtitle="Program Members are individuals who participate in and benefit from the Foundation’s various initiatives and development programs."
              align="left"
            />
            <h4 className="mt-6 text-lg font-bold leading-tight tracking-tight text-slate-900 md:text-xl">
              Program membership
            </h4>
            <p className="mt-3 text-base leading-relaxed text-muted sm:text-lg">
              Any individual seeking to benefit from the Foundation’s programs
              may apply through the local office. Membership is granted upon:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-relaxed text-muted marker:text-primary">
              {programApplicationSteps.map((step) => (
                <li key={step} className="flex items-start gap-2">
                  <CheckCircle className="mt-1 h-4 w-4 shrink-0 text-primary" aria-hidden />
                  <span className="text-base text-muted">{step}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
              Approved applicants will be considered members of the respective
              program under the Foundation.
            </p>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="bg-[#f5f2eb] py-16 sm:py-20"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
        transition={{ duration: DURATION.section, ease: EASE }}
      >
        <div className="mx-auto grid max-w-7xl items-stretch gap-10 px-4 sm:gap-12 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <motion.div
            className="order-2 flex flex-col justify-center lg:order-1"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: DURATION.section, ease: EASE }}
          >
            <div className="rounded-2xl border border-white/60 bg-white/95 p-6 shadow-md ring-1 ring-slate-200/40 backdrop-blur-sm sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-wide text-primary">
                Expectations
              </p>
              <h3 className="heading-font mt-2 text-2xl font-bold uppercase leading-tight text-slate-900 sm:text-3xl">
                Duties &amp; responsibilities of program members
              </h3>
              <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
                Program Members are expected to:
              </p>
              <ul className="mt-8 flex flex-col gap-3 sm:gap-4">
                {programMemberDuties.map((duty) => (
                  <li
                    key={duty}
                    className="flex gap-3 rounded-xl bg-[#f5f2eb]/90 px-4 py-3.5 ring-1 ring-slate-200/60 sm:px-5 sm:py-4"
                  >
                    <CheckCircle
                      className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                      aria-hidden
                    />
                    <span className="text-base leading-relaxed text-muted">
                      {duty}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
          <motion.div
            className="order-1 flex h-full min-h-[22rem] w-full lg:order-2"
            initial={{ opacity: 0, scale: 1.03 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewport}
            transition={{ duration: 0.75, ease: EASE, delay: 0.05 }}
          >
            <div className="relative h-full min-h-[22rem] w-full flex-1 overflow-hidden rounded-2xl shadow-md ring-1 ring-slate-200/50 lg:min-h-0">
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
