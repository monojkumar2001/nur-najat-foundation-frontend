import { apiFetch } from "@/lib/api";

export async function fetchNews({ limit } = {}) {
  try {
    const query = limit ? `?limit=${limit}` : "";
    const data = await apiFetch(`/news${query}`);
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Failed to load news:", error);
    return [];
  }
}

export async function fetchNewsPaginated({ page = 1, perPage = 12 } = {}) {
  try {
    const params = new URLSearchParams({
      page: String(page),
      per_page: String(perPage),
    });
    const data = await apiFetch(`/news?${params.toString()}`);

    if (Array.isArray(data)) {
      return {
        data,
        meta: {
          currentPage: 1,
          lastPage: 1,
          perPage: data.length,
          total: data.length,
        },
      };
    }

    return {
      data: Array.isArray(data?.data) ? data.data : [],
      meta: {
        currentPage: data?.meta?.currentPage || 1,
        lastPage: data?.meta?.lastPage || 1,
        perPage: data?.meta?.perPage || perPage,
        total: data?.meta?.total || 0,
        from: data?.meta?.from || null,
        to: data?.meta?.to || null,
      },
    };
  } catch (error) {
    console.error("Failed to load paginated news:", error);
    return {
      data: [],
      meta: {
        currentPage: 1,
        lastPage: 1,
        perPage,
        total: 0,
      },
    };
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
