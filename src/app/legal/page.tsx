import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Legal Notice",
  description: "Legal notice and disclaimer for The Rorich Group website.",
};

export default function LegalPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        heading="Legal Notice"
        subline="Last updated: June 2025"
      />

      <section className="py-16">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-neutral max-w-none space-y-8 text-foreground">

            <div>
              <h2 className="text-xl font-semibold mb-3">Company Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">The Rorich Group</strong><br />
                Registration Number: [To be confirmed]<br />
                Registered Address: [To be confirmed]<br />
                South Africa<br />
                Email:{" "}
                <a
                  href="mailto:info@rorichgroup.co.za"
                  className="text-primary hover:underline"
                >
                  info@rorichgroup.co.za
                </a>
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">Disclaimer</h2>
              <p className="text-muted-foreground leading-relaxed">
                The information on this website is provided in good faith and for
                general informational purposes only. The Rorich Group makes no
                representations or warranties of any kind, express or implied,
                about the completeness, accuracy, reliability, suitability, or
                availability of the information, products, services, or related
                graphics contained on this website for any purpose.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-3">
                Any reliance you place on such information is strictly at your
                own risk. In no event shall The Rorich Group be liable for any
                loss or damage, including without limitation, indirect or
                consequential loss or damage, or any loss or damage whatsoever
                arising from loss of data or profits arising out of, or in
                connection with, the use of this website.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                All content on this website, including but not limited to text,
                graphics, logos, and images, is the property of The Rorich Group
                and is protected by applicable intellectual property laws. You may
                not reproduce, distribute, or create derivative works from any
                content on this website without express written permission from
                The Rorich Group.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">External Links</h2>
              <p className="text-muted-foreground leading-relaxed">
                This website may contain links to external websites. These links
                are provided for your convenience. The Rorich Group has no
                control over the content of those sites and accepts no
                responsibility for them or for any loss or damage that may arise
                from your use of them.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">Jurisdiction</h2>
              <p className="text-muted-foreground leading-relaxed">
                This website and its content are governed by the laws of the
                Republic of South Africa. Any disputes arising out of or in
                connection with this website shall be subject to the exclusive
                jurisdiction of the South African courts.
              </p>
            </div>

            <p className="text-sm text-muted-foreground border-t pt-6">
              <em>
                This legal notice is a template. The Rorich Group should review
                and update this content — in particular the company registration
                number and registered address — before the website goes live.
              </em>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
