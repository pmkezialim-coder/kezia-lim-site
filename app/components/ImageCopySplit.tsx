import Image from "next/image";
import ImagePlaceholder from "@/app/components/ImagePlaceholder";

const ratios = {
  portrait: "aspect-[3/4]",
  square: "aspect-square",
  video: "aspect-video",
  phone: "aspect-[9/19]",
  wide: "aspect-[21/9]",
};

export default function ImageCopySplit({
  eyebrow,
  title,
  body,
  assetName,
  imageDescription,
  imageAspect = "square",
  annotations,
  reverse = false,
  imageSrc,
  imageWidth,
  imageHeight,
  children,
}: {
  eyebrow?: string;
  title: string;
  body: string;
  assetName: string;
  imageDescription: string;
  imageAspect?: keyof typeof ratios;
  annotations?: string[];
  reverse?: boolean;
  imageSrc?: string;
  imageWidth?: number;
  imageHeight?: number;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
        reverse ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      {imageSrc && imageWidth && imageHeight ? (
        <div className={`overflow-hidden rounded-2xl bg-surface ${ratios[imageAspect]}`}>
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
          aspect={imageAspect}
          assetName={assetName}
          description={imageDescription}
          annotations={annotations}
        />
      )}
      <div>
        {eyebrow && (
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            {eyebrow}
          </p>
        )}
        <h2 className={`font-serif text-3xl sm:text-4xl ${eyebrow ? "mt-3" : ""}`}>
          {title}
        </h2>
        <p className="mt-5 max-w-lg leading-relaxed text-muted">{body}</p>
        {children && <div className="mt-8">{children}</div>}
      </div>
    </div>
  );
}
