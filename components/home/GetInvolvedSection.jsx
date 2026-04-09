"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ButtonLink } from "@/components/ui/ButtonLink";
import {
  ArrowRight,
  CalendarClock,
  CircleCheckBig,
  HeartHandshake,
  Lock,
  Repeat,
  Sparkles,
  Wallet,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { hero, thumb } from "@/lib/unsplash";

const volunteerRoles = [
  "Field outreach, events, and community awareness alongside our team.",
  "Seasonal support for distributions, registration, and logistics.",
];

const fundSplit = [
  { label: "Programs & direct aid", pct: 70, className: "bg-white" },
  { label: "Operations & learning", pct: 20, className: "bg-white/80" },
  { label: "Reserve & compliance", pct: 10, className: "bg-white/55" },
];

export function GetInvolvedSection() {
  return (
    <section id="get-involved" className="scroll-mt-24 bg-slate-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Get involved"
          title="Volunteer with us and fuel the mission"
          subtitle="Register your interest, explore volunteer roles, and give securely—one-time or monthly—with clear transparency on how every gift is used."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-2 lg:gap-10">
          <motion.article
            className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-md transition-shadow hover:shadow-lg"
            whileHover={{ y: -6 }}
            transition={{ duration: 0.22, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="relative aspect-[16/10] shrink-0 overflow-hidden">
              <Image
                src={thumb.volunteer}
                alt=""
                fill
                className="object-cover transition-transform duration-500 ease-out motion-reduce:transition-none motion-reduce:group-hover:scale-100 group-hover:scale-110"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
            <div className="flex flex-1 flex-col p-6 sm:p-8">
              <div className="flex items-center gap-2 text-primary">
                <HeartHandshake className="h-5 w-5" aria-hidden />
                <span className="text-sm font-bold uppercase tracking-wide">
                  Volunteer registration
                </span>
              </div>
              <h3 className="heading-font mt-3 text-xl font-bold uppercase text-slate-900 sm:text-2xl">
                Share your time and skills
              </h3>
              <p className="mt-3 text-slate-600 leading-relaxed">
                Typical commitments range from about 4–8 hours per month for
                events up to seasonal field outreach—flexible based on your
                availability.
              </p>
              <ul className="mt-6 space-y-3">
                {volunteerRoles.map((line) => (
                  <li
                    key={line}
                    className="flex gap-3 text-sm leading-relaxed text-slate-600 sm:text-base"
                  >
                    <CircleCheckBig
                      className="mt-1 h-5 w-5 shrink-0 text-primary"
                      strokeWidth={2.25}
                      aria-hidden
                    />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
         
              <ButtonLink
                href="/get-involved#volunteer"
                variant="primary"
                size="sm"
                className="mt-8 self-start"
              >
                Sign up to volunteer
                <ArrowRight className="h-4 w-4" strokeWidth={2.5} aria-hidden />
              </ButtonLink>
            </div>
          </motion.article>

          <motion.article
            className="group flex flex-col overflow-hidden rounded-2xl bg-linear-to-br from-primary to-primary-dark text-white shadow-xl ring-1 ring-white/10"
            whileHover={{ y: -6 }}
            transition={{ duration: 0.22, ease: [0.25, 0.1, 0.25, 1] }}
          >
      
            <div className="flex flex-1 flex-col p-6 sm:p-8">
              <div className="flex items-center gap-2 text-white/95">
                <Sparkles className="h-5 w-5" aria-hidden />
                <span className="text-sm font-bold uppercase tracking-wide">
                  Donation platform
                </span>
              </div>
              <h3 className="heading-font mt-3 text-xl font-bold uppercase text-white sm:text-2xl">
                Secure giving, your way
              </h3>
              <p className="mt-3 max-w-lg text-white/90 leading-relaxed">
                Support education, humanitarian relief, and training with a
                one-time gift or a recurring monthly donation—processed through
                your connected payment provider on our donate page.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-white/25 bg-white/10 p-4 backdrop-blur-sm">
                  <div className="flex items-center gap-2 font-semibold text-white">
                    <Wallet className="h-5 w-5 shrink-0" aria-hidden />
                    One-time
                  </div>
                  <p className="mt-2 text-sm text-white/85 leading-relaxed">
                    Give when it works for you—support a specific appeal or general
                    operations.
                  </p>
                </div>
                <div className="rounded-xl border border-white/25 bg-white/10 p-4 backdrop-blur-sm">
                  <div className="flex items-center gap-2 font-semibold text-white">
                    <Repeat className="h-5 w-5 shrink-0" aria-hidden />
                    Recurring
                  </div>
                  <p className="mt-2 text-sm text-white/85 leading-relaxed">
                    Steady monthly gifts help us plan programs and respond faster.
                  </p>
                </div>
              </div>

              <div className="mt-8 rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-sm">
                <div className="flex items-center gap-2 text-sm font-semibold text-white">
                  <Lock className="h-4 w-4" aria-hidden />
                  Encrypted, industry-standard checkout
                </div>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-white/75">
                  How funds are typically allocated
                </p>
                <div
                  className="mt-3 flex h-3 overflow-hidden rounded-full bg-white/15"
                  role="img"
                  aria-label="Funds allocation: seventy percent programs, twenty percent operations, ten percent reserve"
                >
                  {fundSplit.map((row) => (
                    <div
                      key={row.label}
                      className={row.className}
                      style={{ width: `${row.pct}%` }}
                      title={row.label}
                    />
                  ))}
                </div>
                <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-xs text-white/85">
                  {fundSplit.map((row) => (
                    <li key={row.label} className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-white/90" aria-hidden />
                      <span>
                        <span className="font-bold text-white">{row.pct}%</span>{" "}
                        {row.label}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <ButtonLink href="/donate" variant="accent" size="sm">
                  Donate now
                  <ArrowRight className="h-4 w-4" strokeWidth={2.5} aria-hidden />
                </ButtonLink>
                <Link
                  href="/get-involved#transparency"
                  className="text-sm font-semibold text-white/95 underline decoration-white/35 underline-offset-[6px] transition-colors hover:text-white hover:decoration-white"
                >
                  Full transparency notes
                </Link>
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
