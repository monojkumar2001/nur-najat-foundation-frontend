import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";

const posts = [
  {
    href: "/blog/winter-drive",
    tag: "Community",
    date: "Mar 12, 2025",
    title: "Winter relief drive reaches 200 households",
    image:
      "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=600&q=80",
  },
  {
    href: "/blog/scholarship",
    tag: "Education",
    date: "Feb 28, 2025",
    title: "New scholarships for STEM mentorship",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80",
  },
  {
    href: "/blog/clinic",
    tag: "Healthcare",
    date: "Feb 5, 2025",
    title: "Mobile clinic expands to two new wards",
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=600&q=80",
  },
];

export function LatestNews() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Latest news"
          title="Stories from the field"
          subtitle="Updates on programs, partners, and the people who make our mission possible."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.href}
              className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <Link href={post.href} className="relative aspect-[16/10] block">
                <Image
                  src={post.image}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </Link>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex flex-wrap items-center gap-2 text-xs font-medium uppercase tracking-wide text-muted">
                  <span className="rounded-full bg-primary/10 px-2 py-0.5 text-primary">
                    {post.tag}
                  </span>
                  <span>{post.date}</span>
                </div>
                <h3 className="heading-font mt-3 text-lg font-bold text-navy">
                  <Link href={post.href} className="hover:text-primary">
                    {post.title}
                  </Link>
                </h3>
                <Link
                  href={post.href}
                  className="mt-auto pt-4 text-sm font-semibold text-primary hover:text-primary-dark"
                >
                  Read more →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
