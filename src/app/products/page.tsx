import type { Metadata } from "next";
import { Printer } from "lucide-react";
import { products, productCategories, categorySlug } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { PageHero } from "@/components/PageHero";
import { CtaStrip } from "@/components/home/CtaStrip";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse The Rorich Group's full print range — business cards, flyers, books, folders, carbon books, labels and more. Contact us for a free quote.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Product Range"
        heading="Our Products"
        subline="Every job is quoted to your specification. Contact us for a free, no-obligation print quote."
      />

      {/* Capability banner */}
      <div className="border-b bg-brand-light">
        <div className="container mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <Printer className="size-4 shrink-0 text-gold" />
            <span>
              We print up to{" "}
              <strong className="text-foreground">A3 digitally</strong> and{" "}
              <strong className="text-foreground">A1 lithographically</strong>.
              Don&apos;t see what you need?{" "}
              <a
                href="/contact"
                className="font-semibold text-foreground underline underline-offset-2 hover:text-gold transition-colors"
              >
                Call us to discuss your requirements.
              </a>
            </span>
          </div>
        </div>
      </div>

      {/* Products grouped by category */}
      <div className="py-16">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {productCategories.map((category) => {
              const categoryProducts = products.filter(
                (p) => p.category === category
              );
              return (
                <section key={category} id={categorySlug(category)}>
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold tracking-tight">
                      {category}
                    </h2>
                    <div className="mt-2 h-0.5 w-12 bg-gold rounded-full" />
                  </div>
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {categoryProducts.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </div>

      <CtaStrip
        heading="Need something custom?"
        subline="We quote on any print job, no matter how unique. Get in touch and let's talk."
        buttonLabel="Request a Quote"
        buttonHref="/contact"
      />
    </>
  );
}
