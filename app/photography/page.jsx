import { PageHeader } from "@/components/Layout/PageHeader";
import { PhotographyGallerySection } from "@/components/photography/PhotographyGallerySection";
import { PhotographyVideoSection } from "@/components/photography/PhotographyVideoSection";
import { hero } from "@/lib/unsplash";

export const metadata = {
  title: "Photography | Nur and Najat Foundation",
  description: "Photo gallery and video library from Nur and Najat Foundation programs and events.",
};

export default function PhotographyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Media"
        title="Photography & film"
        description="Explore highlights from our work in communities—through photographs and short films."
        image={hero.gallery}
        imageAlt="Photography and visual storytelling"
      />

      <div className="relative -mt-6 overflow-hidden rounded-t-3xl bg-white pt-10 shadow-sm ring-1 ring-slate-200/80">
        <PhotographyGallerySection />
        <PhotographyVideoSection />
        <div className="h-10" aria-hidden />
      </div>
    </>
  );
}
