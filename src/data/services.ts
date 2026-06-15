import type { LucideIcon } from "lucide-react";
import { CreditCard, Layers, FileText, BookOpen, Tag } from "lucide-react";

export type Service = {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    id: "business-cards",
    icon: CreditCard,
    title: "Business Card Printing",
    description:
      "Make a lasting first impression with professionally printed business cards. Available in standard, matte-laminated, spot UV, and premium thick stock finishes — full colour, both sides.",
  },
  {
    id: "flyers",
    icon: Layers,
    title: "Flyer & Brochure Printing",
    description:
      "Vibrant, high-resolution flyers and brochures printed on quality coated stock. Available in A4, A5, and DL formats, single or double-sided, with a range of paper weights to suit your budget.",
  },
  {
    id: "documents",
    icon: FileText,
    title: "Document Printing",
    description:
      "Crisp, clear document printing for reports, manuals, training materials, and business correspondence. Mono and full-colour options available, with binding and finishing on request.",
  },
  {
    id: "carbon-books",
    icon: BookOpen,
    title: "Carbon Book Printing",
    description:
      "Custom-designed NCR (no-carbon-required) duplicate and triplicate books for invoices, order forms, delivery notes, and receipts. Sequentially numbered and finished with a sturdy cardboard back.",
  },
  {
    id: "black-labels",
    icon: Tag,
    title: "Black Label Printing",
    description:
      "Custom black labels printed to your exact specification — ideal for product labelling, asset tagging, shelf marking, and retail pricing. Permanent adhesive on quality label stock in any size or shape.",
  },
];
