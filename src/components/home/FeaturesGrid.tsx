import { CreditCard, Layers, FileText, BookOpen, Tag, Printer } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const features = [
  {
    icon: CreditCard,
    title: "Business Cards",
    description:
      "Standard and premium business cards that make a lasting first impression — matte, gloss, spot UV, and more.",
  },
  {
    icon: Layers,
    title: "Flyers & Brochures",
    description:
      "Full-colour A4, A5, and DL flyers and brochures on quality coated stock, single or double-sided.",
  },
  {
    icon: FileText,
    title: "Document Printing",
    description:
      "Crisp mono and colour document printing for reports, manuals, proposals, and business correspondence.",
  },
  {
    icon: BookOpen,
    title: "Carbon Books",
    description:
      "Custom NCR duplicate and triplicate books for invoices, order forms, receipts, and delivery notes.",
  },
  {
    icon: Tag,
    title: "Black Labels",
    description:
      "Custom black labels in any size or shape — product labelling, asset tags, shelf markers, and retail pricing.",
  },
  {
    icon: Printer,
    title: "Custom Print Jobs",
    description:
      "Need something unique? We quote on any print job. If it can be printed, we can do it.",
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
            Everything your business needs, printed right.
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
