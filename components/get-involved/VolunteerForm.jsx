"use client";

import { useState } from "react";

export function VolunteerForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-xl border border-primary/30 bg-primary/5 p-6 text-center">
        <p className="font-semibold text-navy">Thank you for your interest.</p>
        <p className="mt-2 text-sm text-muted">
          This is a demo form — connect your backend or form service to process
          sign-ups.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-4 sm:grid-cols-2"
      noValidate
    >
      <div className="sm:col-span-2">
        <label htmlFor="vol-name" className="block text-sm font-medium text-navy">
          Full name
        </label>
        <input
          id="vol-name"
          name="name"
          type="text"
          required
          className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-foreground outline-none focus:border-primary focus:ring-1 focus:ring-primary"
        />
      </div>
      <div>
        <label htmlFor="vol-email" className="block text-sm font-medium text-navy">
          Email
        </label>
        <input
          id="vol-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-foreground outline-none focus:border-primary focus:ring-1 focus:ring-primary"
        />
      </div>
      <div>
        <label htmlFor="vol-phone" className="block text-sm font-medium text-navy">
          Phone
        </label>
        <input
          id="vol-phone"
          name="phone"
          type="tel"
          className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-foreground outline-none focus:border-primary focus:ring-1 focus:ring-primary"
        />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="vol-role" className="block text-sm font-medium text-navy">
          Areas of interest
        </label>
        <select
          id="vol-role"
          name="role"
          className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-foreground outline-none focus:border-primary focus:ring-1 focus:ring-primary"
          defaultValue=""
        >
          <option value="" disabled>
            Select an option
          </option>
          <option value="outreach">Community outreach</option>
          <option value="education">Education support</option>
          <option value="events">Events & logistics</option>
          <option value="remote">Remote / digital</option>
        </select>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="vol-message" className="block text-sm font-medium text-navy">
          Message (optional)
        </label>
        <textarea
          id="vol-message"
          name="message"
          rows={4}
          className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-foreground outline-none focus:border-primary focus:ring-1 focus:ring-primary"
        />
      </div>
      <div className="sm:col-span-2">
        <button
          type="submit"
          className="rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
        >
          Submit registration
        </button>
      </div>
    </form>
  );
}
