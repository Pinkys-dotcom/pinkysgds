import type { Metadata } from "next";
import Image from "next/image";
import TrackedLink from "@/components/TrackedLink";
import { serviceAreaCities, site, values } from "@/lib/site";

const title = "About | Pinky's Garage Doors";
const description = "Meet Pinky's Garage Doors—Phoenix, AZ's honest, hard-working garage door team.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/about" },
  openGraph: {
    title,
    description,
    url: "/about",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/images/og-image.jpg"] },
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-ink text-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="font-script text-2xl text-rose sm:text-3xl">Our story</p>
          <h1 className="mt-2 text-3xl font-extrabold uppercase sm:text-5xl">About Pinky&apos;s</h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-extrabold uppercase">Built on trust. Backed by service.</h2>
          <p className="mt-4 text-ink/70">
            Pinky&apos;s Garage Doors started with a simple idea: give homeowners the same
            straight-shooting service you&apos;d want for your own family. No upselling, no
            surprise fees—just honest recommendations and a job done right.
          </p>
          <p className="mt-4 text-ink/70">
            Today we serve homeowners and businesses across Phoenix and Maricopa County,
            handling everything from a single broken spring to full commercial door installs.
            Every truck that pulls into your driveway is staffed by a licensed, insured
            technician who treats your home like it&apos;s our own.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-6">
            {values.map((v) => (
              <div key={v.title}>
                <h3 className="text-sm font-bold uppercase tracking-wide text-rose">{v.title}</h3>
                <p className="mt-1 text-sm text-ink/70">{v.description}</p>
              </div>
            ))}
          </div>
          <TrackedLink
            href="/contact"
            event="estimate_click"
            location="about_story"
            className="mt-8 inline-block rounded-md bg-rose px-6 py-3 text-sm font-bold uppercase tracking-wide text-ink hover:bg-rose-dark transition-colors"
          >
            Get a Free Estimate
          </TrackedLink>
        </div>
        <div className="flex justify-center">
          <Image
            src="/images/mascot-bulldog.png"
            alt="Pinky, the Pinky's Garage Doors bulldog mascot"
            width={1010}
            height={1027}
            className="h-72 w-auto"
          />
        </div>
      </section>

      <section className="bg-ink-soft text-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
          <h2 className="text-2xl font-extrabold uppercase sm:text-3xl">
            Meet <span className="text-rose">Pinky</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-cream/80">
            Pinky represents the heart of our company—friendly, hard-working, and proud of
            every door we install. He&apos;s here to make sure you get honest service, fair
            prices, and a job done right, every time.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="text-center">
          <h2 className="text-2xl font-extrabold uppercase sm:text-3xl">
            Find a Pinky&apos;s <span className="text-rose">Expert Near You</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-ink/70">
            We proudly serve homeowners and businesses throughout {site.serviceArea.replace("Serving ", "")}, including:
          </p>
        </div>
        <div className="mt-10 columns-2 gap-8 sm:columns-3 lg:columns-4">
          {serviceAreaCities.map((city) => (
            <p key={city} className="mb-3 break-inside-avoid text-center sm:text-left">
              {city}
            </p>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-ink/60">
          Don&apos;t see your city listed?{" "}
          <TrackedLink href={site.phoneHref} external event="call_click" location="about_service_area" className="font-semibold text-rose">
            Give us a call
          </TrackedLink>
          —we may still be able to help.
        </p>
      </section>
    </>
  );
}
