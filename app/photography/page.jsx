import { PageHeader } from "@/components/Layout/PageHeader";
import { PhotographyGallerySection } from "@/components/photography/PhotographyGallerySection";
import { PhotographyVideoSection } from "@/components/photography/PhotographyVideoSection";
import { fetchGalleries } from "@/lib/gallery";
import { hero } from "@/lib/unsplash";

export const metadata = {
  keywords: ['Nur and Najat Foundation', 'community development', 'Bangladesh NGO'],
  title: "Photography | Nur and Najat Foundation",
  description: "Photo gallery and video library from Nur and Najat Foundation programs and events.",
};

export default async function PhotographyPage() {
  const galleries = await fetchGalleries();

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
        <PhotographyGallerySection images={galleries} />
        <PhotographyVideoSection />
        <div className="h-10" aria-hidden />
      </div>
    </>
  );
}
