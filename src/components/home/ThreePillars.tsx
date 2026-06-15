import { Sparkles, Zap, Award } from "lucide-react";

const pillars = [
  {
    icon: Award,
    title: "Premium Quality",
    description:
      "Every job is printed with precision, vivid colour accuracy, and sharp detail — from your first proof to the final product. No compromises.",
  },
  {
    icon: Zap,
    title: "Fast Turnaround",
    description:
      "We understand deadlines. Quick production and reliable delivery mean your printed material is ready when your business needs it.",
  },
  {
    icon: Sparkles,
    title: "Competitive Pricing",
    description:
      "Quality print shouldn't break the bank. We offer competitive rates on every run — small batches or large volumes — without cutting corners.",
  },
];

export function ThreePillars() {
  return (
    <section className="bg-brand-light py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Why Print With Us
          </h2>
          <p className="mt-4 text-muted-foreground">
            Quality, speed, and value — every single job.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="flex flex-col items-center text-center"
              >
                <div className="mb-5 flex size-14 items-center justify-center rounded-full bg-brand shadow-lg shadow-brand/20 text-gold">
                  <Icon className="size-7" />
                </div>
                <h3 className="mb-3 text-lg font-semibold">{pillar.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
