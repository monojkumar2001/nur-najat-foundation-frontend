import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

function getReadMinutes(text) {
  const words = String(text ?? "")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

const posts = {
  "field-update-spring": {
    category: "Blog",
    title: "Spring outreach: notes from the field",
    date: "March 1, 2025",
    author: "Nur and Najat Foundation",
    cover:
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&w=1200&q=80",
    blocks: [
      {
        type: "p",
        text: "This is placeholder content for a single blog post. Replace with rich text from your CMS or MDX.",
      },
      {
        type: "p",
        text: "Add photos, pull quotes, and calls to action (donate, volunteer) as needed.",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1459183885421-5cc683b8dbba?auto=format&w=1400&q=80",
        alt: "Volunteers coordinating community outreach",
      },
      { type: "h2", text: "Lorem ipsum dolor sit amet" },
      {
        type: "p",
        text: "Share clear outcomes, stories from the community, and what comes next. Keep paragraphs short for easy reading on mobile.",
      },
    ],
  },
  "literacy-program": {
    category: "Blog",
    title: "Expanding literacy circles",
    date: "February 12, 2025",
    author: "Nur and Najat Foundation",
    cover:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&w=1200&q=80",
    blocks: [
      {
        type: "p",
        text: "Placeholder article body. Describe program design, participant feedback, and next steps.",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&w=1400&q=80",
        alt: "Students learning together in a classroom",
      },
      { type: "h2", text: "What we learned" },
      {
        type: "p",
        text: "Summarize insights, challenges, and improvements. Add a short bullet list for scannability when appropriate.",
      },
      {
        type: "ul",
        items: [
          "Stronger attendance with local mentors",
          "Short sessions work best for busy families",
          "Community spaces make learning feel safe",
        ],
      },
    ],
  },
  "training-calendar": {
    category: "Blog",
    title: "Q2 training calendar published",
    date: "January 28, 2025",
    author: "Nur and Najat Foundation",
    cover:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&w=1200&q=80",
    blocks: [
      {
        type: "p",
        text: "Placeholder article body. List workshop dates, locations, and registration details.",
      },
      { type: "h2", text: "Schedule highlights" },
      {
        type: "p",
        text: "Add registration notes, venue info, and what participants should bring.",
      },
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) return { title: "Post not found" };
  return { title: `${post.title} | Nur and Najat Foundation` };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) notFound();

  const blocks = post.blocks ?? post.body?.map((text) => ({ type: "p", text })) ?? [];
  const readMinutes = getReadMinutes(
    blocks
      .map((b) => (b?.type === "p" || b?.type === "h2" ? b?.text : ""))
      .filter(Boolean)
      .join(" ")
  );
  const category = post.category ?? "Blog";
  const author = post.author ?? "Nur and Najat Foundation";

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
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary underline-offset-4 hover:underline"
          >
            <span aria-hidden>←</span>
            Back to blog
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
    </article>
  );
}
