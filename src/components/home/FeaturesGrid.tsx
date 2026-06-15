import {
  Layers,
  Shield,
  Globe,
  Factory,
  Wrench,
  Truck,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const features = [
  {
    icon: Layers,
    title: "Product Range",
    description:
      "From compact office printers to large-scale production machinery tailored to high-volume operations.",
  },
  {
    icon: Shield,
    title: "Build Quality",
    description:
      "Every machine we supply is built with precision and durability in mind, delivering consistent long-term reliability.",
  },
  {
    icon: Globe,
    title: "Global Sourcing",
    description:
      "Our sourcing network spans trusted manufacturers across China and beyond, ensuring top quality at competitive prices.",
  },
  {
    icon: Factory,
    title: "Industrial Solutions",
    description:
      "From weigh bridges to custom scales, we provide measurement and movement solutions for any production environment.",
  },
  {
    icon: Wrench,
    title: "Custom Projects",
    description:
      "Need something specialised? We handle custom orders and sourcing for hard-to-find machinery and niche components.",
  },
  {
    icon: Truck,
    title: "Logistics & Delivery",
    description:
      "Our outsourced logistics partners ensure fast, reliable worldwide delivery — whether a full container or a single machine.",
  },
];

export function FeaturesGrid() {
  return (
    <section className="py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Why Choose The Rorich Group
          </h2>
          <p className="mt-4 text-muted-foreground">
            Quality, value, and efficiency — managing everything from sourcing
            to delivery.
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
