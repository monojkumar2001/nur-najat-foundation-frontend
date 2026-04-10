"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import {
  CalendarDays,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  LayoutGrid,
  List,
  MapPin,
  Search,
  Tag,
  X,
} from "lucide-react";

const PAGE_SIZE = 6;

const SORT_OPTIONS = [
  { value: "best", label: "Best match" },
  { value: "newest", label: "Newest first" },
  { value: "oldest", label: "Oldest first" },
];

/** @param {string} s */
function postTime(s) {
  const t = Date.parse(s ?? "");
  return Number.isNaN(t) ? 0 : t;
}

/** @param {string} s */
function postYear(s) {
  const t = postTime(s);
  if (!t) return null;
  return new Date(t).getFullYear();
}

/**
 * @param {number} current
 * @param {number} total
 * @returns {(number | "ellipsis")[]}
 */
function visiblePageItems(current, total) {
  if (total <= 1) return [1];
  if (total <= 9) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }
  const delta = 2;
  /** @type {Set<number>} */
  const set = new Set([1, total, current]);
  for (let i = current - delta; i <= current + delta; i++) {
    if (i >= 1 && i <= total) set.add(i);
  }
  const sorted = [...set].sort((a, b) => a - b);
  /** @type {(number | "ellipsis")[]} */
  const out = [];
  let prev = 0;
  for (const p of sorted) {
    if (prev && p - prev > 1) out.push("ellipsis");
    out.push(p);
    prev = p;
  }
  return out;
}

const selectClass =
  "w-full appearance-none rounded-lg border border-slate-300 bg-white py-2.5 pl-3 pr-9 text-sm font-medium text-slate-800 shadow-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20";

/**
 * @param {{
 *   posts: Record<string, unknown>[],
 *   resultLabel: string,
 *   searchId: string,
 *   searchLabel: string,
 *   emptyMessage: string,
 *   renderPosts: (posts: Record<string, unknown>[], view: "grid" | "list") => import("react").ReactNode,
 * }} props
 */
