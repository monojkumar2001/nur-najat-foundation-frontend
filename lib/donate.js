import { apiFetch, getApiBaseUrl } from "@/lib/api";

export async function fetchDonatePage() {
  try {
    return await apiFetch("/donate");
  } catch (error) {
    console.error("Failed to load donate page:", error);
    return null;
  }
}

export async function createDonateCheckout(payload) {
  const base = getApiBaseUrl();
  const res = await fetch(`${base}/donate/checkout`, {
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
      data?.errors?.amount?.[0] ||
      data?.errors?.email?.[0] ||
      data?.message ||
      "Checkout failed. Please try again.";
    throw new Error(message);
  }
  return data;
}

export async function fetchDonateSuccess(sessionId) {
  try {
    return await apiFetch(
      `/donate/success?session_id=${encodeURIComponent(sessionId)}`,
      { cache: "no-store", next: { revalidate: 0 } },
    );
  } catch (error) {
    console.error("Failed to verify donation:", error);
    return null;
  }
}
