import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CtaStripProps {
  heading?: string;
  subline?: string;
  buttonLabel?: string;
  buttonHref?: string;
}

export function CtaStrip({
  heading = "Ready to get started?",
  subline = "Contact us today to discuss your requirements.",
  buttonLabel = "Get in Touch",
  buttonHref = "/contact",
}: CtaStripProps) {
  return (
    <section className="bg-brand py-16">
      <div className="container mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="mb-3 text-2xl font-bold text-brand-foreground sm:text-3xl">
          {heading}
        </h2>
        <p className="mb-8 text-brand-foreground/75">{subline}</p>
        <Link
          href={buttonHref}
          className="inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3 text-sm font-semibold text-white shadow-sm transition-opacity hover:opacity-90"
        >
          {buttonLabel}
          <ArrowRight className="size-4" />
        </Link>
      </div>
    </section>
  );
}
