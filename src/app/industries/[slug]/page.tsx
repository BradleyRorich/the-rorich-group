import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import { industries } from "@/data/industries";
import { products } from "@/data/products";
import { PageHero } from "@/components/PageHero";
import { CtaStrip } from "@/components/home/CtaStrip";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return industries.map((i) => ({ slug: i.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = industries.find((i) => i.id === slug);
  if (!industry) return {};
  return {
    title: industry.title,
    description: `Print solutions The Rorich Group recommends for ${industry.title} — ${industry.highlights.slice(0, 2).join(", ")} and more.`,
  };
}

export default async function IndustryPage({ params }: Props) {
  const { slug } = await params;
  const industry = industries.find((i) => i.id === slug);
  if (!industry) notFound();

  const Icon = industry.icon;

  const recommended = industry.recommendations
    .map((rec) => {
      const product = products.find((p) => p.id === rec.productId);
      return product ? { product, reason: rec.reason } : null;
    })
    .filter(Boolean) as { product: (typeof products)[0]; reason: string }[];

  return (
    <>
      <PageHero
        eyebrow="Industries We Serve"
        heading={industry.title}
        subline={industry.description}
      />

      {/* About this industry */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Full description */}
            <div>
              <div className="mb-4 flex size-14 items-center justify-center rounded-full bg-gold/10 text-gold">
                <Icon className="size-7" />
              </div>
              <h2 className="mb-6 text-2xl font-bold tracking-tight">
                Printing for {industry.title}
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                {industry.fullDescription.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>

            {/* Highlights */}
            <div className="rounded-xl border border-border/60 bg-card p-8 shadow-sm self-start">
              <h3 className="mb-5 font-semibold text-lg">
                What we print for this sector
              </h3>
              <ul className="space-y-3">
                {industry.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-3 text-sm">
                    <CheckCircle className="size-4 shrink-0 text-gold mt-0.5" />
                    <span className="text-muted-foreground">{highlight}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 border-t pt-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-gold transition-colors"
                >
                  Get a free quote for your {industry.title.toLowerCase()} print needs
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recommendations */}
      <section className="bg-brand-light py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-gold">
              Our Recommendation
            </p>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              What we suggest for {industry.title}
            </h2>
            <p className="mt-3 text-muted-foreground">
              Based on what works best in this sector, here&apos;s what The
              Rorich Group recommends.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {recommended.map(({ product, reason }) => {
              const ProductIcon = product.icon;
              return (
                <Card
                  key={product.id}
                  className="flex flex-col border-border/60 transition-all hover:border-gold/40 hover:shadow-lg hover:shadow-gold/5"
                >
                  <CardHeader className="pb-3">
                    <div className="mb-3 flex size-10 items-center justify-center rounded-lg bg-gold/10 text-gold">
                      <ProductIcon className="size-5" />
                    </div>
                    <CardTitle className="text-base">{product.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 space-y-3">
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {product.description}
                    </p>
                    <div className="rounded-md bg-gold/5 border border-gold/20 px-3 py-2">
                      <p className="text-xs font-semibold uppercase tracking-wide text-gold mb-1">
                        Why we recommend this
                      </p>
                      <p className="text-xs leading-relaxed text-muted-foreground">
                        {reason}
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground hover:text-gold transition-colors"
                    >
                      Enquire about this product
                      <ArrowRight className="size-3.5" />
                    </Link>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Back link */}
      <div className="container mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Link
          href="/industries"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          ← Back to all industries
        </Link>
      </div>

      <CtaStrip
        heading={`Ready to print for your ${industry.title.toLowerCase()} business?`}
        subline="Contact us today for a free, no-obligation quote tailored to your needs."
        buttonLabel="Get a Free Quote"
        buttonHref="/contact"
      />
    </>
  );
}
