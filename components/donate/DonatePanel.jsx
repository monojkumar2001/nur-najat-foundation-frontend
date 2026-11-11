"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Heart, Lock } from "lucide-react";

export function DonatePanel({
  amounts = ["25", "50", "100", "250"],
  title = "Make a donation",
  subtitle = "Secure checkout powered by Stripe.",
  stripeConfigured = false,
}) {
  const router = useRouter();
  const [mode, setMode] = useState("once");
  const [amount, setAmount] = useState(amounts[1] || amounts[0] || "50");
  const [custom, setCustom] = useState("");

  const displayAmount = useMemo(() => {
    const c = custom.trim();
    if (c === "") return amount;
    const n = Number(c);
    return Number.isFinite(n) && n > 0 ? String(Math.floor(n)) : amount;
  }, [amount, custom]);

  return (
    <div className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-lg ring-1 ring-slate-200/60 sm:p-8 lg:p-10">
      <div className="flex items-start gap-4 border-b border-slate-100 pb-6">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20">
          <Heart className="h-6 w-6" strokeWidth={1.75} aria-hidden />
        </span>
        <div>
          <h3 className="heading-font text-lg font-bold text-slate-900 sm:text-xl">
            {title}
          </h3>
          <p className="mt-1 text-sm text-slate-600">{subtitle}</p>
        </div>
      </div>

      <div className="mt-6 flex rounded-xl bg-slate-100 p-1 ring-1 ring-slate-200/80">
        <button
          type="button"
          className={`flex-1 rounded-lg py-2.5 text-sm font-semibold transition-all ${
            mode === "once"
              ? "bg-white text-slate-900 shadow-sm ring-1 ring-slate-200/80"
              : "text-slate-600 hover:text-slate-900"
          }`}
          onClick={() => setMode("once")}
        >
          One-time
        </button>
        <button
          type="button"
          className={`flex-1 rounded-lg py-2.5 text-sm font-semibold transition-all ${
            mode === "monthly"
              ? "bg-white text-slate-900 shadow-sm ring-1 ring-slate-200/80"
              : "text-slate-600 hover:text-slate-900"
          }`}
          onClick={() => setMode("monthly")}
        >
          Monthly
        </button>
      </div>

      <p className="mt-5 text-sm leading-relaxed text-slate-600">
        {mode === "monthly"
          ? "Monthly gifts help us plan staffing, materials, and outreach across the year."
          : "One-time gifts support urgent needs and new initiatives as they arise."}
      </p>

      <fieldset className="mt-6">
        <legend className="text-sm font-semibold text-slate-900">Amount (USD)</legend>
        <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {amounts.map((a) => (
            <button
              key={a}
              type="button"
              onClick={() => {
                setAmount(a);
                setCustom("");
              }}
              className={`rounded-xl border-2 px-3 py-2.5 text-sm font-semibold transition-all ${
                amount === a && custom.trim() === ""
                  ? "border-primary bg-primary/10 text-primary shadow-sm"
                  : "border-slate-200 text-slate-800 hover:border-primary/35 hover:bg-slate-50"
              }`}
            >
              ${a}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="mt-5">
        <label htmlFor="custom-amt" className="text-sm font-semibold text-slate-900">
          Other amount
        </label>
        <div className="relative mt-1.5">
          <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm font-medium text-slate-400">
            $
          </span>
          <input
            id="custom-amt"
            type="number"
            min="1"
            step="1"
            value={custom}
            onChange={(e) => setCustom(e.target.value)}
            className="w-full rounded-xl border border-slate-300 py-3 pl-8 pr-4 text-slate-900 outline-none transition-shadow placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/20"
            placeholder="Enter amount"
          />
        </div>
      </div>

      <button
        type="button"
        className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-accent py-4 text-sm font-bold uppercase tracking-wide text-white shadow-md transition hover:bg-accent-dark hover:shadow-lg active:scale-[0.99] motion-reduce:active:scale-100"
        onClick={() =>
          router.push(
            `/donate/checkout?amount=${encodeURIComponent(displayAmount)}&mode=${encodeURIComponent(mode)}`,
          )
        }
      >
        Continue — ${displayAmount}
        {mode === "monthly" ? " / mo" : ""}
      </button>

      <p className="mt-4 flex items-center justify-center gap-2 text-center text-xs text-slate-500">
        <Lock className="h-3.5 w-3.5 shrink-0 text-slate-400" aria-hidden />
        {stripeConfigured
          ? "Secure payment via Stripe Checkout."
          : "Stripe demo mode — add STRIPE_SECRET test key to go live with Stripe test cards."}
      </p>
    </div>
  );
}
