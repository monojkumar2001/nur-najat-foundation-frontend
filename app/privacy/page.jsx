import { PageHeader } from "@/components/Layout/PageHeader";
import { fetchPrivacyPage } from "@/lib/privacy";
import { hero } from "@/lib/unsplash";

export const metadata = {
  keywords: ['Nur and Najat Foundation', 'community development', 'Bangladesh NGO'],
  title: "Privacy Policy | Nur and Najat Foundation",
  description: "How Nur and Najat Foundation collects and uses information.",
};

export default async function PrivacyPage() {
  const page = await fetchPrivacyPage();

  const eyebrow = page?.hero?.eyebrow || "Legal";
  const title = page?.hero?.title || "Privacy policy";
  const description =
    page?.hero?.description ||
    "A practical summary of how we collect, use, and protect information.";
  const image = page?.hero?.image || hero.about;
  const lastUpdated = page?.lastUpdated || "April 10, 2026";
  const content = page?.content || "";

  return (
    <>
      <PageHeader
        eyebrow={eyebrow}
        title={title}
        description={description}
        image={image}
        imageAlt="People collaborating"
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
              <p className="mt-8 text-slate-600">Privacy content is not available yet.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
