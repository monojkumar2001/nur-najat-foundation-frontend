import Image from "next/image";
import { PageHeader } from "@/components/Layout/PageHeader";
import { hero } from "@/lib/unsplash";

export const metadata = {
  title: "Events | Nur and Najat Foundation",
  description: "Upcoming workshops, seminars, and community gatherings.",
};

const events = [
  {
    title: "Community volunteer orientation",
    date: "TBD — April 2025",
    location: "Main office",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&w=600&q=80",
  },
  {
    title: "Youth skills fair",
    date: "TBD — May 2025",
    location: "Field site",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&w=600&q=80",
  },
  {
    title: "Partner learning call",
    date: "TBD — May 2025",
    location: "Online",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&w=600&q=80",
  },
];

export default function EventsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Calendar"
        title="Upcoming events"
        description="Workshops, seminars, and gatherings. Sync with your calendar or CMS when you automate this list."
        image={hero.events}
        imageAlt="Event venue with audience"
      />

      <div className="relative -mt-6 overflow-hidden rounded-t-3xl bg-white pb-16 pt-10 shadow-sm ring-1 ring-slate-200/80">
        <div className="mx-auto max-w-7xl space-y-6 px-4 sm:px-6 lg:px-8">
          <ul className="space-y-6">
            {events.map((ev) => (
              <li key={ev.title}>
                <div className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-lg sm:flex-row">
                  <div className="relative h-56 w-full shrink-0 overflow-hidden sm:h-72 sm:w-72 md:w-80">
                    <Image
                      src={ev.image}
                      alt=""
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(min-width: 640px) 288px, 100vw"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-center p-6 sm:p-8">
                    <p className="text-sm font-semibold uppercase tracking-wide text-primary">
                      {ev.date}
                    </p>
                    <h2 className="heading-font mt-2 text-xl font-bold text-slate-900">
                      {ev.title}
                    </h2>
                    <p className="mt-2 text-sm text-slate-600">{ev.location}</p>
                    <button
                      type="button"
                      className="mt-6 w-fit rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-800 transition-colors hover:border-primary hover:text-primary"
                    >
                      Add to calendar (demo)
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
