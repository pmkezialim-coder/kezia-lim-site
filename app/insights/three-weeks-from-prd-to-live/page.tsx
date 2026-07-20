import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Three Weeks From PRD to Live — Kezia Lim",
};

export default function Post() {
  return (
    <article className="mx-auto max-w-2xl px-6 py-20 sm:py-28">
      <Link href="/insights" className="text-sm text-muted hover:text-foreground">
        ← Insights
      </Link>
      <h1 className="mt-4 font-serif text-[clamp(2.25rem,4.5vw,3.75rem)] leading-[1.05]">Three Weeks From PRD to Live</h1>
      <p className="mt-3 text-muted">
        What shipping BECOME solo taught me about my own pace.
      </p>

      <div className="mt-10 space-y-5 text-lg leading-relaxed text-muted">
        <p>Three weeks ago, BECOME existed as a Product Requirements Document.</p>
        <p>Today, it&apos;s a real product.</p>
        <p>People often ask how long it took.</p>
        <p>Three weeks.</p>
        <p>But that&apos;s only true if you ignore the previous ten years.</p>
        <p>The product may have been built in three weeks.</p>
        <p>The problem had been quietly forming for much longer.</p>
        <p>Years of journaling.</p>
        <p>Years of building digital products.</p>
        <p>
          Years of watching people struggle to understand themselves while
          helping organisations redesign how people interact with
          technology.
        </p>
        <p>BECOME brought those experiences together.</p>
        <p>It wasn&apos;t built by rushing.</p>
        <p>It was built because the thinking had already been happening for years.</p>
        <p>Most of the work happened after my full-time job.</p>
        <p>Evenings.</p>
        <p>Weekends.</p>
        <p>Small pockets of time.</p>
        <p>Not because I wanted to prove I could move quickly.</p>
        <p>Because I finally had something that mattered enough to build.</p>
        <p>The biggest surprise wasn&apos;t launching the product.</p>
        <p>It was what happened afterwards.</p>
        <p>I didn&apos;t stop using it.</p>
        <p>Today, BECOME has become part of my own routine.</p>
        <p>
          I&apos;ve written 53 journal entries into the app&mdash;not as a
          founder testing features, but as someone continuing the same
          practice that inspired it in the first place.
        </p>
        <p>That matters to me.</p>
        <p>I never wanted to build a product I only demonstrated in presentations.</p>
        <p>
          I wanted to build one I&apos;d genuinely reach for after a long
          day, during a solo trip, or when I needed to make sense of
          something life had placed in front of me.
        </p>
      </div>

      <div className="mt-10 space-y-3 border-t border-border/80 pt-10">
        <p className="font-serif text-[clamp(1.25rem,2vw,1.5rem)] italic leading-relaxed">
          Sometimes the product you&apos;re building also reshapes the
          person building it.
        </p>
        <p className="font-serif text-[clamp(1.25rem,2vw,1.5rem)] italic leading-relaxed text-accent">
          And for me, that&apos;s the clearest sign that BECOME is
          becoming what I hoped it could be.
        </p>
      </div>
    </article>
  );
}
