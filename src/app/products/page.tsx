import type { Metadata } from "next";
import { products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { PageHero } from "@/components/PageHero";
import { CtaStrip } from "@/components/home/CtaStrip";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse The Rorich Group's print products — business cards, flyers, NCR carbon books, and black labels. Contact us for a free quote.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Product Range"
        heading="Our Products"
        subline="Every job is quoted to your specification. Contact us for a free, no-obligation print quote."
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
        heading="Need something custom?"
        subline="We quote on any print job, no matter how unique. Get in touch and let's talk."
        buttonLabel="Request a Quote"
        buttonHref="/contact"
      />
    </>
  );
}
