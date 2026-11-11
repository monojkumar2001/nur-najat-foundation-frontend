import { apiFetch } from "@/lib/api";

export async function fetchAboutPage() {
  try {
    return await apiFetch("/about");
  } catch (error) {
    console.error("Failed to load about page:", error);
    return null;
  }
}
