import Image from "next/image";
import { PageHeader } from "@/components/Layout/PageHeader";
import { hero, thumb } from "@/lib/unsplash";
import {
  BookOpen,
  CalendarDays,
  HandHeart,
  Monitor,
  School,
  Sparkles,
  Users,
} from "lucide-react";

const trainingSessions = [
  {
    title: "Income skills — small business basics",
    date: "TBD",
    format: "In person",
    Icon: Users,
  },
  {
    title: "Digital literacy for youth",
    date: "TBD",
    format: "Hybrid",
    Icon: Monitor,
  },
  {
    title: "Community facilitator training",
    date: "TBD",
    format: "In person",
    Icon: HandHeart,
  },
];

export const metadata = {
  title: "Programs | Nur and Najat Foundation",
  description:
    "Humanitarian activities, educational development, and training programs.",
};

export default function ProgramsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Programs"
        title="What we do"
        description="Humanitarian support on the ground, education that opens doors, and training that builds livelihoods — rooted in community partnership."
        image={hero.programs}
        imageAlt="Community coming together outdoors"
      />

      <div className="relative -mt-6 overflow-hidden rounded-t-3xl bg-white shadow-sm ring-1 ring-slate-200/80">
        <div className="mx-auto max-w-7xl space-y-24 px-4 py-16 sm:px-6 lg:px-8">
          <section id="humanitarian" className="scroll-mt-28">
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <div className="relative aspect-4/3 overflow-hidden rounded-[1.25rem] shadow-xl ring-1 ring-slate-200/60">
                <Image
                  src={thumb.community}
                  alt="Community outreach and support"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-linear-to-t from-slate-900/55 via-slate-900/10 to-transparent"
                  aria-hidden
                />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <p className="inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-800 shadow-sm ring-1 ring-white/80 backdrop-blur-sm">
                    <HandHeart
                      className="h-3.5 w-3.5 text-primary"
                      aria-hidden
                    />
                    Community & care
                  </p>
                  <p className="mt-3 max-w-sm text-sm font-medium leading-relaxed text-white drop-shadow-sm">
                    Relief and outreach that respects local priorities — built with
                    neighbours, not for them.
                  </p>
                </div>
              </div>
              <div>
                <h2 className="heading-font text-2xl font-bold text-slate-900 sm:text-3xl">
                  Humanitarian activities
                </h2>
                <p className="mt-4 text-muted text-lg leading-relaxed">
                  Community outreach, emergency relief where appropriate, and
                  ongoing support for vulnerable households — designed with local
                  partners.
                </p>
                <div className="mt-8 rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-100">
                  <h3 className="text-base font-semibold uppercase tracking-wide text-primary">
                    Impact snapshot
                  </h3>
                  <p className="mt-3 text-base text-muted leading-relaxed">
                    Add your case study: families reached, supplies distributed,
                    follow-up support, and lessons learned. Pair with charts from
                    your annual report.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="education" className="scroll-mt-28">
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <div className="order-2 lg:order-1">
                <h2 className="heading-font text-2xl font-bold text-slate-900 sm:text-3xl">
                  Educational development
                </h2>
                <ul className="mt-6 space-y-4 text-muted text-lg">
                  <li className="flex gap-3">
                    <span className="mt-1">
                      <School className="h-4 w-4 text-primary" aria-hidden />
                    </span>
                    Literacy circles and after-school support for children and
                    youth.
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1">
                      <School className="h-4 w-4 text-primary" aria-hidden />
                    </span>
                    Scholarships and learning materials for families facing
                    hardship.
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1">
                      <School className="h-4 w-4 text-primary" aria-hidden />
                    </span>
                    Values-based modules emphasizing ethics, service, and
                    community responsibility.
                  </li>
                </ul>
              </div>
              <div className="relative order-1 aspect-4/3 overflow-hidden rounded-[1.25rem] shadow-xl ring-1 ring-slate-200/60 lg:order-2">
                <Image
                  src={thumb.education}
                  alt="Students learning together"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-linear-to-t from-slate-900/55 via-slate-900/10 to-transparent"
                  aria-hidden
                />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <p className="inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-800 shadow-sm ring-1 ring-white/80 backdrop-blur-sm">
                    <School className="h-3.5 w-3.5 text-primary" aria-hidden />
                    Learning & opportunity
                  </p>
                  <p className="mt-3 max-w-sm text-sm font-medium leading-relaxed text-white drop-shadow-sm">
                    Literacy, scholarships, and values-based support — so every
                    child can grow with confidence.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="training" className="scroll-mt-28">
            <div className="grid items-stretch gap-10 lg:grid-cols-2 lg:gap-14">
              <div className="relative min-h-[260px] overflow-hidden rounded-[1.25rem] shadow-xl ring-1 ring-slate-200/60 lg:min-h-[360px]">
                <Image
                  src={thumb.workshop}
                  alt="Skills training workshop"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 46vw, 100vw"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-linear-to-t from-slate-900/55 via-slate-900/10 to-transparent"
                  aria-hidden
                />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <p className="inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-800 shadow-sm ring-1 ring-white/80 backdrop-blur-sm">
                    <Sparkles className="h-3.5 w-3.5 text-primary" aria-hidden />
                    Skills & livelihoods
                  </p>
                  <p className="mt-3 max-w-sm text-sm font-medium leading-relaxed text-white drop-shadow-sm">
                    Hands-on sessions designed with participants — not one-size
                    curriculum.
                  </p>
                </div>
              </div>

              <div className="flex flex-col justify-center">
                <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/25 bg-primary/5 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                  <BookOpen className="h-3.5 w-3.5" aria-hidden />
                  Upcoming sessions
                </span>
                <h2 className="heading-font mt-4 text-2xl font-bold text-slate-900 sm:text-3xl">
                  Training programs
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-muted">
                  Workshops and vocational training to help individuals earn income
                  and lead community initiatives.
                </p>

                <ul className="mt-8 list-none space-y-3 p-0">
                  {trainingSessions.map((session) => {
                    const SessionIcon = session.Icon;
                    return (
                      <li
                        key={session.title}
                        className="group rounded-2xl border border-slate-200/90 bg-linear-to-br from-white to-slate-50/80 p-4 shadow-sm ring-1 ring-slate-100 transition duration-300 hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-md hover:ring-primary/15 motion-reduce:transform-none sm:p-5"
                      >
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                          <div className="flex gap-3 sm:min-w-0 sm:flex-1">
                            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/15">
                              <SessionIcon className="h-5 w-5" aria-hidden />
                            </span>
                            <div className="min-w-0">
                              <p className="font-semibold leading-snug text-slate-900">
                                {session.title}
                              </p>
                            </div>
                          </div>
                          <div className="flex flex-wrap items-center gap-2 sm:shrink-0">
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">
                              <CalendarDays
                                className="h-3.5 w-3.5 text-primary"
                                aria-hidden
                              />
                              {session.date}
                            </span>
                            <span className="inline-flex rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs font-semibold text-slate-700">
                              {session.format}
                            </span>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>

                <p className="mt-6 text-sm text-slate-500">
                  Connect this schedule to your CMS or calendar.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
