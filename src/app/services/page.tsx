import type { Metadata } from "next";
import { services } from "@/data/services";
import { ServiceCard } from "@/components/ServiceCard";
import { PageHero } from "@/components/PageHero";
import { CtaStrip } from "@/components/home/CtaStrip";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Business card printing, flyers, documents, NCR carbon books, and black labels — explore The Rorich Group's full print offering.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Print"
        heading="Our Services"
        subline="From business cards to carbon books — everything your business needs, printed right."
      />

      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      <CtaStrip
        heading="Not sure what you need?"
        subline="Tell us about your project and we'll recommend the best print option for your budget."
        buttonLabel="Get a Free Quote"
        buttonHref="/contact"
      />
    </>
  );
}
