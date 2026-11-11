import { PageHeader } from "@/components/Layout/PageHeader";
import { BlogPostGrid } from "@/components/blog/BlogPostGrid";
import { BlogPagination } from "@/components/blog/BlogPagination";
import { fetchNewsPaginated } from "@/lib/news";
import { hero } from "@/lib/unsplash";

export const metadata = {
  keywords: ["Nur and Najat Foundation", "community development", "Bangladesh NGO"],
  title: "Blog & News | Nur and Najat Foundation",
  description: "Updates, events, and educational articles from the foundation.",
};

const PER_PAGE = 12;

export default async function BlogPage({ searchParams }) {
  const params = await searchParams;
  const rawPage = Number(params?.page);
  const page = Number.isFinite(rawPage) && rawPage > 0 ? Math.floor(rawPage) : 1;

  const { data: news, meta } = await fetchNewsPaginated({
    page,
    perPage: PER_PAGE,
  });

  const currentPage = meta.currentPage || page;
  const lastPage = meta.lastPage || 1;

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
          {posts.length ? (
            <>
              <BlogPostGrid posts={posts} />
              <BlogPagination currentPage={currentPage} lastPage={lastPage} />
            </>
          ) : (
            <p className="py-16 text-center text-slate-600">
              No posts found.
            </p>
          )}
        </div>
      </div>
    </>
  );
}
