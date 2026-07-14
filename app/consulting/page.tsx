import type { Metadata } from "next";
import Button from "@/app/components/Button";
import FlowSteps from "@/app/components/FlowSteps";
import AppScreenshot from "@/app/components/AppScreenshot";
import { site } from "@/app/lib/site";

export const metadata: Metadata = {
  title: "Consulting — Kezia Lim",
};

const who = [
  "Business owners",
  "Government agencies",
  "Product teams",
  "Growing SMEs",
  "Digital transformation teams",
];

const soundFamiliar = [
  "“We know AI matters but don’t know where to start.”",
  "“Our processes are still manual and it’s costing us.”",
  "“Our team spends too much time on repetitive work.”",
  "“We have AI ideas, but no real plan to implement them.”",
  "“We need an actual AI product strategy — not a slide deck.”",
];

const services = [
  "AI Opportunity Workshop",
  "AI Product Strategy",
  "Workflow Automation",
  "Product Discovery",
  "Internal AI Assistants",
  "Rapid Prototyping",
];

export default function ConsultingPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20 sm:py-28">
      <h1 className="font-serif text-4xl">
        Helping organisations move from AI curiosity to AI capability.
      </h1>

      {/* Problem */}
      <section className="mt-16">
        <h2 className="font-serif text-2xl">The Problem</h2>
        <ul className="mt-6 flex flex-wrap gap-3">
          {who.map((item) => (
            <li
              key={item}
              className="rounded-full border border-border bg-surface px-4 py-2 text-sm"
            >
              {item}
            </li>
          ))}
        </ul>
        <ul className="mt-8 space-y-4">
          {soundFamiliar.map((quote) => (
            <li
              key={quote}
              className="border-l-2 border-accent/50 pl-4 text-lg italic leading-relaxed text-muted"
            >
              {quote}
            </li>
          ))}
        </ul>
      </section>

      {/* My Process */}
      <section className="mt-20">
        <h2 className="font-serif text-2xl">My Process</h2>
        <div className="mt-10">
          <FlowSteps
            steps={[
              { icon: "🔍", label: "Discover", sublabel: "The real problem" },
              { icon: "🗺️", label: "Map", sublabel: "Where AI helps" },
              { icon: "🧪", label: "Prototype", sublabel: "Testable, fast" },
              { icon: "✅", label: "Test", sublabel: "Real users, real work" },
              { icon: "🚀", label: "Ship", sublabel: "A plan you can run" },
            ]}
          />
        </div>
      </section>

      {/* Example */}
      <section className="mt-20 rounded-2xl border border-border bg-surface p-8">
        <p className="text-sm font-medium uppercase tracking-widest text-accent">
          Example
        </p>
        <h2 className="mt-3 font-serif text-2xl">BECOME</h2>
        <p className="mt-4 leading-relaxed text-muted">
          This exact process, applied to my own idea: PRD to live AI product
          in three weeks. It&apos;s the clearest proof I have that the
          process works — I don&apos;t just advise it, I use it.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <AppScreenshot
            src="/images/become/journal-entry.png"
            width={850}
            height={1004}
            alt="BECOME journal entry with inline AI reflection"
          />
          <AppScreenshot
            src="/images/become/patterns-dark.png"
            width={572}
            height={1224}
            alt="BECOME Pattern Dashboard in dark mode"
          />
        </div>
        <div className="mt-6">
          <Button href="/proof-of-work#become" variant="secondary">
            Read the Case Study
          </Button>
        </div>
      </section>

      {/* Services */}
      <section className="mt-20">
        <h2 className="font-serif text-2xl">Services</h2>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          {services.map((service) => (
            <li
              key={service}
              className="rounded-lg border border-border bg-surface px-5 py-4"
            >
              {service}
            </li>
          ))}
        </ul>
      </section>

      <div className="mt-20">
        <Button href={site.discoveryCallMailto}>{site.ctaLabel}</Button>
      </div>
    </div>
  );
}
