import Image from "next/image";

/**
 * @param {{ eyebrow?: string; title: string; description?: string; image?: string; imageAlt?: string }} props
 */
export function PageHeader({ eyebrow, title, description, image, imageAlt = "" }) {
  if (image) {
    return (
      <header className="relative min-h-[260px] w-full sm:min-h-[340px] lg:min-h-[380px]">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/75 to-slate-900/50"
          aria-hidden
        />
        <div className="relative z-10 mx-auto flex min-h-[260px] max-w-7xl flex-col justify-end px-4 pb-10 pt-28 sm:min-h-[340px] sm:px-6 sm:pb-14 sm:pt-32 lg:min-h-[380px] lg:px-8">
          {eyebrow ? (
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary sm:text-sm">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="heading-font mt-3 max-w-4xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          {description ? (
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">
              {description}
            </p>
          ) : null}
        </div>
      </header>
    );
  }

  return (
    <header className="border-b border-slate-200/90 bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        {eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary sm:text-sm">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="heading-font mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
            {description}
          </p>
        ) : null}
      </div>
    </header>
  );
}
