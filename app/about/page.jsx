import Image from "next/image";
import { PageHeader } from "@/components/Layout/PageHeader";
import { hero, thumb } from "@/lib/unsplash";

export const metadata = {
  title: "About Us | Nur and Najat Foundation",
  description: "Mission, vision, team, and stories from our community.",
};

const teamPhotos = [
  {
    name: "Founding member",
    role: "Executive direction",
    src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&w=400&q=80",
  },
  {
    name: "Program lead",
    role: "Education & training",
    src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&w=400&q=80",
  },
  {
    name: "Field coordinator",
    role: "Humanitarian programs",
    src: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&w=400&q=80",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title="Who we are"
        description="Nur and Najat Foundation works with communities to expand access to education, humanitarian support, and skills that break cycles of poverty."
        image={hero.about}
        imageAlt="People collaborating in a community learning space"
      />

      <div className="relative -mt-6 overflow-hidden rounded-t-3xl bg-white shadow-sm ring-1 ring-slate-200/80">
        <div className="mx-auto max-w-7xl space-y-20 px-4 py-16 sm:px-6 lg:px-8">
          <section id="mission" className="scroll-mt-28">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src={thumb.handHeart}
                  alt="Volunteers supporting community"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                />
              </div>
              <div>
                <h2 className="heading-font text-2xl font-bold text-slate-900 sm:text-3xl">
                  Mission &amp; vision
                </h2>
                <div className="mt-8 space-y-6">
                  <div className="rounded-2xl border border-slate-100 bg-slate-50/80 p-6 backdrop-blur-sm">
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-primary">
                      Mission
                    </h3>
                    <p className="mt-3 text-slate-600 leading-relaxed">
                      To partner with underserved communities through humanitarian
                      outreach, quality education, and practical training — so
                      people can lead dignified, self-reliant lives.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-primary/20 bg-white p-6 shadow-sm">
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-primary">
                      Vision
                    </h3>
                    <p className="mt-3 text-slate-600 leading-relaxed">
                      A society where every child can learn, every family can
                      access essential support, and every adult has a pathway to
                      meaningful work and service.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="team" className="scroll-mt-28">
            <h2 className="heading-font text-2xl font-bold text-slate-900 sm:text-3xl">
              Team &amp; founders
            </h2>
            <p className="mt-4 max-w-3xl text-slate-600">
              Our leadership blends grassroots experience with program expertise.
              Replace with your real bios and photos anytime.
            </p>
            <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {teamPhotos.map((m) => (
                <li
                  key={m.name}
                  className="group overflow-hidden rounded-2xl border border-slate-200 bg-white text-center shadow-sm transition-shadow hover:shadow-lg"
                >
                  <div className="relative mx-auto aspect-square max-h-72 w-full overflow-hidden">
                    <Image
                      src={m.src}
                      alt={m.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(min-width: 1024px) 33vw, 50vw"
                    />
                  </div>
                  <div className="p-6">
                    <p className="font-semibold text-slate-900">{m.name}</p>
                    <p className="mt-1 text-sm text-slate-600">{m.role}</p>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section id="testimonials" className="scroll-mt-28">
            <h2 className="heading-font text-2xl font-bold text-slate-900 sm:text-3xl">
              Testimonials
            </h2>
            <p className="mt-4 text-slate-600">
              Voices from beneficiaries and volunteers who shape our programs.
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <blockquote className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                <div className="absolute right-4 top-4 h-16 w-16 rounded-full bg-primary/10" aria-hidden />
                <p className="relative text-slate-600 italic leading-relaxed">
                  &ldquo;The literacy circle gave my daughter confidence in school.
                  Volunteers treated us like neighbors, not cases.&rdquo;
                </p>
                <footer className="mt-6 flex items-center gap-3">
                  <div className="h-10 w-10 overflow-hidden rounded-full bg-slate-200">
                    <Image
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&w=100&h=100&q=80"
                      alt=""
                      width={40}
                      height={40}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <span className="text-sm font-semibold text-slate-900">
                    Beneficiary parent
                  </span>
                </footer>
              </blockquote>
              <blockquote className="rounded-2xl border border-slate-200 bg-gradient-to-br from-primary/5 to-white p-8 shadow-sm">
                <p className="text-slate-600 italic leading-relaxed">
                  &ldquo;Weekends on the outreach team reminded me why local action
                  matters. Clear roles and training made it easy to
                  contribute.&rdquo;
                </p>
                <footer className="mt-6 flex items-center gap-3">
                  <div className="h-10 w-10 overflow-hidden rounded-full bg-slate-200">
                    <Image
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&w=100&h=100&q=80"
                      alt=""
                      width={40}
                      height={40}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <span className="text-sm font-semibold text-slate-900">
                    Volunteer
                  </span>
                </footer>
              </blockquote>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
