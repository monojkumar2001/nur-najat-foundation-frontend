import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/ButtonLink";

const aboutImage =
  "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=900&q=80";

export function AboutSection() {
  return (
    <section className="bg-slate-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
            <Image
              src={aboutImage}
              alt="Family spending time together outdoors"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="Who We Are"
              title="Building brighter futures, together"
              subtitle="Heath Foundation is a non-profit committed to equitable access to education and health services. We listen first, then invest in programs shaped by the communities we serve."
              align="left"
              className="max-w-none"
            />
            <p className="mt-4 text-muted leading-relaxed">
              From rural classrooms to mobile health clinics, our teams work
              alongside volunteers and partners to remove barriers and open new
              paths for children and families.
            </p>
            <div className="mt-8">
              <ButtonLink href="/about" variant="outlineDark" className="px-6">
                Read More
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
