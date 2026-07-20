import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ImagePlaceholder from "@/app/components/ImagePlaceholder";
import CTABand from "@/app/components/CTABand";
import { site, insightsPosts } from "@/app/lib/site";

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
        <h1 className="mt-3 font-serif text-[clamp(2.25rem,4.5vw,3.75rem)] leading-[1.05]">
          Lessons from building AI products, transforming workflows, and
          learning in public.
        </h1>
      </section>

      {/* Editorial grid */}
      <section className="border-t border-border/80 bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Featured — spans both secondary rows */}
            <Link
              href={`/insights/${featured.slug}`}
              className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-background lg:row-span-2"
            >
              {featured.imageSrc && featured.imageWidth && featured.imageHeight ? (
                <div className="aspect-[4/3] overflow-hidden">
                  <Image
                    src={featured.imageSrc}
                    width={featured.imageWidth}
                    height={featured.imageHeight}
                    alt={featured.imageDescription}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </div>
              ) : (
                <ImagePlaceholder
                  aspect="video"
                  assetName={featured.assetName}
                  description={featured.imageDescription}
                  className="rounded-none border-0"
                />
              )}
              <div className="flex flex-1 flex-col p-8">
                <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-muted">
                  <span className="text-olive">{featured.tag}</span>
                  <span aria-hidden>·</span>
                  <span>{featured.readingTime}</span>
                </div>
                <h2 className="mt-4 font-serif text-[clamp(1.75rem,3.2vw,2.5rem)] leading-[1.1]">{featured.title}</h2>
                <p className="mt-3 leading-relaxed text-muted">{featured.teaser}</p>
                <p className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-medium">
                  Read the story
                  <span className="transition-transform group-hover:translate-x-1" aria-hidden>
                    →
                  </span>
                </p>
              </div>
            </Link>

            {/* Secondary posts */}
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/insights/${post.slug}`}
                className="group flex gap-5 rounded-2xl border border-border bg-background p-5"
              >
                <div className="w-28 shrink-0 sm:w-36">
                  {post.imageSrc && post.imageWidth && post.imageHeight ? (
                    <div className="aspect-square overflow-hidden rounded-xl">
                      <Image
                        src={post.imageSrc}
                        width={post.imageWidth}
                        height={post.imageHeight}
                        alt={post.imageDescription}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                      />
                    </div>
                  ) : (
                    <ImagePlaceholder
                      aspect="square"
                      assetName={post.assetName}
                      description={post.imageDescription}
                      className="rounded-xl"
                    />
                  )}
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-muted">
                    <span className="text-olive">{post.tag}</span>
                    <span aria-hidden>·</span>
                    <span>{post.readingTime}</span>
                  </div>
                  <h3 className="mt-2 font-serif text-[clamp(1.25rem,1.8vw,1.5rem)] leading-snug">{post.title}</h3>
                  <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-muted">
                    {post.teaser}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="font-serif text-[clamp(1.25rem,1.8vw,1.5rem)] leading-snug">More Topics, Coming Soon</h2>
        <ul className="mt-6 space-y-3 text-muted">
          {moreTopics.map((topic) => (
            <li key={topic} className="flex gap-3">
              <span className="text-accent">—</span>
              <span>{topic}</span>
            </li>
          ))}
        </ul>
      </section>

      <CTABand
        heading="Have an AI opportunity worth exploring?"
        body="Let's find out whether it should become a product, a workflow, or something simpler."
        ctaLabel={site.ctaLabel}
        ctaHref={site.discoveryCallMailto}
        bold
      />
    </>
  );
}