export function FilterablePostListing({
  posts,
  resultLabel,
  searchId,
  searchLabel,
  emptyMessage,
  renderPosts,
}) {
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("best");
  const [dateRange, setDateRange] = useState("all");
  const [locationFilter, setLocationFilter] = useState("all");
  const [topicFilter, setTopicFilter] = useState("all");
  const [view, setView] = useState("grid");
  const [page, setPage] = useState(1);

  const locations = useMemo(() => {
    const s = new Set(
      posts.map((p) => p.location).filter((x) => typeof x === "string" && x.length)
    );
    return ["all", ...[...s].sort()];
  }, [posts]);

  const topics = useMemo(() => {
    const s = new Set(
      posts.map((p) => p.topic).filter((x) => typeof x === "string" && x.length)
    );
    return ["all", ...[...s].sort()];
  }, [posts]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    let list = posts.filter((p) => {
      if (dateRange !== "all") {
        const y = postYear(String(p.date ?? ""));
        if (y === null || String(y) !== dateRange) return false;
      }
      if (locationFilter !== "all" && String(p.location ?? "") !== locationFilter) {
        return false;
      }
      if (topicFilter !== "all" && String(p.topic ?? "") !== topicFilter) {
        return false;
      }
      if (q) {
        const hay = `${p.title} ${p.excerpt ?? ""} ${p.category ?? ""} ${p.topic ?? ""}`
          .toLowerCase()
          .replace(/\s+/g, " ");
        if (!hay.includes(q)) return false;
      }
      return true;
    });

    if (sort === "newest") {
      list = [...list].sort((a, b) => postTime(String(b.date)) - postTime(String(a.date)));
    } else if (sort === "oldest") {
      list = [...list].sort((a, b) => postTime(String(a.date)) - postTime(String(b.date)));
    } else if (q) {
      list = [...list].sort((a, b) => {
        const score = (p) => {
          const t = String(p.title ?? "").toLowerCase();
          const e = String(p.excerpt ?? "").toLowerCase();
          let s = 0;
          if (t.includes(q)) s += 4;
          if (e.includes(q)) s += 2;
          if (String(p.category ?? "").toLowerCase().includes(q)) s += 1;
          if (String(p.topic ?? "").toLowerCase().includes(q)) s += 1;
          return s;
        };
        return score(b) - score(a);
      });
    }

    return list;
  }, [posts, query, sort, dateRange, locationFilter, topicFilter]);

  const totalResults = filtered.length;
  const totalPages = Math.max(1, Math.ceil(totalResults / PAGE_SIZE));

  useEffect(() => {
    setPage((p) => Math.min(p, totalPages));
  }, [totalPages]);

  const safePage = Math.min(page, totalPages);
  const pageStart = (safePage - 1) * PAGE_SIZE;
  const pagePosts = filtered.slice(pageStart, pageStart + PAGE_SIZE);
  const pageItems = visiblePageItems(safePage, totalPages);

  const clearAll = useCallback(() => {
    setQuery("");
    setSort("best");
    setDateRange("all");
    setLocationFilter("all");
    setTopicFilter("all");
    setPage(1);
  }, []);

  const hasActiveFilters =
    query.trim() !== "" ||
    sort !== "best" ||
    dateRange !== "all" ||
    locationFilter !== "all" ||
    topicFilter !== "all";

  return (
    <div className="space-y-6">
      <p className="text-sm font-medium text-slate-700">
        {resultLabel}: <span className="font-semibold text-slate-900">{totalResults}</span>{" "}
        {totalResults === 1 ? "result" : "results"}
      </p>

      <div className="flex rounded-xl border border-slate-300 bg-white shadow-sm ring-1 ring-slate-200/60 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20">
        <label htmlFor={searchId} className="sr-only">
          {searchLabel}
        </label>
        <input
          id={searchId}
          type="search"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setPage(1);
          }}
          placeholder="Search"
          className="min-w-0 flex-1 rounded-l-xl border-0 bg-transparent px-4 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400"
        />
        <div className="flex items-center border-l border-slate-200 pr-2 pl-1">
          <span className="flex h-10 w-10 items-center justify-center text-slate-400" aria-hidden>
            <Search className="h-5 w-5" />
          </span>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm ring-1 ring-slate-200/60 sm:p-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-2">
            <span className="sr-only">View</span>
            <div className="inline-flex rounded-lg border border-slate-300 bg-slate-50 p-0.5 shadow-sm">
              <button
                type="button"
                onClick={() => setView("list")}
                className={`inline-flex h-9 w-9 items-center justify-center rounded-md transition ${
                  view === "list"
                    ? "bg-white text-slate-900 shadow-sm"
                    : "text-slate-500 hover:text-slate-800"
                }`}
                aria-pressed={view === "list"}
                aria-label="List view"
              >
                <List className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => setView("grid")}
                className={`inline-flex h-9 w-9 items-center justify-center rounded-md transition ${
                  view === "grid"
                    ? "bg-white text-slate-900 shadow-sm"
                    : "text-slate-500 hover:text-slate-800"
                }`}
                aria-pressed={view === "grid"}
                aria-label="Grid view"
              >
                <LayoutGrid className="h-4 w-4" />
              </button>
            </div>

            <div className="relative min-w-[160px] sm:min-w-[180px]">
              <select
                aria-label="Sort by"
                value={sort}
                onChange={(e) => {
                  setSort(e.target.value);
                  setPage(1);
                }}
                className={selectClass}
              >
                {SORT_OPTIONS.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
              <ChevronDown
                className="pointer-events-none absolute top-1/2 right-2.5 h-4 w-4 -translate-y-1/2 text-slate-600"
                aria-hidden
              />
            </div>
          </div>

          <button
            type="button"
            onClick={clearAll}
            disabled={!hasActiveFilters}
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-900 text-white shadow-sm transition hover:bg-slate-800 disabled:pointer-events-none disabled:opacity-40"
            aria-label="Clear filters and search"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <div className="relative">
            <select
              aria-label="Date range"
              value={dateRange}
              onChange={(e) => {
                setDateRange(e.target.value);
                setPage(1);
              }}
              className={`${selectClass} pl-10`}
            >
              <option value="all">Date range: All</option>
              <option value="2026">2026</option>
              <option value="2025">2025</option>
            </select>
            <CalendarDays
              className="pointer-events-none absolute top-1/2 left-2.5 h-4 w-4 -translate-y-1/2 text-slate-500"
              aria-hidden
            />
            <ChevronDown
              className="pointer-events-none absolute top-1/2 right-2.5 h-4 w-4 -translate-y-1/2 text-slate-600"
              aria-hidden
            />
          </div>
          <div className="relative">
            <select
              aria-label="Locations"
              value={locationFilter}
              onChange={(e) => {
                setLocationFilter(e.target.value);
                setPage(1);
              }}
              className={`${selectClass} pl-10`}
            >
              {locations.map((loc) => (
                <option key={loc} value={loc}>
                  {loc === "all" ? "Locations: All" : loc}
                </option>
              ))}
            </select>
            <MapPin
              className="pointer-events-none absolute top-1/2 left-2.5 h-4 w-4 -translate-y-1/2 text-slate-500"
              aria-hidden
            />
            <ChevronDown
              className="pointer-events-none absolute top-1/2 right-2.5 h-4 w-4 -translate-y-1/2 text-slate-600"
              aria-hidden
            />
          </div>
          <div className="relative">
            <select
              aria-label="Topics"
              value={topicFilter}
              onChange={(e) => {
                setTopicFilter(e.target.value);
                setPage(1);
              }}
              className={`${selectClass} pl-10`}
            >
              {topics.map((t) => (
                <option key={t} value={t}>
                  {t === "all" ? "Topics: All" : t}
                </option>
              ))}
            </select>
            <Tag
              className="pointer-events-none absolute top-1/2 left-2.5 h-4 w-4 -translate-y-1/2 text-slate-500"
              aria-hidden
            />
            <ChevronDown
              className="pointer-events-none absolute top-1/2 right-2.5 h-4 w-4 -translate-y-1/2 text-slate-600"
              aria-hidden
            />
          </div>
        </div>
      </div>

      {pagePosts.length === 0 ? (
        <p className="rounded-xl border border-dashed border-slate-200 bg-slate-50/80 px-6 py-14 text-center text-sm text-slate-600">
          {emptyMessage}
        </p>
      ) : (
        renderPosts(pagePosts, view)
      )}

      {totalPages > 1 ? (
        <nav
          className="flex flex-wrap items-center justify-center gap-1 border-t border-slate-200 pt-8 sm:gap-2"
          aria-label="Pagination"
        >
          <PaginationBtn
            label="First page"
            disabled={safePage <= 1}
            onClick={() => setPage(1)}
          >
            <ChevronsLeft className="h-4 w-4" />
            <span className="hidden sm:inline">First</span>
          </PaginationBtn>
          <PaginationBtn
            label="Previous page"
            disabled={safePage <= 1}
            onClick={() => setPage((p) => Math.max(1, p - 1))}
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="hidden sm:inline">Previous</span>
          </PaginationBtn>

          <span className="mx-1 hidden h-6 w-px bg-slate-200 sm:block" aria-hidden />

          <ul className="flex flex-wrap items-center justify-center gap-1">
            {pageItems.map((item, idx) =>
              item === "ellipsis" ? (
                <li key={`e-${idx}`} className="px-1 text-slate-500">
                  …
                </li>
              ) : (
                <li key={item}>
                  <button
                    type="button"
                    onClick={() => setPage(item)}
                    className={`min-w-9 rounded-lg px-3 py-2 text-sm font-semibold transition ${
                      item === safePage
                        ? "bg-primary text-white shadow-sm"
                        : "text-slate-800 hover:bg-slate-100"
                    }`}
                    aria-current={item === safePage ? "page" : undefined}
                  >
                    {item}
                  </button>
                </li>
              )
            )}
          </ul>

          <span className="mx-1 hidden h-6 w-px bg-slate-200 sm:block" aria-hidden />

          <PaginationBtn
            label="Next page"
            disabled={safePage >= totalPages}
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          >
            <span className="hidden sm:inline">Next</span>
            <ChevronRight className="h-4 w-4" />
          </PaginationBtn>
          <PaginationBtn
            label="Last page"
            disabled={safePage >= totalPages}
            onClick={() => setPage(totalPages)}
          >
            <span className="hidden sm:inline">Last</span>
            <ChevronsRight className="h-4 w-4" />
          </PaginationBtn>
        </nav>
      ) : null}
    </div>
  );
}

/** @param {{ children: import("react").React.ReactNode; label: string; disabled?: boolean; onClick: () => void }} props */
function PaginationBtn({ children, label, disabled, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      className="inline-flex items-center gap-1 rounded-lg px-2 py-2 text-sm font-medium text-slate-800 transition hover:bg-slate-100 disabled:pointer-events-none disabled:text-slate-400 sm:px-3"
    >
      {children}
    </button>
  );
}
