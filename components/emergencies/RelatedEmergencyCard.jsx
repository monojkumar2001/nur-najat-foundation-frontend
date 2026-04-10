import Image from "next/image";
import Link from "next/link";
import { AlertTriangle, ArrowUpRight, Calendar } from "lucide-react";

export function RelatedEmergencyCard({
  slug,
  title,
  date,
  excerpt,
  image,
  category,
  author,
}) {
  const typeLabel = category ?? "Emergency";

  return (
    <li>
      <Link
        href={`/emergencies/${slug}`}
        className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm ring-1 ring-slate-200/60 transition-shadow hover:shadow-md"
      >
        <div className="relative aspect-16/10 w-full overflow-hidden bg-slate-100">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 motion-reduce:transform-none group-hover:scale-105"
            sizes="(min-width: 1024px) 360px, 50vw"
          />
        </div>
        <div className="flex flex-1 flex-col p-5">
          <div className="flex items-center justify-between gap-2">
            <div className="flex min-w-0 items-center gap-2 text-xs font-medium uppercase tracking-wide text-slate-500">
              <AlertTriangle className="h-4 w-4 shrink-0 text-primary/70" aria-hidden />
              <span className="truncate">{typeLabel}</span>
            </div>
            <div className="flex shrink-0 items-center gap-2 text-xs font-medium uppercase tracking-wide text-slate-500">
              <Calendar className="h-4 w-4 text-primary/70" aria-hidden />
              <time>{date}</time>
            </div>
          </div>
          <span className="heading-font mt-3 line-clamp-2 text-lg font-bold leading-snug text-slate-900 group-hover:text-primary">
            {title}
          </span>
          {excerpt ? (
            <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-slate-600">
              {excerpt}
            </p>
          ) : null}
          {author ? (
            <p className="mt-2 text-xs font-medium text-slate-500">By {author}</p>
          ) : null}
          <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
            Read now
            <ArrowUpRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden
            />
          </span>
        </div>
      </Link>
    </li>
  );
}
