import { apiFetch } from "@/lib/api";

export async function fetchOurPeoplePage() {
  try {
    return await apiFetch("/our-people");
  } catch (error) {
    console.error("Failed to load our people page:", error);
    return null;
  }
}
