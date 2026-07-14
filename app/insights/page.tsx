import type { Metadata } from "next";
import Link from "next/link";
import { insightsPosts } from "@/app/lib/site";

export const metadata: Metadata = {
  title: "Insights — Kezia Lim",
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
  return (
    <div className="mx-auto max-w-3xl px-6 py-20 sm:py-28">
      <h1 className="font-serif text-4xl">Insights</h1>
      <p className="mt-4 text-lg leading-relaxed text-muted">
        Founder-diary voice — short, specific, honest. Lessons and
        observations, not advice-dispensing.
      </p>

      <div className="mt-12 divide-y divide-border">
        {insightsPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/insights/${post.slug}`}
            className="block py-6 first:pt-0"
          >
            <h2 className="font-serif text-2xl group-hover:text-accent">
              {post.title}
            </h2>
            <p className="mt-2 text-muted">{post.teaser}</p>
          </Link>
        ))}
      </div>

      <section className="mt-16 border-t border-border/80 pt-12">
        <h2 className="font-serif text-2xl">More Topics, Coming Soon</h2>
        <ul className="mt-6 space-y-3 text-muted">
          {moreTopics.map((topic) => (
            <li key={topic} className="flex gap-3">
              <span className="text-accent">—</span>
              <span>{topic}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
