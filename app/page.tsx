import Button from "@/app/components/Button";
import AnnotatedImage from "@/app/components/AnnotatedImage";
import MetricStrip from "@/app/components/MetricStrip";
import WorkCard from "@/app/components/WorkCard";
import FlagshipCard from "@/app/components/FlagshipCard";
import FlowSteps from "@/app/components/FlowSteps";
import CTABand from "@/app/components/CTABand";
import { LinkIcon, InstagramIcon, TikTokIcon } from "@/app/components/SocialIcons";
import { site } from "@/app/lib/site";

const metrics = [
  { value: "14+", label: "Years in Product & Digital Transformation" },
  { value: "16", label: "Regional Programmes Launched" },
  { value: "3 Weeks", label: "BECOME: PRD to Live" },
  { value: "SEA", label: "Enterprise & Public-Sector Experience" },
];

const secondaryWork = [
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

const howIWork = [
  { icon: "🔍", label: "Discover", sublabel: "Understand the real problem" },
  { icon: "🗺️", label: "Map", sublabel: "Find where AI creates value" },
  { icon: "🧪", label: "Prototype", sublabel: "Build something testable" },
  { icon: "✅", label: "Validate", sublabel: "Test with real users and workflows" },
  { icon: "🚀", label: "Implement", sublabel: "Create a practical roadmap" },
  { icon: "📈", label: "Improve", sublabel: "Measure and iterate" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-14 sm:pt-24">
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="fade-in">
            <p className="text-sm font-medium uppercase tracking-widest text-accent">
              AI Product Leader · Founder · Builder · Singapore
            </p>
            <h1 className="mt-4 font-serif text-5xl leading-[1.05] sm:text-6xl">
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
        </div>

        <div className="mt-16 border-t border-border/80 pt-10">
          <MetricStrip metrics={metrics} />
        </div>
      </section>

      {/* Selected Work */}
      <section className="border-t border-border/80 bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            Proof of Work
          </p>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
            Strategy is useful when it becomes something real.
          </h2>
          <p className="mt-5 max-w-3xl leading-relaxed text-muted">
            My work sits between business transformation, product thinking,
            and hands-on delivery — from discovering the right problem to
            proving a solution in the real world.
          </p>

          <div className="mt-12">
            <FlagshipCard
              kicker="Flagship Proof Point"
              eyebrow="Live Product · Founder-Led"
              mark="BECOME"
              title="See who you're becoming while you're still living it."
              lede="An AI reflection companion designed to help people notice who they are becoming."
              facts={[
                {
                  label: "Challenge",
                  body: "People are changing constantly, but rarely see it while it's happening.",
                },
                {
                  label: "Approach",
                  body: "Define what the AI should and should not do, prototype quickly, refine through real use.",
                },
                {
                  label: "Why It Matters",
                  body: "PRD to live product in three weeks — proof I don't just advise, I ship.",
                },
              ]}
              ctaLabel="Read the BECOME Case Study"
              ctaHref="/proof-of-work#become"
              journeyLabel="From Spec to Shipped"
              steps={[
                { number: "01", label: "PRD" },
                { number: "02", label: "Prototype" },
                { number: "03", label: "Personal Testing" },
                { number: "04", label: "Launch" },
              ]}
              quote="I read what the Inner Compass had written, and I cried — because it was accurate."
              extraActions={
                <>
                  <a
                    href={site.becomeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-background/25 px-4 py-2 text-sm font-medium text-background transition-colors hover:border-background/50"
                  >
                    <LinkIcon className="h-4 w-4" />
                    Try BECOME
                  </a>
                  <a
                    href={site.becomeInstagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="BECOME on Instagram"
                    className="text-background/70 transition-colors hover:text-background"
                  >
                    <InstagramIcon />
                  </a>
                  <a
                    href={site.becomeTiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="BECOME on TikTok"
                    className="text-background/70 transition-colors hover:text-background"
                  >
                    <TikTokIcon />
                  </a>
                </>
              }
            />
          </div>

          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            {secondaryWork.map((item) => (
              <WorkCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            How I Work
          </p>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
            The workflow comes before the model.
          </h2>
          <p className="mt-5 max-w-3xl leading-relaxed text-muted">
            AI transformation succeeds when the technology fits the people,
            decisions, and constraints already inside the business.
          </p>
          <div className="mt-12">
            <FlowSteps steps={howIWork} />
          </div>

          <div className="mt-20 grid gap-10 border-t border-border/80 pt-16 lg:grid-cols-2">
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-accent">
                About Kezia
              </p>
              <h2 className="mt-3 font-serif text-2xl sm:text-3xl">
                Product leader by experience. Builder by instinct.
              </h2>
            </div>
            <div>
              <p className="leading-relaxed text-muted">
                I bring 14+ years across product and digital transformation
                in Southeast Asia — regional launches, modernised workflows,
                and AI products built from first sketch to working
                prototype.
              </p>
              <p className="mt-4 leading-relaxed text-muted">
                My style is practical and quietly ambitious: understand the
                real problem, bring people with you, and make the change
                useful enough to last.
              </p>
              <div className="mt-6">
                <Button href="/about" variant="secondary">
                  More About Me
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
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
