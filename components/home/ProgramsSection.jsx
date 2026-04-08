import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";

const programs = [
  {
    title: "Education",
    description:
      "Scholarships, after-school support, and teacher training to help every child stay in school and thrive.",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Healthcare",
    description:
      "Preventive care, maternal health, and nutrition outreach that reaches underserved neighborhoods.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Community Development",
    description:
      "Livelihood skills, clean water initiatives, and local leadership grants for grassroots projects.",
    image:
      "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=600&q=80",
  },
];

export function ProgramsSection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Programs"
          title="Where we focus our impact"
          subtitle="Three pillars guide our work — so support goes far and stays rooted in community needs."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {programs.map((p) => (
            <article
              key={p.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-slate-50/50 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={p.image}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="heading-font text-xl font-bold text-navy">
                  {p.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {p.description}
                </p>
                <a
                  href="/programs"
                  className="mt-4 text-sm font-semibold text-primary hover:text-primary-dark"
                >
                  Learn more →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
