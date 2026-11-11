import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

function pageHref(page) {
  return page <= 1 ? "/blog" : `/blog?page=${page}`;
}

export function BlogPagination({ currentPage, lastPage }) {
  if (!lastPage || lastPage <= 1) {
    return null;
  }

  const pages = Array.from({ length: lastPage }, (_, i) => i + 1);
  const prev = currentPage > 1 ? currentPage - 1 : null;
  const next = currentPage < lastPage ? currentPage + 1 : null;

  return (
    <nav
      className="mt-14 flex flex-wrap items-center justify-center gap-2"
      aria-label="Blog pagination"
    >
      {prev ? (
        <Link
          href={pageHref(prev)}
          className="inline-flex h-10 items-center gap-1 rounded-lg border border-slate-200 bg-white px-3 text-sm font-medium text-slate-700 transition-colors hover:border-primary/40 hover:text-primary"
          aria-label="Previous page"
        >
          <ChevronLeft className="h-4 w-4" aria-hidden />
          Prev
        </Link>
      ) : (
        <span className="inline-flex h-10 items-center gap-1 rounded-lg border border-slate-100 bg-slate-50 px-3 text-sm font-medium text-slate-400">
          <ChevronLeft className="h-4 w-4" aria-hidden />
          Prev
        </span>
      )}

      <ul className="flex list-none flex-wrap items-center gap-1.5 p-0">
        {pages.map((page) => {
          const active = page === currentPage;
          return (
            <li key={page}>
              {active ? (
                <span
                  className="inline-flex h-10 min-w-10 items-center justify-center rounded-lg bg-primary px-3 text-sm font-semibold text-white"
                  aria-current="page"
                >
                  {page}
                </span>
              ) : (
                <Link
                  href={pageHref(page)}
                  className="inline-flex h-10 min-w-10 items-center justify-center rounded-lg border border-slate-200 bg-white px-3 text-sm font-medium text-slate-700 transition-colors hover:border-primary/40 hover:text-primary"
                >
                  {page}
                </Link>
              )}
            </li>
          );
        })}
      </ul>

      {next ? (
        <Link
          href={pageHref(next)}
          className="inline-flex h-10 items-center gap-1 rounded-lg border border-slate-200 bg-white px-3 text-sm font-medium text-slate-700 transition-colors hover:border-primary/40 hover:text-primary"
          aria-label="Next page"
        >
          Next
          <ChevronRight className="h-4 w-4" aria-hidden />
        </Link>
      ) : (
        <span className="inline-flex h-10 items-center gap-1 rounded-lg border border-slate-100 bg-slate-50 px-3 text-sm font-medium text-slate-400">
          Next
          <ChevronRight className="h-4 w-4" aria-hidden />
        </span>
      )}
    </nav>
  );
}
