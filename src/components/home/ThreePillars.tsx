import { Globe, Printer, Truck } from "lucide-react";

const pillars = [
  {
    icon: Globe,
    title: "Your Partner in Sourcing",
    description:
      "Discover our extensive range of suppliers across China, India, America, and Europe, providing top-quality heavy and packaging machinery tailored to your needs.",
  },
  {
    icon: Printer,
    title: "Your Partner in Printing",
    description:
      "The Rorich Group excels in print and packaging solutions, offering high-quality labels, flexible packaging, and industrial paper printing to meet diverse consumer needs.",
  },
  {
    icon: Truck,
    title: "Your Partner in Logistics",
    description:
      "Discover a variety of logistics solutions designed to guarantee your packages arrive promptly and securely, ensuring complete satisfaction with our reliable delivery services.",
  },
];

export function ThreePillars() {
  return (
    <section className="bg-brand-light py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Three Pillars of Partnership
          </h2>
          <p className="mt-4 text-muted-foreground">
            End-to-end solutions from source to delivery.
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
