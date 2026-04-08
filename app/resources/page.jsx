import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/Layout/PageHeader";
import { hero } from "@/lib/unsplash";

export const metadata = {
  title: "Resources | Nur and Najat Foundation",
  description:
    "Articles and links on poverty reduction, education, and community development.",
};

const items = [
  {
    title: "Understanding multidimensional poverty",
    blurb: "How communities experience lack of income, health, and education together — and what helps.",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&w=800&q=80",
  },
  {
    title: "Community-led development",
    blurb: "Local leadership, accountability, and long-term program ownership.",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&w=800&q=80",
  },
  {
    title: "Education & ethics in youth programs",
    blurb: "Values-based learning alongside literacy, life skills, and mentorship.",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&w=800&q=80",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Resources"
        title="Learn with us"
        description="Topics on poverty reduction, education, and community development. Swap in your PDFs, partner links, or research library."
        image={hero.resources}
        imageAlt="Books and learning materials"
      />

      <div className="relative -mt-6 overflow-hidden rounded-t-3xl bg-white pb-16 pt-10 shadow-sm ring-1 ring-slate-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <li key={item.title}>
                <Link
                  href={item.href}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={item.image}
                      alt=""
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(min-width: 1024px) 33vw, 50vw"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h2 className="heading-font text-lg font-bold text-slate-900 group-hover:text-primary">
                      {item.title}
                    </h2>
                    <p className="mt-3 flex-1 text-sm text-slate-600 leading-relaxed">
                      {item.blurb}
                    </p>
                    <span className="mt-4 inline-flex text-sm font-semibold text-primary">
                      Read more →
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
