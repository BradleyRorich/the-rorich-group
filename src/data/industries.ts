import type { LucideIcon } from "lucide-react";
import { ShoppingCart, Leaf, HardHat } from "lucide-react";

export type Industry = {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  highlights: string[];
};

export const industries: Industry[] = [
  {
    id: "fmcg",
    icon: ShoppingCart,
    title: "FMCG / Retail",
    description:
      "Fast-moving consumer goods and retail businesses depend on high-throughput packaging, accurate labelling, and rapid delivery cycles. We supply the machinery and logistics to keep your production lines moving.",
    highlights: [
      "Label printers and applicators",
      "Flexible packaging machinery",
      "High-speed production line equipment",
      "Fast-cycle outsourced delivery",
    ],
  },
  {
    id: "agriculture",
    icon: Leaf,
    title: "Agriculture & Food Processing",
    description:
      "The agriculture and food processing sector demands hygienic packaging solutions, precise weighing equipment, and cold-chain-aware logistics. We source and supply the right tools for your environment.",
    highlights: [
      "Hygienic and food-safe packaging machinery",
      "Precision weigh bridges and scales",
      "Produce and bulk labelling solutions",
      "Temperature-sensitive logistics partners",
    ],
  },
  {
    id: "mining",
    icon: HardHat,
    title: "Mining & Heavy Industry",
    description:
      "Mining and heavy industry operations require robust, durable equipment built for demanding environments. From large-scale weigh bridges to custom industrial printing and specialised component sourcing, we deliver.",
    highlights: [
      "Heavy-duty weigh bridges and truck scales",
      "Industrial measurement and instrumentation",
      "Custom and hard-to-find component sourcing",
      "Large-format and industrial printing solutions",
    ],
  },
];
