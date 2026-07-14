import type { Metadata } from "next";
import Button from "@/app/components/Button";
import Todo from "@/app/components/Todo";
import PhotoPlaceholder from "@/app/components/PhotoPlaceholder";
import AppScreenshot from "@/app/components/AppScreenshot";
import FlowSteps from "@/app/components/FlowSteps";
import { site } from "@/app/lib/site";

export const metadata: Metadata = {
  title: "Proof of Work — Kezia Lim",
};

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
    src: "/images/become/journal-entry.png",
    width: 850,
    height: 1004,
    alt: "BECOME journal entry with inline AI reflection",
    caption: "Journal Entry — write freely, BECOME reflects inline",
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

const designDecisions = [
  {
    title: "The AI, not a coach",
    body: "No advice, no direction. It asks the question that unlocks something in you, and trusts you to find your own answer.",
  },
  {
    title: "Quiet by default",
    body: "No clutter, no dashboards on empty states. Data visualisations only when there's data worth showing.",
  },
  {
    title: "Mobile-first",
    body: "Designed for the phone in your hand at the end of a long day.",
  },
  {
    title: "What was left out",
    body: "No social features, no habit tracking, no onboarding quiz, no therapist integrations. BECOME is not therapy, and doesn't pretend to be.",
  },
];

const otherProjects = [
  {
    title: "Appointment AI / Booking Assistant",
    todo: "challenge, approach, and impact details",
  },
  {
    title: "Government AI Workflow Projects",
    todo: "high-level description of scope and outcomes",
  },
  {
    title: "Chatbot Builds",
    todo: "which chatbots, for whom, and what they did",
  },
  {
    title: "Hackathon Projects",
    todo: "which hackathons, what was built, results",
  },
  {
    title: "Future AI Products / Experiments",
    todo: "what's currently in progress",
  },
];

export default function ProofOfWorkPage() {
  return (
    <div className="px-6 py-20 sm:py-28">
      <h1 className="mx-auto max-w-4xl font-serif text-4xl">Proof of Work</h1>

      {/* BECOME case study */}
      <section id="become" className="mx-auto mt-16 max-w-4xl scroll-mt-24">
        <p className="text-sm font-medium uppercase tracking-widest text-accent">
          Flagship Case Study
        </p>
        <h2 className="mt-3 font-serif text-3xl">BECOME</h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
          An AI journal that helps people see who they are becoming while
          they are still living it.
        </p>

        {/* Hero image */}
        <div className="mt-10">
          <PhotoPlaceholder aspect="wide" label="BECOME hero shot / product banner" />
        </div>

        {/* App screenshots */}
        <div className="mt-16">
          <h3 className="font-serif text-xl">The Product</h3>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {screenshots.map((shot) => (
              <AppScreenshot key={shot.src} {...shot} />
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-16">
          <h3 className="font-serif text-xl">Timeline</h3>
          <div className="mt-8">
            <FlowSteps
              steps={[
                { icon: "📝", label: "PRD Written" },
                { icon: "🌙", label: "Built Nights & Weekends" },
                { icon: "🪞", label: "Founder-Led Personal Use" },
                { icon: "🚀", label: "Live", sublabel: "3 weeks from PRD" },
              ]}
            />
          </div>
        </div>

        {/* Challenge */}
        <div className="mt-16">
          <h3 className="font-serif text-xl">The Challenge</h3>
          <p className="mt-4 leading-relaxed text-muted">
            Most people are changing — growing, learning, struggling,
            becoming — but they can&apos;t see it while it&apos;s happening.
            Journals exist, but they&apos;re passive; they capture what
            happened, not what it means. The person this needed to reach: The
            Conscious Seeker, someone in their late 20s to 40s already doing
            some version of self-reflection, but missing a single place to
            make sense of it over time.
          </p>
        </div>

        {/* Design decisions */}
        <div className="mt-16">
          <h3 className="font-serif text-xl">Design Decisions</h3>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {designDecisions.map((item) => (
              <div key={item.title} className="rounded-2xl border border-border bg-surface p-6">
                <p className="font-medium">{item.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Architecture */}
        <div className="mt-16">
          <h3 className="font-serif text-xl">Architecture</h3>
          <div className="mt-6 rounded-2xl border border-border bg-surface p-8">
            <FlowSteps
              steps={[
                { icon: "📓", label: "Journal Entry", sublabel: "Next.js" },
                { icon: "✨", label: "AI Reflection", sublabel: "Claude API" },
                { icon: "🗄️", label: "Data & Auth", sublabel: "Supabase" },
                { icon: "📊", label: "Analytics", sublabel: "PostHog" },
              ]}
            />
          </div>
        </div>

        {/* Results */}
        <div className="mt-16">
          <h3 className="font-serif text-xl">Results &amp; Roadmap</h3>
          <p className="mt-4 leading-relaxed text-muted">
            Near-term goal: 100 active users with weekly retention above
            40%. Beyond that: a weekly reflection digest, guided prompts for
            specific life chapters, exporting your journey as a document, and
            eventually sharing entries with a trusted coach, therapist, or
            partner.
          </p>
        </div>

        {/* Lessons learned */}
        <div className="mt-16">
          <h3 className="font-serif text-xl">Lessons Learned</h3>
          <p className="mt-4 leading-relaxed text-muted">
            The single biggest risk was always that the AI&apos;s reflections
            would feel generic instead of genuinely insightful — which is why
            founder-led personal testing happened before anyone else touched
            the product, including two days of after-hours debugging on the
            Inner Compass feature that ended with reading what it had written
            and crying, because it was accurate. Fourteen years of building
            other people&apos;s products taught me these things take months.
            This one didn&apos;t — proof, mostly to myself, that I could
            still move like that for something of my own.
          </p>
        </div>
      </section>

      {/* Other Projects */}
      <section className="mx-auto mt-24 max-w-4xl border-t border-border/80 pt-16">
        <h2 className="font-serif text-3xl">Other Projects</h2>
        <p className="mt-3 text-sm text-muted">
          Each entry follows: Challenge → Approach → Impact
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {otherProjects.map((project) => (
            <div
              key={project.title}
              className="rounded-lg border border-border bg-surface p-6"
            >
              <h3 className="font-medium">{project.title}</h3>
              <div className="mt-3">
                <Todo>{project.todo}</Todo>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="mx-auto mt-16 max-w-4xl">
        <Button href={site.discoveryCallMailto}>{site.ctaLabel}</Button>
      </div>
    </div>
  );
}
