import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import TrackedLink from "@/components/TrackedLink";
import { site } from "@/lib/site";

const title = "Contact | Pinky's Garage Doors";
const description = "Get a free garage door estimate in Phoenix, AZ. Call, email, or send us a message.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/contact" },
  openGraph: {
    title,
    description,
    url: "/contact",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/images/og-image.jpg"] },
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-ink text-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="font-script text-2xl text-rose sm:text-3xl">Let&apos;s talk</p>
          <h1 className="mt-2 text-3xl font-extrabold uppercase sm:text-5xl">Get a Free Estimate</h1>
          <p className="mt-4 max-w-2xl text-cream/80">
            Tell us what&apos;s going on with your garage door and we&apos;ll get back to you
            fast with honest, upfront pricing.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div className="rounded-lg border border-ink/10 bg-white p-8 shadow-sm">
          <ContactForm />
        </div>

        <div className="space-y-8">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wide text-rose">Phone</h2>
            <TrackedLink href={site.phoneHref} external event="call_click" location="contact_page" className="mt-1 block text-2xl font-bold">
              {site.phone}
            </TrackedLink>
          </div>
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wide text-rose">Email</h2>
            <a href={`mailto:${site.email}`} className="mt-1 block text-lg">
              {site.email}
            </a>
          </div>
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wide text-rose">Service Area</h2>
            <p className="mt-1 text-lg">{site.address}</p>
            <p className="text-ink/70">{site.serviceArea}</p>
          </div>
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wide text-rose">Hours</h2>
            <ul className="mt-1 space-y-1 text-ink/80">
              {site.hours.map((h) => (
                <li key={h.label} className="flex justify-between max-w-xs">
                  <span>{h.label}</span>
                  <span className="font-semibold">{h.value}</span>
                </li>
              ))}
            </ul>
            <p className="mt-2 text-sm font-semibold text-rose">Emergency service available</p>
          </div>
        </div>
      </section>
    </>
  );
}
