import type { Metadata } from "next";
import { CheckCircle, Shield, Zap, Eye, CreditCard, Layers, FileText, BookOpen, Tag } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CtaStrip } from "@/components/home/CtaStrip";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about The Rorich Group — a South African printing company dedicated to quality business cards, flyers, documents, carbon books, and labels.",
};

const values = [
  {
    icon: Shield,
    title: "Quality",
    description:
      "Every job is printed to exacting standards — precise colour, sharp detail, and consistent results from proof to final product.",
  },
  {
    icon: CheckCircle,
    title: "Value",
    description:
      "Competitive pricing on every print run, from a single box of business cards to high-volume document orders.",
  },
  {
    icon: Zap,
    title: "Efficiency",
    description:
      "Fast turnaround times and a smooth ordering process so your printed material is ready when your business needs it.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description:
      "Clear quotes, no hidden costs, and honest communication from first enquiry to delivery. No surprises.",
  },
];

const printProducts = [
  { icon: CreditCard, title: "Business Cards", description: "Standard and premium finishes" },
  { icon: Layers, title: "Flyers & Brochures", description: "A4, A5, DL — full colour" },
  { icon: FileText, title: "Documents", description: "Mono and colour, binding available" },
  { icon: BookOpen, title: "Carbon Books", description: "Duplicate & triplicate NCR" },
  { icon: Tag, title: "Black Labels", description: "Custom sizes, permanent adhesive" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About The Rorich Group"
        heading="Your Trusted Print Partner"
        subline="South Africa's dedicated printing company — quality you can see, service you can count on."
      />

      {/* Company Story */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-2xl font-bold tracking-tight sm:text-3xl">
              Who We Are
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                The Rorich Group is a South African printing company
                specialising in business cards, flyers, documents, NCR carbon
                books, and black labels. We work with small businesses,
                corporates, retailers, and event organisers who need quality
                printed material they can rely on.
              </p>
              <p>
                We believe every business — regardless of size — deserves print
                that looks professional. That&apos;s why we offer competitive
                pricing on every job without compromising on quality or
                turnaround time.
              </p>
              <p>
                From your first enquiry to delivery, we keep things simple,
                transparent, and focused on getting you exactly what you need.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-brand-light py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Our Values
            </h2>
            <p className="mt-3 text-muted-foreground">
              The principles behind every print job we produce.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="flex flex-col items-center rounded-xl bg-card p-6 text-center shadow-sm"
                >
                  <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-gold/10 text-gold">
                    <Icon className="size-6" />
                  </div>
                  <h3 className="mb-2 font-semibold">{value.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What We Print */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">
            <div className="lg:w-1/2">
              <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl">
                Everything You Need, Printed Right
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We specialise in a focused range of print products, which means
                we do each one exceptionally well. Whether you need 50 business
                cards or 10 000 flyers, we apply the same attention to detail
                and quality control to every single job.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:w-1/2">
              {printProducts.map((product) => {
                const Icon = product.icon;
                return (
                  <div
                    key={product.title}
                    className="flex items-start gap-3 rounded-lg border border-border/60 bg-card p-4"
                  >
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-md bg-gold/10 text-gold">
                      <Icon className="size-4" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">
                        {product.title}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {product.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <CtaStrip
        heading="Let's work together"
        subline="Tell us what you need and we'll give you a free, no-obligation quote."
        buttonLabel="Get a Free Quote"
        buttonHref="/contact"
      />
    </>
  );
}
