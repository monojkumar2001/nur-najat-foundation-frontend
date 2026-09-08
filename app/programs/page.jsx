import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/Layout/PageHeader";
import { Reveal } from "@/components/motion/Reveal";
import { programs } from "@/lib/programs";
import { hero } from "@/lib/unsplash";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Programs | Nur and Najat Foundation",
  description:
    "Explore NNF programmes in education, health, solar lighting, WASH, environment and women’s empowerment.",
};

export default function ProgramsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Programs"
        title="Programme areas"
        description="Education, health, infrastructure, WASH, environment and women’s empowerment — designed to respond to immediate needs and build stronger communities."
        image={hero.programs}
        imageAlt="Community programmes and partnership"
      />

      <div className="relative -mt-6 overflow-hidden rounded-t-3xl bg-white shadow-sm ring-1 ring-slate-200/80">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {programs.map((p, i) => (
              <Reveal key={p.slug} delay={Math.min(i * 0.04, 0.2)} y={18}>
                <Link
                  href={`/programs/${p.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-md ring-1 ring-slate-200/50 transition hover:-translate-y-1 hover:shadow-xl motion-reduce:transform-none"
                >
                  <div className="relative aspect-16/10 overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.imageAlt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                      {p.eyebrow}
                    </p>
                    <h2 className="heading-font mt-2 text-xl font-bold uppercase text-slate-900">
                      {p.cardTitle}
                    </h2>
                    <p className="mt-3 flex-1 text-base leading-relaxed text-muted">
                      {p.summary}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:text-primary-dark">
                      Learn more
                      <ArrowRight className="h-4 w-4" aria-hidden />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
