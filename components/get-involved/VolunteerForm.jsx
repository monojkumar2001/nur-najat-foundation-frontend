"use client";

import { useMemo, useState } from "react";
import {
  isValidBangladeshPhone,
  submitVolunteerApplication,
} from "@/lib/get-involved";

const fieldClass =
  "mt-1.5 w-full rounded-md border border-slate-300 bg-white px-4 py-2.5 text-slate-900 " +
  "placeholder:text-slate-400 transition-shadow " +
  "outline-none focus:border-primary focus:ring-2 focus:ring-primary/20";

const fieldErrorClass =
  "mt-1.5 w-full rounded-md border border-red-400 bg-white px-4 py-2.5 text-slate-900 " +
  "placeholder:text-slate-400 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200";

export function VolunteerForm({ interestOptions = [] }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});

  const options = useMemo(() => {
    if (interestOptions?.length) {
      return interestOptions.map((item) =>
        typeof item === "string" ? item : item.title,
      );
    }
    return [
      "Field Support Volunteer",
      "Education Volunteer",
      "Women’s Development Volunteer",
      "Content Creator Volunteer",
      "Online Ambassador",
      "General Volunteer",
    ];
  }, [interestOptions]);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setFieldErrors({});

    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const phone = String(form.get("phone") || "").trim();
    const interest = String(form.get("interest") || "").trim();
    const message = String(form.get("message") || "").trim();

    const nextErrors = {};
    if (!name) nextErrors.name = "Full name is required.";
    if (!email) nextErrors.email = "Email is required.";
    if (!phone) {
      nextErrors.phone = "Phone number is required.";
    } else if (!isValidBangladeshPhone(phone)) {
      nextErrors.phone =
        "Enter a valid Bangladesh mobile number (e.g. 017XXXXXXXX or +88017XXXXXXXX).";
    }
    if (!interest) nextErrors.interest = "Please select an area of interest.";

    if (Object.keys(nextErrors).length) {
      setFieldErrors(nextErrors);
      return;
    }

    setLoading(true);
    try {
      await submitVolunteerApplication({
        name,
        email,
        phone,
        interest,
        message: message || null,
      });
      setSubmitted(true);
    } catch (err) {
      setError(err.message || "Submission failed.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-xl border border-primary/30 bg-primary/5 p-6 text-center">
        <p className="font-semibold text-slate-900">Thank you for your interest.</p>
        <p className="mt-2 text-sm text-slate-600">
          Your registration was received. Our team will follow up with next steps.
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
          Full name <span className="text-red-500">*</span>
        </label>
        <input
          id="vol-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          placeholder="Your full name"
          className={fieldErrors.name ? fieldErrorClass : fieldClass}
        />
        {fieldErrors.name ? (
          <p className="mt-1 text-xs text-red-600">{fieldErrors.name}</p>
        ) : null}
      </div>
      <div>
        <label htmlFor="vol-email" className="block text-sm font-semibold text-slate-800">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          id="vol-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@example.com"
          className={fieldErrors.email ? fieldErrorClass : fieldClass}
        />
        {fieldErrors.email ? (
          <p className="mt-1 text-xs text-red-600">{fieldErrors.email}</p>
        ) : null}
      </div>
      <div>
        <label htmlFor="vol-phone" className="block text-sm font-semibold text-slate-800">
          Phone <span className="text-red-500">*</span>
        </label>
        <input
          id="vol-phone"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          placeholder="017XXXXXXXX or +88017XXXXXXXX"
          className={fieldErrors.phone ? fieldErrorClass : fieldClass}
        />
        {fieldErrors.phone ? (
          <p className="mt-1 text-xs text-red-600">{fieldErrors.phone}</p>
        ) : (
          <p className="mt-1 text-xs text-slate-500">
            Bangladesh mobile only (01XXXXXXXXX).
          </p>
        )}
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="vol-interest" className="block text-sm font-semibold text-slate-800">
          Areas of interest <span className="text-red-500">*</span>
        </label>
        <select
          id="vol-interest"
          name="interest"
          required
          className={`${fieldErrors.interest ? fieldErrorClass : fieldClass} cursor-pointer appearance-none`}
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
          {options.map((opt) => (
            <option key={opt} value={opt} className="text-slate-900">
              {opt}
            </option>
          ))}
        </select>
        {fieldErrors.interest ? (
          <p className="mt-1 text-xs text-red-600">{fieldErrors.interest}</p>
        ) : null}
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

      {error ? (
        <div className="sm:col-span-2 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      ) : null}

      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={loading}
          className="rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {loading ? "Submitting..." : "Submit registration"}
        </button>
      </div>
    </form>
  );
}
