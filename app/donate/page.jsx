import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { PageHeader } from "@/components/Layout/PageHeader";
import { DonatePanel } from "@/components/donate/DonatePanel";
import { hero, thumb } from "@/lib/unsplash";

export const metadata = {
  keywords: ['Nur and Najat Foundation', 'community development', 'Bangladesh NGO'],
  title: "Donate | Nur and Najat Foundation",
  description: "Support education, humanitarian work, and training with a gift.",
};

const impactPoints = [
  "Scholarships, learning materials, and safe spaces for children and youth.",
  "Humanitarian relief and essentials for families in crisis.",
  "Training for volunteers and local partners to scale programs responsibly.",
];

export default function DonatePage() {
  return (
    <>
      <PageHeader
        eyebrow="Donate"
        title="Support our programs"
        description="Your gift funds education, humanitarian relief, and community training. Choose a one-time or monthly amount—then connect your payment provider when you are ready to go live."
        image={hero.donate}
        imageAlt="Hands joined in gratitude"
      />

      <div className="relative -mt-6 overflow-hidden rounded-t-3xl bg-white shadow-sm ring-1 ring-slate-200/80">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start lg:gap-14">
            <div className="space-y-10 lg:col-span-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                  Impact
                </p>
                <h2 className="heading-font mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
                  Where your support goes
                </h2>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600">
                  Nur and Najat Foundation stewards donations alongside community partners. Every contribution helps us plan programs with transparency and care.
                </p>
              </div>

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

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-slate-200/90 bg-linear-to-br from-slate-50 to-white px-4 py-4 shadow-sm ring-1 ring-slate-100">
                  <p className="text-2xl font-bold text-slate-900">100%</p>
                  <p className="mt-1 text-xs font-medium text-slate-600">
                    Directed to mission programs
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200/90 bg-linear-to-br from-slate-50 to-white px-4 py-4 shadow-sm ring-1 ring-slate-100">
                  <p className="text-2xl font-bold text-slate-900">12+</p>
                  <p className="mt-1 text-xs font-medium text-slate-600">
                    Partner communities
                  </p>
                </div>
                <div className="col-span-2 rounded-2xl border border-slate-200/90 bg-linear-to-br from-primary/5 to-white px-4 py-4 shadow-sm ring-1 ring-primary/15 sm:col-span-1">
                  <p className="text-2xl font-bold text-primary">24/7</p>
                  <p className="mt-1 text-xs font-medium text-slate-600">
                    Give anytime, anywhere
                  </p>
                </div>
              </div>

            </div>

            <div className="lg:col-span-7">
              <div className="lg:sticky lg:top-24">
                <DonatePanel />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
