import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function AboutTeaser() {
  return (
    <section className="bg-muted/40 py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gold">
            About Us
          </p>
          <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
            Your Trusted Print Partner
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-muted-foreground">
            The Rorich Group is a South African printing company specialising in
            business cards, flyers, documents, NCR carbon books, and black
            labels. We help businesses of every size present themselves
            professionally with print that makes an impression.
          </p>
          <p className="mb-8 text-muted-foreground">
            Our focus is on quality, fast turnaround, and competitive pricing —
            giving you print you can be proud of, delivered when you need it.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 font-semibold text-foreground hover:text-gold transition-colors"
          >
            Learn More About Us
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
