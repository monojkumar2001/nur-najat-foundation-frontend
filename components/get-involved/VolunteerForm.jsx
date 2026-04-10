"use client";

import { useState } from "react";

const fieldClass =
  "mt-1.5 w-full rounded-md border border-slate-300 bg-white px-4 py-2.5 text-slate-900 " +
  "placeholder:text-slate-400 transition-shadow " +
  "outline-none focus:border-primary focus:ring-2 focus:ring-primary/20";

export function VolunteerForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-xl border border-primary/30 bg-primary/5 p-6 text-center">
        <p className="font-semibold text-slate-900">Thank you for your interest.</p>
        <p className="mt-2 text-sm text-slate-600">
          This is a demo form — connect your backend or form service to process
          sign-ups.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="nnf-form-focus grid gap-5 sm:grid-cols-2"
      noValidate
    >
      <div className="sm:col-span-2">
        <label htmlFor="vol-name" className="block text-sm font-semibold text-slate-800">
          Full name
        </label>
        <input
          id="vol-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          placeholder="Your full name"
          className={fieldClass}
        />
      </div>
      <div>
        <label htmlFor="vol-email" className="block text-sm font-semibold text-slate-800">
          Email
        </label>
        <input
          id="vol-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@example.com"
          className={fieldClass}
        />
      </div>
      <div>
        <label htmlFor="vol-phone" className="block text-sm font-semibold text-slate-800">
          Phone
        </label>
        <input
          id="vol-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder="+880 …"
          className={fieldClass}
        />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="vol-role" className="block text-sm font-semibold text-slate-800">
          Areas of interest
        </label>
        <select
          id="vol-role"
          name="role"
          required
          className={`${fieldClass} cursor-pointer appearance-none`}
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2364748b' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right 0.75rem center",
            backgroundSize: "1.25rem",
            paddingRight: "2.5rem",
          }}
          defaultValue=""
        >
          <option value="" disabled className="text-slate-500">
            Select an option
          </option>
          <option value="outreach" className="text-slate-900">
            Community outreach
          </option>
          <option value="education" className="text-slate-900">
            Education support
          </option>
          <option value="events" className="text-slate-900">
            Events & logistics
          </option>
          <option value="remote" className="text-slate-900">
            Remote / digital
          </option>
        </select>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="vol-message" className="block text-sm font-semibold text-slate-800">
          Message (optional)
        </label>
        <textarea
          id="vol-message"
          name="message"
          rows={4}
          placeholder="Tell us about your skills or availability..."
          className={`${fieldClass} resize-y min-h-[100px]`}
        />
      </div>
      <div className="sm:col-span-2">
        <button
          type="submit"
          className="rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2"
        >
          Submit registration
        </button>
      </div>
    </form>
  );
}
