import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { values } from "@/lib/site";

export const metadata: Metadata = {
  title: "About | Pinky's Garage Doors",
  description:
    "Meet Pinky's Garage Doors—Phoenix, AZ's honest, hard-working garage door team.",
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
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-md bg-rose px-6 py-3 text-sm font-bold uppercase tracking-wide text-ink hover:bg-rose-dark transition-colors"
          >
            Get a Free Estimate
          </Link>
        </div>
        <div className="rounded-lg bg-ink-soft p-8 flex justify-center">
          <Image
            src="/images/mascot-v2.png"
            alt="Pinky, the Pinky's Garage Doors mascot"
            width={280}
            height={720}
            className="h-[28rem] w-auto"
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
    </>
  );
}
