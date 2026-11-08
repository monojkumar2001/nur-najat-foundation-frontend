import { PageHeader } from "@/components/Layout/PageHeader";
import { EmergencyListing } from "@/components/emergencies/EmergencyListing";
import { emergencyItems } from "@/lib/emergencies";
import { hero } from "@/lib/unsplash";

export const metadata = {
  keywords: ['Nur and Najat Foundation', 'community development', 'Bangladesh NGO'],
  title: "Emergencies | Nur and Najat Foundation",
  description:
    "Emergency updates, response activities, and how Nur and Najat Foundation supports affected communities.",
};

export default function EmergenciesPage() {
  const posts = emergencyItems.map((p) => ({
    slug: p.slug,
    title: p.title,
    date: p.date,
    excerpt: p.excerpt,
    image: p.image,
    category: p.category,
    author: p.author,
    location: p.location,
    topic: p.topic,
  }));

  return (
    <>
      <PageHeader
        eyebrow="Emergencies"
        title="Emergency updates & response"
        description="Timely updates on humanitarian response, community safety, and how we coordinate with partners during crises."
        image={hero.emergencies}
        imageAlt="Emergency response and community support"
      />

      <div className="relative z-10 -mt-6 overflow-hidden rounded-t-3xl border-x border-b border-slate-200/70 bg-white pb-16 pt-10 shadow-[0_12px_40px_-12px_rgba(15,23,42,0.12)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <EmergencyListing posts={posts} />
        </div>
      </div>
    </>
  );
}
