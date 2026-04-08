import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, ExternalLink } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { hero } from "@/lib/unsplash";

const topics = [
  {
    title: "Poverty eradication",
    blurb:
      "Multidimensional poverty—income, health, education—and community-led approaches that create lasting change.",
    href: "/resources",
    image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&w=800&q=80",
  },
  {
    title: "Education & youth",
    blurb:
      "Literacy, ethics, and life skills so young people can learn with confidence and serve their communities.",
    href: "/resources",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&w=800&q=80",
  },
  {
    title: "Community development",
    blurb:
      "Local leadership, accountability, and partnerships that keep programs owned by the people they serve.",
    href: "/resources",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&w=800&q=80",
  },
];

export function ResourcesSection() {
  return (
    <section id="resources" className="scroll-mt-24 bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative order-2 overflow-hidden rounded-2xl shadow-lg ring-1 ring-slate-200/60 lg:order-1">
            <div className="relative aspect-[4/3] sm:aspect-[5/4] lg:min-h-[420px] lg:aspect-auto">
              <Image
                src={hero.resources}
                alt=""
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 42vw, 100vw"
                priority={false}
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-slate-900/55 via-transparent to-transparent"
                aria-hidden
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-accent">
                  <BookOpen className="h-4 w-4" aria-hidden />
                  Learning hub
                </p>
                <p className="heading-font mt-2 max-w-md text-xl font-bold text-white sm:text-2xl">
                  Curated topics on justice, learning, and development
                </p>
                <ButtonLink
                  href="/resources"
                  variant="outline"
                  size="sm"
                  className="mt-6 shadow-md"
                >
                  Open resource library
                  <ArrowRight className="h-4 w-4" strokeWidth={2.5} aria-hidden />
                </ButtonLink>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <SectionHeading
              align="left"
              eyebrow="Resources"
              title="Research, articles, and practical guides"
              subtitle="Explore materials on poverty reduction, education, and community development—plus links to deeper reading and partner resources you can drop in over time."
              className="max-w-none"
            />

            <ul className="mt-10 space-y-4">
              {topics.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="group flex gap-4 rounded-2xl border border-slate-200/90 bg-slate-50/80 p-4 transition-all hover:border-primary/30 hover:bg-white hover:shadow-md sm:p-5"
                  >
                    <div className="relative h-24 w-28 shrink-0 overflow-hidden rounded-xl sm:h-28 sm:w-32">
                      <Image
                        src={item.image}
                        alt=""
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="128px"
                      />
                    </div>
                    <div className="min-w-0 flex-1 py-1">
                      <h3 className="heading-font text-base font-bold uppercase text-slate-900 group-hover:text-primary sm:text-lg">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                        {item.blurb}
                      </p>
                      <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                        View on resources
                        <ExternalLink className="h-3.5 w-3.5 opacity-80" aria-hidden />
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>

            <ButtonLink
              href="/resources"
              variant="outlineDark"
              size="sm"
              className="mt-10"
            >
              Browse all resources
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} aria-hidden />
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
