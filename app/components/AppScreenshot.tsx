import Image from "next/image";

const containHeights = {
  sm: "h-48 sm:h-56",
  lg: "h-64 sm:h-80",
};

export default function AppScreenshot({
  src,
  width,
  height,
  alt,
  caption,
  fit = "natural",
  size = "sm",
}: {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption?: string;
  fit?: "natural" | "contain";
  size?: keyof typeof containHeights;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-surface">
      {fit === "contain" ? (
        <div className={`flex items-center justify-center p-3 ${containHeights[size]}`}>
          <Image
            src={src}
            width={width}
            height={height}
            alt={alt}
            className="h-full w-auto object-contain"
          />
        </div>
      ) : (
        <Image
          src={src}
          width={width}
          height={height}
          alt={alt}
          className="w-full h-auto"
        />
      )}
      {caption && (
        <p className="border-t border-border/80 px-4 py-3 text-sm text-muted">
          {caption}
        </p>
      )}
    </div>
  );
}
