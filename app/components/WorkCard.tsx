import Link from "next/link";
import Image from "next/image";
import ImagePlaceholder from "@/app/components/ImagePlaceholder";

export default function WorkCard({
  label,
  title,
  description,
  assetName,
  imageDescription,
  imageSrc,
  imageWidth,
  imageHeight,
  ctaLabel,
  ctaHref,
}: {
  label: string;
  title: string;
  description: string;
  assetName: string;
  imageDescription: string;
  imageSrc?: string;
  imageWidth?: number;
  imageHeight?: number;
  ctaLabel: string;
  ctaHref: string;
}) {
  return (
    <Link
      href={ctaHref}
      className="group block transition-transform duration-300 hover:-translate-y-1"
    >
      {imageSrc && imageWidth && imageHeight ? (
        <div className="aspect-square overflow-hidden rounded-2xl bg-surface">
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
          aspect="square"
          assetName={assetName}
          description={imageDescription}
          className="overflow-hidden rounded-2xl"
        />
      )}
      <p className="mt-5 text-xs font-medium uppercase tracking-widest text-accent">
        {label}
      </p>
      <h3 className="mt-2 font-serif text-2xl">{title}</h3>
      <p className="mt-2 leading-relaxed text-muted">{description}</p>
      <p className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium">
        {ctaLabel}
        <span className="transition-transform group-hover:translate-x-1" aria-hidden>
          →
        </span>
      </p>
    </Link>
  );
}
