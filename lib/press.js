import { apiFetch } from "@/lib/api";

export async function fetchPressReleases({ limit } = {}) {
  try {
    const query = limit ? `?limit=${limit}` : "";
    const data = await apiFetch(`/press${query}`);
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Failed to load press releases:", error);
    return [];
  }
}

export async function fetchPressBySlug(slug) {
  try {
    return await apiFetch(`/press/${slug}`, {
      next: { revalidate: 60 },
    });
  } catch (error) {
    console.error(`Failed to load press release ${slug}:`, error);
    return null;
  }
}
