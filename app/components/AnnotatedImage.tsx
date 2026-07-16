import Image from "next/image";

const positions = [
  "left-3 top-4",
  "right-3 top-1/3",
  "left-3 bottom-1/3",
  "right-4 bottom-6",
];

export default function AnnotatedImage({
  src,
  width,
  height,
  alt,
  annotations,
  className = "",
}: {
  src: string;
  width: number;
  height: number;
  alt: string;
  annotations?: string[];
  className?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      <Image
        src={src}
        width={width}
        height={height}
        alt={alt}
        className="h-auto w-full rounded-2xl"
        priority
      />
      {annotations && annotations.length > 0 && (
        <div className="pointer-events-none absolute inset-0 hidden sm:block">
          {annotations.map((note, i) => (
            <span
              key={note}
              className={`absolute ${positions[i % positions.length]} rounded-full border border-border bg-background/90 px-3 py-1.5 text-xs font-medium shadow-sm backdrop-blur`}
            >
              {note}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
