"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { submitContactMessage } from "@/lib/contact";

const inputClass =
  "mt-1.5 w-full rounded-md border border-slate-300 bg-white px-4 py-2.5 text-slate-900 " +
  "placeholder:text-slate-400 transition-shadow " +
  "outline-none focus:border-primary focus:ring-2 focus:ring-primary/20";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const form = new FormData(e.currentTarget);

    try {
      await submitContactMessage({
        name: String(form.get("name") || "").trim(),
        email: String(form.get("email") || "").trim(),
        subject: String(form.get("subject") || "").trim() || null,
        message: String(form.get("message") || "").trim(),
      });
      setSent(true);
    } catch (err) {
      setError(err.message || "Failed to send message.");
    } finally {
      setLoading(false);
    }
  }

  if (sent) {
    return (
      <motion.p
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="rounded-xl border border-primary/20 bg-primary/5 px-4 py-6 text-center font-medium text-slate-800"
      >
        Thanks — we&apos;ll get back to you soon.
      </motion.p>
    );
  }

  return (
    <form className="grid gap-5" onSubmit={handleSubmit} noValidate>
      <div>
        <label htmlFor="c-name" className="text-sm font-semibold text-slate-800">
          Name <span className="text-red-500">*</span>
        </label>
        <input
          id="c-name"
          name="name"
          required
          className={inputClass}
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="c-email" className="text-sm font-semibold text-slate-800">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          id="c-email"
          name="email"
          type="email"
          required
          className={inputClass}
          placeholder="you@example.com"
        />
      </div>
      <div>
        <label htmlFor="c-subject" className="text-sm font-semibold text-slate-800">
          Subject
        </label>
        <input
          id="c-subject"
          name="subject"
          className={inputClass}
          placeholder="How can we help?"
        />
      </div>
      <div>
        <label htmlFor="c-msg" className="text-sm font-semibold text-slate-800">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="c-msg"
          name="message"
          required
          rows={5}
          className={`${inputClass} resize-y min-h-[8rem]`}
          placeholder="Write your message..."
        />
      </div>

      {error ? (
        <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      ) : null}

      <motion.button
        type="submit"
        disabled={loading}
        className="rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-70"
        whileHover={loading ? undefined : { scale: 1.02 }}
        whileTap={loading ? undefined : { scale: 0.98 }}
      >
        {loading ? "Sending..." : "Send message"}
      </motion.button>
    </form>
  );
}
