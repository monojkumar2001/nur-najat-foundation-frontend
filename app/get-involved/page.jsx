import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle } from "lucide-react";
import { PageHeader } from "@/components/Layout/PageHeader";
import { VolunteerForm } from "@/components/get-involved/VolunteerForm";
import { hero, thumb } from "@/lib/unsplash";
import { JoinUsSection } from "@/components/home/JoinUsSection";

export const metadata = {
  title: "Get Involved | Nur and Najat Foundation",
  description: "Volunteer, donate, and see how funds support our work.",
};

const volunteerPoints = [
  "Typical commitments range from 4–8 hours per month for events to seasonal field outreach.",
  "Orientation, safeguarding basics, and ongoing learning resources for every volunteer.",
  "Roles include community outreach, program support, events, and skills-based help.",
];

const fundSplit = [
  { label: "Programs & direct aid", pct: "70%", detail: "Goes straight to participants and materials." },
  { label: "Operations & learning", pct: "20%", detail: "Coordination, training, and quality improvement." },
  { label: "Reserve & compliance", pct: "10%", detail: "Risk buffer and regulatory obligations." },
];

export default function GetInvolvedPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get involved"
        title="Volunteer, give, stay informed"
        description="Join as a volunteer, support programs with a donation, and see how we steward resources with partners and communities."
        image={hero.getInvolved}
        imageAlt="Volunteers helping pack supplies for the community"
      />

      <div className="relative -mt-6 overflow-hidden rounded-t-3xl bg-white">
        <div className="mx-auto max-w-7xl space-y-20 px-4 py-14 sm:space-y-24 sm:px-6 sm:py-16 lg:px-8">
          <section id="volunteer" className="scroll-mt-28">
            <div className="grid gap-12 lg:grid-cols-12 lg:items-start lg:gap-14">
              <div className="space-y-10 lg:col-span-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                    Volunteer
                  </p>
                  <h2 className="heading-font mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
                    Register your interest
                  </h2>
                  <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600">
                    We match your time and skills with programs that need reliable, welcoming support.
                    Whether you can help weekly or for one-off events, we would love to hear from you.
                  </p>
                </div>

                <ul className="space-y-4">
                  {volunteerPoints.map((text) => (
                    <li
                      key={text}
                      className="flex gap-3 text-sm leading-relaxed text-slate-700 sm:text-base"
                    >
                      <CheckCircle
                        className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                        aria-hidden
                      />
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  <div className="rounded-2xl border border-slate-200/90 bg-linear-to-br from-slate-50 to-white px-4 py-4 shadow-sm ring-1 ring-slate-100">
                    <p className="text-2xl font-bold text-slate-900">4–8h</p>
                    <p className="mt-1 text-xs font-medium text-slate-600">Typical monthly time</p>
                  </div>
                  <div className="rounded-2xl border border-slate-200/90 bg-linear-to-br from-slate-50 to-white px-4 py-4 shadow-sm ring-1 ring-slate-100">
                    <p className="text-2xl font-bold text-slate-900">All</p>
                    <p className="mt-1 text-xs font-medium text-slate-600">Backgrounds welcome</p>
                  </div>
                  <div className="col-span-2 rounded-2xl border border-slate-200/90 bg-linear-to-br from-primary/5 to-white px-4 py-4 shadow-sm ring-1 ring-primary/15 sm:col-span-1">
                    <p className="text-2xl font-bold text-primary">Free</p>
                    <p className="mt-1 text-xs font-medium text-slate-600">Orientation included</p>
                  </div>
                </div>


              </div>

              <div className="lg:col-span-7">
                <div className="lg:sticky lg:top-24">
                  <div className="rounded-xl p-6 shadow-lg ring-1 ring-slate-200/60 sm:p-8">
                    <h3 className="heading-font text-lg font-bold text-slate-900 sm:text-xl">
                      Application form
                    </h3>
                    <p className="mt-2 text-sm text-slate-600">
                      Share your details and interests. Our team will follow up with next steps.
                    </p>
                    <div className="mt-6">
                      <VolunteerForm />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <JoinUsSection />

      <section id="transparency" className="scroll-mt-28  pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                Transparency
              </p>
              <h2 className="heading-font mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
                How funds are used
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
                High-level allocation model for planning and reporting. Replace with audited summaries
                or dashboards when you publish annual reports.
              </p>
            </div>
            <div className="hidden h-px flex-1 max-w-md bg-linear-to-r from-transparent via-slate-300 to-transparent sm:block" aria-hidden />
          </div>
          <ul className="mt-10 grid gap-5 sm:grid-cols-3">
            {fundSplit.map((row) => (
              <li
                key={row.label}
                className="group rounded-2xl border border-slate-200/90 bg-linear-to-b from-white to-slate-50/80 p-7 text-center shadow-sm ring-1 ring-slate-100 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:ring-primary/20 motion-reduce:transform-none"
              >
                <p className="heading-font text-4xl font-bold text-primary tabular-nums sm:text-5xl">
                  {row.pct}
                </p>
                <p className="mt-3 text-sm font-semibold text-slate-900">{row.label}</p>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">{row.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

    </>
  );
}
