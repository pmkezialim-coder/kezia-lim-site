const ratios = {
  portrait: "aspect-[3/4]",
  square: "aspect-square",
  video: "aspect-video",
  phone: "aspect-[9/19]",
  wide: "aspect-[21/9]",
};

export default function ImagePlaceholder({
  assetName,
  description,
  aspect = "video",
  annotations,
  className = "",
}: {
  assetName: string;
  description: string;
  aspect?: keyof typeof ratios;
  annotations?: string[];
  className?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      <div
        className={`flex ${ratios[aspect]} flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-clay/50 bg-gradient-to-br from-sand/60 to-surface p-6 text-center`}
      >
        <svg
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-clay"
          aria-hidden
        >
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <circle cx="9" cy="10.5" r="1.75" />
          <path d="M21 16l-5.5-5.5a1.5 1.5 0 0 0-2.12 0L3 21" />
        </svg>
        <p className="font-mono text-[11px] tracking-tight text-accent">
          {assetName}
        </p>
        <p className="max-w-[85%] text-xs leading-snug text-muted">
          {description}
        </p>
      </div>

      {annotations && annotations.length > 0 && (
        <div className="pointer-events-none absolute inset-0 hidden sm:block">
          {annotations.map((note, i) => {
            const positions = [
              "left-3 top-4",
              "right-3 top-1/3",
              "left-3 bottom-1/3",
              "right-4 bottom-6",
            ];
            return (
              <span
                key={note}
                className={`absolute ${positions[i % positions.length]} rounded-full border border-border bg-background/90 px-3 py-1.5 text-xs font-medium shadow-sm backdrop-blur`}
              >
                {note}
              </span>
            );
          })}
        </div>
      )}
    </div>
  );
}
