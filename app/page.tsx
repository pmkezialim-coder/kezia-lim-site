import Link from "next/link";
import Image from "next/image";
import Button from "@/app/components/Button";
import AnnotatedImage from "@/app/components/AnnotatedImage";
import ScreenshotGallery from "@/app/components/ScreenshotGallery";
import MetricStrip from "@/app/components/MetricStrip";
import WorkCard from "@/app/components/WorkCard";
import FlowSteps from "@/app/components/FlowSteps";
import InsightCard from "@/app/components/InsightCard";
import CTABand from "@/app/components/CTABand";
import { LinkIcon, InstagramIcon, TikTokIcon } from "@/app/components/SocialIcons";
import { site, insightsPosts } from "@/app/lib/site";

const metrics = [
  { value: "14+", label: "Years in Product & Digital Transformation" },
  { value: "16", label: "Regional Programmes Launched" },
  { value: "3 Weeks", label: "BECOME: PRD to Live" },
  { value: "SEA", label: "Enterprise & Public-Sector Experience" },
];

const featuredWork = [
  {
    label: "Flagship Product",
    title: "BECOME",
    description:
      "An AI reflection companion designed to help people notice who they are becoming.",
    assetName: "become-phone-mockup-triptych.jpg",
    imageDescription: "Three phone screens of BECOME on a warm surface",
    imageSrc: "/images/become/become-phone-mockup-triptych.jpg",
    imageWidth: 1536,
    imageHeight: 1024,
    ctaLabel: "View Case Study",
    ctaHref: "/proof-of-work#become",
  },
  {
    label: "Government Transformation",
    title: "AI for Public Services",
    description:
      "Agentic AI concepts supporting citizens through complex application journeys while reducing manual verification for officers.",
    assetName: "public-services-workflow-diagram.jpg",
    imageDescription: "Abstract, anonymised workflow diagram",
    imageSrc: "/images/become/public-services-workflow-diagram.jpg",
    imageWidth: 1693,
    imageHeight: 929,
    ctaLabel: "Explore the Approach",
    ctaHref: "/proof-of-work#public-services",
  },
  {
    label: "Builder Experiments",
    title: "Rapid AI Prototypes",
    description:
      "From appointment assistants to workflow automation — practical AI concepts built and tested quickly.",
    assetName: "prototype-interface-collage.jpg",
    imageDescription: "Collage of small product interfaces and sketches",
    imageSrc: "/images/become/prototype-interface-collage.jpg",
    imageWidth: 1536,
    imageHeight: 1024,
    ctaLabel: "See Experiments",
    ctaHref: "/proof-of-work#experiments",
  },
];

const recognitionCards = [
  "Your team is experimenting with AI, but nothing is shipping.",
  "Manual work is slowing down your business.",
  "You have an AI idea but no clear product path.",
  "You need someone who understands strategy and implementation.",
];

const howIWork = [
  { icon: "🔍", label: "Discover", sublabel: "Understand the real problem" },
  { icon: "🗺️", label: "Map", sublabel: "Find where AI creates value" },
  { icon: "🧪", label: "Prototype", sublabel: "Build something testable" },
  { icon: "✅", label: "Validate", sublabel: "Test with real users and workflows" },
  { icon: "🚀", label: "Implement", sublabel: "Create a practical roadmap" },
  { icon: "📈", label: "Improve", sublabel: "Measure and iterate" },
];

const principles = [
  "People before technology",
  "Reduce complexity, do not add to it",
  "Ship to learn",
  "Build trust through product decisions",
];

