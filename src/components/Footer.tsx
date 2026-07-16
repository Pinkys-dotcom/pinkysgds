import Image from "next/image";
import Link from "next/link";
import { navLinks, services, site } from "@/lib/site";
import TrackedLink from "@/components/TrackedLink";

export default function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Image
              src="/images/logo-v4.png"
              alt="Pinky's Garage Doors"
              width={110}
              height={70}
              className="h-20 w-auto mb-3"
            />
            <p className="text-sm text-cream/70">Garage Doors Done Right.</p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-rose mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-cream/80">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-rose transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-rose mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-cream/80">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services#${s.slug}`} className="hover:text-rose transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-rose mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-cream/80">
              <li>
                <TrackedLink
                  href={site.phoneHref}
                  external
                  event="call_click"
                  location="footer"
                  className="hover:text-rose transition-colors"
                >
                  {site.phone}
                </TrackedLink>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-rose transition-colors">
                  {site.email}
                </a>
              </li>
              <li>{site.address}</li>
              <li>{site.serviceArea}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-cream/10 pt-6 text-xs text-cream/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Pinky&apos;s Garage Doors. All rights reserved.</p>
          <p>Licensed, Bonded &amp; Insured — {site.licenseNumber}</p>
        </div>
      </div>
    </footer>
  );
}
