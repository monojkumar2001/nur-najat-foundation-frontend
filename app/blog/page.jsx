import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/Layout/PageHeader";
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
          <ul className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <li key={post.slug}>
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
                  <Link href={`/blog/${post.slug}`} className="relative aspect-[16/10] block overflow-hidden">
                    <Image
                      src={post.image}
                      alt=""
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(min-width: 1024px) 33vw, 50vw"
                    />
                  </Link>
                  <div className="flex flex-1 flex-col p-6">
                    <time className="text-xs font-medium uppercase tracking-wide text-slate-500">
                      {post.date}
                    </time>
                    <h2 className="heading-font mt-3 text-lg font-bold text-slate-900">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="hover:text-primary"
                      >
                        {post.title}
                      </Link>
                    </h2>
                    <p className="mt-3 flex-1 text-sm text-slate-600 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="mt-4 inline-flex text-sm font-semibold text-primary"
                    >
                      Continue reading →
                    </Link>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
