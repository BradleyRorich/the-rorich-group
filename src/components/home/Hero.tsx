import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { ParticleCanvas } from "./ParticleCanvas";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-dark min-h-[85vh] flex items-center">
      <ParticleCanvas />

      {/* Radial focus glow behind the text */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 30% 50%, rgba(234,179,8,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="container relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-sm font-medium text-gold">
            South Africa&apos;s Print Specialists
            <span className="inline-block size-1.5 rounded-full bg-gold" />
          </p>

          {/* Headline */}
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Print That Makes{" "}
            <span className="text-gold">An Impression</span>
          </h1>

          {/* Subline */}
          <p className="mb-10 max-w-xl text-lg leading-relaxed text-white/65">
            Business cards, flyers, documents, carbon books, and blank labels —
            printed to the highest standard, delivered when you need them.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3 text-sm font-semibold text-brand shadow-lg shadow-gold/20 transition-all hover:brightness-110 hover:shadow-gold/30"
            >
              Get a Free Quote
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:border-white/40 hover:bg-white/10"
            >
              Our Services
              <ChevronRight className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
