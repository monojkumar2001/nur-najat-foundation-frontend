"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ArrowLeft, ChevronDown, CreditCard, Loader2 } from "lucide-react";
import { createDonateCheckout } from "@/lib/donate";

const countries = [
  { value: "", label: "Select Country" },
  { value: "BD", label: "Bangladesh" },
  { value: "US", label: "United States" },
  { value: "GB", label: "United Kingdom" },
  { value: "CA", label: "Canada" },
];

export function DonateCheckoutForm() {
  const searchParams = useSearchParams();
  const amountParam = searchParams.get("amount");
  const modeParam = searchParams.get("mode");

  const donationCents = useMemo(() => {
    const n = Number(amountParam ?? "50");
    if (!Number.isFinite(n) || n <= 0) return 5000;
    return Math.round(n * 100);
  }, [amountParam]);

  const donationDisplay = (donationCents / 100).toFixed(2);
  const taxDisplay = "0.00";
  const totalDisplay = donationDisplay;
  const isMonthly = modeParam === "monthly";

  const [corporate, setCorporate] = useState(false);
  const [payCard, setPayCard] = useState(true);
  const [cardNumber, setCardNumber] = useState("");
  const [cardExp, setCardExp] = useState("");
  const [cardCvc, setCardCvc] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function formatCardNumber(value) {
    const digits = value.replace(/\D/g, "").slice(0, 16);
    return digits.replace(/(\d{4})(?=\d)/g, "$1 ").trim();
  }

  function formatExp(value) {
    const digits = value.replace(/\D/g, "").slice(0, 4);
    if (digits.length <= 2) return digits;
    return `${digits.slice(0, 2)}/${digits.slice(2)}`;
  }

  function validateCardFields() {
    if (!payCard) {
      return "Please select Card as payment method.";
    }
    const digits = cardNumber.replace(/\s/g, "");
    if (digits.length < 13 || digits.length > 16) {
      return "Enter a valid card number.";
    }
    if (!/^\d{2}\/\d{2}$/.test(cardExp)) {
      return "Enter expiration as MM/YY.";
    }
    const [mm, yy] = cardExp.split("/").map(Number);
    if (mm < 1 || mm > 12) {
      return "Enter a valid expiration month.";
    }
    const now = new Date();
    const expEnd = new Date(2000 + yy, mm); // end of expiry month
    if (expEnd <= now) {
      return "Card expiration date is in the past.";
    }
    if (!/^\d{3,4}$/.test(cardCvc)) {
      return "Enter a valid CVC / security code.";
    }
    return null;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    const cardError = validateCardFields();
    if (cardError) {
      setError(cardError);
      return;
    }

    setLoading(true);
    const form = new FormData(e.currentTarget);

    try {
      const result = await createDonateCheckout({
        email: String(form.get("email") || "").trim(),
        first_name: String(form.get("first_name") || "").trim(),
        last_name: String(form.get("last_name") || "").trim(),
        country: String(form.get("country") || "").trim(),
        address: String(form.get("address") || "").trim() || null,
        is_corporate: corporate,
        mode: isMonthly ? "monthly" : "once",
        amount: donationCents / 100,
        currency: "usd",
      });

      if (result?.checkoutUrl) {
        window.location.href = result.checkoutUrl;
        return;
      }
      throw new Error("Checkout URL missing.");
    } catch (err) {
      setError(err.message || "Checkout failed.");
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto max-w-xl rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xl ring-1 ring-slate-100 sm:p-8">
      <Link
        href="/donate"
        className="inline-flex items-center gap-2 rounded-lg border border-primary/40 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-primary transition hover:bg-primary/5"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden />
        Back
      </Link>

      <form className="nnf-form-focus mt-8 space-y-8" onSubmit={handleSubmit}>
        <section>
          <h2 className="heading-font text-lg font-bold text-slate-900">Your information</h2>
          <div className="mt-5 space-y-4">
            <div>
              <label htmlFor="checkout-email" className="text-sm font-medium text-slate-800">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                id="checkout-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="Enter your email"
                className="mt-1.5 w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="checkout-first" className="text-sm font-medium text-slate-800">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="checkout-first"
                  name="first_name"
                  type="text"
                  required
                  autoComplete="given-name"
                  placeholder="Enter first name"
                  className="mt-1.5 w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div>
                <label htmlFor="checkout-last" className="text-sm font-medium text-slate-800">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="checkout-last"
                  name="last_name"
                  type="text"
                  required
                  autoComplete="family-name"
                  placeholder="Enter last name"
                  className="mt-1.5 w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="checkout-country" className="text-sm font-medium text-slate-800">
                  Country <span className="text-red-500">*</span>
                </label>
                <div className="relative mt-1.5">
                  <select
                    id="checkout-country"
                    name="country"
                    required
                    defaultValue=""
                    className="w-full appearance-none rounded-lg border border-slate-300 bg-white py-3 pl-4 pr-10 text-slate-900 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                  >
                    {countries.map((c) => (
                      <option key={c.value || "empty"} value={c.value} disabled={c.value === ""}>
                        {c.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500"
                    aria-hidden
                  />
                </div>
              </div>
              <div>
                <label htmlFor="checkout-address" className="text-sm font-medium text-slate-800">
                  Address
                </label>
                <input
                  id="checkout-address"
                  name="address"
                  type="text"
                  autoComplete="street-address"
                  placeholder="Enter Your Address"
                  className="mt-1.5 w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>
            <label className="flex cursor-pointer items-start gap-3 text-sm text-slate-700">
              <input
                type="checkbox"
                checked={corporate}
                onChange={(e) => setCorporate(e.target.checked)}
                className="mt-1 h-4 w-4 shrink-0 rounded border-slate-300 text-primary focus:ring-primary/30"
              />
              <span>This is a corporate/organization donation</span>
            </label>
          </div>
        </section>

        <section>
          <h2 className="heading-font text-lg font-bold text-slate-900">Summary</h2>
          <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50/50 px-4 py-4">
            <div className="flex justify-between text-sm text-slate-700">
              <span>Donation{isMonthly ? " (monthly)" : ""}</span>
              <span className="font-medium text-slate-900">${donationDisplay}</span>
            </div>
            <div className="mt-3 flex justify-between text-sm text-slate-700">
              <span>VAT / TAX (0%)</span>
              <span className="font-medium text-slate-900">${taxDisplay}</span>
            </div>
            <div className="mt-3 border-t border-slate-200 pt-3 flex justify-between text-sm font-bold text-slate-900">
              <span>TOTAL</span>
              <span>${totalDisplay}</span>
            </div>
          </div>
        </section>

        <section>
          <h2 className="heading-font text-lg font-bold text-slate-900">Payment method</h2>
          <div className="mt-4 rounded-lg border border-slate-200 bg-white px-4 py-4">
            <label className="flex cursor-pointer items-center gap-3 text-sm font-medium text-slate-900">
              <input
                type="checkbox"
                checked={payCard}
                onChange={(e) => setPayCard(e.target.checked)}
                className="h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary/30"
              />
              <CreditCard className="h-5 w-5 text-slate-600" aria-hidden />
              <span>Card</span>
            </label>

            {payCard ? (
              <div className="mt-4 space-y-4 border-t border-slate-100 pt-4">
                <div>
                  <label htmlFor="checkout-card" className="text-sm font-medium text-slate-800">
                    Card number <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="checkout-card"
                    type="text"
                    inputMode="numeric"
                    autoComplete="cc-number"
                    required={payCard}
                    value={cardNumber}
                    onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
                    placeholder="4242 4242 4242 4242"
                    className="mt-1.5 w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="checkout-exp" className="text-sm font-medium text-slate-800">
                      Expiration date (MM/YY) <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="checkout-exp"
                      type="text"
                      inputMode="numeric"
                      autoComplete="cc-exp"
                      required={payCard}
                      value={cardExp}
                      onChange={(e) => setCardExp(formatExp(e.target.value))}
                      placeholder="MM/YY"
                      className="mt-1.5 w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  <div>
                    <label htmlFor="checkout-cvc" className="text-sm font-medium text-slate-800">
                      Security code (CVC) <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="checkout-cvc"
                      type="text"
                      inputMode="numeric"
                      autoComplete="cc-csc"
                      required={payCard}
                      value={cardCvc}
                      onChange={(e) =>
                        setCardCvc(e.target.value.replace(/\D/g, "").slice(0, 4))
                      }
                      placeholder="CVC"
                      className="mt-1.5 w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                </div>
                <p className="text-xs text-slate-500">
                  Demo/test: use <span className="font-medium text-slate-700">4242 4242 4242 4242</span>, any future expiry, any CVC.
                </p>
              </div>
            ) : null}
          </div>
        </section>

        {error ? (
          <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {error}
          </div>
        ) : null}

        <button
          type="submit"
          disabled={loading}
          className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-4 text-sm font-bold uppercase tracking-wide text-white shadow-md transition hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-70"
        >
          {loading ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
              Processing…
            </>
          ) : (
            "Donate"
          )}
        </button>
        <p className="text-center text-xs text-slate-500">
          After payment you will see a confirmation message on the success page.
        </p>
      </form>
    </div>
  );
}
