import { CreditCard, Layers, BookOpen, FolderOpen, Tag, Package } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const features = [
  {
    icon: CreditCard,
    title: "Business Cards & Stationery",
    description:
      "Standard and premium business cards, branded notepads, and corporate stationery that make a lasting first impression.",
  },
  {
    icon: Layers,
    title: "Flyers, Leaflets & Brochures",
    description:
      "Full-colour marketing materials from A5 flyers to corporate sales leaflets, application forms, and multi-panel brochures.",
  },
  {
    icon: BookOpen,
    title: "Books & Bound Products",
    description:
      "Books, manuals, magazines, and booklets in perfect bind, spiral, and saddle-stitch — from 8 pages to full-length publications.",
  },
  {
    icon: FolderOpen,
    title: "Folders & Binders",
    description:
      "Presentation folders, die-cut folders, training binders with tabbed inserts, and tabbed brochures for a polished professional look.",
  },
  {
    icon: Tag,
    title: "Labels & Carbon Books",
    description:
      "Custom black labels in any size, plus NCR duplicate and triplicate carbon books for invoices, order forms, and delivery notes.",
  },
  {
    icon: Package,
    title: "Speciality Print",
    description:
      "Packaging boxes, lucky packets, temporary tattoos, and any other custom print requirement — if it can be printed, we can do it.",
  },
];

export function FeaturesGrid() {
  return (
    <section className="py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            What We Print
          </h2>
          <p className="mt-4 text-muted-foreground">
            A full range of print products — digital up to A3, lithographic up to A1.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card
                key={feature.title}
                className="group border-border/60 transition-all hover:border-gold/40 hover:shadow-lg hover:shadow-gold/5"
              >
                <CardHeader className="pb-3">
                  <div className="mb-3 flex size-10 items-center justify-center rounded-lg bg-gold/10 text-gold">
                    <Icon className="size-5" />
                  </div>
                  <CardTitle className="text-base">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
