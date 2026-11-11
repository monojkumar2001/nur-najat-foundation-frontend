"use client";

import { useState } from "react";
import { subscribeNewsletter } from "@/lib/footer";

export function FooterSubscribeForm({
  placeholder = "Yourmail@gmail.com",
  buttonLabel = "Subscribe",
}) {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setMessage("");
    setError("");

    const form = new FormData(e.currentTarget);
    const email = String(form.get("email") || "").trim();
    if (!email) {
      setError("Please enter your email.");
      return;
    }

    setLoading(true);
    try {
      const result = await subscribeNewsletter(email);
      setMessage(result?.message || "Thanks for subscribing.");
      e.currentTarget.reset();
    } catch (err) {
      setError(err?.message || "Unable to subscribe right now.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mt-6 w-full max-w-xl min-w-0">
      <form
        className="flex w-full min-w-0 flex-col gap-2 rounded-lg bg-white/8 p-2 ring-1 ring-white/10 sm:flex-row sm:items-stretch"
        onSubmit={handleSubmit}
      >
        <label htmlFor="footer-email" className="sr-only">
          Email
        </label>
        <input
          id="footer-email"
          type="email"
          name="email"
          placeholder={placeholder}
          autoComplete="email"
          required
          className="min-h-11 min-w-0 w-full flex-1 rounded-md bg-transparent px-3 py-2 text-sm text-white placeholder:text-white/45 outline-none"
        />
        <button
          type="submit"
          disabled={loading}
          className="min-h-11 w-full shrink-0 whitespace-nowrap rounded-md bg-primary px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition-colors hover:bg-primary-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:opacity-70 sm:w-auto sm:px-6"
        >
          {loading ? "..." : buttonLabel}
        </button>
      </form>
      {message ? (
        <p className="mt-2 text-sm text-emerald-300">{message}</p>
      ) : null}
      {error ? <p className="mt-2 text-sm text-red-300">{error}</p> : null}
    </div>
  );
}
