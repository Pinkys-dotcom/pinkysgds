import type { Metadata } from "next";
import JobberEmbedLoader from "@/components/JobberEmbedLoader";
import { site } from "@/lib/site";

const title = "Book Now | Pinky's Garage Doors";
const description = "Book your garage door service online in Phoenix, AZ. Fast, easy scheduling.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/book" },
  openGraph: {
    title,
    description,
    url: "/book",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/images/og-image.jpg"] },
};

export default function BookPage() {
  return (
    <>
      <section className="bg-ink text-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="font-script text-2xl text-rose sm:text-3xl">Let&apos;s get started</p>
          <h1 className="mt-2 text-3xl font-extrabold uppercase sm:text-5xl">Book Now</h1>
          <p className="mt-4 max-w-2xl text-cream/80">
            Request your appointment online and we&apos;ll follow up fast to confirm the
            details. Prefer to talk it through first? Call us at{" "}
            <a href={site.phoneHref} className="font-semibold text-rose">
              {site.phone}
            </a>
            .
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="rounded-lg border border-ink/10 bg-white p-4 shadow-sm sm:p-8">
          <JobberEmbedLoader />
        </div>
      </section>
    </>
  );
}
