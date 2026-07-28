import type { Metadata } from "next";
import Link from "next/link";

const title = "Terms of Service | Pinky's Garage Doors";
const description = "The terms governing your use of Pinky's Garage Doors services.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/terms-of-service" },
  openGraph: { title, description, url: "/terms-of-service" },
  twitter: { title, description },
};

export default function TermsOfServicePage() {
  return (
    <>
      <section className="bg-ink text-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h1 className="text-3xl font-extrabold uppercase sm:text-5xl">Terms of Service</h1>
          <p className="mt-4 text-cream/70">Effective Date: July 27, 2026</p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-8 text-ink/70">
        <p>
          These Terms of Service (&quot;Terms&quot;) govern your use of the garage door
          installation, repair, and maintenance services (the &quot;Services&quot;) provided by
          Pinky&apos;s Garage Doors (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). By
          requesting or receiving our Services, you agree to these Terms.
        </p>

        <div>
          <h2 className="text-xl font-extrabold text-ink">1. Services</h2>
          <p className="mt-3">
            We provide garage door sales, installation, repair, and maintenance services at the
            location(s) you specify when scheduling. Specific services, parts, and pricing will be
            confirmed with you prior to work being performed.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-extrabold text-ink">2. Estimates and Pricing</h2>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>Estimates are based on the information available at the time of the request and may change once a technician inspects the job on-site.</li>
            <li>Prices for parts, labor, and any additional work are subject to change and will be communicated to you before work begins, except in cases of clearly authorized emergency repairs.</li>
            <li>Quoted prices are valid for a limited time as stated in the estimate, if provided.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-extrabold text-ink">3. Scheduling and Cancellations</h2>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>Appointments are scheduled based on availability. Arrival windows are estimates and not guaranteed exact times.</li>
            <li>We ask that you provide at least 24 hours notice to cancel or reschedule an appointment. Late cancellations or missed appointments may be subject to a fee.</li>
            <li>We reserve the right to reschedule appointments due to weather, emergencies, or circumstances beyond our control.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-extrabold text-ink">4. Payment</h2>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>Payment is due upon completion of service unless other arrangements have been made in writing.</li>
            <li>We accept the payment methods listed at the time of booking or invoicing.</li>
            <li>Unpaid invoices may accrue late fees and may be referred to collections.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-extrabold text-ink">5. Warranties</h2>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>Workmanship on installations and repairs is warranted for 90 days from the date of service, covering defects in our labor.</li>
            <li>Manufacturer warranties on parts and equipment are provided by the manufacturer and are separate from our workmanship warranty; terms vary by product.</li>
            <li>Warranties do not cover damage caused by misuse, lack of maintenance, unauthorized repairs, or acts of nature.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-extrabold text-ink">6. Text Messaging (SMS) Communications</h2>
          <p className="mt-3">
            <strong className="text-ink">Pinky&apos;s Garage Doors</strong> communicates with
            customers by text message using Jobber, our field service management platform. By
            providing your mobile phone number and requesting service, you consent to receive text
            messages from us regarding appointment confirmations, arrival windows, quotes,
            invoices, and service-related updates.
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>
              <strong className="text-ink">Message frequency:</strong> Varies based on your
              scheduled services and communications with us.
            </li>
            <li>
              <strong className="text-ink">Message and data rates:</strong> May apply, depending
              on your mobile carrier and plan.
            </li>
            <li>
              <strong className="text-ink">Opt-out:</strong>{" "}
              <strong className="text-ink">
                You may opt out at any time by replying &quot;STOP&quot; to any message.
              </strong>
            </li>
            <li>
              <strong className="text-ink">Help:</strong> Reply &quot;HELP&quot; for assistance,
              or contact us directly at (480) 901-0355 or Info@pinkysgaragedoors.com.
            </li>
            <li>Consent to receive texts is not required to purchase services.</li>
            <li>
              See our{" "}
              <Link href="/privacy-policy" className="font-semibold text-rose">
                Privacy Policy
              </Link>{" "}
              for more detail on how we handle your information.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-extrabold text-ink">7. Limitation of Liability</h2>
          <p className="mt-3">
            To the fullest extent permitted by law, Pinky&apos;s Garage Doors is not liable for
            indirect, incidental, or consequential damages arising from our Services. Our total
            liability for any claim related to the Services is limited to the amount you paid for
            the specific service giving rise to the claim.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-extrabold text-ink">8. Customer Responsibilities</h2>
          <p className="mt-3">You agree to:</p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>Provide accurate information about the job site and existing equipment</li>
            <li>Ensure safe and reasonable access to the garage door and work area</li>
            <li>Disclose any known hazards, existing damage, or special conditions before work begins</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-extrabold text-ink">9. Property and Site Conditions</h2>
          <p className="mt-3">
            We are not responsible for pre-existing damage, code violations, or structural issues
            unrelated to the work performed. Any additional issues discovered during service will
            be communicated to you before proceeding.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-extrabold text-ink">10. Dispute Resolution and Governing Law</h2>
          <p className="mt-3">
            These Terms are governed by the laws of the State of Arizona, without regard to
            conflict-of-law principles. Any disputes arising from these Terms or our Services
            shall be resolved in the courts located in Maricopa County, Arizona, unless otherwise
            required by law.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-extrabold text-ink">11. Changes to These Terms</h2>
          <p className="mt-3">
            We may update these Terms from time to time. The &quot;Effective Date&quot; above
            reflects the most recent revision. Continued use of our Services after changes are
            posted constitutes acceptance of the updated Terms.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-extrabold text-ink">12. Contact Us</h2>
          <p className="mt-3">Questions about these Terms can be directed to:</p>
          <p className="mt-3">
            Pinky&apos;s Garage Doors
            <br />
            1321 E McDowell Rd, Phoenix, AZ 85006
            <br />
            (480) 901-0355
            <br />
            Info@pinkysgaragedoors.com
          </p>
        </div>

        <p className="border-t border-ink/10 pt-6 text-sm italic text-ink/50">
          This document is a general template and does not constitute legal advice. Consult a
          licensed attorney to ensure it meets your state&apos;s contractor/home-services licensing
          requirements, warranty laws, and consumer protection statutes before publishing.
        </p>
      </section>
    </>
  );
}
