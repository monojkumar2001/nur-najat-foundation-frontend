import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";

const posts = [
  {
    href: "/blog/field-update-spring",
    tag: "Community",
    date: "Mar 12, 2025",
    title: "Spring outreach: notes from the field",
    image:
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&w=800&q=80",
  },
  {
    href: "/blog/literacy-program",
    tag: "Education",
    date: "Feb 28, 2025",
    title: "Expanding literacy circles",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&w=800&q=80",
  },
  {
    href: "/blog/training-calendar",
    tag: "Programs",
    date: "Jan 28, 2025",
    title: "Q2 training calendar published",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&w=800&q=80",
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
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-xl"
            >
              <Link href={post.href} className="relative aspect-[16/10] block overflow-hidden">
                <Image
                  src={post.image}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </Link>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex flex-wrap items-center gap-2 text-xs font-medium uppercase tracking-wide text-slate-500">
                  <span className="rounded-full bg-primary/10 px-2 py-0.5 text-primary">
                    {post.tag}
                  </span>
                  <span>{post.date}</span>
                </div>
                <h3 className="heading-font mt-3 text-lg font-bold text-slate-900">
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
