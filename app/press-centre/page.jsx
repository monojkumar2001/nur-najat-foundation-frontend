import { PageHeader } from "@/components/Layout/PageHeader";
import { PressPostGrid } from "@/components/press/PressPostGrid";
import { hero } from "@/lib/unsplash";
import { pressItems } from "@/lib/press";

export const metadata = {
  title: "Press Centre | Nur and Najat Foundation",
  description: "Press releases, announcements, and official updates from NNF.",
};

export default function PressCentrePage() {
  const posts = pressItems.map((p) => ({
    slug: p.slug,
    title: p.title,
    date: p.date,
    excerpt: p.excerpt,
    image: p.image,
  }));

  return (
    <>
      <PageHeader
        eyebrow="Press centre"
        title="Press releases & updates"
        description="Official announcements, statements, and media updates from Nur and Najat Foundation."
        image={hero.press}
        imageAlt="Press and announcements"
      />

      <div className="relative -mt-6 overflow-hidden rounded-t-3xl bg-white pb-16 pt-10 shadow-sm ring-1 ring-slate-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <PressPostGrid posts={posts} />
        </div>
      </div>
    </>
  );
}

