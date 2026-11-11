import { apiFetch } from "@/lib/api";

export async function fetchWhatWeDoPage() {
  try {
    return await apiFetch("/what-we-do");
  } catch (error) {
    console.error("Failed to load what we do page:", error);
    return null;
  }
}
