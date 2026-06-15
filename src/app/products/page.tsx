import type { Metadata } from "next";
import { products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { PageHero } from "@/components/PageHero";
import { CtaStrip } from "@/components/home/CtaStrip";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse The Rorich Group's industrial machinery and printing equipment categories. Enquiry-driven — contact us for pricing and availability.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Product Range"
        heading="Our Products"
        subline="Enquiry-driven — all products are sourced to your specification. Contact us for pricing and availability."
      />

      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <CtaStrip
        heading="Can't find what you're looking for?"
        subline="We specialise in custom sourcing. If it exists, we can find it."
        buttonLabel="Request a Product"
        buttonHref="/contact"
      />
    </>
  );
}
