import Link from "next/link";
import { CheckCircle2, Heart } from "lucide-react";
import { fetchDonateSuccess } from "@/lib/donate";

export const metadata = {
  title: "Donation successful | Nur and Najat Foundation",
  description: "Thank you for your donation to Nur and Najat Foundation.",
};

export default async function DonateSuccessPage({ searchParams }) {
  const params = await searchParams;
  const sessionId = params?.session_id || "";
  const result = sessionId ? await fetchDonateSuccess(sessionId) : null;
  const succeeded = Boolean(result?.succeeded);

  return (
    <div className="min-h-[70vh] bg-slate-100/90 py-14 sm:py-20">
      <div className="mx-auto max-w-xl px-4 sm:px-6">
        <div className="rounded-2xl border border-slate-200/90 bg-white p-8 text-center shadow-xl ring-1 ring-slate-100 sm:p-10">
          <div
            className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full ${
              succeeded ? "bg-emerald-50 text-emerald-600" : "bg-amber-50 text-amber-600"
            }`}
          >
            {succeeded ? (
              <CheckCircle2 className="h-9 w-9" aria-hidden />
            ) : (
              <Heart className="h-8 w-8" aria-hidden />
            )}
          </div>

          <h1 className="heading-font mt-6 text-2xl font-bold text-slate-900 sm:text-3xl">
            {succeeded ? "Donation successful" : "We could not confirm payment"}
          </h1>
          <p className="mt-3 text-base leading-relaxed text-slate-600">
            {succeeded
              ? result?.message ||
                "Thank you! Your donation was received successfully. A confirmation has been recorded."
              : "If you completed payment, please wait a moment or contact us with your receipt."}
          </p>

          {succeeded && result ? (
            <dl className="mt-8 space-y-3 rounded-xl border border-slate-200 bg-slate-50/80 px-5 py-5 text-left text-sm">
              <div className="flex justify-between gap-4">
                <dt className="text-slate-500">Reference</dt>
                <dd className="font-semibold text-slate-900">{result.reference}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-slate-500">Amount</dt>
                <dd className="font-semibold text-slate-900">
                  ${result.amount} {result.currency}
                  {result.mode === "monthly" ? " / month" : ""}
                </dd>
              </div>
              {result.name ? (
                <div className="flex justify-between gap-4">
                  <dt className="text-slate-500">Donor</dt>
                  <dd className="font-semibold text-slate-900">{result.name}</dd>
                </div>
              ) : null}
              {result.demo ? (
                <div className="rounded-lg bg-amber-50 px-3 py-2 text-xs text-amber-800">
                  Stripe demo mode — no live charge. Add your Stripe test secret key to process real test payments.
                </div>
              ) : null}
            </dl>
          ) : null}

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-dark"
            >
              Back to home
            </Link>
            <Link
              href="/donate"
              className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-primary/40 hover:text-primary"
            >
              Donate again
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
