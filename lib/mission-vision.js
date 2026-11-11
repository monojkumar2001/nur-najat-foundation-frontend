import { apiFetch } from "@/lib/api";

export async function fetchMissionVisionPage() {
  try {
    return await apiFetch("/mission-vision");
  } catch (error) {
    console.error("Failed to load mission & vision page:", error);
    return null;
  }
}