const currentlyBuilding = [
  "Growing BECOME",
  "Designing practical AI workflows",
  "Testing new product ideas",
  "Writing field notes about AI, product, and building",
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto grid max-w-6xl gap-14 px-6 pt-16 pb-20 sm:pt-24 sm:pb-24 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div className="fade-in">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            AI Product Leader · Founder · Builder
          </p>
          <h1 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
            I turn AI ideas into products people actually use.
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">
            I help organisations move from AI curiosity to practical
            products, workflows, and experiences — combining strategy,
            product thinking, and hands-on implementation.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/consulting">{site.workWithMeLabel}</Button>
            <Button href="/proof-of-work" variant="secondary">
              Explore My Work
            </Button>
          </div>
        </div>

        <AnnotatedImage
          src="/images/become/hero-founder-desk-composition.jpg"
          width={1672}
          height={941}
          alt="Founder working at a desk — laptop with product wireframes, phone showing BECOME, an open notebook"
          annotations={[
            "Founder of BECOME",
            "14+ years in product",
            "AI · Enterprise · Public Sector",
            "From PRD to live in 3 weeks",
          ]}
        />
      </section>

      {/* Credibility strip */}
      <section className="border-t border-border/80 bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <MetricStrip metrics={metrics} />
        </div>
      </section>

      {/* Featured Work */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="font-serif text-3xl">Featured Work</h2>
        <div className="mt-10 grid gap-10 sm:grid-cols-3">
          {featuredWork.map((item) => (
            <WorkCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      {/* You may be here because... */}
      <section className="border-t border-border/80 bg-surface">
        <div className="mx-auto max-w-4xl px-6 py-24">
          <h2 className="font-serif text-3xl">You may be here because…</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {recognitionCards.map((line) => (
              <div
                key={line}
                className="rounded-2xl border border-border bg-background p-6"
              >
                <p className="leading-relaxed">{line}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 font-serif text-xl italic text-accent">
            That is where I help.
          </p>
        </div>
      </section>

      {/* How I Work */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="font-serif text-3xl">How I Work</h2>
        <div className="mt-12">
          <FlowSteps steps={howIWork} />
        </div>
      </section>

      {/* BECOME feature story */}
      <section className="border-t border-border/80 bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="max-w-sm">
            <h2 className="font-serif text-3xl sm:text-4xl">
              Built to understand what makes AI feel human.
            </h2>
            <p className="mt-6 leading-relaxed text-muted">
              BECOME is the clearest proof of how I work: start with a
              deeply human problem, define what the AI should and should
              not do, prototype quickly, and refine through real use.
            </p>

            <div className="mt-12">
              <ScreenshotGallery
                fit="contain"
                className="flex gap-6"
                shots={[
                  {
                    src: "/images/become/patterns-dark.png",
                    width: 572,
                    height: 1224,
                    alt: "BECOME Pattern Dashboard in dark mode",
                  },
                  {
                    src: "/images/become/inner-compass-light.png",
                    width: 550,
                    height: 1214,
                    alt: "BECOME Inner Compass summary",
                  },
                ]}
              />
            </div>
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <div className="aspect-video overflow-hidden rounded-2xl bg-surface">
              <Image
                src="/images/become/become-founder-notebook-wireframe.jpg"
                width={1672}
                height={941}
                alt="Founder's notebook open to early BECOME wireframes and product notes"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-muted">
                From spec to shipped
              </p>
              <div className="mt-4">
                <FlowSteps
                  steps={[
                    { icon: "📝", label: "PRD" },
                    { icon: "🧪", label: "Prototype" },
                    { icon: "🪞", label: "Personal Testing" },
                    { icon: "🚀", label: "Launch" },
                  ]}
                />
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-5">
            <Button href="/proof-of-work#become" variant="secondary">
              Read the BECOME Case Study
            </Button>
            <a
              href={site.becomeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-colors hover:brightness-90"
            >
              <LinkIcon className="h-4 w-4" />
              Try BECOME
            </a>
            <a
              href={site.becomeInstagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="BECOME on Instagram"
              className="text-foreground/70 transition-colors hover:text-foreground"
            >
              <InstagramIcon />
            </a>
            <a
              href={site.becomeTiktok}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="BECOME on TikTok"
              className="text-foreground/70 transition-colors hover:text-foreground"
            >
              <TikTokIcon />
            </a>
          </div>
        </div>
      </section>

      {/* Operating Principles */}
      <section className="mx-auto max-w-4xl px-6 py-24">
        <h2 className="font-serif text-3xl">How I think about AI products</h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {principles.map((principle) => (
            <p key={principle} className="font-serif text-2xl leading-snug sm:text-3xl">
              {principle}
            </p>
          ))}
        </div>
      </section>

      {/* Currently Building */}
      <section className="border-t border-border/80 bg-surface">
        <div className="mx-auto max-w-3xl px-6 py-24">
          <h2 className="font-serif text-3xl">Currently Building</h2>
          <ul className="mt-8 space-y-4">
            {currentlyBuilding.map((item) => (
              <li key={item} className="flex items-center gap-3 text-lg">
                <span className="h-2 w-2 shrink-0 rounded-full bg-olive" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Insights preview */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="flex items-baseline justify-between">
          <h2 className="font-serif text-3xl">Field Notes</h2>
          <Link href="/insights" className="text-sm font-medium text-accent">
            View all →
          </Link>
        </div>
        <div className="mt-10 grid gap-10 sm:grid-cols-3">
          {insightsPosts.map((post) => (
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

      {/* Final CTA */}
      <CTABand
        heading="Have an AI opportunity worth exploring?"
        body="Let's find out whether it should become a product, a workflow, or something simpler."
        ctaLabel={site.ctaLabel}
        ctaHref={site.discoveryCallMailto}
        tinted
      />
    </>
  );
}
