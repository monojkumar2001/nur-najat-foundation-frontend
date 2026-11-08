import Link from "next/link";
import { PageHeader } from "@/components/Layout/PageHeader";
import { hero } from "@/lib/unsplash";

export const metadata = {
  keywords: ['Nur and Najat Foundation', 'community development', 'Bangladesh NGO'],
  title: "Terms | Nur and Najat Foundation",
  description: "Terms of use for the Nur and Najat Foundation website.",
};

export default function TermsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Terms of use"
        description="Rules for using our website, content, and communications."
        image={hero.press}
        imageAlt="Press and announcements"
      />

      <div className="relative -mt-6 overflow-hidden rounded-t-3xl pb-10 bg-white pt-10 shadow-sm ring-1 ring-slate-200/80">
        <div className="mx-auto max-w-4xl px-4 py-6 sm:px-6 sm:py-6 lg:px-8 lg:py-6">
          <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm ring-1 ring-slate-100 sm:p-8">
            <p className="text-sm text-slate-600">
              Last updated: <span className="font-semibold text-slate-900">April 10, 2026</span>
            </p>

            <div className="mt-8 space-y-8 text-base leading-relaxed text-slate-700">
              <section className="space-y-3">
                <h2 className="heading-font text-xl font-bold text-slate-900">Agreement</h2>
                <p>
                  By accessing or using the Nur and Najat Foundation (“NNF”) website, you agree to
                  these terms. If you do not agree, please do not use the site.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="heading-font text-xl font-bold text-slate-900">Information accuracy</h2>
                <p>
                  We aim to keep information accurate and up to date, but content may change without
                  notice. Materials are provided for general information and do not constitute legal,
                  financial, or professional advice.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="heading-font text-xl font-bold text-slate-900">Use of the website</h2>
                <ul className="list-disc space-y-2 pl-5 marker:text-primary">
                  <li>Do not attempt to disrupt, hack, scrape, or misuse the site or its services.</li>
                  <li>Do not use the site in any way that violates applicable laws or regulations.</li>
                  <li>Do not misrepresent your affiliation with NNF.</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="heading-font text-xl font-bold text-slate-900">Donations &amp; forms</h2>
                <p>
                  Any donation or form submission flows are provided for convenience. Processing,
                  receipts, and compliance requirements may depend on your location and the channel
                  used. Replace this section with your final policy text from your finance/legal team.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="heading-font text-xl font-bold text-slate-900">Intellectual property</h2>
                <p>
                  Unless otherwise stated, website content (text, branding, images, layout) is owned by
                  NNF or used with permission. Do not copy, distribute, or reuse materials without
                  written consent.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="heading-font text-xl font-bold text-slate-900">Limitation of liability</h2>
                <p>
                  To the fullest extent permitted by law, NNF is not liable for any indirect or
                  consequential damages arising from your use of the website. Replace with counsel-approved
                  wording for your jurisdiction.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="heading-font text-xl font-bold text-slate-900">Contact</h2>
                <p>
                  Questions about these terms? Email{" "}
                  <a
                    href="mailto:hello@nurnajatfoundation.org"
                    className="font-semibold text-primary underline-offset-4 hover:underline"
                  >
                    hello@nurnajatfoundation.org
                  </a>
                  .
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="heading-font text-xl font-bold text-slate-900">Privacy</h2>
                <p>
                  See our{" "}
                  <Link
                    href="/privacy"
                    className="font-semibold text-primary underline-offset-4 hover:underline"
                  >
                    Privacy policy
                  </Link>
                  .
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
