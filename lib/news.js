import { apiFetch } from "@/lib/api";

export async function fetchNews() {
  try {
    const data = await apiFetch("/news");
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Failed to load news:", error);
    return [];
  }
}

export async function fetchNewsBySlug(slug) {
  try {
    return await apiFetch(`/news/${slug}`, {
      next: { revalidate: 60 },
    });
  } catch (error) {
    console.error(`Failed to load news ${slug}:`, error);
    return null;
  }
}
