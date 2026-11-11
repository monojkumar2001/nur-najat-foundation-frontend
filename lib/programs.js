import { apiFetch } from "@/lib/api";

function stripHtml(value = "") {
  return String(value)
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/** Short card teaser taken from the first body paragraph. */
export function getProgramExcerpt(program, maxLength = 160) {
  const section = program?.sections?.[0];
  const first =
    section?.paragraphs?.[0] ||
    stripHtml(section?.content || "") ||
    program?.summary ||
    "";
  const text = String(first).trim();
  if (text.length <= maxLength) return text;
  const sliced = text.slice(0, maxLength);
  const lastSpace = sliced.lastIndexOf(" ");
  const cut = lastSpace > 80 ? sliced.slice(0, lastSpace) : sliced;
  return `${cut.trim()}…`;
}

export async function fetchPrograms() {
  try {
    const data = await apiFetch("/programs");
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Failed to load programs:", error);
    return [];
  }
}

export async function fetchProgramBySlug(slug) {
  try {
    return await apiFetch(`/programs/${slug}`, {
      next: { revalidate: 60 },
    });
  } catch (error) {
    console.error(`Failed to load program ${slug}:`, error);
    return null;
  }
}
