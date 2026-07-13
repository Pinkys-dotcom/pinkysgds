import type { Metadata } from "next";
import Link from "next/link";
import { CreditCardIcon } from "@/components/icons";
import { financingFaqs, financingHighlights, financingSteps, site } from "@/lib/site";

const title = "Financing | Pinky's Garage Doors";
const description = "Flexible financing options for garage door repair, replacement, and installation in Phoenix, AZ.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/financing" },
  openGraph: {
    title,
    description,
    url: "/financing",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/images/og-image.jpg"] },
};

export default function FinancingPage() {
  return (
    <>
      <section className="bg-ink text-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="font-script text-2xl text-rose sm:text-3xl">Pay over time</p>
          <h1 className="mt-2 text-3xl font-extrabold uppercase sm:text-5xl">Financing Options</h1>
          <p className="mt-4 max-w-2xl text-cream/80">
            Get the garage door you need today with flexible monthly payments that fit your
            budget. Apply in minutes—no impact to your credit score to check your rate.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-md bg-rose px-6 py-3 text-sm font-bold uppercase tracking-wide text-ink hover:bg-rose-dark transition-colors"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold uppercase sm:text-4xl">
            How It <span className="text-rose">Works</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {financingSteps.map((step, i) => (
            <div key={step.title} className="rounded-lg border border-ink/10 bg-white p-6 shadow-sm">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-rose text-ink font-extrabold">
                {i + 1}
              </div>
              <h3 className="text-lg font-bold">{step.title}</h3>
              <p className="mt-2 text-sm text-ink/70">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-ink-soft text-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[auto_1fr]">
            <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-rose/15">
              <CreditCardIcon className="h-14 w-14 text-rose" />
            </div>
            <div>
              <h2 className="text-3xl font-extrabold uppercase sm:text-4xl">
                Why Finance With <span className="text-rose">Pinky&apos;s</span>
              </h2>
              <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
                {financingHighlights.map((h) => (
                  <div key={h.title}>
                    <h3 className="text-base font-bold uppercase tracking-wide text-rose">{h.title}</h3>
                    <p className="mt-2 text-sm text-cream/80">{h.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold uppercase sm:text-4xl">
            Financing <span className="text-rose">FAQs</span>
          </h2>
        </div>
        <div className="mx-auto max-w-3xl space-y-4">
          {financingFaqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-lg border border-ink/10 bg-white p-5 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer items-center justify-between font-bold">
                {faq.question}
                <span className="ml-4 shrink-0 text-rose transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm text-ink/70">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA banner */}
      <section className="bg-rose">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="text-center sm:text-left">
            <h2 className="text-2xl font-extrabold uppercase text-ink sm:text-3xl">
              Ready to get started?
            </h2>
            <p className="mt-2 text-ink/80">Talk to our team about financing your next project.</p>
          </div>
          <a
            href={site.phoneHref}
            className="shrink-0 rounded-md bg-ink px-6 py-3 text-sm font-bold uppercase tracking-wide text-cream hover:bg-ink-soft transition-colors"
          >
            Call {site.phone}
          </a>
        </div>
      </section>
    </>
  );
}
