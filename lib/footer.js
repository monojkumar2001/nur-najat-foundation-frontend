import { apiFetch, getApiBaseUrl } from "@/lib/api";

export async function fetchFooterSettings() {
  try {
    return await apiFetch("/footer");
  } catch (error) {
    console.error("Failed to load footer settings:", error);
    return null;
  }
}

export async function subscribeNewsletter(email) {
  const base = getApiBaseUrl();
  const res = await fetch(`${base}/newsletter/subscribe`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });

  const data = await res.json().catch(() => ({}));

  if (!res.ok) {
    const message =
      data?.message ||
      data?.errors?.email?.[0] ||
      "Unable to subscribe right now.";
    throw new Error(message);
  }

  return data;
}
