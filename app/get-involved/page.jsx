import Link from "next/link";
import { ArrowUpRight, CheckCircle } from "lucide-react";
import { PageHeader } from "@/components/Layout/PageHeader";
import { VolunteerForm } from "@/components/get-involved/VolunteerForm";
import { JoinUsSection } from "@/components/home/JoinUsSection";
import { hero } from "@/lib/unsplash";

export const metadata = {
  title: "Get Involved | Nur and Najat Foundation",
  description:
    "Volunteer with Nur & Najat Foundation — support education, women’s development, healthcare, environment and community programmes.",
};

const introParagraphs = [
  "Nur & Najat Foundation believes meaningful change happens when people come together with purpose. Families facing hardship, women seeking opportunities and capable students at risk of leaving education do not need sympathy alone. They need practical support, access, encouragement and people willing to stand beside them.",
  "Your involvement can help strengthen social welfare initiatives, educational support, women’s development, healthcare, environmental action and community programmes. Whether you contribute time, professional skills, ideas, resources or financial support, your participation can help NNF reach more people and improve the quality of its work.",
  "Every initiative is intended to create more than short-term relief. Our goal is to restore dignity, build independence and open doors to opportunity. By getting involved, you become part of a shared effort to turn hardship into hope, potential into progress and community challenges into possibilities for lasting change.",
];

const volunteerParagraphs = [
  "Volunteers play an important role in helping NNF connect with communities and deliver programmes effectively. We welcome people with different interests, skills and levels of availability. Special qualifications are not always necessary; what matters most is commitment, compassion, reliability, respect and a willingness to learn.",
  "In social welfare activities, volunteers may support community engagement, aid distribution, awareness campaigns, event coordination and the identification of families or individuals who may need assistance. In women’s development programmes, volunteers may support workshops, mentoring, awareness activities and opportunities for skills and self-reliance.",
  "In education initiatives, volunteers can help organize learning materials, support scholarship activities, mentor students, provide appropriate tutoring and encourage young people to remain committed to their studies. Volunteers with communication skills can document field activities through writing, photography and video, helping NNF tell stories responsibly and show the impact and lessons of its work.",
];

const volunteerWays = [
  {
    title: "Field Support Volunteer",
    description:
      "Assist with community engagement, programme activities, awareness campaigns, distributions and events.",
  },
  {
    title: "Education Volunteer",
    description:
      "Support students through tutoring, mentoring, learning activities and scholarship-related programme assistance.",
  },
  {
    title: "Women’s Development Volunteer",
    description:
      "Assist with awareness, workshops, mentoring, skills initiatives and community outreach.",
  },
  {
    title: "Content Creator Volunteer",
    description:
      "Help document programmes through responsible writing, photography, video and storytelling.",
  },
  {
    title: "Online Ambassador",
    description:
      "Share verified NNF campaigns, updates and messages to help expand public awareness and engagement.",
  },
  {
    title: "General Volunteer",
    description:
      "Contribute across programmes according to current needs, your skills and your availability.",
  },
];

const fundSplit = [
  {
    label: "Programs & direct aid",
    pct: "70%",
    detail: "Goes straight to participants and materials.",
  },
  {
    label: "Operations & learning",
    pct: "20%",
    detail: "Coordination, training, and quality improvement.",
  },
  {
    label: "Reserve & compliance",
    pct: "10%",
    detail: "Risk buffer and regulatory obligations.",
  },
];

export default function GetInvolvedPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get involved"
        title="Get involved"
        description="Meaningful change happens when people come together with purpose — stand beside communities with practical support, skills and encouragement."
        image={hero.getInvolved}
        imageAlt="Volunteers and community members working together"
      />

      <div className="relative -mt-6 overflow-hidden rounded-t-3xl bg-white shadow-sm ring-1 ring-slate-200/80">
        <div className="mx-auto max-w-7xl space-y-16 px-4 py-14 sm:space-y-20 sm:px-6 sm:py-16 lg:px-8">
          <section aria-labelledby="get-involved-intro">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              Get involved
            </p>
            <h2
              id="get-involved-intro"
              className="heading-font mt-2 text-2xl font-bold uppercase text-slate-900 sm:text-3xl"
            >
              Stand beside communities with purpose
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              {introParagraphs.map((p) => (
                <p key={p.slice(0, 48)}>{p}</p>
              ))}
            </div>
          </section>

          <section id="volunteer" className="scroll-mt-28">
            <div className="grid gap-12 lg:grid-cols-12 lg:items-start lg:gap-14">
              <div className="space-y-8 lg:col-span-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                    Volunteer with us
                  </p>
                  <h2 className="heading-font mt-2 text-2xl font-bold uppercase text-slate-900 sm:text-3xl">
                    Be part of real change
                  </h2>
                  <div className="mt-5 space-y-4 text-base leading-relaxed text-slate-600">
                    {volunteerParagraphs.map((p) => (
                      <p key={p.slice(0, 48)}>{p}</p>
                    ))}
                  </div>
                </div>

                <ul className="space-y-3">
                  {[
                    "Commitment, compassion, reliability and respect matter most",
                    "Different interests, skills and availability are welcome",
                    "Special qualifications are not always required",
                  ].map((text) => (
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
              </div>

              <div className="lg:col-span-7">
                <div className="lg:sticky lg:top-24">
                  <div className="rounded-xl border border-slate-200/80 bg-white p-6 shadow-lg ring-1 ring-slate-200/60 sm:p-8">
                    <h3 className="heading-font text-lg font-bold text-slate-900 sm:text-xl">
                      Application form
                    </h3>
                    <p className="mt-2 text-sm text-slate-600">
                      Share your details and interests. Our team will follow up
                      with next steps.
                    </p>
                    <div className="mt-6">
                      <VolunteerForm />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="ways-to-volunteer" className="scroll-mt-28">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                  Ways to volunteer
                </p>
                <h2 className="heading-font mt-2 text-2xl font-bold uppercase text-slate-900 sm:text-3xl">
                  Find a role that fits you
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

            <p className="mt-8 text-base leading-relaxed text-slate-600 sm:text-lg">
              Every contribution matters. By volunteering with NNF, you become
              more than a supporter: you become part of a community of people
              working to create stronger opportunities for women, students,
              families and underserved communities.
            </p>
          </section>
        </div>

        <JoinUsSection />

        <section id="transparency" className="scroll-mt-28 pb-20 pt-4 sm:pb-24">
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
                  High-level allocation model for planning and reporting. Replace
                  with audited summaries or dashboards when annual reports are
                  published.
                </p>
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
      </div>
    </>
  );
}
