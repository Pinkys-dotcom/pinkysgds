import type { Metadata } from "next";
import Link from "next/link";
import ServiceAreaMap from "@/components/ServiceAreaMap";
import { serviceAreas } from "@/lib/serviceAreas";

const title = "Service Areas | Pinky's Garage Doors";
const description =
  "Pinky's Garage Doors proudly serves Phoenix, AZ and 16 surrounding cities across Maricopa County. Find your city for local garage door repair and installation.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/service-areas" },
  openGraph: {
    title,
    description,
    url: "/service-areas",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/images/og-image.jpg"] },
};

export default function ServiceAreasPage() {
  return (
    <>
      <section className="bg-ink text-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="font-script text-2xl text-rose sm:text-3xl">Where we work</p>
          <h1 className="mt-2 text-3xl font-extrabold uppercase sm:text-5xl">Service Areas</h1>
          <p className="mt-4 max-w-2xl text-cream/80">
            From Buckeye to Queen Creek, Pinky&apos;s Garage Doors serves homeowners across the
            greater Phoenix metro. Find your city below for local garage door repair,
            installation, and opener service.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="mx-auto max-w-3xl">
          <ServiceAreaMap />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {serviceAreas.map((area) => (
            <Link
              key={area.slug}
              href={`/service-areas/${area.slug}`}
              className="rounded-lg border border-ink/10 bg-white p-6 shadow-sm hover:border-rose transition-colors"
            >
              <h2 className="text-lg font-bold">{area.name}</h2>
              <p className="mt-2 text-sm text-ink/70">{area.tagline}</p>
              <span className="mt-4 inline-block text-sm font-bold uppercase tracking-wide text-rose">
                View Service Details →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
