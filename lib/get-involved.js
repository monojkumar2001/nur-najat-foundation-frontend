import { getApiBaseUrl } from "@/lib/api";
import { apiFetch } from "@/lib/api";

export async function fetchGetInvolvedPage() {
  try {
    return await apiFetch("/get-involved");
  } catch (error) {
    console.error("Failed to load get-involved page:", error);
    return null;
  }
}

/** Bangladesh mobile: 01XXXXXXXXX / +8801XXXXXXXXX / 8801XXXXXXXXX */
export function isValidBangladeshPhone(phone) {
  if (!phone) return false;
  const cleaned = String(phone).replace(/[\s\-()]/g, "");
  return /^(?:\+?88)?01[3-9]\d{8}$/.test(cleaned);
}

export async function submitVolunteerApplication(payload) {
  const base = getApiBaseUrl();
  const res = await fetch(`${base}/volunteers`, {
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
      data?.errors?.phone?.[0] ||
      data?.errors?.email?.[0] ||
      data?.errors?.name?.[0] ||
      data?.errors?.interest?.[0] ||
      data?.message ||
      "Submission failed. Please try again.";
    throw new Error(message);
  }

  return data;
}
