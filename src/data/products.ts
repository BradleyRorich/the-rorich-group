import type { LucideIcon } from "lucide-react";
import { CreditCard, Sparkles, Layers, BookOpen, Tag } from "lucide-react";

export type Product = {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  useCase: string;
};

export const products: Product[] = [
  {
    id: "standard-business-cards",
    icon: CreditCard,
    title: "Standard Business Cards",
    description:
      "Full-colour business cards on 350gsm silk or gloss coated stock. 85×55mm standard size, printed both sides. Minimum 100 cards with fast turnaround available.",
    useCase: "Professionals, sales teams, small businesses",
  },
  {
    id: "premium-business-cards",
    icon: Sparkles,
    title: "Premium Business Cards",
    description:
      "Elevate your brand with matte lamination, soft-touch coating, spot UV highlights, or embossed finishes on premium 400gsm stock. Custom sizes and rounded corners available.",
    useCase: "Executive branding, premium first impressions",
  },
  {
    id: "flyers-brochures",
    icon: Layers,
    title: "Flyers & Brochures",
    description:
      "A4 and A5 flyers on 130gsm or 170gsm coated gloss or silk. Bi-fold and tri-fold brochures also available. Sharp, vivid colour reproduction for marketing and promotional use.",
    useCase: "Marketing campaigns, promotions, events",
  },
  {
    id: "carbon-books",
    icon: BookOpen,
    title: "NCR Carbon Books",
    description:
      "Duplicate (2-part) and triplicate (3-part) NCR carbon books for invoices, order forms, delivery notes, and receipts. Custom numbering and design assistance included.",
    useCase: "Invoice books, order forms, delivery notes, receipts",
  },
  {
    id: "black-labels",
    icon: Tag,
    title: "Black Labels",
    description:
      "Custom black printed labels in any shape or size. Suitable for product labelling, shelf marking, asset management, and retail pricing. Permanent adhesive on quality label stock.",
    useCase: "Product labels, asset tags, retail pricing, shelving",
  },
];
