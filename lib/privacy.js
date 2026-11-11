import { apiFetch } from "@/lib/api";

export async function fetchPrivacyPage() {
  try {
    return await apiFetch("/privacy");
  } catch (error) {
    console.error("Failed to load privacy page:", error);
    return null;
  }
}
