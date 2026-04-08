import Image from "next/image";
import { ButtonLink } from "@/components/ui/ButtonLink";

const heroImage =
  "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1920&q=80";

export function Hero() {
  return (
    <section className="relative min-h-[85vh] overflow-hidden">
      <Image
        src={heroImage}
        alt="Community gathering — diverse group celebrating together outdoors"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-navy/40" />

      <div className="relative mx-auto flex max-w-7xl min-h-[85vh] flex-col justify-center px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="heading-font text-4xl font-bold uppercase leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Empowering Communities, Changing Lives
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/90">
            We partner with local leaders to deliver education, healthcare, and
            livelihood programs that create lasting impact for families and
            youth.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <ButtonLink href="/about" variant="accent" className="px-8 py-3">
              Learn More
            </ButtonLink>
            <ButtonLink href="/donate" variant="outline" className="px-8 py-3">
              Donate Now
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
