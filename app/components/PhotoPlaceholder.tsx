const ratios = {
  portrait: "aspect-[3/4]",
  square: "aspect-square",
  video: "aspect-video",
  phone: "aspect-[9/19]",
  wide: "aspect-[21/9]",
};

export default function PhotoPlaceholder({
  aspect = "video",
  label,
  className = "",
}: {
  aspect?: keyof typeof ratios;
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`flex ${ratios[aspect]} flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-accent/40 bg-surface p-6 text-center ${className}`}
    >
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="text-accent/60"
        aria-hidden
      >
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <circle cx="9" cy="10.5" r="1.75" />
        <path d="M21 16l-5.5-5.5a1.5 1.5 0 0 0-2.12 0L3 21" />
      </svg>
      <p className="text-xs font-medium leading-snug text-accent">
        TODO: {label}
      </p>
    </div>
  );
}
