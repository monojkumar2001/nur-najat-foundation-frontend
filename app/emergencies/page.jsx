import { PageHeader } from "@/components/Layout/PageHeader";
import { EmergencyPostGrid } from "@/components/emergencies/EmergencyPostGrid";
import { emergencyItems } from "@/lib/emergencies";
import { hero } from "@/lib/unsplash";

export const metadata = {
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

      <div className="relative -mt-6 overflow-hidden rounded-t-3xl bg-white pb-16 pt-10 shadow-sm ring-1 ring-slate-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <EmergencyPostGrid posts={posts} />
        </div>
      </div>
    </>
  );
}
