import type { Metadata } from "next";
import { industries } from "@/data/industries";
import { IndustryPanel } from "@/components/IndustryPanel";
import { PageHero } from "@/components/PageHero";
import { CtaStrip } from "@/components/home/CtaStrip";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "The Rorich Group serves FMCG, agriculture, food processing, and mining industries across South Africa and beyond with tailored industrial and printing solutions.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        heading="Industries We Serve"
        subline="Tailored solutions for the sectors that power the South African economy."
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
        heading="Serving your industry"
        subline="Don't see your sector listed? Get in touch — we work across many more verticals."
        buttonLabel="Talk to Us"
        buttonHref="/contact"
      />
    </>
  );
}
