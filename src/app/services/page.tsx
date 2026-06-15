import type { Metadata } from "next";
import { services } from "@/data/services";
import { ServiceCard } from "@/components/ServiceCard";
import { PageHero } from "@/components/PageHero";
import { CtaStrip } from "@/components/home/CtaStrip";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "From global industrial machinery sourcing to print, packaging, logistics, and business outsourcing — explore The Rorich Group's full service offering.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Do"
        heading="Our Services"
        subline="End-to-end solutions across sourcing, printing, logistics, and beyond — all under one roof."
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
        heading="Need a custom solution?"
        subline="Every business is different. Tell us your challenge and we'll find the right fit."
        buttonLabel="Get in Touch"
        buttonHref="/contact"
      />
    </>
  );
}
