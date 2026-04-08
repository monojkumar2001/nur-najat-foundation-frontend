import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const posts = {
  "field-update-spring": {
    title: "Spring outreach: notes from the field",
    date: "March 1, 2025",
    cover:
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&w=1200&q=80",
    body: [
      "This is placeholder content for a single blog post. Replace with rich text from your CMS or MDX.",
      "Add photos, pull quotes, and calls to action (donate, volunteer) as needed.",
    ],
  },
  "literacy-program": {
    title: "Expanding literacy circles",
    date: "February 12, 2025",
    cover:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&w=1200&q=80",
    body: [
      "Placeholder article body. Describe program design, participant feedback, and next steps.",
    ],
  },
  "training-calendar": {
    title: "Q2 training calendar published",
    date: "January 28, 2025",
    cover:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&w=1200&q=80",
    body: [
      "Placeholder article body. List workshop dates, locations, and registration details.",
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

  return (
    <article>
      <div className="relative aspect-[21/9] max-h-[420px] w-full overflow-hidden bg-slate-200">
        <Image
          src={post.cover}
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 mx-auto max-w-3xl px-4 pb-10 sm:px-6">
          <p className="text-sm text-white/80">
            <Link href="/blog" className="font-medium text-primary hover:underline">
              ← Blog
            </Link>
          </p>
          <p className="mt-4 text-sm text-white/90">{post.date}</p>
          <h1 className="heading-font mt-2 text-3xl font-bold text-white sm:text-4xl">
            {post.title}
          </h1>
        </div>
      </div>
      <div className="mx-auto max-w-3xl space-y-5 px-4 py-12 sm:px-6 lg:px-8">
        {post.body.map((paragraph, i) => (
          <p key={i} className="text-slate-600 leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>
    </article>
  );
}
