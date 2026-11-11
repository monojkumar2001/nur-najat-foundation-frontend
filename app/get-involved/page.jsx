import Link from "next/link";
import { ArrowUpRight, CheckCircle } from "lucide-react";
import { PageHeader } from "@/components/Layout/PageHeader";
import { VolunteerForm } from "@/components/get-involved/VolunteerForm";
import { JoinUsSection } from "@/components/home/JoinUsSection";
import { fetchGetInvolvedPage } from "@/lib/get-involved";
import { hero } from "@/lib/unsplash";

export const metadata = {
  keywords: ['Nur and Najat Foundation', 'community development', 'Bangladesh NGO'],
  title: "Get Involved | Nur and Najat Foundation",
  description:
    "Volunteer with Nur & Najat Foundation — support education, women’s development, healthcare, environment and community programmes.",
};

export default async function GetInvolvedPage() {
  const page = await fetchGetInvolvedPage();

  const heroTitle = page?.hero?.title || "Get involved";
  const heroDescription =
    page?.hero?.description ||
    "Meaningful change happens when people come together with purpose — stand beside communities with practical support, skills and encouragement.";
  const heroImage = page?.hero?.image || hero.getInvolved;

  const intro = page?.intro || {};
  const volunteer = page?.volunteer || {};
  const ways = page?.ways || {};
  const fund = page?.fund || {};

  const introParagraphs = intro.paragraphs || [];
  const volunteerParagraphs = volunteer.paragraphs || [];
  const volunteerHighlights = volunteer.highlights || [];
  const volunteerWays = ways.items || [];
  const fundSplit = fund.items || [];

  return (
    <>
      <PageHeader
        eyebrow="Get involved"
        title={heroTitle}
        description={heroDescription}
        image={heroImage}
        imageAlt="Volunteers and community members working together"
      />

      <div className="relative -mt-6 overflow-hidden rounded-t-3xl bg-white shadow-sm ring-1 ring-slate-200/80">
        <div className="mx-auto max-w-7xl space-y-16 px-4 py-14 sm:space-y-20 sm:px-6 sm:py-16 lg:px-8">
          {introParagraphs.length ? (
            <section aria-labelledby="get-involved-intro">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                {intro.eyebrow || "Get involved"}
              </p>
              <h2
                id="get-involved-intro"
                className="heading-font mt-2 text-2xl font-bold uppercase text-slate-900 sm:text-3xl"
              >
                {intro.title || "Stand beside communities with purpose"}
              </h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600 sm:text-lg">
                {introParagraphs.map((p) => (
                  <p key={p.slice(0, 48)}>{p}</p>
                ))}
              </div>
            </section>
          ) : null}

          <section id="volunteer" className="scroll-mt-28">
            <div className="grid gap-12 lg:grid-cols-12 lg:items-start lg:gap-14">
              <div className="space-y-8 lg:col-span-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                    {volunteer.eyebrow || "Volunteer with us"}
                  </p>
                  <h2 className="heading-font mt-2 text-2xl font-bold uppercase text-slate-900 sm:text-3xl">
                    {volunteer.title || "Be part of real change"}
                  </h2>
                  {volunteerParagraphs.length ? (
                    <div className="mt-5 space-y-4 text-base leading-relaxed text-slate-600">
                      {volunteerParagraphs.map((p) => (
                        <p key={p.slice(0, 48)}>{p}</p>
                      ))}
                    </div>
                  ) : null}
                </div>

                {volunteerHighlights.length ? (
                  <ul className="space-y-3">
                    {volunteerHighlights.map((text) => (
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
                ) : null}
              </div>

              <div className="lg:col-span-7">
                <div className="lg:sticky lg:top-24">
                  <div className="rounded-xl border border-slate-200/80 bg-white p-6 shadow-lg ring-1 ring-slate-200/60 sm:p-8">
                    <h3 className="heading-font text-lg font-bold text-slate-900 sm:text-xl">
                      {volunteer.formTitle || "Application form"}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600">
                      {volunteer.formSubtitle ||
                        "Share your details and interests. Our team will follow up with next steps."}
                    </p>
                    <div className="mt-6">
                      <VolunteerForm interestOptions={volunteerWays} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {volunteerWays.length ? (
            <section id="ways-to-volunteer" className="scroll-mt-28">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                    {ways.eyebrow || "Ways to volunteer"}
                  </p>
                  <h2 className="heading-font mt-2 text-2xl font-bold uppercase text-slate-900 sm:text-3xl">
                    {ways.title || "Find a role that fits you"}
                  </h2>
                </div>
                <Link
                  href="/donate"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary-dark"
                >
                  Prefer to give?
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>

              <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {volunteerWays.map((role, idx) => (
                  <li
                    key={role.title}
                    className="rounded-2xl border border-slate-200/90 bg-linear-to-br from-slate-50 to-white p-6 shadow-sm ring-1 ring-slate-100"
                  >
                    <p className="text-sm font-bold uppercase leading-snug text-slate-900 sm:text-base">
                      {idx + 1}. {role.title}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-[0.9375rem]">
                      {role.description}
                    </p>
                  </li>
                ))}
              </ul>

              {ways.footer ? (
                <p className="mt-8 text-base leading-relaxed text-slate-600 sm:text-lg">
                  {ways.footer}
                </p>
              ) : null}
            </section>
          ) : null}
        </div>

        <JoinUsSection />

        {fundSplit.length ? (
          <section id="transparency" className="scroll-mt-28 pb-20 pt-4 sm:pb-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                    {fund.eyebrow || "Transparency"}
                  </p>
                  <h2 className="heading-font mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
                    {fund.title || "How funds are used"}
                  </h2>
                  {fund.description ? (
                    <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
                      {fund.description}
                    </p>
                  ) : null}
                </div>
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
                    <p className="mt-3 text-sm font-semibold text-slate-900">
                      {row.label}
                    </p>
                    <p className="mt-2 text-xs leading-relaxed text-slate-600">
                      {row.detail}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ) : null}
      </div>
    </>
  );
}
