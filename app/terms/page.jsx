import { PageHeader } from "@/components/Layout/PageHeader";
import { fetchTermsPage } from "@/lib/terms";
import { hero } from "@/lib/unsplash";

export const metadata = {
  keywords: ['Nur and Najat Foundation', 'community development', 'Bangladesh NGO'],
  title: "Terms | Nur and Najat Foundation",
  description: "Terms of use for the Nur and Najat Foundation website.",
};

export default async function TermsPage() {
  const page = await fetchTermsPage();

  const eyebrow = page?.hero?.eyebrow || "Legal";
  const title = page?.hero?.title || "Terms of use";
  const description =
    page?.hero?.description ||
    "Rules for using our website, content, and communications.";
  const image = page?.hero?.image || hero.press;
  const lastUpdated = page?.lastUpdated || "April 10, 2026";
  const content = page?.content || "";

  return (
    <>
      <PageHeader
        eyebrow={eyebrow}
        title={title}
        description={description}
        image={image}
        imageAlt="Terms of use"
      />

      <div className="relative -mt-6 overflow-hidden rounded-t-3xl pb-10 bg-white pt-10 shadow-sm ring-1 ring-slate-200/80">
        <div className="mx-auto max-w-4xl px-4 py-6 sm:px-6 sm:py-6 lg:px-8 lg:py-6">
          <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm ring-1 ring-slate-100 sm:p-8">
            <p className="text-sm text-slate-600">
              Last updated:{" "}
              <span className="font-semibold text-slate-900">{lastUpdated}</span>
            </p>

            {content ? (
              <div
                className="prose prose-slate mt-8 max-w-none prose-headings:heading-font prose-headings:font-bold prose-headings:text-slate-900 prose-p:leading-relaxed prose-p:text-slate-700 prose-li:marker:text-primary prose-a:font-semibold prose-a:text-primary prose-a:underline-offset-4 hover:prose-a:underline"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            ) : (
              <p className="mt-8 text-slate-600">Terms content is not available yet.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
