import type { Metadata } from "next";
import Button from "@/app/components/Button";
import FlowSteps from "@/app/components/FlowSteps";
import ScreenshotGallery from "@/app/components/ScreenshotGallery";
import CTABand from "@/app/components/CTABand";
import { site } from "@/app/lib/site";

export const metadata: Metadata = {
  title: "Consulting — Kezia Lim",
};

const problems = [
  "“We know AI matters but don’t know where to start.”",
  "“Our processes are still manual and it’s costing us.”",
  "“Our team spends too much time on repetitive work.”",
  "“We have AI ideas, but no real plan to implement them.”",
  "“We need an actual AI product strategy — not a slide deck.”",
];

const outcomes = [
  "A validated AI opportunity, not just an idea",
  "A working prototype your team can react to",
  "A workflow that actually gets used",
  "A roadmap you can execute without me",
];

const engagements = [
  {
    title: "AI Opportunity Sprint",
    description: "Identify the right opportunities and prioritise what to pursue.",
    bestFor: "Teams unsure where AI actually fits",
    whatWeDo: "Map your processes, surface real opportunities, prioritise by value and feasibility",
    leaveWith: "A short list of validated opportunities and a clear next step",
  },
  {
    title: "AI Product Discovery",
    description: "Turn an idea into a validated concept, product direction, and prototype.",
    bestFor: "An idea that needs shape before it needs code",
    whatWeDo: "Define the problem, sketch the product, build a testable prototype",
    leaveWith: "A validated concept and a working prototype",
  },
  {
    title: "AI Workflow Transformation",
    description: "Redesign a real process using practical automation and AI assistance.",
    bestFor: "A manual process that's costing real time",
    whatWeDo: "Redesign the workflow, introduce practical automation, pilot with real users",
    leaveWith: "A working workflow and an implementation roadmap",
  },
];

export default function ConsultingPage() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-16 sm:pt-28">
        <h1 className="max-w-3xl font-serif text-[clamp(2.25rem,4.5vw,3.75rem)] leading-[1.05]">
          From AI curiosity to practical capability.
        </h1>
      </section>

      {/* Problems */}
      <section className="border-t border-border/80 bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <h2 className="font-serif text-[clamp(1.75rem,3.2vw,2.5rem)] leading-[1.1]">Sound familiar?</h2>
          <ul className="mt-8 max-w-2xl space-y-4">
            {problems.map((quote) => (
              <li
                key={quote}
                className="border-l-2 border-accent/50 pl-4 text-lg italic leading-relaxed text-muted"
              >
                {quote}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Outcomes */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="font-serif text-[clamp(1.75rem,3.2vw,2.5rem)] leading-[1.1]">What you leave with</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {outcomes.map((outcome) => (
            <p key={outcome} className="font-serif text-xl leading-snug">
              {outcome}
            </p>
          ))}
        </div>
      </section>

      {/* Visual process */}
      <section className="border-t border-border/80 bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <h2 className="font-serif text-[clamp(1.75rem,3.2vw,2.5rem)] leading-[1.1]">How I Work</h2>
          <div className="mt-10">
            <FlowSteps
              steps={[
                { icon: "🔍", label: "Discover", sublabel: "Understand the real problem" },
                { icon: "🗺️", label: "Map", sublabel: "Find where AI creates value" },
                { icon: "🧪", label: "Prototype", sublabel: "Build something testable" },
                { icon: "✅", label: "Validate", sublabel: "Test with real users" },
                { icon: "🚀", label: "Implement", sublabel: "Create a practical roadmap" },
                { icon: "📈", label: "Improve", sublabel: "Measure and iterate" },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Engagement options */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="font-serif text-[clamp(1.75rem,3.2vw,2.5rem)] leading-[1.1]">Ways to work together</h2>
        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          {engagements.map((e) => (
            <div key={e.title} className="rounded-2xl border border-border p-6">
              <h3 className="font-serif text-[clamp(1.25rem,1.8vw,1.5rem)] leading-snug">{e.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{e.description}</p>

              <dl className="mt-6 space-y-4 text-sm">
                <div>
                  <dt className="text-xs font-medium uppercase tracking-wide text-accent">
                    Best for
                  </dt>
                  <dd className="mt-1 leading-relaxed text-muted">{e.bestFor}</dd>
                </div>
                <div>
                  <dt className="text-xs font-medium uppercase tracking-wide text-accent">
                    What we do
                  </dt>
                  <dd className="mt-1 leading-relaxed text-muted">{e.whatWeDo}</dd>
                </div>
                <div>
                  <dt className="text-xs font-medium uppercase tracking-wide text-accent">
                    What you leave with
                  </dt>
                  <dd className="mt-1 leading-relaxed text-muted">{e.leaveWith}</dd>
                </div>
              </dl>
            </div>
          ))}
        </div>
      </section>

      {/* Selected example */}
      <section className="border-t border-border/80 bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            Selected Example
          </p>
          <h2 className="mt-3 font-serif text-[clamp(1.75rem,3.2vw,2.5rem)] leading-[1.1]">BECOME</h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-muted">
            This exact process, applied to my own idea: PRD to live AI
            product in three weeks. It&apos;s the clearest proof I have that
            the process works — I don&apos;t just advise it, I use it.
          </p>
          <div className="mt-6">
            <ScreenshotGallery
              fit="contain"
              className="flex gap-4"
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
          <div className="mt-6">
            <Button href="/proof-of-work#become" variant="secondary">
              Read the Case Study
            </Button>
          </div>
        </div>
      </section>

      <CTABand
        heading="Ready to talk through what you're working on?"
        ctaLabel={site.ctaLabel}
        ctaHref={site.discoveryCallMailto}
        bold
      />
    </>
  );
}
