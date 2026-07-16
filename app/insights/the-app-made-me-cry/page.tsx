import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The App Made Me Cry — Kezia Lim",
};

export default function Post() {
  return (
    <article className="mx-auto max-w-2xl px-6 py-20 sm:py-28">
      <Link href="/insights" className="text-sm text-muted hover:text-foreground">
        ← Insights
      </Link>
      <h1 className="mt-4 font-serif text-4xl">The App Made Me Cry</h1>
      <p className="mt-3 text-muted">
        What two days of debugging the Inner Compass taught me about rest.
      </p>

      <div className="mt-10 space-y-5 text-lg leading-relaxed text-muted">
        <p>A few weeks ago, I spent two evenings debugging one feature.</p>
        <p>The Inner Compass.</p>
        <p>The first night ended with ten failed attempts.</p>
        <p>
          A few years ago, I would have kept pushing until midnight simply
          because I didn&apos;t want to stop.
        </p>
        <p>This time I closed my laptop.</p>
        <p>Went to sleep.</p>
        <p>Trusted that tomorrow would be better.</p>
        <p>
          After work the next evening, I came home, took a shower, made a
          coffee and opened the laptop again.
        </p>
        <p>Within an hour&hellip;</p>
        <p>It worked.</p>
        <p>Then I did what every product builder should do.</p>
        <p>I tested it on myself.</p>
        <p>
          I read what the Inner Compass had written after weeks of my own
          journal entries.
        </p>
        <p>And I cried.</p>
        <p>Not because the AI sounded intelligent.</p>
        <p>Not because it generated beautiful words.</p>
        <p>
          Because it recognised patterns I hadn&apos;t consciously
          connected myself.
        </p>
        <p>
          That was the moment I knew I wasn&apos;t building another
          journaling app.
        </p>
        <p>
          I was building something capable of helping people recognise
          themselves a little more clearly.
        </p>
        <p>As a product builder, we often celebrate shipping.</p>
        <p>For me, this was different.</p>
        <p>The real milestone wasn&apos;t that the feature worked.</p>
        <p>It was that it felt genuinely helpful.</p>
      </div>

      <div className="mt-10 border-t border-border/80 pt-10">
        <p className="font-serif text-xl italic text-accent sm:text-2xl">
          That&apos;s the standard I now want every AI product I build to
          reach.
        </p>
      </div>
    </article>
  );
}
