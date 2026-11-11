import { apiFetch } from "@/lib/api";

export async function fetchTermsPage() {
  try {
    return await apiFetch("/terms");
  } catch (error) {
    console.error("Failed to load terms page:", error);
    return null;
  }
}
