import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { RelatedEmergencyCard } from "@/components/emergencies/RelatedEmergencyCard";
import { fetchEmergencyBySlug } from "@/lib/emergencies";

export const dynamic = "force-dynamic";

function getReadMinutes(text) {
  const words = String(text ?? "")
    .replace(/<[^>]*>/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await fetchEmergencyBySlug(slug);
  if (!post) {
    return {
      title: "Update not found | Nur and Najat Foundation",
      description: "The requested emergency update could not be found.",
      keywords: ["Nur and Najat Foundation", "emergency response", "update"],
    };
  }
  return {
    title: `${post.title} | Emergencies | Nur and Najat Foundation`,
    description: post.excerpt || "Emergency response update from Nur and Najat Foundation.",
    keywords: [post.title, "Nur and Najat Foundation", "emergency response", "humanitarian aid", "Bangladesh"],
  };
}

export default async function EmergencyPostPage({ params }) {
  const { slug } = await params;
  const post = await fetchEmergencyBySlug(slug);
  if (!post) notFound();

  const readMinutes = getReadMinutes(post.content || post.excerpt || "");
  const category = post.category || "Emergency update";
  const author = post.author || "Nur and Najat Foundation";
  const cover = post.cover || post.image;
  const relatedEmergencies = Array.isArray(post.related) ? post.related : [];

  return (
    <article className="bg-white">
      <header className="mx-auto max-w-5xl px-4 pt-10 text-center sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
          {category}
        </p>
        <h1 className="heading-font mt-3 text-xl font-bold uppercase leading-tight text-slate-900 sm:text-2xl lg:text-3xl">
          {post.title}
        </h1>
        <p className="mt-4 text-sm font-medium text-slate-500">
          {post.date} <span aria-hidden>·</span> by {author}{" "}
          <span aria-hidden>·</span> {readMinutes} min read
        </p>
        <div className="mt-6 flex justify-center">
          <Link
            href="/emergencies"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary underline-offset-4 hover:underline"
          >
            <span aria-hidden>←</span>
            Back to emergencies
          </Link>
        </div>
      </header>

      {cover ? (
        <div className="mx-auto mt-8 max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative aspect-21/9 overflow-hidden rounded-2xl bg-slate-100 shadow-sm ring-1 ring-slate-200/70">
            <Image
              src={cover}
              alt={post.title}
              fill
              className="object-cover"
              priority
              sizes="(min-width: 1024px) 960px, 100vw"
            />
          </div>
        </div>
      ) : null}

      <div className="mx-auto max-w-6xl space-y-6 px-4 py-12 sm:px-6 lg:px-8">
        {post.content ? (
          <div
            className="prose prose-slate max-w-none prose-p:my-4 prose-p:leading-relaxed prose-headings:heading-font prose-headings:uppercase prose-li:marker:text-primary prose-img:rounded-2xl"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        ) : post.excerpt ? (
          <p className="text-base leading-relaxed text-slate-700">{post.excerpt}</p>
        ) : null}
      </div>

      {relatedEmergencies.length ? (
        <section
          aria-labelledby="find-out-more-heading"
          className=" bg-[#CFF2FF] py-14 sm:py-16"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2
              id="find-out-more-heading"
              className="heading-font text-center text-2xl font-bold uppercase tracking-wide text-slate-900 sm:text-3xl"
            >
              Find out more
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-base text-slate-600">
              Other emergency updates from Nur and Najat Foundation.
            </p>
            <ul className="mt-10 grid list-none gap-6 p-0 sm:grid-cols-2 lg:grid-cols-3">
              {relatedEmergencies.map((item) => (
                <RelatedEmergencyCard
                  key={item.slug}
                  slug={item.slug}
                  title={item.title}
                  date={item.date}
                  excerpt={item.excerpt}
                  image={item.image}
                  category={item.category}
                  author={item.author}
                />
              ))}
            </ul>
          </div>
        </section>
      ) : null}
    </article>
  );
}
