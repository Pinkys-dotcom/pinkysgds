import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import TrackedLink from "@/components/TrackedLink";
import { getServiceArea, serviceAreas } from "@/lib/serviceAreas";
import { servicePages } from "@/lib/servicePages";
import { site } from "@/lib/site";

const siteUrl = "https://pinkysgaragedoors.com";

export function generateStaticParams() {
  return serviceAreas.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const area = getServiceArea(slug);
  if (!area) return {};

  const title = `Garage Door Repair & Installation in ${area.name}, AZ | Pinky's Garage Doors`;
  const description = `${area.tagline} Pinky's Garage Doors offers garage door repair, installation, and opener service in ${area.name}, AZ. Call ${site.phone} for a free estimate.`;
  const url = `/service-areas/${area.slug}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/og-image.jpg"],
    },
  };
}

export default async function ServiceAreaDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const area = getServiceArea(slug);
  if (!area) notFound();

  const otherAreas = serviceAreas.filter((a) => a.slug !== area.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: `${site.name} - ${area.name}`,
    url: `${siteUrl}/service-areas/${area.slug}`,
    telephone: site.phone,
    email: site.email,
    areaServed: { "@type": "City", name: area.name, addressRegion: "AZ" },
    parentOrganization: { "@type": "HomeAndConstructionBusiness", name: site.name, url: siteUrl },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="bg-ink text-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="font-script text-2xl text-rose sm:text-3xl">{area.name}, AZ</p>
          <h1 className="mt-2 text-3xl font-extrabold uppercase sm:text-5xl">
            Garage Door Service in {area.name}
          </h1>
          <p className="mt-4 max-w-2xl text-cream/80">{area.tagline}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <TrackedLink
              href="/book"
              event="book_now_click"
              location={`service_area_${area.slug}`}
              className="rounded-md bg-rose px-6 py-3 text-sm font-bold uppercase tracking-wide text-ink hover:bg-rose-dark transition-colors"
            >
              Get a Free Estimate
            </TrackedLink>
            <TrackedLink
              href={site.phoneHref}
              external
              event="call_click"
              location={`service_area_${area.slug}`}
              className="rounded-md border border-cream/40 px-6 py-3 text-sm font-bold uppercase tracking-wide text-cream hover:bg-cream/10 transition-colors"
            >
              Call {site.phone}
            </TrackedLink>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 grid grid-cols-1 gap-12 lg:grid-cols-[2fr_1fr]">
        <div>
          <p className="text-lg text-ink/70">{area.intro}</p>

          <div className="mt-10">
            <h2 className="text-2xl font-extrabold">
              Common Garage Door Needs in {area.name}
            </h2>
            <p className="mt-4 text-ink/70">{area.commonNeeds}</p>
          </div>

          <div className="mt-10">
            <h2 className="text-2xl font-extrabold">Our Services in {area.name}</h2>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {servicePages.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="rounded-lg border border-ink/10 bg-white p-4 text-sm font-bold text-ink hover:border-rose hover:text-rose transition-colors"
                >
                  {s.title} →
                </Link>
              ))}
            </div>
          </div>
        </div>

        <aside className="space-y-8">
          <div className="rounded-lg bg-ink-soft p-8 text-center text-cream">
            <h2 className="text-lg font-extrabold uppercase">Serving {area.name}</h2>
            <p className="mt-2 text-sm text-cream/80">
              Same-day service available. Call or book online for a free estimate.
            </p>
            <TrackedLink
              href="/book"
              event="book_now_click"
              location={`service_area_sidebar_${area.slug}`}
              className="mt-6 inline-block w-full rounded-md bg-rose px-6 py-3 text-sm font-bold uppercase tracking-wide text-ink hover:bg-rose-dark transition-colors"
            >
              Book Now
            </TrackedLink>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-wide text-rose">Other Areas We Serve</h2>
            <ul className="mt-4 space-y-2 text-sm">
              {otherAreas.slice(0, 8).map((a) => (
                <li key={a.slug}>
                  <Link href={`/service-areas/${a.slug}`} className="text-ink/70 hover:text-rose transition-colors">
                    {a.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/service-areas" className="text-ink/70 hover:text-rose transition-colors">
                  View All Service Areas
                </Link>
              </li>
            </ul>
          </div>
        </aside>
      </section>
    </>
  );
}
