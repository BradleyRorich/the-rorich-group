import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/data/products";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const Icon = product.icon;
  return (
    <Card className="flex flex-col border-border/60 transition-shadow hover:shadow-md">
      <CardHeader className="pb-3">
        <div className="mb-3 flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <Icon className="size-5" />
        </div>
        <CardTitle className="text-base">{product.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="mb-3 text-sm leading-relaxed text-muted-foreground">
          {product.description}
        </p>
        <p className="text-xs font-medium uppercase tracking-wide text-primary/70">
          {product.useCase}
        </p>
      </CardContent>
      <CardFooter className="pt-0">
        <Link
          href="/contact"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
        >
          Enquire about this product
          <ArrowRight className="size-3.5" />
        </Link>
      </CardFooter>
    </Card>
  );
}
