import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";
import type { Industry } from "@/data/industries";

interface IndustryPanelProps {
  industry: Industry;
}

export function IndustryPanel({ industry }: IndustryPanelProps) {
  const Icon = industry.icon;
  return (
    <div className="rounded-xl border border-border/60 bg-card p-8 shadow-sm">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
        {/* Icon */}
        <div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
          <Icon className="size-7" />
        </div>

        {/* Content */}
        <div className="flex-1">
          <h3 className="mb-3 text-xl font-semibold">{industry.title}</h3>
          <p className="mb-5 leading-relaxed text-muted-foreground">
            {industry.description}
          </p>
          <ul className="mb-6 grid gap-2 sm:grid-cols-2">
            {industry.highlights.map((highlight) => (
              <li key={highlight} className="flex items-center gap-2 text-sm">
                <CheckCircle className="size-4 shrink-0 text-gold" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
          <Link
            href={`/industries/${industry.id}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-gold transition-colors"
          >
            See what we recommend for {industry.title}
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
