export default function ProductCard({
  icon,
  title,
  body,
}: {
  icon: string;
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-8 transition-shadow hover:shadow-[0_8px_24px_-12px_rgba(43,38,34,0.25)]">
      <span
        className="flex h-12 w-12 items-center justify-center rounded-full bg-copper/15 text-2xl"
        aria-hidden
      >
        {icon}
      </span>
      <h3 className="mt-5 font-serif text-xl">{title}</h3>
      <p className="mt-2 leading-relaxed text-muted">{body}</p>
    </div>
  );
}
