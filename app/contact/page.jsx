import Image from "next/image";
import { PageHeader } from "@/components/Layout/PageHeader";
import { ContactForm } from "@/components/contact/ContactForm";
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
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-start lg:gap-16 lg:px-8">
          <div>
            <div className="relative mb-10 hidden overflow-hidden rounded-2xl shadow-lg ring-1 ring-slate-200/60 lg:block">
              <div className="relative aspect-[4/3]">
                <Image
                  src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&w=900&q=80"
                  alt=""
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
              </div>
            </div>
            <h2 className="heading-font text-lg font-bold text-slate-900">
              Contact details
            </h2>
            <ul className="mt-6 space-y-4 text-slate-600">
              <li>
                <span className="font-medium text-slate-900">Address:</span>
                <br />
                123 Mission Street, City, ST 00000
              </li>
              <li>
                <span className="font-medium text-slate-900">Phone:</span>{" "}
                <a
                  href="tel:+15551234567"
                  className="text-primary hover:underline"
                >
                  +1 (555) 123-4567
                </a>
              </li>
              <li>
                <span className="font-medium text-slate-900">Email:</span>{" "}
                <a
                  href="mailto:hello@nur-najat.org"
                  className="text-primary hover:underline"
                >
                  hello@nur-najat.org
                </a>
              </li>
            </ul>
            <h2 className="heading-font mt-10 text-lg font-bold text-slate-900">
              Social
            </h2>
            <ul className="mt-4 flex flex-wrap gap-4 text-sm font-medium text-primary">
              <li>
                <a href="#" className="hover:underline">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  YouTube
                </a>
              </li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg sm:p-8">
            <h2 className="heading-font text-lg font-bold text-slate-900">
              Send a message
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              We typically reply within two business days.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
