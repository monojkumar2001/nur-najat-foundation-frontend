import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { RelatedEmergencyCard } from "@/components/emergencies/RelatedEmergencyCard";
import { emergenciesBySlug, emergencyItems } from "@/lib/emergencies";

function getReadMinutes(text) {
  const words = String(text ?? "")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

export async function generateStaticParams() {
  return emergencyItems.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = emergenciesBySlug[slug];
  if (!post) {
    return {
      title: "Update not found | Nur and Najat Foundation",
      description: "The requested emergency update could not be found.",
      keywords: ["Nur and Najat Foundation", "emergency response", "update"],
    };
  }
  return {
    title: `${post.title} | Emergencies | Nur and Najat Foundation`,
    description: post.summary || post.excerpt || "Emergency response update from Nur and Najat Foundation.",
    keywords: [post.title, "Nur and Najat Foundation", "emergency response", "humanitarian aid", "Bangladesh"],
  };
}

export default async function EmergencyPostPage({ params }) {
  const { slug } = await params;
  const post = emergenciesBySlug[slug];
  if (!post) notFound();

  const blocks = post.blocks ?? [];
  const readMinutes = getReadMinutes(
    blocks
      .map((b) => (b?.type === "p" || b?.type === "h2" ? b?.text : ""))
      .filter(Boolean)
      .join(" ")
  );
  const category = post.category ?? "Emergency update";
  const author = post.author ?? "Nur and Najat Foundation";
  const relatedEmergencies = emergencyItems.filter((e) => e.slug !== slug);

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

      <div className="mx-auto mt-8 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative aspect-21/9 overflow-hidden rounded-2xl bg-slate-100 shadow-sm ring-1 ring-slate-200/70">
          <Image
            src={post.cover}
            alt={post.title}
            fill
            className="object-cover"
            priority
            sizes="(min-width: 1024px) 960px, 100vw"
          />
        </div>
      </div>

      <div className="mx-auto max-w-6xl space-y-6 px-4 py-12 sm:px-6 lg:px-8">
        {blocks.map((block, i) => {
          if (!block) return null;

          if (block.type === "h2") {
            return (
              <h2
                key={`h2-${i}`}
                className="heading-font pt-3 text-lg font-bold uppercase tracking-wide text-slate-900 sm:text-xl"
              >
                {block.text}
              </h2>
            );
          }

          if (block.type === "image") {
            return (
              <figure
                key={`img-${i}`}
                className="overflow-hidden rounded-2xl bg-slate-100 shadow-sm ring-1 ring-slate-200/70"
              >
                <div className="relative aspect-video">
                  <Image
                    src={block.src}
                    alt={block.alt ?? ""}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 768px, 100vw"
                  />
                </div>
                {block.caption ? (
                  <figcaption className="px-5 py-4 text-sm text-slate-500">
                    {block.caption}
                  </figcaption>
                ) : null}
              </figure>
            );
          }

          if (block.type === "ul") {
            return (
              <ul
                key={`ul-${i}`}
                className="list-disc space-y-2 pl-5 text-base leading-relaxed text-slate-700 marker:text-primary"
              >
                {(block.items ?? []).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            );
          }

          return (
            <p key={`p-${i}`} className="text-base leading-relaxed text-slate-700">
              {block.text}
            </p>
          );
        })}
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
