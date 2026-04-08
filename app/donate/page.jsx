import { PageHeader } from "@/components/Layout/PageHeader";
import { DonatePanel } from "@/components/donate/DonatePanel";
import { hero } from "@/lib/unsplash";

export const metadata = {
  title: "Donate | Nur and Najat Foundation",
  description: "Support education, humanitarian work, and training with a gift.",
};

export default function DonatePage() {
  return (
    <>
      <PageHeader
        eyebrow="Donate"
        title="Support our programs"
        description="One-time or monthly gifts fund education, humanitarian relief, and training. Connect Stripe or PayPal for live payments."
        image={hero.donate}
        imageAlt="Hands joined in gratitude"
      />
      <div className="relative -mt-6 mx-auto max-w-2xl rounded-t-3xl bg-white px-4 pb-16 pt-10 shadow-sm ring-1 ring-slate-200/80 sm:px-6 lg:px-8">
        <DonatePanel />
      </div>
    </>
  );
}
