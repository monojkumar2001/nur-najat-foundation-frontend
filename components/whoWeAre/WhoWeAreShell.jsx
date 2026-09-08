import { JoinUsSection } from "@/components/home/JoinUsSection";
import { PageHeader } from "@/components/Layout/PageHeader";
import { Reveal } from "@/components/motion/Reveal";

/**
 * Shared Who We Are page chrome: hero + white content panel + optional Join Us.
 */
export function WhoWeAreShell({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  children,
  showJoinUs = true,
}) {
  return (
    <>
      <PageHeader
        eyebrow={eyebrow}
        title={title}
        description={description}
        image={image}
        imageAlt={imageAlt}
      />

      <div className="relative -mt-6 rounded-t-3xl bg-white shadow-sm ring-1 ring-slate-200/80">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <Reveal>{children}</Reveal>
        </div>
        {showJoinUs ? (
          <Reveal delay={0.04}>
            <JoinUsSection />
          </Reveal>
        ) : null}
      </div>
    </>
  );
}
