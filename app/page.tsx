import Button from "@/app/components/Button";
import Todo from "@/app/components/Todo";
import PhotoPlaceholder from "@/app/components/PhotoPlaceholder";
import AppScreenshot from "@/app/components/AppScreenshot";
import StatCard from "@/app/components/StatCard";
import ProductCard from "@/app/components/ProductCard";
import FlowSteps from "@/app/components/FlowSteps";
import { site } from "@/app/lib/site";

const stats = [
  { value: "14+", label: "Years in Product & Digital Transformation" },
  { value: "3 Weeks", label: "BECOME: PRD to Live" },
  { value: "Founder", label: "BECOME" },
  { value: "Enterprise & Gov", label: "Digital Transformation" },
];

const career = [
  { icon: "🏭", label: "ERP" },
  { icon: "🏠", label: "Property Tech" },
  { icon: "🌏", label: "Regional Product" },
  { icon: "🤖", label: "Enterprise AI" },
  { icon: "🏛️", label: "Government" },
  { icon: "🧭", label: "BECOME" },
];

const whatIDo = [
  {
    icon: "🧠",
    title: "AI Strategy",
    body: "Finding where AI actually creates value in your business, and being honest about where it doesn't.",
  },
  {
    icon: "⚙️",
    title: "Workflow Automation",
    body: "Removing repetitive work through practical, well-scoped AI.",
  },
  {
    icon: "🚀",
    title: "AI Product Design",
    body: "Turning a rough AI idea into something people can use, understand, and trust on day one.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto grid max-w-6xl gap-12 px-6 pt-16 pb-20 sm:pt-24 sm:pb-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            Kezia Lim
          </p>
          <h1 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
            AI ideas →{" "}
            <span className="italic text-accent">Products people</span>{" "}
            actually use
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            I help organisations and business owners turn AI from an idea
            into something real — through strategy, product thinking, and
            hands-on implementation.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/consulting">Work With Me</Button>
            <Button href="/proof-of-work" variant="secondary">
              See What I Build
            </Button>
          </div>
        </div>

        <PhotoPlaceholder aspect="portrait" label="Professional photo of Kezia" />
      </section>

      {/* Credibility Metrics */}
      <section className="border-t border-border/80 bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((stat) => (
              <StatCard key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>

          <div className="mt-14">
            <p className="text-center text-sm font-medium uppercase tracking-widest text-muted">
              The Path Here
            </p>
            <div className="mt-6">
              <FlowSteps steps={career} />
            </div>
          </div>
        </div>
      </section>

      {/* Featured word cards — What I Do */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="font-serif text-3xl">What I Do</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {whatIDo.map((item) => (
            <ProductCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      {/* Personal pull-quote */}
      <section className="border-t border-border/80">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center">
          <p className="font-serif text-xl italic leading-relaxed sm:text-2xl">
            <span aria-hidden>☕</span> Most mornings you&apos;ll find me
            debugging AI products with coffee.{" "}
            <span aria-hidden>🥊</span> Most evenings you&apos;ll find me
            hitting a Muay Thai bag or laced up with running shoes.
          </p>
        </div>
      </section>

      {/* How I Help */}
      <section className="border-t border-border/80 bg-surface">
        <div className="mx-auto max-w-4xl px-6 py-24">
          <h2 className="font-serif text-3xl">How I Help</h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-muted">
            Discovery, opportunity mapping, a rapid prototype, a real-world
            pilot, then a roadmap your team can execute — no slide decks
            required.
          </p>
          <div className="mt-10">
            <FlowSteps
              steps={[
                { icon: "🔍", label: "Discover" },
                { icon: "🗺️", label: "Map" },
                { icon: "🧪", label: "Prototype" },
                { icon: "✅", label: "Test" },
                { icon: "🚀", label: "Ship" },
              ]}
            />
          </div>
          <div className="mt-10">
            <Button href="/consulting" variant="secondary">
              See How I Work
            </Button>
          </div>
        </div>
      </section>

      {/* Current Focus */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="font-serif text-3xl">Current Focus</h2>

        <div className="mt-10 rounded-2xl border border-border p-8">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            Featured Build
          </p>
          <h3 className="mt-3 font-serif text-2xl">BECOME</h3>
          <p className="mt-4 max-w-2xl leading-relaxed text-muted">
            An AI companion for self-reflection — the technology disappears
            into the experience, and what&apos;s left feels human. PRD to
            live product in three weeks.
          </p>
          <div className="mt-6 max-w-xs">
            <AppScreenshot
              src="/images/become/inner-compass-light.png"
              width={550}
              height={1214}
              alt="BECOME Inner Compass summary"
            />
          </div>
          <div className="mt-6">
            <Button href="/proof-of-work#become" variant="secondary">
              Read the Case Study
            </Button>
          </div>
        </div>

        <div className="mt-8 grid gap-8 sm:grid-cols-2">
          <div className="rounded-2xl border border-border p-8">
            <p className="text-sm font-medium uppercase tracking-widest text-accent">
              Featured Work
            </p>
            <h3 className="mt-3 font-serif text-2xl">Public Sector AI</h3>
            <p className="mt-4 leading-relaxed text-muted">
              Designed AI-assisted workflows to reduce manual document
              review, streamline citizen-facing services, and improve
              decision-making across high-volume government processes.
            </p>
            <p className="mt-6 text-sm">
              <Todo>government/enterprise client name</Todo>
            </p>
          </div>

          <div className="rounded-2xl border border-border p-8">
            <p className="text-sm font-medium uppercase tracking-widest text-accent">
              Featured Work
            </p>
            <h3 className="mt-3 font-serif text-2xl">
              Budget Tracking Chatbot
            </h3>
            <p className="mt-4 leading-relaxed text-muted">
              A conversational AI assistant for tracking and managing budgets.
            </p>
            <p className="mt-6 text-sm">
              <Todo>challenge, approach, and impact details</Todo>
            </p>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="border-t border-border/80 bg-surface">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <h2 className="font-serif text-3xl">
            Technology changes quickly. People don&apos;t. I built AI around
            both.
          </h2>
          <div className="mt-8">
            <Button href={site.discoveryCallMailto}>{site.ctaLabel}</Button>
          </div>
        </div>
      </section>
    </>
  );
}
