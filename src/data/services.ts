import type { LucideIcon } from "lucide-react";
import { Globe, Printer, Truck, Factory, Wrench, Monitor } from "lucide-react";

export type Service = {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    id: "sourcing",
    icon: Globe,
    title: "Global Sourcing",
    description:
      "We connect you to a network of trusted manufacturers across China, India, America, and Europe. From heavy industrial machinery to packaging equipment, we source quality products at competitive prices.",
  },
  {
    id: "printing",
    icon: Printer,
    title: "Printing & Packaging",
    description:
      "High-quality labels, flexible packaging, and industrial paper printing tailored to diverse consumer needs. From compact desktop solutions to large-scale flexographic presses.",
  },
  {
    id: "logistics",
    icon: Truck,
    title: "Logistics & Delivery",
    description:
      "Our outsourced logistics partners ensure fast, reliable worldwide delivery. Whether it's a full container or a single machine, your order gets where it needs to be, on time.",
  },
  {
    id: "industrial",
    icon: Factory,
    title: "Industrial Solutions",
    description:
      "From weigh bridges to custom scales and material handling equipment, we provide measurement and movement solutions for any production environment or industry sector.",
  },
  {
    id: "custom",
    icon: Wrench,
    title: "Custom Projects",
    description:
      "Need something specialised or unconventional? We handle custom orders and sourcing for industrial projects — including hard-to-find machinery and niche components for unique applications.",
  },
  {
    id: "web",
    icon: Monitor,
    title: "Web & Business Outsourcing",
    description:
      "Beyond hardware, we support businesses with web development and general business outsourcing services — helping you streamline operations and focus on what you do best.",
  },
];
