import type { Metadata } from "next";
import Button from "@/app/components/Button";
import Todo from "@/app/components/Todo";
import Image from "next/image";
import ScreenshotGallery from "@/app/components/ScreenshotGallery";
import FlowSteps from "@/app/components/FlowSteps";
import CaseStudySection from "@/app/components/CaseStudySection";
import WorkCard from "@/app/components/WorkCard";
import { site } from "@/app/lib/site";

export const metadata: Metadata = {
  title: "Proof of Work — Kezia Lim",
};

type OverviewItem = {
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
};

const overview: OverviewItem[] = [
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
    label: "Transformation",
    title: "AI-Assisted Public Services",
    description:
      "Redesigning high-volume workflows using human-centred AI and decision support.",
    assetName: "public-services-workflow-diagram.jpg",
    imageDescription: "Abstract, anonymised workflow diagram",
    imageSrc: "/images/become/public-services-workflow-diagram.jpg",
    imageWidth: 1693,
    imageHeight: 929,
    ctaLabel: "Explore the Approach",
    ctaHref: "/proof-of-work#public-services",
  },
  {
    label: "Builder Experiment",
    title: "Appointment & Booking Assistant",
    description: "A conversational assistant for scheduling and booking.",
    assetName: "appointment-assistant-interface.jpg",
    imageDescription: "Chat interface for an appointment-booking assistant",
    imageSrc: "/images/become/appointment-assistant-interface.jpg",
    imageWidth: 1536,
    imageHeight: 1024,
    ctaLabel: "See Details",
    ctaHref: "/proof-of-work#appointment-assistant",
  },
  {
    label: "Builder Experiment",
    title: "Chatbots & Internal Assistants",
    description: "Internal tools built to remove repetitive team work.",
    assetName: "internal-chatbot-interface.jpg",
    imageDescription: "Internal assistant chat interface on a laptop screen",
    imageSrc: "/images/become/internal-chatbot-interface.jpg",
    imageWidth: 1536,
    imageHeight: 1024,
    ctaLabel: "See Details",
    ctaHref: "/proof-of-work#chatbots",
  },
  {
    label: "Builder Experiment",
    title: "Hackathon Prototypes",
    description: "Fast, scrappy AI concepts built and tested under a clock.",
    assetName: "hackathon-prototype-sketches.jpg",
    imageDescription: "Sketches and sticky notes from a hackathon session",
    imageSrc: "/images/become/hackathon-prototype-sketches.jpg",
    imageWidth: 1536,
    imageHeight: 1024,
    ctaLabel: "See Details",
    ctaHref: "/proof-of-work#hackathons",
  },
];

const screenshots = [
  {
    src: "/images/become/home.png",
    width: 752,
    height: 934,
    alt: "BECOME sign-in screen",
    caption: "Sign in — a private space from the first screen",
  },
  {
    src: "/images/become/onboarding-founder-message.png",
    width: 794,
    height: 1012,
    alt: "BECOME onboarding with founder's message",
    caption: "Onboarding — the founder's own story, then straight into writing",
  },
  {
    src: "/images/become/patterns-dark.png",
    width: 572,
    height: 1224,
    alt: "BECOME Pattern Dashboard in dark mode",
    caption: "Pattern Dashboard — after 5 entries",
  },
  {
    src: "/images/become/strengths-and-blindspots-dark.png",
    width: 542,
    height: 1198,
    alt: "BECOME Strengths & Blind Spots in dark mode",
    caption: "Strengths & Blind Spots — after 10 entries, framed gently",
  },
  {
    src: "/images/become/inner-compass-light.png",
    width: 550,
    height: 1214,
    alt: "BECOME Inner Compass summary",
    caption: "Inner Compass Summary — after 4 weeks, the signature feature",
  },
];

