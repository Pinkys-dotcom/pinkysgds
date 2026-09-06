import type { Metadata } from "next";
import TrackedLink from "@/components/TrackedLink";
import { site } from "@/lib/site";

const BOOKING_URL =
  "https://book.housecallpro.com/book/Pinkys-Garage-Doors/71bda3522a3440e08d7fc41ae0ad3393?v2=true";

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
        <div className="rounded-lg border border-ink/10 bg-white p-8 text-center shadow-sm sm:p-12">
          <h2 className="text-xl font-extrabold uppercase">Ready to Book?</h2>
          <p className="mt-3 text-ink/70">
            Click below to pick a service and choose a time that works for you—it only takes a
            couple of minutes.
          </p>
          <TrackedLink
            href={BOOKING_URL}
            external
            newTab
            event="book_now_click"
            location="book_page"
            className="mt-6 inline-block rounded-md bg-rose px-8 py-4 text-sm font-bold uppercase tracking-wide text-ink hover:bg-rose-dark transition-colors"
          >
            Book Online Now →
          </TrackedLink>
          <p className="mt-4 text-xs text-ink/50">Opens our secure booking page in a new tab.</p>
        </div>
      </section>
    </>
  );
}
