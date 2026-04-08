import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";

const mediaImage =
  "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80";

export function InitiativesSection() {
  return (
    <section className="bg-slate-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-video overflow-hidden rounded-2xl shadow-lg lg:aspect-[4/3]">
            <Image
              src={mediaImage}
              alt="Team collaboration during a community workshop"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-navy/20">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/95 text-primary shadow-lg">
                <svg className="ml-1 h-7 w-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M8 5v14l11-7L8 5z" />
                </svg>
              </span>
            </div>
          </div>
          <div>
            <SectionHeading
              eyebrow="Featured initiative"
              title="Grassroots leadership accelerator"
              subtitle="We train local coordinators in program design, safeguarding, and fundraising — so impact continues long after our staff step back."
              align="left"
              className="max-w-none"
            />
            <ul className="mt-6 space-y-3 text-muted">
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                Cohort-based learning with mentors from the social sector.
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                Seed funding for the top community-led project ideas.
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                Open toolkit: templates, M&E guides, and partner contacts.
              </li>
            </ul>
            <a
              href="/programs"
              className="mt-8 inline-flex text-sm font-semibold text-primary hover:text-primary-dark"
            >
              Explore all initiatives →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
