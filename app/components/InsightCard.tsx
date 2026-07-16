import Link from "next/link";
import Image from "next/image";
import ImagePlaceholder from "@/app/components/ImagePlaceholder";

export default function InsightCard({
  href,
  tag,
  readingTime,
  title,
  excerpt,
  assetName,
  imageDescription,
  imageSrc,
  imageWidth,
  imageHeight,
}: {
  href: string;
  tag: string;
  readingTime: string;
  title: string;
  excerpt: string;
  assetName: string;
  imageDescription: string;
  imageSrc?: string;
  imageWidth?: number;
  imageHeight?: number;
}) {
  return (
    <Link href={href} className="group block">
      {imageSrc && imageWidth && imageHeight ? (
        <div className="aspect-video overflow-hidden rounded-2xl bg-surface transition-opacity group-hover:opacity-90">
          <Image
            src={imageSrc}
            width={imageWidth}
            height={imageHeight}
            alt={imageDescription}
            className="h-full w-full object-cover"
          />
        </div>
      ) : (
        <ImagePlaceholder
          aspect="video"
          assetName={assetName}
          description={imageDescription}
          className="overflow-hidden rounded-2xl transition-opacity group-hover:opacity-90"
        />
      )}
      <div className="mt-4 flex items-center gap-3 text-xs uppercase tracking-widest text-muted">
        <span className="text-olive">{tag}</span>
        <span aria-hidden>·</span>
        <span>{readingTime}</span>
      </div>
      <h3 className="mt-2 font-serif text-xl">{title}</h3>
      <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">
        {excerpt}
      </p>
    </Link>
  );
}
