import { apiFetch } from "@/lib/api";

export async function fetchVideos({ limit } = {}) {
  try {
    const query = limit ? `?limit=${limit}` : "";
    const data = await apiFetch(`/videos${query}`);
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Failed to load videos:", error);
    return [];
  }
}

export function youtubeEmbedUrl(youtubeId) {
  if (!youtubeId) return "";
  return `https://www.youtube-nocookie.com/embed/${youtubeId}?rel=0`;
}

export function youtubeThumbUrl(youtubeId) {
  if (!youtubeId) return "";
  return `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`;
}
