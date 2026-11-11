import { PageHeader } from "@/components/Layout/PageHeader";
import { ContactForm } from "@/components/contact/ContactForm";
import { Reveal } from "@/components/motion/Reveal";
import { contactSite, fetchContactPage } from "@/lib/contact";
import { hero } from "@/lib/unsplash";
import { Clock, ExternalLink, Mail, MapPin, Phone, Share2 } from "lucide-react";

export const metadata = {
  keywords: ['Nur and Najat Foundation', 'community development', 'Bangladesh NGO'],
  title: "Contact | Nur and Najat Foundation",
  description:
    "Contact NNF with questions, partnership enquiries, volunteer interest, or messages about our programmes.",
};

export default async function ContactPage() {
  const page = await fetchContactPage();

  const heroTitle = page?.hero?.title || "Get in touch";
  const heroDescription =
    page?.hero?.description ||
    "We welcome questions, ideas, partnership enquiries, volunteer interest and messages from communities, supporters and organizations.";
  const heroImage = page?.hero?.image || hero.contact;

  const intro = page?.intro || {};
  const introParagraphs = intro.paragraphs || [];
  const site = { ...contactSite, ...(page?.site || {}) };
  const form = page?.form || {};

  const {
    addressLines,
    mapEmbedUrl,
    mapOpenUrl,
    phoneDisplay,
    phoneHref,
    emailDisplay,
    emailHref,
    officeHours,
    socialLinks,
  } = site;

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={heroTitle}
        description={heroDescription}
        image={heroImage}
        imageAlt="Contact and communication"
      />

      <div className="relative z-10 -mt-6 overflow-hidden rounded-t-3xl border-x border-b border-slate-200/70 bg-linear-to-b from-slate-50/90 via-white to-white shadow-[0_12px_40px_-12px_rgba(15,23,42,0.12)]">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <Reveal className="mb-12 w-full" y={14}>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              {intro.eyebrow || "Contact"}
            </p>
            <h2 className="heading-font mt-3 text-2xl font-bold uppercase leading-tight text-slate-900 sm:text-3xl">
              {intro.title || "We are here to listen"}
            </h2>
            {introParagraphs.length ? (
              <div className="mt-5 space-y-4 text-pretty text-base leading-relaxed text-slate-600 sm:text-lg">
                {introParagraphs.map((p) => (
                  <p key={p.slice(0, 48)}>{p}</p>
                ))}
              </div>
            ) : null}
          </Reveal>

          <div className="grid gap-10 lg:grid-cols-5 lg:items-start lg:gap-12">
            <Reveal className="lg:col-span-3" y={18}>
              <div className="space-y-6">
                <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-lg ring-1 ring-slate-200/55">
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 px-4 py-3.5 sm:px-5">
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900">
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <MapPin className="h-4 w-4" aria-hidden />
                      </span>
                      Official address
                    </span>
                    <a
                      href={mapOpenUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary underline-offset-4 hover:underline"
                    >
                      Open in Maps
                      <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                    </a>
                  </div>
                  <div className="relative aspect-video w-full bg-slate-100 sm:min-h-[260px]">
                    <iframe
                      title="Office location on Google Maps"
                      src={mapEmbedUrl}
                      className="absolute inset-0 h-full w-full border-0"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      allowFullScreen
                    />
                  </div>
                  <div className="bg-linear-to-br from-slate-50/90 to-white px-4 py-4 sm:px-5 sm:py-5">
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Address
                    </p>
                    <p className="mt-1.5 text-sm font-medium leading-relaxed text-slate-800">
                      {(addressLines || []).map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <a
                    href={phoneHref}
                    className="group flex gap-4 rounded-2xl border border-slate-200/90 bg-white p-4 shadow-sm ring-1 ring-slate-100 transition hover:border-primary/25 hover:shadow-md hover:ring-primary/10 sm:p-5"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary/15">
                      <Phone className="h-5 w-5" aria-hidden />
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                        Telephone
                      </p>
                      <p className="mt-1 text-sm font-semibold text-slate-900 group-hover:text-primary sm:text-base">
                        {phoneDisplay}
                      </p>
                    </div>
                  </a>
                  <a
                    href={emailHref}
                    className="group flex gap-4 rounded-2xl border border-slate-200/90 bg-white p-4 shadow-sm ring-1 ring-slate-100 transition hover:border-primary/25 hover:shadow-md hover:ring-primary/10 sm:p-5"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary/15">
                      <Mail className="h-5 w-5" aria-hidden />
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                        Email
                      </p>
                      <p className="mt-1 break-all text-sm font-semibold text-slate-900 group-hover:text-primary sm:text-base">
                        {emailDisplay}
                      </p>
                    </div>
                  </a>
                </div>

                <div className="rounded-2xl border border-slate-200/80 bg-white/80 px-4 py-5 shadow-sm ring-1 ring-slate-100 sm:px-6">
                  <p className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900">
                    <Clock className="h-4 w-4 text-primary" aria-hidden />
                    Office hours
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                    {officeHours || "To be confirmed by the Foundation."}
                  </p>
                </div>

                {(socialLinks || []).length ? (
                  <div className="rounded-2xl border border-slate-200/80 bg-white/80 px-4 py-5 shadow-sm ring-1 ring-slate-100 sm:px-6">
                    <p className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900">
                      <Share2 className="h-4 w-4 text-primary" aria-hidden />
                      Social media
                    </p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {socialLinks.map((s) => (
                        <li key={s.label}>
                          <a
                            href={s.href || "#"}
                            className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-primary/30 hover:text-primary"
                          >
                            {s.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
            </Reveal>

            <Reveal className="lg:col-span-2" delay={0.08} y={18}>
              <div className="lg:sticky lg:top-28">
                <div className="rounded-2xl border border-slate-200/90 bg-linear-to-b from-white to-slate-50/90 p-6 shadow-xl ring-1 ring-slate-200/55 sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                    {form.eyebrow || "Message us"}
                  </p>
                  <h2 className="heading-font mt-2 text-xl font-bold text-slate-900 sm:text-2xl">
                    {form.title || "Send a message"}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
                    {form.subtitle ||
                      "Programme questions, partnerships, volunteering, or community enquiries — tell us what you need and we will route it to the right person."}
                  </p>
                  <div className="mt-6">
                    <ContactForm />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </>
  );
}
