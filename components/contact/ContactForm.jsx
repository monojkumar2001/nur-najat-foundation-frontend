"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const inputClass =
  "mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none transition-shadow placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/25";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <motion.p
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="rounded-xl border border-primary/20 bg-primary/5 px-4 py-6 text-center font-medium text-slate-800"
      >
        Thanks — we&apos;ll get back to you soon. (Demo form)
      </motion.p>
    );
  }

  return (
    <form
      className="grid gap-5"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <div>
        <label htmlFor="c-name" className="text-sm font-semibold text-slate-800">
          Name
        </label>
        <input id="c-name" required className={inputClass} placeholder="Your name" />
      </div>
      <div>
        <label htmlFor="c-email" className="text-sm font-semibold text-slate-800">
          Email
        </label>
        <input
          id="c-email"
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
          className={inputClass}
          placeholder="How can we help?"
        />
      </div>
      <div>
        <label htmlFor="c-msg" className="text-sm font-semibold text-slate-800">
          Message
        </label>
        <textarea
          id="c-msg"
          required
          rows={5}
          className={`${inputClass} resize-y min-h-[8rem]`}
          placeholder="Write your message..."
        />
      </div>
      <motion.button
        type="submit"
        className="rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary-dark"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        Send message
      </motion.button>
    </form>
  );
}
