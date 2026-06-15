import type { LucideIcon } from "lucide-react";
import { Briefcase, Building2, Megaphone } from "lucide-react";

export type Recommendation = {
  productId: string;
  reason: string;
};

export type Industry = {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  highlights: string[];
  fullDescription: string[];
  recommendations: Recommendation[];
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
    fullDescription: [
      "Starting or growing a business in South Africa means every rand counts — but that doesn't mean cutting corners on how you present yourself. A strong first impression matters, and professionally printed material is one of the most cost-effective investments you can make in your brand.",
      "Whether you're a freelancer handing out business cards at networking events, a contractor dropping flyers at potential clients, or a shop owner labelling your products, The Rorich Group has print solutions sized and priced for small businesses.",
      "We understand that small businesses often need small quantities with fast turnaround. We work with you to get the right product at the right price — no minimum order too small, no job too simple.",
    ],
    recommendations: [
      {
        productId: "standard-business-cards",
        reason:
          "Your most important printed asset. Hand one out at every meeting, event, and introduction — a professional business card builds instant credibility.",
      },
      {
        productId: "flyers-brochures",
        reason:
          "Affordable and high-impact. Flyers are one of the best ways for small businesses to promote new launches, run local campaigns, and drive foot traffic.",
      },
      {
        productId: "carbon-books",
        reason:
          "Custom NCR invoice and receipt books keep your billing professional, give clients a copy, and keep your records in order — essential for any trading business.",
      },
      {
        productId: "blank-labels",
        reason:
          "Blank self-adhesive labels are a practical necessity for pricing, product labelling, and stock management — available in rolls or sheets for any setup.",
      },
      {
        productId: "notepads-notebooks",
        reason:
          "Branded notepads make practical, memorable gifts for clients and useful everyday tools for your team — affordable at small quantities.",
      },
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
    fullDescription: [
      "Large organisations and professional service firms have exacting print requirements — consistency, quality, and volume. Your brand needs to look the same on a business card handed to a CEO as it does on a 200-page training manual or a client-facing presentation folder.",
      "The Rorich Group handles corporate print with the precision and reliability that enterprise clients depend on. We manage volume runs with consistent colour, sharp detail, and professional finishing so every piece that leaves our floor reflects your brand at its best.",
      "From executive business cards to perfectly bound annual reports and structured training binders, we offer the full range of corporate print — with account management that keeps your projects on time and on brand.",
    ],
    recommendations: [
      {
        productId: "premium-business-cards",
        reason:
          "Executive business cards on premium stock with matte laminate, soft-touch, or spot UV finishes signal that your organisation takes quality seriously.",
      },
      {
        productId: "perfect-bind-books",
        reason:
          "Annual reports, company profiles, and formal proposals deserve a professional, square-spine perfect-bound finish that sits confidently on any boardroom table.",
      },
      {
        productId: "corporate-sales-leaflets",
        reason:
          "Polished, full-colour leaflets for sales presentations, capability documents, and client meetings — printed to the standard your brand demands.",
      },
      {
        productId: "folders-insert-leaflets",
        reason:
          "Branded presentation folders keep your pitch documents and inserts organised and professional — ideal for tenders, proposals, and onboarding packs.",
      },
      {
        productId: "binders-tabbed-inserts",
        reason:
          "Structured training binders with custom tabbed dividers make onboarding, compliance, and HR documentation easy to navigate and professional in appearance.",
      },
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
    fullDescription: [
      "In retail and events, print is everywhere — the flyer that brings customers in, the label on the shelf that converts them, the programme they take home. Every printed touchpoint is an opportunity to reinforce your brand and drive action.",
      "The Rorich Group supplies retailers and event organisers with the full range of printed material they need to run successful promotions and memorable experiences. We know that in this sector, timing is everything — our fast turnaround means your print is ready when your campaign goes live.",
      "Whether you're running a one-day activation or stocking a chain of stores, we produce consistent, vibrant print that performs on the shelf, at the counter, and in the hands of your customers.",
    ],
    recommendations: [
      {
        productId: "flyers-brochures",
        reason:
          "High-impact full-colour flyers are the most cost-effective way to drive foot traffic, announce sales, and promote upcoming events.",
      },
      {
        productId: "blank-labels",
        reason:
          "Blank self-adhesive labels in rolls or sheets are essential for shelf pricing, product tagging, and quick inventory updates across your store.",
      },
      {
        productId: "packaging-boxes",
        reason:
          "Custom printed packaging boxes add brand value to retail products and create a premium unboxing experience that customers remember and share.",
      },
      {
        productId: "saddle-stitched-booklets",
        reason:
          "Event programmes, product catalogues, and lookbooks saddle-stitched and printed in full colour — cost-effective for large event quantities.",
      },
      {
        productId: "lucky-packets-tattoos",
        reason:
          "Fun printed specialities for events, school promotions, and retail activations that create memorable brand moments and keep customers engaged.",
      },
    ],
  },
];
