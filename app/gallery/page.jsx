import Image from "next/image";
import { PageHeader } from "@/components/Layout/PageHeader";
import { galleryGrid, hero } from "@/lib/unsplash";

export const metadata = {
  title: "Gallery | Nur and Najat Foundation",
  description: "Photos from programs and events.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Multimedia"
        title="Gallery"
        description="Moments from the field — programs, volunteers, and community gatherings. Host your full library in a CMS when you scale."
        image={hero.gallery}
        imageAlt="Community celebration"
      />

      <div className="relative -mt-6 overflow-hidden rounded-t-3xl bg-white pb-16 pt-10 shadow-sm ring-1 ring-slate-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
            {galleryGrid.map((src, i) => (
              <div
                key={src}
                className="group relative mb-4 break-inside-avoid overflow-hidden rounded-2xl bg-slate-200 shadow-md ring-1 ring-slate-200/80"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={src}
                    alt={`Foundation program photo ${i + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(min-width: 1024px) 33vw, 50vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
