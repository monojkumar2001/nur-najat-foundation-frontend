import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/Layout/PageHeader";
import { VolunteerForm } from "@/components/get-involved/VolunteerForm";
import { hero, thumb } from "@/lib/unsplash";

export const metadata = {
  title: "Get Involved | Nur and Najat Foundation",
  description: "Volunteer, donate, and see how funds support our work.",
};

export default function GetInvolvedPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get involved"
        title="Volunteer, give, stay informed"
        description="Join as a volunteer, support programs with a donation, and read how we steward resources."
        image={hero.getInvolved}
        imageAlt="Volunteers helping pack supplies for the community"
      />

      <div className="relative -mt-6 overflow-hidden rounded-t-3xl bg-white shadow-sm ring-1 ring-slate-200/80">
        <div className="mx-auto max-w-7xl space-y-20 px-4 py-16 sm:px-6 lg:px-8">
          <section id="volunteer" className="scroll-mt-28">
            <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="relative hidden overflow-hidden rounded-2xl shadow-lg ring-1 ring-slate-200/60 lg:block">
                <div className="relative aspect-[4/5]">
                  <Image
                    src={thumb.volunteer}
                    alt="People volunteering together"
                    fill
                    className="object-cover"
                    sizes="50vw"
                  />
                </div>
              </div>
              <div>
                <h2 className="heading-font text-2xl font-bold text-slate-900 sm:text-3xl">
                  Volunteer registration
                </h2>
                <p className="mt-4 text-slate-600">
                  Typical commitments range from 4–8 hours per month for events to
                  seasonal field outreach. Orientation and safeguarding basics
                  included.
                </p>
                <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                  <VolunteerForm />
                </div>
              </div>
            </div>
          </section>

          <section className="overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary-dark p-8 text-white shadow-xl sm:p-12">
            <div className="grid items-center gap-8 lg:grid-cols-2">
              <div>
                <h2 className="heading-font text-2xl font-bold sm:text-3xl">
                  Donation platform
                </h2>
                <p className="mt-4 max-w-xl text-white/90 leading-relaxed">
                  One-time and recurring gifts keep education and outreach running.
                  Integrate your payment provider on the donate page.
                </p>
                <Link
                  href="/donate"
                  className="mt-8 inline-flex rounded-xl bg-white px-8 py-3 text-sm font-bold text-primary shadow-md transition-transform hover:scale-[1.02] hover:bg-slate-50"
                >
                  Go to donate
                </Link>
              </div>
              <div className="relative aspect-video overflow-hidden rounded-2xl ring-2 ring-white/30 lg:aspect-auto lg:min-h-[200px]">
                <Image
                  src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&w=800&q=80"
                  alt=""
                  fill
                  className="object-cover opacity-95"
                />
              </div>
            </div>
          </section>

          <section id="transparency" className="scroll-mt-28">
            <h2 className="heading-font text-2xl font-bold text-slate-900 sm:text-3xl">
              How funds are used
            </h2>
            <p className="mt-4 max-w-3xl text-slate-600">
              Clear, project-level reporting. Replace with audited summaries.
            </p>
            <ul className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                { label: "Programs & direct aid", pct: "70%" },
                { label: "Operations & learning", pct: "20%" },
                { label: "Reserve & compliance", pct: "10%" },
              ].map((row) => (
                <li
                  key={row.label}
                  className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-md"
                >
                  <p className="heading-font text-4xl font-bold text-primary">
                    {row.pct}
                  </p>
                  <p className="mt-2 text-sm text-slate-600">{row.label}</p>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </>
  );
}
