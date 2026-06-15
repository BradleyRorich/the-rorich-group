import { Hero } from "@/components/home/Hero";
import { ThreePillars } from "@/components/home/ThreePillars";
import { FeaturesGrid } from "@/components/home/FeaturesGrid";
import { AboutTeaser } from "@/components/home/AboutTeaser";
import { CtaStrip } from "@/components/home/CtaStrip";

export default function Home() {
  return (
    <>
      <Hero />
      <ThreePillars />
      <FeaturesGrid />
      <AboutTeaser />
      <CtaStrip
        heading="Ready to get started?"
        subline="Contact us today to discuss your industrial, printing, or logistics requirements."
        buttonLabel="Get in Touch"
        buttonHref="/contact"
      />
    </>
  );
}
