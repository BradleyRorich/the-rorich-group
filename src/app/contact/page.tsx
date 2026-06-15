import type { Metadata } from "next";
import { Mail, Phone, Clock } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with The Rorich Group to discuss your industrial, printing, packaging, or logistics requirements.",
};

const contactDetails = [
  {
    icon: Phone,
    label: "Phone",
    value: "+27 73 561 8899",
    href: "tel:+27735618899",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@rorichgroup.co.za",
    href: "mailto:info@rorichgroup.co.za",
  },
  {
    icon: Clock,
    label: "Office Hours",
    value: "Monday – Friday, 8:00 AM – 5:00 PM SAST",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        heading="Contact Us"
        subline="Have a question or ready to start? Reach out and we'll get back to you within one business day."
      />

      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left — contact details */}
            <div>
              <h2 className="mb-6 text-xl font-semibold">
                Reach Us Directly
              </h2>
              <div className="space-y-6">
                {contactDetails.map((detail) => {
                  const Icon = detail.icon;
                  return (
                    <div key={detail.label} className="flex items-start gap-4">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Icon className="size-5" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">
                          {detail.label}
                        </p>
                        {detail.href ? (
                          <a
                            href={detail.href}
                            className="font-medium text-foreground hover:text-primary transition-colors"
                          >
                            {detail.value}
                          </a>
                        ) : (
                          <p className="font-medium text-foreground">
                            {detail.value}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-10 rounded-xl bg-brand-light p-6">
                <p className="text-sm font-semibold text-primary mb-2">
                  What to expect
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• We respond to all enquiries within one business day</li>
                  <li>• No obligation — just a conversation about your needs</li>
                  <li>• We quote on custom sourcing requests at no charge</li>
                </ul>
              </div>
            </div>

            {/* Right — enquiry form */}
            <div>
              <h2 className="mb-6 text-xl font-semibold">
                Send Us a Message
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
