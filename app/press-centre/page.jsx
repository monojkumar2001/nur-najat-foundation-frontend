import { PageHeader } from "@/components/Layout/PageHeader";
import { PressListing } from "@/components/press/PressListing";
import { hero } from "@/lib/unsplash";
import { pressItems } from "@/lib/press";

export const metadata = {
  keywords: ['Nur and Najat Foundation', 'community development', 'Bangladesh NGO'],
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
    category: p.category,
    location: p.location,
    topic: p.category,
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

      <div className="relative z-10 -mt-6 overflow-hidden rounded-t-3xl border-x border-b border-slate-200/70 bg-white pb-16 pt-10 shadow-[0_12px_40px_-12px_rgba(15,23,42,0.12)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <PressListing posts={posts} />
        </div>
      </div>
    </>
  );
}
