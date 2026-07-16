import Image from "next/image";

export default function AppScreenshot({
  src,
  width,
  height,
  alt,
  caption,
  fit = "natural",
}: {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption?: string;
  fit?: "natural" | "contain";
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-surface">
      {fit === "contain" ? (
        <div className="flex h-48 items-center justify-center p-3 sm:h-56">
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
