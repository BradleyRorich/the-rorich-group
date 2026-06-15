import type { Metadata } from "next";
import { CheckCircle, Globe, Shield, Zap, Eye } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CtaStrip } from "@/components/home/CtaStrip";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about The Rorich Group — our mission, values, and global sourcing network connecting South African businesses with world-class industrial solutions.",
};

const values = [
  {
    icon: Shield,
    title: "Quality",
    description:
      "Every product and solution we supply meets rigorous quality standards, sourced from manufacturers with a proven track record.",
  },
  {
    icon: CheckCircle,
    title: "Value",
    description:
      "Competitive pricing through direct manufacturer relationships — quality equipment without inflated margins.",
  },
  {
    icon: Zap,
    title: "Efficiency",
    description:
      "Streamlined sourcing, procurement, and logistics processes that save you time and reduce operational complexity.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description:
      "Clear communication at every step — from quote to delivery. No surprises, no hidden costs.",
  },
];

const regions = [
  { name: "China", description: "Primary sourcing hub for industrial machinery and packaging equipment" },
  { name: "India", description: "Textile, printing, and manufacturing equipment" },
  { name: "America", description: "Technology and precision measurement solutions" },
  { name: "Europe", description: "Premium machinery and specialised industrial components" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About The Rorich Group"
        heading="Your Dependable Business Partner"
        subline="Connecting South African businesses with reliable industrial and printing solutions since day one."
      />

      {/* Company Story */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-2xl font-bold tracking-tight sm:text-3xl">
              Who We Are
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                The Rorich Group connects businesses with reliable industrial and
                printing solutions. We specialise in production machinery, office
                and flexographic printers, and weighing equipment — sourced from
                trusted manufacturers across China and global markets.
              </p>
              <p>
                Our focus is on delivering quality, value, and efficiency —
                managing everything from sourcing and procurement to outsourced
                logistics and delivery. Whether you need a single desktop printer
                or a complete production line, we handle the complexity so you
                can focus on your business.
              </p>
              <p>
                With expertise in industrial systems and a commitment to
                transparency and service, The Rorich Group is your dependable
                partner for scalable, cost-effective business solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-brand-light py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Our Values
            </h2>
            <p className="mt-3 text-muted-foreground">
              The principles that guide every partnership we form.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="flex flex-col items-center rounded-xl bg-card p-6 text-center shadow-sm"
                >
                  <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="size-6" />
                  </div>
                  <h3 className="mb-2 font-semibold">{value.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">
            <div className="lg:w-1/2">
              <Globe className="mb-4 size-10 text-primary" />
              <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl">
                A Truly Global Sourcing Network
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Our network spans the world&apos;s leading manufacturing hubs. By
                building direct relationships with verified manufacturers, we
                eliminate unnecessary intermediaries — giving you access to
                world-class equipment at genuinely competitive prices.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:w-1/2">
              {regions.map((region) => (
                <div
                  key={region.name}
                  className="rounded-lg border border-border/60 bg-card p-4"
                >
                  <p className="mb-1 font-semibold text-foreground">
                    {region.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {region.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaStrip
        heading="Let's work together"
        subline="Tell us what you need and we'll find the right solution."
        buttonLabel="Contact Us"
        buttonHref="/contact"
      />
    </>
  );
}
