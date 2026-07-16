export default function CaseStudySection({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="grid gap-4 border-t border-border/80 py-12 sm:grid-cols-[auto_1fr] sm:gap-10">
      <div className="flex items-baseline gap-3 sm:block">
        <span className="font-serif text-sm text-clay">{number}</span>
        <h3 className="font-serif text-xl sm:mt-1 sm:w-40">{title}</h3>
      </div>
      <div className="max-w-2xl leading-relaxed text-muted">{children}</div>
    </section>
  );
}
