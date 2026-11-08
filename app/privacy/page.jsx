import Link from "next/link";
import { PageHeader } from "@/components/Layout/PageHeader";
import { hero } from "@/lib/unsplash";

export const metadata = {
  keywords: ['Nur and Najat Foundation', 'community development', 'Bangladesh NGO'],
  title: "Privacy Policy | Nur and Najat Foundation",
  description: "How Nur and Najat Foundation collects and uses information.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Privacy policy"
        description="A practical summary of how we collect, use, and protect information."
        image={hero.about}
        imageAlt="People collaborating"
      />

      <div className="relative -mt-6 overflow-hidden rounded-t-3xl pb-10 bg-white pt-10 shadow-sm ring-1 ring-slate-200/80">
        <div className="mx-auto max-w-4xl px-4 py-6 sm:px-6 sm:py-6 lg:px-8 lg:py-6">
          <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm ring-1 ring-slate-100 sm:p-8">
            <p className="text-sm text-slate-600">
              Last updated: <span className="font-semibold text-slate-900">April 10, 2026</span>
            </p>

            <div className="mt-8 space-y-8 text-base leading-relaxed text-slate-700">
              <section className="space-y-3">
                <h2 className="heading-font text-xl font-bold text-slate-900">Overview</h2>
                <p>
                  Nur and Najat Foundation (“NNF”, “we”, “our”) respects your privacy. This page
                  explains what information we may collect, how we use it, and the choices you have.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="heading-font text-xl font-bold text-slate-900">Information we collect</h2>
                <ul className="list-disc space-y-2 pl-5 marker:text-primary">
                  <li>
                    <span className="font-semibold text-slate-900">Contact details</span> (for example
                    name, email, phone) when you message us or submit a form.
                  </li>
                  <li>
                    <span className="font-semibold text-slate-900">Message content</span> you provide for
                    enquiries, partnerships, volunteering, or support.
                  </li>
                  <li>
                    <span className="font-semibold text-slate-900">Basic website analytics</span> (if
                    enabled) to understand how visitors use the site and improve usability.
                  </li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="heading-font text-xl font-bold text-slate-900">How we use information</h2>
                <ul className="list-disc space-y-2 pl-5 marker:text-primary">
                  <li>To respond to your questions and requests</li>
                  <li>To operate and improve our programs, communications, and website</li>
                  <li>To protect our services and prevent misuse</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="heading-font text-xl font-bold text-slate-900">Sharing</h2>
                <p>
                  We do not sell your personal information. We may share limited information with trusted
                  service providers who help us operate the website (for example hosting or email
                  delivery), only as needed to provide those services.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="heading-font text-xl font-bold text-slate-900">Your choices</h2>
                <ul className="list-disc space-y-2 pl-5 marker:text-primary">
                  <li>You may request access, correction, or deletion of information where applicable.</li>
                  <li>
                    Contact us anytime at{" "}
                    <a
                      href="mailto:hello@nurnajatfoundation.org"
                      className="font-semibold text-primary underline-offset-4 hover:underline"
                    >
                      hello@nurnajatfoundation.org
                    </a>
                    .
                  </li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="heading-font text-xl font-bold text-slate-900">Related</h2>
                <p>
                  Please also read our{" "}
                  <Link href="/terms" className="font-semibold text-primary underline-offset-4 hover:underline">
                    Terms
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
