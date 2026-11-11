import { apiFetch } from "@/lib/api";

export async function fetchHowWeDoItPage() {
  try {
    return await apiFetch("/how-we-do-it");
  } catch (error) {
    console.error("Failed to load how we do it page:", error);
    return null;
  }
}
