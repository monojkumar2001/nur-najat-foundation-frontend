import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { pressBySlug, pressItems } from "@/lib/press";

function getReadMinutes(text) {
  const words = String(text ?? "")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

export async function generateStaticParams() {
  return pressItems.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = pressBySlug[slug];
  if (!post) return { title: "Update not found" };
  return { title: `${post.title} | Press Centre | Nur and Najat Foundation` };
}

export default async function PressCentrePostPage({ params }) {
  const { slug } = await params;
  const post = pressBySlug[slug];
  if (!post) notFound();

  const blocks = post.blocks ?? [];
  const summary = post.summary ?? post.excerpt ?? "";
  const mediaContacts = post.mediaContacts ?? [];
  const resources = post.resources ?? [];
  const readMinutes = getReadMinutes(
    blocks
      .map((b) => (b?.type === "p" || b?.type === "h2" ? b?.text : ""))
      .filter(Boolean)
      .join(" ")
  );

  const category = post.category ?? "Press update";
  const author = post.author ?? "Nur and Najat Foundation";

  return (
    <article className="bg-white">
      <div className="mx-auto max-w-7xl px-4 pb-14 pt-10 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="flex flex-col gap-8 lg:col-span-8">
            <div className="mb-2">
              <Link
                href="/press-centre"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary underline-offset-4 hover:underline"
              >
                <span aria-hidden>←</span>
                Back to press centre
              </Link>
            </div>

            <header>
              <p className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700 ring-1 ring-slate-200">
                {category}
              </p>
              <h1 className="heading-font mt-4 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
                {post.title}
              </h1>
              {summary ? (
                <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
                  {summary}
                </p>
              ) : null}
              <p className="mt-4 text-sm font-medium text-slate-500">
                {post.date} <span aria-hidden>·</span> {readMinutes} min read{" "}
                <span aria-hidden>·</span> {author}
              </p>
            </header>

            {post.cover ? (
              <figure className="overflow-hidden rounded-2xl bg-slate-100 shadow-sm ring-1 ring-slate-200/70">
                <div className="relative aspect-video">
                  <Image
                    src={post.cover}
                    alt={post.title}
                    fill
                    className="object-cover"
                    priority
                    sizes="(min-width: 1024px) 768px, 100vw"
                  />
                </div>
              </figure>
            ) : null}

            <div className="space-y-6">
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
          </div>

          <aside className="lg:col-span-4 lg:self-stretch">
            <div className="lg:sticky lg:top-24">
              {mediaContacts.length ? (
                <section className="rounded-2xl bg-slate-50 p-6 shadow-sm ring-1 ring-slate-200/80">
                  <h2 className="text-lg font-bold text-slate-900">Media contacts</h2>
                  <div className="mt-4 space-y-5">
                    {mediaContacts.map((c) => (
                      <div key={`${c.name}-${c.email ?? c.phone ?? ""}`} className="text-sm">
                        <p className="font-semibold text-slate-900">{c.name}</p>
                        {c.role ? <p className="text-slate-600">{c.role}</p> : null}
                        {c.phone ? <p className="mt-2 text-slate-700">Tel: {c.phone}</p> : null}
                        {c.email ? <p className="text-slate-700">Email: {c.email}</p> : null}
                      </div>
                    ))}
                  </div>
                </section>
              ) : null}

              {resources.length ? (
                <section className="mt-6 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200/80">
                  <h2 className="text-lg font-bold text-slate-900">Additional resources</h2>
                  <div className="mt-4 space-y-4">
                    {resources.map((r) => (
                      <Link
                        key={r.title}
                        href={r.href ?? "#"}
                        className="group block overflow-hidden rounded-xl bg-slate-50 ring-1 ring-slate-200/70"
                      >
                        {r.image ? (
                          <div className="relative aspect-video">
                            <Image
                              src={r.image}
                              alt=""
                              fill
                              className="object-cover transition-transform duration-500 motion-reduce:transform-none group-hover:scale-[1.04]"
                              sizes="(min-width: 1024px) 320px, 100vw"
                            />
                          </div>
                        ) : null}
                        <div className="px-4 py-3">
                          <p className="text-sm font-semibold text-slate-900 underline-offset-4 group-hover:underline">
                            {r.title}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </section>
              ) : null}
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}
