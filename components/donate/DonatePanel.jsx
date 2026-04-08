"use client";

import { useState } from "react";

const amounts = ["25", "50", "100", "250"];

export function DonatePanel() {
  const [mode, setMode] = useState("once");
  const [amount, setAmount] = useState("50");

  return (
    <div className="rounded-3xl border border-slate-200/90 bg-white p-6 shadow-xl ring-1 ring-slate-100 sm:p-10">
      <div className="flex rounded-xl bg-slate-100 p-1.5">
        <button
          type="button"
          className={`flex-1 rounded-lg py-2.5 text-sm font-semibold transition-all ${
            mode === "once"
              ? "bg-white text-slate-900 shadow-sm"
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
              ? "bg-white text-slate-900 shadow-sm"
              : "text-slate-600 hover:text-slate-900"
          }`}
          onClick={() => setMode("monthly")}
        >
          Monthly
        </button>
      </div>
      <p className="mt-6 text-sm text-slate-600 leading-relaxed">
        {mode === "monthly"
          ? "Recurring donations help us plan programs year-round."
          : "Your one-time gift goes to priority needs across our pillars."}
      </p>
      <fieldset className="mt-6">
        <legend className="text-sm font-medium text-slate-900">Amount (USD)</legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {amounts.map((a) => (
            <button
              key={a}
              type="button"
              onClick={() => setAmount(a)}
              className={`rounded-xl border-2 px-5 py-2.5 text-sm font-semibold transition-colors ${
                amount === a
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-slate-200 text-slate-800 hover:border-primary/40"
              }`}
            >
              ${a}
            </button>
          ))}
        </div>
      </fieldset>
      <div className="mt-6">
        <label htmlFor="custom-amt" className="text-sm font-medium text-slate-900">
          Other amount
        </label>
        <input
          id="custom-amt"
          type="number"
          min="1"
          className="mt-1.5 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
          placeholder="Custom"
        />
      </div>
      <button
        type="button"
        className="mt-8 w-full rounded-xl bg-[#f5a623] py-4 text-sm font-bold uppercase tracking-wide text-white shadow-md transition-transform hover:bg-[#e09010] hover:scale-[1.01] active:scale-[0.99]"
      >
        Continue to payment (demo)
      </button>
      <p className="mt-4 text-center text-xs text-slate-500">
        No charge is processed — connect your payment provider here.
      </p>
    </div>
  );
}
