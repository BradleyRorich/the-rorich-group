interface PageHeroProps {
  eyebrow?: string;
  heading: string;
  subline?: string;
}

export function PageHero({ eyebrow, heading, subline }: PageHeroProps) {
  return (
    <section className="border-b bg-brand-light py-16 sm:py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {eyebrow && (
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            {eyebrow}
          </p>
        )}
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          {heading}
        </h1>
        {subline && (
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            {subline}
          </p>
        )}
      </div>
    </section>
  );
}
