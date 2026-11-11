import { apiFetch } from "@/lib/api";

export async function fetchWorkWithUsPage() {
  try {
    return await apiFetch("/work-with-us");
  } catch (error) {
    console.error("Failed to load work with us page:", error);
    return null;
  }
}
