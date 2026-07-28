import type { Metadata } from "next";

const title = "Privacy Policy | Pinky's Garage Doors";
const description = "How Pinky's Garage Doors collects, uses, and protects your information.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/privacy-policy" },
  openGraph: { title, description, url: "/privacy-policy" },
  twitter: { title, description },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="bg-ink text-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h1 className="text-3xl font-extrabold uppercase sm:text-5xl">Privacy Policy</h1>
          <p className="mt-4 text-cream/70">Effective Date: July 27, 2026</p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-8 text-ink/70">
        <p>
          Pinky&apos;s Garage Doors (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) provides
          garage door installation, repair, and maintenance services (the &quot;Services&quot;).
          This Privacy Policy explains how we collect, use, and protect information about you
          when you visit our website, contact us, or use our Services.
        </p>

        <div>
          <h2 className="text-xl font-extrabold text-ink">1. Information We Collect</h2>
          <p className="mt-3">We collect information you provide directly to us, including:</p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>Name, phone number, email address, and mailing/service address</li>
            <li>Details about your garage door service request (e.g., make/model, description of the issue, photos you submit)</li>
            <li>Scheduling and appointment preferences</li>
            <li>Any other information you choose to provide when contacting us by phone, email, text, or through our website</li>
          </ul>
          <p className="mt-3">
            We do not knowingly collect sensitive personal information such as Social Security
            numbers or financial account details beyond what is needed to process payment for
            services rendered.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-extrabold text-ink">2. How We Use Your Information</h2>
          <p className="mt-3">We use the information we collect to:</p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>Schedule and provide estimates, installations, repairs, and maintenance services</li>
            <li>Communicate with you about appointments, quotes, and service updates</li>
            <li>Process payments for services</li>
            <li>Respond to inquiries and provide customer support</li>
            <li>Improve our Services and customer experience</li>
            <li>Comply with legal obligations</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-extrabold text-ink">3. How We Share Your Information</h2>
          <p className="mt-3">We do not sell your personal information. We may share your information with:</p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>
              <strong className="text-ink">Service providers</strong> who help us operate our
              business, including Jobber, our field service management and customer
              communication platform (used for scheduling, invoicing, and text/email messaging),
              payment processors, and accounting tools. These providers are only permitted to use
              your information to perform services on our behalf.
            </li>
            <li>
              <strong className="text-ink">Technicians and contractors</strong> who need your
              contact and service details to complete a job
            </li>
            <li>
              <strong className="text-ink">Legal or regulatory authorities</strong> when required
              by law or to protect our rights
            </li>
          </ul>
          <p className="mt-3">
            <strong className="text-ink">
              We do not sell, rent, or share your mobile phone number or SMS opt-in data with
              third parties or affiliates for their marketing or promotional purposes.
            </strong>{" "}
            Text messaging originator opt-in data and consent will not be shared with any third
            party, except as necessary to provide the Services (e.g., through our messaging
            platform, Jobber) or as required by law.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-extrabold text-ink">4. Text Messaging (SMS) Communications</h2>
          <p className="mt-3">
            If you provide your mobile phone number, you may receive text messages from us via
            Jobber regarding appointment confirmations, arrival windows, quotes, invoices, and
            service updates.
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>
              <strong className="text-ink">Consent:</strong> By providing your phone number, you
              consent to receive text messages from us related to your service request. Consent
              to receive texts is not a condition of purchasing any service.
            </li>
            <li>
              <strong className="text-ink">Message frequency:</strong> Message frequency varies
              based on your scheduled services and communications with us.
            </li>
            <li>
              <strong className="text-ink">Message and data rates:</strong> Message and data
              rates may apply, depending on your mobile carrier and plan.
            </li>
            <li>
              <strong className="text-ink">Opt-out:</strong>{" "}
              <strong className="text-ink">
                You may opt out of text messages at any time by replying &quot;STOP&quot; to any
                message.
              </strong>{" "}
              You may reply &quot;HELP&quot; for assistance, or contact us at (480) 901-0355 or
              Info@pinkysgaragedoors.com. After opting out, you may still receive messages related
              to your current job for operational purposes unless you request otherwise.
            </li>
            <li>
              <strong className="text-ink">Carriers:</strong> Carriers are not liable for delayed
              or undelivered messages.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-extrabold text-ink">5. Data Retention</h2>
          <p className="mt-3">
            We retain your information for as long as necessary to provide our Services, maintain
            business records, and comply with legal, tax, and warranty obligations.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-extrabold text-ink">6. Your Choices</h2>
          <p className="mt-3">You may:</p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>Ask us to correct or update your contact information</li>
            <li>Opt out of text or marketing communications at any time by replying &quot;STOP&quot; or contacting us directly</li>
            <li>Request that we delete your personal information, subject to our legitimate business and legal recordkeeping needs</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-extrabold text-ink">7. Data Security</h2>
          <p className="mt-3">
            We take reasonable measures to protect your personal information from unauthorized
            access, loss, or misuse. However, no method of transmission or storage is completely
            secure, and we cannot guarantee absolute security.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-extrabold text-ink">8. Children&apos;s Privacy</h2>
          <p className="mt-3">
            Our Services are intended for individuals 18 years of age or older. We do not
            knowingly collect information from children.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-extrabold text-ink">9. Changes to This Policy</h2>
          <p className="mt-3">
            We may update this Privacy Policy from time to time. The &quot;Effective Date&quot;
            above reflects the most recent revision. Continued use of our Services after changes
            are posted constitutes acceptance of the updated policy.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-extrabold text-ink">10. Contact Us</h2>
          <p className="mt-3">
            If you have questions about this Privacy Policy or your personal information, contact
            us at:
          </p>
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
          licensed attorney to ensure it meets the requirements of your state and industry
          (including any home-services or contractor licensing regulations) before publishing.
        </p>
      </section>
    </>
  );
}
