import { apiFetch, getApiBaseUrl } from "@/lib/api";

/**
 * Fallback when API is unavailable.
 */
export const contactSite = {
  addressLines: ["123 Mission Street", "City, ST 00000"],
  phoneDisplay: "+1 (555) 123-4567",
  phoneHref: "tel:+15551234567",
  emailDisplay: "hello@nur-najat.org",
  emailHref: "mailto:hello@nur-najat.org",
  officeHours: "Sunday–Thursday, 9:00 AM – 5:00 PM (to be confirmed)",
  mapEmbedUrl:
    "https://maps.google.com/maps?q=123%20Mission%20Street%2C%20City%2C%20ST%2000000&output=embed&z=14",
  mapOpenUrl:
    "https://www.google.com/maps/search/?api=1&query=123%20Mission%20Street%2C%20City%2C%20ST%2000000",
  socialLinks: [
    { label: "Facebook", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "YouTube", href: "#" },
  ],
};

export async function fetchContactPage() {
  try {
    return await apiFetch("/contact-page");
  } catch (error) {
    console.error("Failed to load contact page:", error);
    return null;
  }
}

export async function submitContactMessage(payload) {
  const base = getApiBaseUrl();
  const res = await fetch(`${base}/contact`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    const message =
      data?.errors?.email?.[0] ||
      data?.errors?.name?.[0] ||
      data?.errors?.message?.[0] ||
      data?.message ||
      "Failed to send message. Please try again.";
    throw new Error(message);
  }
  return data;
}
