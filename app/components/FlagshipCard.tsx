import Link from "next/link";

type Fact = { label: string; body: string };
type Step = { number: string; label: string };

export default function FlagshipCard({
  kicker,
  eyebrow,
  mark,
  title,
  lede,
  facts,
  ctaLabel,
  ctaHref,
  journeyLabel,
  steps,
  quote,
  extraActions,
}: {
  kicker: string;
  eyebrow: string;
  mark: string;
  title: string;
  lede: string;
  facts: Fact[];
  ctaLabel: string;
  ctaHref: string;
  journeyLabel: string;
  steps: Step[];
  quote: string;
  extraActions?: React.ReactNode;
}) {
  return (
    <div className="grid overflow-hidden lg:grid-cols-[1.5fr_1fr]">
      <div className="bg-foreground p-8 text-background sm:p-14">
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-medium uppercase tracking-widest text-background/55">
          <span>{kicker}</span>
          <span>{eyebrow}</span>
        </div>
        <p className="mt-12 font-serif text-xs uppercase tracking-[0.3em] text-background/70">
          {mark}
        </p>
        <h3 className="mt-3 max-w-xl font-serif text-[clamp(1.875rem,3.2vw,3.25rem)] leading-[1.02]">
          {title}
        </h3>
        <p className="mt-5 max-w-md leading-relaxed text-background/70">{lede}</p>

        <div className="mt-9 grid gap-6 border-t border-background/15 pt-7 sm:grid-cols-3">
          {facts.map((fact) => (
            <div key={fact.label}>
              <p className="text-xs font-medium uppercase tracking-widest text-background/55">
                {fact.label}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-background/70">
                {fact.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-9 flex flex-wrap items-center gap-5">
          <Link
            href={ctaHref}
            className="inline-flex items-center gap-1.5 rounded-full bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-transform hover:-translate-y-0.5"
          >
            {ctaLabel}
            <span aria-hidden>↗</span>
          </Link>
          {extraActions}
        </div>
      </div>

      <div className="flex flex-col justify-center bg-accent p-8 text-accent-foreground sm:p-10">
        <p className="text-xs font-medium uppercase tracking-widest text-accent-foreground/70">
          {journeyLabel}
        </p>
        <ol className="mt-6 space-y-4">
          {steps.map((step, i) => (
            <li key={step.label} className="flex items-center gap-3">
              <span className="text-xs text-accent-foreground/60">{step.number}</span>
              <span className="font-serif text-lg">{step.label}</span>
              {i < steps.length - 1 && (
                <span className="ml-auto h-px flex-1 bg-accent-foreground/20" aria-hidden />
              )}
            </li>
          ))}
        </ol>
        <blockquote className="mt-9 border-t border-accent-foreground/20 pt-6 font-serif text-lg italic leading-relaxed">
          &ldquo;{quote}&rdquo;
        </blockquote>
      </div>
    </div>
  );
}
