import { apiFetch } from "@/lib/api";

export async function fetchGalleries({ limit } = {}) {
  try {
    const query = limit ? `?limit=${limit}` : "";
    const data = await apiFetch(`/galleries${query}`);
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Failed to load galleries:", error);
    return [];
  }
}
