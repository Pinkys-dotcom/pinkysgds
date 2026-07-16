import type { Metadata } from "next";
import TrackedLink from "@/components/TrackedLink";
import { serviceIconMap } from "@/components/icons";
import { services, site } from "@/lib/site";

const title = "Services | Pinky's Garage Doors";
const description =
  "Garage door repair, new garage doors, openers, and commercial doors in Phoenix, AZ. Honest recommendations and expert installation.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/services" },
  openGraph: {
    title,
    description,
    url: "/services",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/images/og-image.jpg"] },
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-ink text-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="font-script text-2xl text-rose sm:text-3xl">What we do</p>
          <h1 className="mt-2 text-3xl font-extrabold uppercase sm:text-5xl">Our Services</h1>
          <p className="mt-4 max-w-2xl text-cream/80">
            From a single sticky spring to a full commercial door install, our team handles it
            with the same honest pricing and craftsmanship every time.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-16">
        {services.map((s, i) => {
          const Icon = serviceIconMap[s.icon];
          return (
            <div
              key={s.slug}
              id={s.slug}
              className="scroll-mt-24 grid grid-cols-1 items-center gap-8 lg:grid-cols-2"
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-rose/15">
                  <Icon className="h-7 w-7 text-rose" />
                </div>
                <h2 className="text-2xl font-extrabold uppercase">{s.title}</h2>
                <p className="mt-3 text-ink/70">{s.description}</p>
                <TrackedLink
                  href="/contact"
                  event="estimate_click"
                  location={`service_${s.slug}`}
                  className="mt-6 inline-block rounded-md bg-rose px-6 py-3 text-sm font-bold uppercase tracking-wide text-ink hover:bg-rose-dark transition-colors"
                >
                  Get a Free Estimate
                </TrackedLink>
              </div>
              <div
                className={`rounded-lg bg-ink-soft p-10 text-cream flex items-center justify-center ${
                  i % 2 === 1 ? "lg:order-1" : ""
                }`}
              >
                <Icon className="h-32 w-32 text-rose/70" />
              </div>
            </div>
          );
        })}
      </section>

      <section className="bg-rose">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="text-center sm:text-left">
            <h2 className="text-2xl font-extrabold uppercase text-ink sm:text-3xl">
              Not sure what you need?
            </h2>
            <p className="mt-2 text-ink/80">Call us and we&apos;ll help you figure it out—no pressure.</p>
          </div>
          <TrackedLink
            href={site.phoneHref}
            external
            event="call_click"
            location="services_cta_banner"
            className="shrink-0 rounded-md bg-ink px-6 py-3 text-sm font-bold uppercase tracking-wide text-cream hover:bg-ink-soft transition-colors"
          >
            Call {site.phone}
          </TrackedLink>
        </div>
      </section>
    </>
  );
}
