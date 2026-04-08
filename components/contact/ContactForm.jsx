"use client";

import { useState } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <p className="text-center font-medium text-navy">
        Thanks — we&apos;ll get back to you soon. (Demo form)
      </p>
    );
  }

  return (
    <form
      className="grid gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <div>
        <label htmlFor="c-name" className="block text-sm font-medium text-navy">
          Name
        </label>
        <input
          id="c-name"
          required
          className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-primary focus:ring-1 focus:ring-primary"
        />
      </div>
      <div>
        <label htmlFor="c-email" className="block text-sm font-medium text-navy">
          Email
        </label>
        <input
          id="c-email"
          type="email"
          required
          className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-primary focus:ring-1 focus:ring-primary"
        />
      </div>
      <div>
        <label htmlFor="c-subject" className="block text-sm font-medium text-navy">
          Subject
        </label>
        <input
          id="c-subject"
          className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-primary focus:ring-1 focus:ring-primary"
        />
      </div>
      <div>
        <label htmlFor="c-msg" className="block text-sm font-medium text-navy">
          Message
        </label>
        <textarea
          id="c-msg"
          required
          rows={5}
          className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-primary focus:ring-1 focus:ring-primary"
        />
      </div>
      <button
        type="submit"
        className="rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary-dark"
      >
        Send message
      </button>
    </form>
  );
}
