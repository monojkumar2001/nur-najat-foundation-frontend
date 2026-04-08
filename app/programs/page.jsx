import Image from "next/image";
import { PageHeader } from "@/components/Layout/PageHeader";
import { hero, thumb } from "@/lib/unsplash";

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
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl ring-1 ring-slate-200/60">
                <Image
                  src={thumb.community}
                  alt="Community outreach and support"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
              <div>
                <h2 className="heading-font text-2xl font-bold text-slate-900 sm:text-3xl">
                  Humanitarian activities
                </h2>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  Community outreach, emergency relief where appropriate, and
                  ongoing support for vulnerable households — designed with local
                  partners.
                </p>
                <div className="mt-8 rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-100">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-primary">
                    Impact snapshot
                  </h3>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
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
                <ul className="mt-6 space-y-4 text-slate-600">
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    Literacy circles and after-school support for children and
                    youth.
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    Scholarships and learning materials for families facing
                    hardship.
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    Values-based modules emphasizing ethics, service, and
                    community responsibility.
                  </li>
                </ul>
              </div>
              <div className="relative order-1 aspect-[4/3] overflow-hidden rounded-2xl shadow-xl ring-1 ring-slate-200/60 lg:order-2">
                <Image
                  src={thumb.education}
                  alt="Students learning together"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
            </div>
          </section>

          <section id="training" className="scroll-mt-28">
            <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl ring-1 ring-slate-200/60 lg:aspect-auto lg:min-h-[320px]">
                <Image
                  src={thumb.workshop}
                  alt="Skills training workshop"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
              <div>
                <h2 className="heading-font text-2xl font-bold text-slate-900 sm:text-3xl">
                  Training programs
                </h2>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  Workshops and vocational training to help individuals earn income
                  and lead community initiatives.
                </p>
                <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-slate-900 text-white">
                      <tr>
                        <th className="px-4 py-3 font-semibold">Session</th>
                        <th className="px-4 py-3 font-semibold">Date</th>
                        <th className="px-4 py-3 font-semibold">Format</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 bg-white">
                      <tr className="hover:bg-slate-50/80">
                        <td className="px-4 py-4 text-slate-700">
                          Income skills — small business basics
                        </td>
                        <td className="px-4 py-4 text-slate-600">TBD</td>
                        <td className="px-4 py-4 text-slate-600">In person</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <td className="px-4 py-4 text-slate-700">
                          Digital literacy for youth
                        </td>
                        <td className="px-4 py-4 text-slate-600">TBD</td>
                        <td className="px-4 py-4 text-slate-600">Hybrid</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <td className="px-4 py-4 text-slate-700">
                          Community facilitator training
                        </td>
                        <td className="px-4 py-4 text-slate-600">TBD</td>
                        <td className="px-4 py-4 text-slate-600">In person</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-4 text-sm text-slate-500">
                  Connect this table to your CMS or calendar.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
