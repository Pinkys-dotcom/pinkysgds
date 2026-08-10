import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import TrackedLink from "@/components/TrackedLink";
import { serviceIconMap } from "@/components/icons";
import { servicePages, getServicePage } from "@/lib/servicePages";
import { site } from "@/lib/site";

const siteUrl = "https://pinkysgaragedoors.com";

export function generateStaticParams() {
  return servicePages.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServicePage(slug);
  if (!service) return {};

  const title = `${service.title} in Phoenix, AZ | Pinky's Garage Doors`;
  const url = `/services/${service.slug}`;

  return {
    title,
    description: service.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title,
      description: service.metaDescription,
      url,
      images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: service.metaDescription,
      images: ["/images/og-image.jpg"],
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServicePage(slug);
  if (!service) notFound();

  const Icon = serviceIconMap[service.icon];
  const otherServices = servicePages.filter((s) => s.slug !== service.slug);

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.title,
    name: `${service.title} | ${site.name}`,
    description: service.metaDescription,
    provider: { "@type": "HomeAndConstructionBusiness", name: site.name, telephone: site.phone },
    areaServed: { "@type": "City", name: "Phoenix" },
    url: `${siteUrl}/services/${service.slug}`,
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section className="bg-ink text-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="font-script text-2xl text-rose sm:text-3xl">Phoenix, AZ</p>
          <h1 className="mt-2 text-3xl font-extrabold uppercase sm:text-5xl">{service.title}</h1>
          <p className="mt-4 max-w-2xl text-cream/80">{service.heroTagline}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <TrackedLink
              href="/book"
              event="book_now_click"
              location={`service_detail_${service.slug}`}
              className="rounded-md bg-rose px-6 py-3 text-sm font-bold uppercase tracking-wide text-ink hover:bg-rose-dark transition-colors"
            >
              Get a Free Estimate
            </TrackedLink>
            <TrackedLink
              href={site.phoneHref}
              external
              event="call_click"
              location={`service_detail_${service.slug}`}
              className="rounded-md border border-cream/40 px-6 py-3 text-sm font-bold uppercase tracking-wide text-cream hover:bg-cream/10 transition-colors"
            >
              Call {site.phone}
            </TrackedLink>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 grid grid-cols-1 gap-12 lg:grid-cols-[2fr_1fr]">
        <div>
          <p className="text-lg text-ink/70">{service.intro}</p>

          {service.signs && service.signsTitle && (
            <div className="mt-10">
              <h2 className="text-2xl font-extrabold">{service.signsTitle}</h2>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-ink/70">
                {service.signs.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-10">
            <h2 className="text-2xl font-extrabold">{service.whatWeDoTitle}</h2>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-ink/70">
              {service.whatWeDo.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <p className="mt-10 text-ink/70">{service.whyParagraph}</p>

          <div className="mt-14">
            <h2 className="text-2xl font-extrabold">Frequently Asked Questions</h2>
            <div className="mt-6 space-y-6">
              {service.faqs.map((faq) => (
                <div key={faq.question} className="border-b border-ink/10 pb-6 last:border-0">
                  <h3 className="font-bold text-ink">{faq.question}</h3>
                  <p className="mt-2 text-ink/70">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <aside className="space-y-8">
          <div className="rounded-lg bg-ink-soft p-8 text-center text-cream">
            {Icon && <Icon className="mx-auto h-12 w-12 text-rose" />}
            <h2 className="mt-4 text-lg font-extrabold uppercase">Need {service.shortTitle}?</h2>
            <p className="mt-2 text-sm text-cream/80">
              Same-day service available across the Phoenix metro.
            </p>
            <TrackedLink
              href="/book"
              event="book_now_click"
              location={`service_detail_sidebar_${service.slug}`}
              className="mt-6 inline-block w-full rounded-md bg-rose px-6 py-3 text-sm font-bold uppercase tracking-wide text-ink hover:bg-rose-dark transition-colors"
            >
              Book Now
            </TrackedLink>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-wide text-rose">Other Services</h2>
            <ul className="mt-4 space-y-2 text-sm">
              {otherServices.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-ink/70 hover:text-rose transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="text-ink/70 hover:text-rose transition-colors">
                  All Services
                </Link>
              </li>
            </ul>
          </div>
        </aside>
      </section>
    </>
  );
}
