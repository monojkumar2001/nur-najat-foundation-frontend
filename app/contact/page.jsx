import Image from "next/image";
import { PageHeader } from "@/components/Layout/PageHeader";
import { ContactForm } from "@/components/contact/ContactForm";
import { Reveal } from "@/components/motion/Reveal";
import { hero } from "@/lib/unsplash";

export const metadata = {
  title: "Contact | Nur and Najat Foundation",
  description: "Contact the foundation for inquiries and partnerships.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get in touch"
        description="Questions about programs, partnerships, or media — we read every message."
        image={hero.contact}
        imageAlt="Contact and communication"
      />

      <div className="relative -mt-6 overflow-hidden rounded-t-3xl bg-white shadow-sm ring-1 ring-slate-200/80">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-stretch lg:gap-16 lg:px-8">
          <Reveal className="flex flex-col" y={16}>
            <div className="relative mb-10 hidden overflow-hidden rounded-2xl shadow-lg ring-1 ring-slate-200/60 lg:block">
              <div className="relative aspect-4/3">
                <Image
                  src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&w=900&q=80"
                  alt=""
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105 motion-reduce:hover:scale-100"
                  sizes="50vw"
                />
              </div>
            </div>
            <h2 className="heading-font text-xl font-bold text-slate-900">
              Contact details
            </h2>
            <ul className="mt-6 space-y-4 text-slate-600">
              <li>
                <span className="font-semibold text-slate-900">Address:</span>
                <br />
                123 Mission Street, City, ST 00000
              </li>
              <li>
                <span className="font-semibold text-slate-900">Phone:</span>{" "}
                <a
                  href="tel:+15551234567"
                  className="text-primary underline-offset-2 hover:underline"
                >
                  +1 (555) 123-4567
                </a>
              </li>
              <li>
                <span className="font-semibold text-slate-900">Email:</span>{" "}
                <a
                  href="mailto:hello@nur-najat.org"
                  className="text-primary underline-offset-2 hover:underline"
                >
                  hello@nur-najat.org
                </a>
              </li>
            </ul>
            <h2 className="heading-font mt-10 text-xl font-bold text-slate-900">
              Social
            </h2>
            <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium">
              <li>
                <a href="#" className="text-primary underline-offset-2 hover:underline">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="text-primary underline-offset-2 hover:underline">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-primary underline-offset-2 hover:underline">
                  YouTube
                </a>
              </li>
            </ul>
          </Reveal>
          <Reveal delay={0.06} y={16}>
            <div className="h-full rounded-2xl border border-slate-200/90 bg-linear-to-b from-white to-slate-50/80 p-6 shadow-lg ring-1 ring-slate-200/50 sm:p-8">
              <h2 className="heading-font text-xl font-bold text-slate-900">
                Send a message
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
                We typically reply within two business days.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </>
  );
}
