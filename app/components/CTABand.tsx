import Button from "@/app/components/Button";

export default function CTABand({
  heading,
  body,
  ctaLabel,
  ctaHref,
  tinted = false,
}: {
  heading: string;
  body?: string;
  ctaLabel: string;
  ctaHref: string;
  tinted?: boolean;
}) {
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
