import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/Layout/PageHeader";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { JoinUsSection } from "@/components/home/JoinUsSection";
import { Reveal } from "@/components/motion/Reveal";
import { programs } from "@/lib/programs";
import { getProgramHeroImage } from "@/lib/unsplash";

export function ProgramDetail({ program }) {
  const currentIndex = programs.findIndex((p) => p.slug === program.slug);
  const prev = currentIndex > 0 ? programs[currentIndex - 1] : null;
  const next =
    currentIndex >= 0 && currentIndex < programs.length - 1
      ? programs[currentIndex + 1]
      : null;

  return (
    <>
      <PageHeader
        eyebrow={program.eyebrow}
        title={program.title}
        description={program.summary}
        image={getProgramHeroImage(program.slug)}
        imageAlt={program.imageAlt}
      />

      <div className="relative -mt-6 overflow-hidden rounded-t-3xl bg-white shadow-sm ring-1 ring-slate-200/80">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
          <Reveal y={14}>
            <Link
              href="/programs"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden />
              All programmes
            </Link>
          </Reveal>

          <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:items-start lg:gap-12">
            <Reveal className="lg:col-span-5" y={18}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.25rem] shadow-xl ring-1 ring-slate-200/60">
                <Image
                  src={program.image}
                  alt={program.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  priority
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-linear-to-t from-slate-900/50 via-slate-900/10 to-transparent"
                  aria-hidden
                />
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <p className="inline-flex rounded-full bg-white/95 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-800 shadow-sm">
                    {program.eyebrow}
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <ButtonLink href="/get-involved" variant="primary" className="px-6">
                  Get involved
                </ButtonLink>
                <ButtonLink href="/donate" variant="outlineDark" className="px-6">
                  Donate
                </ButtonLink>
              </div>
            </Reveal>

            <Reveal className="lg:col-span-7" delay={0.05} y={18}>
              <div className="space-y-10">
                {program.sections.map((section, idx) => (
                  <div key={section.title ?? `section-${idx}`}>
                    {section.title ? (
                      <h2 className="heading-font text-xl font-bold uppercase text-slate-900 sm:text-2xl">
                        {section.title}
                      </h2>
                    ) : null}
                    <div
                      className={`${section.title ? "mt-4" : ""} space-y-4 text-base leading-relaxed text-muted sm:text-lg`}
                    >
                      {section.paragraphs.map((p) => (
                        <p key={p.slice(0, 56)}>{p}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="mt-14 flex items-start justify-between gap-4 border-t border-slate-200 pt-8">
            {prev ? (
              <Link
                href={`/programs/${prev.slug}`}
                className="group inline-flex min-w-0 max-w-[48%] items-start gap-2 text-sm font-semibold text-slate-700 hover:text-primary"
              >
                <ArrowLeft className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
                <span className="min-w-0 text-left">
                  <span className="block text-xs font-medium uppercase tracking-wide text-slate-400">
                    Previous
                  </span>
                  <span className="block break-words">{prev.shortTitle}</span>
                </span>
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link
                href={`/programs/${next.slug}`}
                className="group ml-auto inline-flex min-w-0 max-w-[48%] items-start justify-end gap-2 text-sm font-semibold text-slate-700 hover:text-primary"
              >
                <span className="min-w-0 text-right">
                  <span className="block text-xs font-medium uppercase tracking-wide text-slate-400">
                    Next
                  </span>
                  <span className="block break-words">{next.shortTitle}</span>
                </span>
                <ArrowRight className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
              </Link>
            ) : null}
          </div>
        </div>

        <Reveal delay={0.04}>
          <JoinUsSection />
        </Reveal>
      </div>
    </>
  );
}
