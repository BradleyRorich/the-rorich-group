import type { LucideIcon } from "lucide-react";
import {
  CreditCard,
  Sparkles,
  NotebookPen,
  Layers,
  FileText,
  ClipboardList,
  Newspaper,
  Book,
  BookMarked,
  ScrollText,
  BookOpen,
  FolderOpen,
  Scissors,
  Archive,
  Bookmark,
  Package,
  Gift,
  Receipt,
  Tag,
} from "lucide-react";

export type Product = {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  useCase: string;
  category: string;
};

export const products: Product[] = [
  // Business Stationery
  {
    id: "standard-business-cards",
    icon: CreditCard,
    title: "Standard Business Cards",
    description:
      "Full-colour business cards on 350gsm silk or gloss coated stock. 85×55mm standard size, printed both sides. Minimum 100 cards with fast turnaround available.",
    useCase: "Professionals, sales teams, networking",
    category: "Business Stationery",
  },
  {
    id: "premium-business-cards",
    icon: Sparkles,
    title: "Premium Business Cards",
    description:
      "Elevate your brand with matte lamination, soft-touch coating, spot UV highlights, or embossed finishes on premium 400gsm stock. Custom sizes and rounded corners available.",
    useCase: "Executive branding, premium first impressions",
    category: "Business Stationery",
  },
  {
    id: "notepads-notebooks",
    icon: NotebookPen,
    title: "Notepads & Notebooks",
    description:
      "Custom branded notepads and notebooks — great for offices, client gifts, and corporate events. Glued, wire-bound, or perfect-bound options in a range of sizes.",
    useCase: "Office use, branded gifts, corporate events",
    category: "Business Stationery",
  },

  // Marketing & Sales
  {
    id: "flyers-brochures",
    icon: Layers,
    title: "Flyers & Brochures",
    description:
      "A4 and A5 flyers on 130gsm or 170gsm coated gloss or silk. Bi-fold and tri-fold brochures also available. Sharp, vivid colour reproduction for marketing and promotional use.",
    useCase: "Promotions, campaigns, events",
    category: "Marketing & Sales",
  },
  {
    id: "corporate-sales-leaflets",
    icon: FileText,
    title: "Corporate & Sales Leaflets",
    description:
      "Professionally printed single and multi-page leaflets for sales presentations, company profiles, and product showcases. High-impact colour on quality coated stock.",
    useCase: "Sales presentations, company profiles, trade shows",
    category: "Marketing & Sales",
  },
  {
    id: "leaflets-application-forms",
    icon: ClipboardList,
    title: "Leaflets with Application Forms",
    description:
      "Combined leaflets and application forms printed as a single piece — ideal for membership sign-ups, event registrations, and marketing with a response mechanic.",
    useCase: "Membership, sign-up forms, competitions",
    category: "Marketing & Sales",
  },
  {
    id: "magazines",
    icon: Newspaper,
    title: "Magazines",
    description:
      "Full-colour magazine printing with perfect or saddle-stitched binding. Suitable for internal communications, trade publications, and customer-facing periodicals.",
    useCase: "Internal comms, trade publications, customer magazines",
    category: "Marketing & Sales",
  },

  // Books & Bound Products
  {
    id: "books-manuals",
    icon: Book,
    title: "Books & Manuals",
    description:
      "General books and manuals printed in full colour or mono, available in a range of sizes. Cover options include soft cover on laminated card stock.",
    useCase: "Training materials, product guides, reference books",
    category: "Books & Bound Products",
  },
  {
    id: "perfect-bind-books",
    icon: BookMarked,
    title: "Perfect Bind Books & Manuals",
    description:
      "Perfect-bound books and manuals with a glued square spine — ideal for thicker documents that need a premium, professional finish. Available in A4 and A5.",
    useCase: "Annual reports, professional manuals, catalogues",
    category: "Books & Bound Products",
  },
  {
    id: "spiral-bound",
    icon: ScrollText,
    title: "Spiral Bound Manuals & Booklets",
    description:
      "Spiral or wire-o binding for manuals, workbooks, and booklets that need to lie flat when open. Available in a range of cover weights and page counts.",
    useCase: "Training workbooks, recipe books, desk references",
    category: "Books & Bound Products",
  },
  {
    id: "saddle-stitched-booklets",
    icon: BookOpen,
    title: "Saddle-stitched Booklets",
    description:
      "Staple-bound booklets and yearbooks printed in full colour — a cost-effective option for programmes, catalogues, and booklets up to 64 pages.",
    useCase: "Event programmes, yearbooks, catalogues, booklets",
    category: "Books & Bound Products",
  },

  // Folders & Binders
  {
    id: "folders-insert-leaflets",
    icon: FolderOpen,
    title: "Folders with Insert Leaflets",
    description:
      "Printed presentation folders with interior pockets to hold A4 inserts and business cards. Ideal for welcome packs, pitch documents, and client presentations.",
    useCase: "Client presentations, welcome packs, pitch kits",
    category: "Folders & Binders",
  },
  {
    id: "die-cut-folders",
    icon: Scissors,
    title: "Die Cut Folders",
    description:
      "Premium folders cut to a custom shape or design using a die-cut template. Adds a distinctive, high-end touch to brand kits, investor packs, and prestige documents.",
    useCase: "Premium brand kits, investor packs, prestige documents",
    category: "Folders & Binders",
  },
  {
    id: "binders-tabbed-inserts",
    icon: Archive,
    title: "Binders with Tabbed Inserts",
    description:
      "Printed binders complete with custom tabbed dividers — perfect for training programmes, compliance documentation, and structured reference materials.",
    useCase: "Training binders, compliance docs, HR onboarding",
    category: "Folders & Binders",
  },
  {
    id: "tabbed-brochures",
    icon: Bookmark,
    title: "Tabbed Brochures",
    description:
      "Multi-section brochures with printed or laminated tabs for easy navigation. Ideal for sectioned catalogues, training guides, and product range documents.",
    useCase: "Sectioned catalogues, product guides, training packs",
    category: "Folders & Binders",
  },

  // Speciality Print
  {
    id: "packaging-boxes",
    icon: Package,
    title: "Packaging Boxes",
    description:
      "Custom printed packaging boxes for retail products, gifts, and promotional items. Printed in full colour on quality board stock and die-cut to your specification.",
    useCase: "Retail packaging, gift boxes, promotional items",
    category: "Speciality Print",
  },
  {
    id: "lucky-packets-tattoos",
    icon: Gift,
    title: "Lucky Packets & Tattoos",
    description:
      "Fun printed specialities — custom lucky packet bags and temporary tattoos for events, school promotions, and retail marketing campaigns.",
    useCase: "Events, school promotions, retail marketing",
    category: "Speciality Print",
  },

  // Labels & Forms
  {
    id: "carbon-books",
    icon: Receipt,
    title: "NCR Carbon Books",
    description:
      "Duplicate (2-part) and triplicate (3-part) NCR carbon books for invoices, order forms, delivery notes, and receipts. Custom numbering and design assistance included.",
    useCase: "Invoice books, order forms, delivery notes, receipts",
    category: "Labels & Forms",
  },
  {
    id: "blank-labels",
    icon: Tag,
    title: "Blank Labels",
    description:
      "Self-adhesive blank labels supplied in rolls or sheets, in a wide range of standard and custom sizes. Compatible with thermal, inkjet, and laser printers — or used for hand-writing. Permanent or removable adhesive options available on white, clear, or kraft label stock.",
    useCase: "Product labelling, stock management, retail pricing, asset tags",
    category: "Labels & Forms",
  },
];

export const categorySlug = (cat: string) =>
  cat.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/-$/g, "");

export const productCategories = [
  "Business Stationery",
  "Marketing & Sales",
  "Books & Bound Products",
  "Folders & Binders",
  "Speciality Print",
  "Labels & Forms",
] as const;