export default function ProofOfWorkPage() {
  return (
    <div className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-4xl">
        <h1 className="font-serif text-4xl">Proof of Work</h1>
        <p className="mt-4 max-w-xl leading-relaxed text-muted">
          A working record — one flagship product, and the experiments
          alongside it.
        </p>
      </div>

      {/* Overview grid */}
      <div className="mx-auto mt-16 grid max-w-6xl gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {overview.map((item) => (
          <WorkCard key={item.title} {...item} />
        ))}
      </div>

      {/* BECOME flagship case study */}
      <section id="become" className="mx-auto mt-28 max-w-4xl scroll-mt-24">
        <p className="text-sm font-medium uppercase tracking-widest text-accent">
          Flagship Case Study
        </p>
        <h2 className="mt-3 font-serif text-3xl">BECOME</h2>

        <CaseStudySection number="01" title="Product Hero">
          <div className="overflow-hidden rounded-2xl border border-border bg-surface">
            <Image
              src="/images/become/become-hero-product-banner.jpg"
              width={1774}
              height={887}
              alt="BECOME product banner"
              className="h-auto w-full"
              priority
            />
          </div>
        </CaseStudySection>

        <CaseStudySection number="02" title="Overview & Role">
          <p>
            An AI journal that helps people see who they are becoming while
            they are still living it. Founder, sole designer, and sole
            builder — from spec to shipped product.
          </p>
        </CaseStudySection>

        <CaseStudySection number="03" title="The Challenge">
          <p>
            People are changing constantly, but rarely see it while it&apos;s
            happening. Journals capture what happened, not what it means.
          </p>
        </CaseStudySection>

        <CaseStudySection number="04" title="User Insight">
          <p>
            The Conscious Seeker: late 20s to 40s, already doing some version
            of self-reflection, but missing a single place to make sense of
            it over time. Not a beginner at self-work — missing the mirror.
          </p>
        </CaseStudySection>

        <CaseStudySection number="05" title="Product Principles">
          <ul className="space-y-2">
            <li>Quiet by default — no clutter, no dashboards on empty states.</li>
            <li>Mobile-first — designed for the phone at the end of a long day.</li>
            <li>Data visualisations only when there&apos;s data worth showing.</li>
          </ul>
        </CaseStudySection>

        <CaseStudySection number="06" title="PRD to Live">
          <FlowSteps
            steps={[
              { icon: "📝", label: "PRD Written" },
              { icon: "🌙", label: "Built Nights & Weekends" },
              { icon: "🪞", label: "Founder-Led Personal Use" },
              { icon: "🚀", label: "Live", sublabel: "3 weeks from PRD" },
            ]}
          />
        </CaseStudySection>

        <CaseStudySection number="07" title="Product Walkthrough">
          <p>
            Onboarding opens with the founder&apos;s own story, then straight
            into a first journal prompt. Write freely, BECOME reflects
            inline. After 5 entries, patterns surface. After 10, strengths
            and blind spots are framed gently. After 4 weeks, the Inner
            Compass becomes a living document.
          </p>
        </CaseStudySection>

        <CaseStudySection number="08" title="AI Behaviour & Guardrails">
          <p>
            The AI doesn&apos;t give advice or direction. It&apos;s designed
            as a wise, close friend who has been reading your journal for
            years — asking the question that unlocks something, and trusting
            you to find your own answer.
          </p>
        </CaseStudySection>

        <CaseStudySection number="09" title="Deliberately Excluded">
          <ul className="space-y-2">
            <li>No social features — this isn&apos;t a place to perform reflection.</li>
            <li>No habit tracking or productivity mechanics.</li>
            <li>No onboarding quiz — the AI learns from what you write.</li>
            <li>No therapist integrations — BECOME is not therapy.</li>
          </ul>
        </CaseStudySection>

        <CaseStudySection number="10" title="Screens & Interactions">
          <ScreenshotGallery
            shots={screenshots}
            fit="contain"
            className="grid gap-4 sm:grid-cols-3"
          />
        </CaseStudySection>

        <CaseStudySection number="11" title="Product System">
          <FlowSteps
            steps={[
              { icon: "📓", label: "Journal Entry", sublabel: "Next.js" },
              { icon: "✨", label: "AI Reflection", sublabel: "Claude API" },
              { icon: "🗄️", label: "Data & Auth", sublabel: "Supabase" },
              { icon: "📊", label: "Analytics", sublabel: "PostHog" },
            ]}
          />
        </CaseStudySection>

        <CaseStudySection number="12" title="Testing & Iteration">
          <p>
            Founder-led personal testing happened before anyone else touched
            the product — including two days of after-hours debugging on the
            Inner Compass feature that ended with reading what it had
            written, and crying, because it was accurate.
          </p>
        </CaseStudySection>

        <CaseStudySection number="13" title="Results & Current Goals">
          <p>
            Near-term goal: 100 active users with weekly retention above
            40%.
          </p>
        </CaseStudySection>

        <CaseStudySection number="14" title="Lessons for Client Work">
          <p>
            Every decision in BECOME — down to what the AI is not allowed to
            do — is a decision I now bring into client work: what makes
            people trust an AI, and what makes them abandon it.
          </p>
        </CaseStudySection>

        <CaseStudySection number="15" title="Roadmap">
          <p>
            A weekly reflection digest, guided prompts for specific life
            chapters, exporting your journey as a document, and eventually
            sharing entries with a trusted coach, therapist, or partner.
          </p>
        </CaseStudySection>
      </section>

      {/* AI-Assisted Public Services */}
      <section id="public-services" className="mx-auto mt-28 max-w-4xl scroll-mt-24 border-t border-border/80 pt-16">
        <p className="text-sm font-medium uppercase tracking-widest text-accent">
          Transformation
        </p>
        <h2 className="mt-3 font-serif text-3xl">AI-Assisted Public Services</h2>
        <p className="mt-4 leading-relaxed text-muted">
          Designed AI-assisted workflows to reduce manual document review,
          streamline citizen-facing services, and improve decision-making
          across high-volume government processes.
        </p>
        <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-surface">
          <Image
            src="/images/become/public-services-workflow-diagram.jpg"
            width={1693}
            height={929}
            alt="Abstract, anonymised workflow diagram — no confidential details"
            className="h-auto w-full"
          />
        </div>
        <p className="mt-6 text-sm">
          <Todo>government/enterprise client name (confidentiality permitting)</Todo>
        </p>
      </section>

      {/* Builder experiments */}
      <section id="experiments" className="mx-auto mt-28 max-w-4xl scroll-mt-24 border-t border-border/80 pt-16">
        <p className="text-sm font-medium uppercase tracking-widest text-accent">
          Builder Experiments
        </p>
        <h2 className="mt-3 font-serif text-3xl">Rapid AI Prototypes</h2>
        <p className="mt-4 max-w-xl leading-relaxed text-muted">
          From appointment assistants to workflow automation — practical AI
          concepts built and tested quickly.
        </p>

        <div id="appointment-assistant" className="mt-12 scroll-mt-24 rounded-2xl border border-border p-6">
          <h3 className="font-medium">Appointment & Booking Assistant</h3>
          <div className="mt-3">
            <Todo>challenge, approach, and impact details</Todo>
          </div>
        </div>

        <div id="chatbots" className="mt-6 scroll-mt-24 rounded-2xl border border-border p-6">
          <h3 className="font-medium">Chatbots & Internal Assistants</h3>
          <div className="mt-3">
            <Todo>which chatbots, for whom, and what they did</Todo>
          </div>
        </div>

        <div id="hackathons" className="mt-6 scroll-mt-24 rounded-2xl border border-border p-6">
          <h3 className="font-medium">Hackathon Prototypes</h3>
          <div className="mt-3">
            <Todo>which hackathons, what was built, results</Todo>
          </div>
        </div>
      </section>

      <div className="mx-auto mt-16 max-w-4xl">
        <Button href={site.discoveryCallMailto}>{site.ctaLabel}</Button>
      </div>
    </div>
  );
}
