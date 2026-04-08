import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function AboutSection() {
  return (
    <section className="bg-slate-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg  ring-offset-slate-50 transition-shadow duration-300 hover:shadow-xl">
            <Image
              src="/assets/images/who-we.png"
              alt="Caregiver holding a young child — community and family support"
              fill
              className="object-cover object-center transition-transform duration-700 ease-out motion-reduce:transition-none motion-reduce:group-hover:scale-100 group-hover:scale-110"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="Who We Are"
              title="Building brighter futures, together"
              subtitle="Nur and Najat Foundation is a non-profit committed to equitable access to education and health services. We listen first, then invest in programs shaped by the communities we serve."
              align="left"
              className="max-w-none"
            />
            <p className="mt-4 text-lg text-muted leading-relaxed">
              We empower youth and communities to build a future free from
              poverty.
            </p>
            <div className="mt-4 md:mt-6">
              <ButtonLink href="/about" variant="primary" className="px-6">
                Learn More
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
