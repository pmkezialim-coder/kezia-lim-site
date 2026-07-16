import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ImagePlaceholder from "@/app/components/ImagePlaceholder";
import InsightCard from "@/app/components/InsightCard";
import { insightsPosts } from "@/app/lib/site";

export const metadata: Metadata = {
  title: "Field Notes — Kezia Lim",
};

const moreTopics = [
  "Why most AI projects fail before they start",
  "Why most chatbots are terrible (and what \"good\" actually looks like)",
  "Designing AI people actually trust",
  "Shipping vs. waiting",
  "What government transformation work taught me about change",
  "Muay Thai taught me more about product management than most frameworks did",
  "Monthly build logs — what I'm learning, testing, breaking",
];

export default function InsightsPage() {
  const [featured, ...rest] = insightsPosts;

  return (
    <>
      <section className="mx-auto max-w-5xl px-6 pt-20 pb-16 sm:pt-28">
        <p className="text-sm font-medium uppercase tracking-widest text-accent">
          Field Notes
        </p>
        <h1 className="mt-3 font-serif text-4xl">
          Lessons from building AI products, transforming workflows, and
          learning in public.
        </h1>
      </section>

      {/* Featured story */}
      <section className="border-t border-border/80 bg-surface">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <Link href={`/insights/${featured.slug}`} className="group grid gap-8 lg:grid-cols-2 lg:items-center">
            {featured.imageSrc && featured.imageWidth && featured.imageHeight ? (
              <div className="aspect-video overflow-hidden rounded-2xl bg-surface">
                <Image
                  src={featured.imageSrc}
                  width={featured.imageWidth}
                  height={featured.imageHeight}
                  alt={featured.imageDescription}
                  className="h-full w-full object-cover"
                />
              </div>
            ) : (
              <ImagePlaceholder
                aspect="video"
                assetName={featured.assetName}
                description={featured.imageDescription}
              />
            )}
            <div>
              <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-muted">
                <span className="text-olive">{featured.tag}</span>
                <span aria-hidden>·</span>
                <span>{featured.readingTime}</span>
              </div>
              <h2 className="mt-3 font-serif text-3xl">{featured.title}</h2>
              <p className="mt-3 leading-relaxed text-muted">{featured.teaser}</p>
              <p className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium">
                Read the story
                <span className="transition-transform group-hover:translate-x-1" aria-hidden>
                  →
                </span>
              </p>
            </div>
          </Link>
        </div>
      </section>

      {/* Card grid */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid gap-10 sm:grid-cols-2">
          {rest.map((post) => (
            <InsightCard
              key={post.slug}
              href={`/insights/${post.slug}`}
              tag={post.tag}
              readingTime={post.readingTime}
              title={post.title}
              excerpt={post.teaser}
              assetName={post.assetName}
              imageDescription={post.imageDescription}
              imageSrc={post.imageSrc}
              imageWidth={post.imageWidth}
              imageHeight={post.imageHeight}
            />
          ))}
        </div>
      </section>

      <section className="border-t border-border/80 bg-surface">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <h2 className="font-serif text-2xl">More Topics, Coming Soon</h2>
          <ul className="mt-6 space-y-3 text-muted">
            {moreTopics.map((topic) => (
              <li key={topic} className="flex gap-3">
                <span className="text-accent">—</span>
                <span>{topic}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
