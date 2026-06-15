import type { LucideIcon } from "lucide-react";
import { Printer, Layers, Tag, Scale, Forklift } from "lucide-react";

export type Product = {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  useCase: string;
};

export const products: Product[] = [
  {
    id: "office-printers",
    icon: Printer,
    title: "Office & Desktop Printers",
    description:
      "A range of compact and mid-range printers suited to small and medium businesses. Reliable, cost-effective, and easy to maintain — ideal for day-to-day document and label printing.",
    useCase: "Small to medium business print environments",
  },
  {
    id: "flexographic",
    icon: Layers,
    title: "Industrial Flexographic Presses",
    description:
      "High-performance flexographic printing presses for large-scale label, flexible packaging, and corrugated board production. Sourced from leading manufacturers with a track record in quality and throughput.",
    useCase: "High-volume label and flexible packaging production",
  },
  {
    id: "label-packaging",
    icon: Tag,
    title: "Label & Packaging Machinery",
    description:
      "From label applicators to shrink-wrap and flow-wrap machines, our packaging machinery range covers the full spectrum of FMCG and retail packaging needs.",
    useCase: "FMCG and retail product labelling and packaging",
  },
  {
    id: "weigh-bridges",
    icon: Scale,
    title: "Weigh Bridges & Industrial Scales",
    description:
      "Robust weighing solutions for mining, agriculture, and logistics operations. Includes truck weigh bridges, platform scales, and custom weighing instrumentation for any environment.",
    useCase: "Mining, agriculture, and logistics weighing operations",
  },
  {
    id: "material-handling",
    icon: Forklift,
    title: "Material Handling Equipment",
    description:
      "Forklifts, pallet jacks, conveyors, and custom handling solutions to keep your production floor and warehouse running efficiently. Sourced to spec for your specific load and environment.",
    useCase: "Factory floor movement, warehousing, and logistics",
  },
];
