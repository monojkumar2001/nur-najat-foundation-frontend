import { apiFetch } from "@/lib/api";

export async function fetchEmergencies({ limit } = {}) {
  try {
    const query = limit ? `?limit=${limit}` : "";
    const data = await apiFetch(`/emergencies${query}`);
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Failed to load emergencies:", error);
    return [];
  }
}

export async function fetchEmergencyBySlug(slug) {
  try {
    return await apiFetch(`/emergencies/${slug}`, {
      next: { revalidate: 60 },
    });
  } catch (error) {
    console.error(`Failed to load emergency ${slug}:`, error);
    return null;
  }
}
