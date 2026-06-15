import type { LucideIcon } from "lucide-react";
import { Briefcase, Building2, Megaphone } from "lucide-react";

export type Industry = {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  highlights: string[];
};

export const industries: Industry[] = [
  {
    id: "small-business",
    icon: Briefcase,
    title: "Small Business & Entrepreneurs",
    description:
      "Whether you're just starting out or growing your brand, quality printed material helps you look professional from day one. We help small businesses make a strong impression without breaking the budget.",
    highlights: [
      "Business cards and branded stationery",
      "Promotional flyers for new launches",
      "NCR invoice and receipt books",
      "Custom product and pricing labels",
    ],
  },
  {
    id: "corporate",
    icon: Building2,
    title: "Corporate & Professional Services",
    description:
      "Consistent, high-quality print that reflects your corporate identity. From boardroom documents to client-facing brochures and executive business cards, we handle volume runs with precision and care.",
    highlights: [
      "High-volume document and report printing",
      "Branded brochures and company profiles",
      "Premium business cards for executives",
      "Custom stationery and letterheads",
    ],
  },
  {
    id: "retail-events",
    icon: Megaphone,
    title: "Retail & Events",
    description:
      "Attract customers and drive sales with vibrant printed material. From in-store shelf labels to event flyers, we produce eye-catching print that works hard for your brand every time.",
    highlights: [
      "Promotional and event flyers",
      "Product labels and shelf tags",
      "Point-of-sale printed material",
      "Custom blank labels for retail products",
    ],
  },
];
