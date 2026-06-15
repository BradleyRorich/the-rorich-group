import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function AboutTeaser() {
  return (
    <section className="bg-muted/40 py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            About Us
          </p>
          <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
            Your Dependable Business Partner
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-muted-foreground">
            The Rorich Group connects businesses with reliable industrial and
            printing solutions. We specialise in production machinery, office and
            flexographic printers, and weighing equipment — sourced from trusted
            manufacturers across China and global markets.
          </p>
          <p className="mb-8 text-muted-foreground">
            Our focus is on delivering quality, value, and efficiency — managing
            everything from sourcing and procurement to outsourced logistics and
            delivery.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 font-semibold text-primary hover:underline"
          >
            Learn More About Us
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
