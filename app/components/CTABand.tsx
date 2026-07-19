import Button from "@/app/components/Button";

export default function CTABand({
  heading,
  body,
  ctaLabel,
  ctaHref,
  tinted = false,
  bold = false,
}: {
  heading: string;
  body?: string;
  ctaLabel: string;
  ctaHref: string;
  tinted?: boolean;
  bold?: boolean;
}) {
  if (bold) {
    return (
      <section className="bg-accent text-accent-foreground">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center sm:py-28">
          <h2 className="font-serif text-4xl sm:text-5xl">{heading}</h2>
          {body && (
            <p className="mx-auto mt-5 max-w-xl leading-relaxed text-accent-foreground/85">
              {body}
            </p>
          )}
          <div className="mt-9">
            <a
              href={ctaHref}
              className="inline-flex items-center justify-center gap-1.5 rounded-full bg-accent-foreground px-6 py-3 text-sm font-medium tracking-wide text-accent transition-transform hover:-translate-y-0.5"
            >
              {ctaLabel}
              <span aria-hidden>↗</span>
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={tinted ? "border-t border-border/80 bg-surface" : "border-t border-border/80"}>
      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h2 className="font-serif text-3xl sm:text-4xl">{heading}</h2>
        {body && (
          <p className="mx-auto mt-5 max-w-xl leading-relaxed text-muted">{body}</p>
        )}
        <div className="mt-8">
          <Button href={ctaHref}>{ctaLabel}</Button>
        </div>
      </div>
    </section>
  );
}
