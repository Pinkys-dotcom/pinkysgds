import Image from "next/image";
import Link from "next/link";
import { serviceIconMap, ClockIcon, ShieldIcon, StarIcon, CreditCardIcon } from "@/components/icons";
import { services, site, testimonials, trustBar, values } from "@/lib/site";

const trustIcons = [ClockIcon, ShieldIcon, StarIcon, CreditCardIcon];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink text-cream">
        <Image
          src="/images/truck-hero.png"
          alt="Pinky's Garage Doors service truck"
          fill
          priority
          className="object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/20" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <p className="flex items-center gap-3 text-3xl sm:text-4xl">
            <Image
              src="/images/pinkys-script-flat.png"
              alt="Pinky's"
              width={276}
              height={126}
              className="h-10 w-auto sm:h-12"
            />
            <span className="font-extrabold uppercase tracking-wide text-cream">Garage Doors</span>
          </p>
          <h1 className="mt-2 max-w-2xl text-4xl font-extrabold uppercase leading-tight sm:text-5xl lg:text-6xl">
            Garage doors done right.
          </h1>
          <p className="mt-6 max-w-xl text-base text-cream/85 sm:text-lg">
            Repair, replace, or upgrade your garage door with honest recommendations,
            expert craftsmanship, and service you can count on—right here in Phoenix, AZ.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-md bg-rose px-6 py-3 text-sm font-bold uppercase tracking-wide text-ink hover:bg-rose-dark transition-colors"
            >
              Get a Free Estimate
            </Link>
            <a
              href={site.phoneHref}
              className="rounded-md border border-cream/40 px-6 py-3 text-sm font-bold uppercase tracking-wide text-cream hover:bg-cream/10 transition-colors"
            >
              Call Now: {site.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-b border-ink/10 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-2 gap-8 sm:grid-cols-4">
          {trustBar.map((item, i) => {
            const Icon = trustIcons[i];
            return (
              <div key={item.title} className="flex flex-col items-start gap-2">
                <Icon className="h-8 w-8 text-rose" />
                <h3 className="text-sm font-bold uppercase tracking-wide">{item.title}</h3>
                <p className="text-sm text-ink/70">{item.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold uppercase sm:text-4xl">
            Our <span className="text-rose">Services</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => {
            const Icon = serviceIconMap[s.icon];
            return (
              <div key={s.slug} className="rounded-lg border border-ink/10 bg-white p-6 shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-rose/15">
                  <Icon className="h-6 w-6 text-rose" />
                </div>
                <h3 className="text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-ink/70">{s.summary}</p>
                <Link
                  href={`/services#${s.slug}`}
                  className="mt-4 inline-block text-sm font-bold uppercase tracking-wide text-rose hover:text-rose-dark"
                >
                  Learn More →
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-ink-soft text-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 grid grid-cols-1 items-center gap-10 lg:grid-cols-[auto_1fr]">
          <Image
            src="/images/mascot-v2.png"
            alt="Pinky, the Pinky's Garage Doors mascot"
            width={280}
            height={720}
            className="mx-auto h-72 w-auto sm:h-96 lg:h-[26rem]"
          />
          <div>
            <h2 className="text-3xl font-extrabold uppercase sm:text-4xl">
              Why Homeowners Choose <span className="text-rose">Pinky&apos;s</span>
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
              {values.map((v) => (
                <div key={v.title}>
                  <h3 className="text-base font-bold uppercase tracking-wide text-rose">{v.title}</h3>
                  <p className="mt-2 text-sm text-cream/80">{v.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold uppercase sm:text-4xl">
            What Our <span className="text-rose">Customers Say</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.author} className="rounded-lg border border-ink/10 bg-white p-6 shadow-sm">
              <div className="mb-3 flex gap-0.5 text-rose">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="h-4 w-4" />
                ))}
              </div>
              <p className="text-sm text-ink/80">&ldquo;{t.quote}&rdquo;</p>
              <p className="mt-4 text-sm font-bold">— {t.author}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA banner */}
      <section className="bg-rose">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="text-center sm:text-left">
            <h2 className="text-2xl font-extrabold uppercase text-ink sm:text-3xl">
              Quality Service. Flexible Financing.
            </h2>
            <p className="mt-2 text-ink/80">Get the garage door you need today with easy financing options.</p>
          </div>
          <Link
            href="/financing"
            className="shrink-0 rounded-md bg-ink px-6 py-3 text-sm font-bold uppercase tracking-wide text-cream hover:bg-ink-soft transition-colors"
          >
            Learn More About Financing →
          </Link>
        </div>
      </section>
    </>
  );
}
