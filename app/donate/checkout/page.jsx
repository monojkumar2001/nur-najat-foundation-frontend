import { Suspense } from "react";
import { DonateCheckoutForm } from "@/components/donate/DonateCheckoutForm";

export const metadata = {
  keywords: ['Nur and Najat Foundation', 'community development', 'Bangladesh NGO'],
  title: "Checkout | Donate | Nur and Najat Foundation",
  description: "Complete your donation with contact and payment details.",
};

function CheckoutFallback() {
  return (
    <div className="mx-auto max-w-xl rounded-2xl border border-slate-200/90 bg-white p-12 text-center text-slate-500 shadow-lg">
      Loading checkout…
    </div>
  );
}

export default function DonateCheckoutPage() {
  return (
    <div className="min-h-[70vh] bg-slate-100/90 py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Suspense fallback={<CheckoutFallback />}>
          <DonateCheckoutForm />
        </Suspense>
      </div>
    </div>
  );
}
