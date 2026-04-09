import { PageHeader } from "@/components/Layout/PageHeader";
import { BlogPostGrid } from "@/components/blog/BlogPostGrid";
import { hero } from "@/lib/unsplash";

export const metadata = {
  title: "Blog & News | Nur and Najat Foundation",
  description: "Updates, events, and educational articles from the foundation.",
};

const posts = [
  {
    slug: "field-update-spring",
    title: "Spring outreach: notes from the field",
    date: "March 1, 2025",
    excerpt: "Highlights from recent community visits and partner meetings.",
    image:
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&w=800&q=80",
  },
  {
    slug: "literacy-program",
    title: "Expanding literacy circles",
    date: "February 12, 2025",
    excerpt: "How volunteers and parents co-designed new session formats.",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&w=800&q=80",
  },
  {
    slug: "training-calendar",
    title: "Q2 training calendar published",
    date: "January 28, 2025",
    excerpt: "Upcoming workshops for youth and community facilitators.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&w=800&q=80",
  },
];

export default function BlogPage() {
  return (
    <>
      <PageHeader
        eyebrow="Blog & news"
        title="Latest updates"
        description="Activities, events, and articles aligned with our mission. Connect posts to your CMS when you are ready."
        image={hero.blog}
        imageAlt="News and journalism concept"
      />

      <div className="relative -mt-6 overflow-hidden rounded-t-3xl bg-white pb-16 pt-10 shadow-sm ring-1 ring-slate-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <BlogPostGrid posts={posts} />
        </div>
      </div>
    </>
  );
}
