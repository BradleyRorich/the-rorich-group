import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How The Rorich Group collects, uses, and protects your personal information under POPIA.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy"
        heading="Privacy Policy"
        subline="Last updated: June 2025"
      />

      <section className="py-16">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 text-foreground">

            <p className="text-muted-foreground leading-relaxed">
              The Rorich Group (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is
              committed to protecting your personal information in accordance with
              the Protection of Personal Information Act, 4 of 2013 (&quot;POPIA&quot;)
              of the Republic of South Africa. This policy explains how we collect,
              use, and protect your information when you use our website.
            </p>

            <div>
              <h2 className="text-xl font-semibold mb-3">1. Who We Are</h2>
              <p className="text-muted-foreground leading-relaxed">
                The Rorich Group is a South African B2B company specialising in
                industrial printing solutions, packaging machinery, global sourcing,
                and logistics. We act as the responsible party for your personal
                information as defined under POPIA.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-2">
                Contact:{" "}
                <a
                  href="mailto:info@rorichgroup.co.za"
                  className="text-primary hover:underline"
                >
                  info@rorichgroup.co.za
                </a>
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">
                2. What Information We Collect
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                We only collect information you voluntarily provide through our
                contact form:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm">
                <li>Full name</li>
                <li>Email address</li>
                <li>Phone number (optional)</li>
                <li>The content of your message</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-3">
                We do not use cookies for tracking, and we do not collect any
                information automatically beyond what your browser sends as part
                of a standard web request.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">
                3. Why We Collect It
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We collect your contact information solely to respond to your
                business enquiry. We do not collect information for marketing
                purposes, and we do not send unsolicited communications.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">4. How We Use It</h2>
              <p className="text-muted-foreground leading-relaxed">
                Your information is used only to respond to your enquiry. We will
                not sell, rent, or share your personal information with third
                parties, except where required to fulfil the service you requested
                (e.g. passing your delivery details to a logistics provider with
                your knowledge and consent).
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">5. How Long We Retain It</h2>
              <p className="text-muted-foreground leading-relaxed">
                We retain your contact details only for as long as necessary to
                respond to your enquiry and for a reasonable period thereafter for
                record-keeping purposes. You may request deletion of your
                information at any time (see Your Rights below).
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">
                6. Your Rights Under POPIA
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Under POPIA, you have the right to:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm">
                <li>Know what personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Object to the processing of your personal information</li>
                <li>Lodge a complaint with the Information Regulator of South Africa</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">
                7. Exercising Your Rights
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                To exercise any of the rights above, please contact us at{" "}
                <a
                  href="mailto:info@rorichgroup.co.za"
                  className="text-primary hover:underline"
                >
                  info@rorichgroup.co.za
                </a>
                . We will respond within a reasonable time and in accordance with
                our obligations under POPIA.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">8. Changes to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this privacy policy from time to time. Any changes
                will be posted on this page with an updated date. We encourage you
                to review this policy periodically.
              </p>
            </div>

            <p className="text-sm text-muted-foreground border-t pt-6">
              <em>
                This privacy policy is a POPIA-compliant template. The Rorich
                Group should review this with a legal adviser before the site goes
                live, and update the company registration number, registered
                address, and any data processing details specific to their
                operations.
              </em>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
