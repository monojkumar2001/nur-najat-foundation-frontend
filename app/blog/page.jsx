import { PageHeader } from "@/components/Layout/PageHeader";
import { BlogPostGrid } from "@/components/blog/BlogPostGrid";
import { fetchNews } from "@/lib/news";
import { hero } from "@/lib/unsplash";

export const metadata = {
  keywords: ["Nur and Najat Foundation", "community development", "Bangladesh NGO"],
  title: "Blog & News | Nur and Najat Foundation",
  description: "Updates, events, and educational articles from the foundation.",
};

export default async function BlogPage() {
  const news = await fetchNews();
  const posts = news.map((item) => ({
    slug: item.slug,
    title: item.title,
    date: item.dateShort || item.date,
    excerpt: item.excerpt,
    image: item.image,
  }));

  return (
    <>
      <PageHeader
        eyebrow="Blog & news"
        title="Latest updates"
        description="Activities, events, and articles aligned with our mission."
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
