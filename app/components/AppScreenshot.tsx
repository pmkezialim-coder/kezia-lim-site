import Image from "next/image";

export default function AppScreenshot({
  src,
  width,
  height,
  alt,
  caption,
}: {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption?: string;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-surface">
      <Image
        src={src}
        width={width}
        height={height}
        alt={alt}
        className="w-full h-auto"
      />
      {caption && (
        <p className="border-t border-border/80 px-4 py-3 text-sm text-muted">
          {caption}
        </p>
      )}
    </div>
  );
}
