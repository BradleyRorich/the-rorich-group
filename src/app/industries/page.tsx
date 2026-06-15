import type { Metadata } from "next";
import { industries } from "@/data/industries";
import { IndustryPanel } from "@/components/IndustryPanel";
import { PageHero } from "@/components/PageHero";
import { CtaStrip } from "@/components/home/CtaStrip";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "The Rorich Group provides printing services to small businesses, corporates, retail, and events across South Africa.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        heading="Industries We Serve"
        subline="Quality print solutions for businesses of every size and sector."
      />

      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6">
            {industries.map((industry) => (
              <IndustryPanel key={industry.id} industry={industry} />
            ))}
          </div>
        </div>
      </section>

      <CtaStrip
        heading="Don't see your industry?"
        subline="We print for all kinds of businesses — get in touch and let's find the right solution for you."
        buttonLabel="Talk to Us"
        buttonHref="/contact"
      />
    </>
  );
}
