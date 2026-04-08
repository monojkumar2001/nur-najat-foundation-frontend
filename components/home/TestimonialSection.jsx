import Image from "next/image";

const bgImage =
  "https://images.unsplash.com/photo-1488521787991-ed7bbaae773f?auto=format&fit=crop&w=1920&q=80";

export function TestimonialSection() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <Image
        src={bgImage}
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-navy/80" />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        <svg
          className="mx-auto h-10 w-10 text-accent"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden
        >
          <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
        </svg>
        <blockquote className="heading-font mt-8 text-2xl font-semibold leading-snug text-white sm:text-3xl">
          The foundation did not just fund our school — they walked with us.
          Parents trust the program because it was built with our village, not
          for it.
        </blockquote>
        <p className="mt-8 text-sm font-semibold uppercase tracking-wide text-accent">
          Amina Rahman
        </p>
        <p className="mt-1 text-sm text-white/80">Parent &amp; school committee lead</p>
      </div>
    </section>
  );
}
