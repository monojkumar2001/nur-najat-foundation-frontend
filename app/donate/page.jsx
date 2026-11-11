import { CheckCircle } from "lucide-react";
import { PageHeader } from "@/components/Layout/PageHeader";
import { DonatePanel } from "@/components/donate/DonatePanel";
import { fetchDonatePage } from "@/lib/donate";
import { hero } from "@/lib/unsplash";

export const metadata = {
  keywords: ['Nur and Najat Foundation', 'community development', 'Bangladesh NGO'],
  title: "Donate | Nur and Najat Foundation",
  description: "Support education, humanitarian work, and training with a gift.",
};

export default async function DonatePage() {
  const page = await fetchDonatePage();

  const heroTitle = page?.hero?.title || "Support our programs";
  const heroDescription =
    page?.hero?.description ||
    "Your gift funds education, humanitarian relief, and community training.";
  const heroImage = page?.hero?.image || hero.donate;

  const impact = page?.impact || {};
  const impactPoints = impact.points || [];
  const stats = page?.stats || [];
  const panel = page?.panel || {};

  return (
    <>
      <PageHeader
        eyebrow="Donate"
        title={heroTitle}
        description={heroDescription}
        image={heroImage}
        imageAlt="Hands joined in gratitude"
      />

      <div className="relative -mt-6 overflow-hidden rounded-t-3xl bg-white shadow-sm ring-1 ring-slate-200/80">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start lg:gap-14">
            <div className="space-y-10 lg:col-span-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                  {impact.eyebrow || "Impact"}
                </p>
                <h2 className="heading-font mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
                  {impact.title || "Where your support goes"}
                </h2>
                {impact.description ? (
                  <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600">
                    {impact.description}
                  </p>
                ) : null}
              </div>

              {impactPoints.length ? (
                <ul className="space-y-4">
                  {impactPoints.map((text) => (
                    <li key={text} className="flex gap-3 text-sm leading-relaxed text-slate-700 sm:text-base">
                      <CheckCircle
                        className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                        aria-hidden
                      />
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              ) : null}

              {stats.length ? (
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {stats.map((stat, idx) => (
                    <div
                      key={`${stat.value}-${stat.label}`}
                      className={`rounded-2xl border border-slate-200/90 bg-linear-to-br from-slate-50 to-white px-4 py-4 shadow-sm ring-1 ring-slate-100 ${
                        idx === 2
                          ? "col-span-2 from-primary/5 ring-primary/15 sm:col-span-1"
                          : ""
                      }`}
                    >
                      <p
                        className={`text-2xl font-bold ${
                          idx === 2 ? "text-primary" : "text-slate-900"
                        }`}
                      >
                        {stat.value}
                      </p>
                      <p className="mt-1 text-xs font-medium text-slate-600">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>

            <div className="lg:col-span-7">
              <div className="lg:sticky lg:top-24">
                <DonatePanel
                  amounts={panel.amounts || ["25", "50", "100", "250"]}
                  title={panel.title || "Make a donation"}
                  subtitle={panel.subtitle || "Secure checkout powered by Stripe."}
                  stripeConfigured={Boolean(page?.stripeConfigured)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
