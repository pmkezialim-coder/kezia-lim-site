import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Why I Started Journaling to Find My Inner Compass — Kezia Lim",
};

export default function Post() {
  return (
    <article className="mx-auto max-w-2xl px-6 py-20 sm:py-28">
      <Link href="/insights" className="text-sm text-muted hover:text-foreground">
        ← Insights
      </Link>
      <h1 className="mt-4 font-serif text-[clamp(2.25rem,4.5vw,3.75rem)] leading-[1.05]">
        Why I Started Journaling to Find My Inner Compass
      </h1>
      <p className="mt-3 text-muted">The 37-year story behind BECOME.</p>

      <div className="mt-10 space-y-5 text-lg leading-relaxed text-muted">
        <p>At 37, I realised I&apos;d found something I wasn&apos;t even looking for.</p>
        <p>Not confidence.</p>
        <p>Not success.</p>
        <p>An inner compass.</p>
        <p>It didn&apos;t arrive in a single breakthrough moment.</p>
        <p>
          It emerged quietly through three years of journals that I
          didn&apos;t always write consistently.
        </p>
        <p>Some entries came after difficult decisions.</p>
        <p>
          Others were written alone in cafés during solo trips, simply
          trying to make sense of whatever life looked like at the time.
        </p>
        <p>When I eventually read them back, I noticed something unexpected.</p>
        <p>I wasn&apos;t reading memories anymore.</p>
        <p>I was reading patterns.</p>
        <p>The things that kept energising me.</p>
        <p>The fears that kept repeating.</p>
        <p>The decisions that quietly brought me peace.</p>
        <p>And perhaps the biggest surprise of all&hellip;</p>
        <p>I realised I had no regrets.</p>
        <p>Not because every decision had been perfect.</p>
        <p>
          But because every decision had taught me something that
          eventually led me here.
        </p>
        <p>Around the same time, I became curious about AI.</p>
        <p>
          Like many people, I asked ChatGPT questions about work,
          relationships and life.
        </p>
        <p>Some responses were genuinely useful.</p>
        <p>But I kept noticing something.</p>
        <p>An AI coach&mdash;even a good one&mdash;is still another voice.</p>
        <p>My journal never tried to answer me.</p>
        <p>
          It simply held my thoughts long enough for me to recognise my own.
        </p>
        <p>That difference became the seed for BECOME.</p>
      </div>

      <div className="mt-10 space-y-3 border-t border-border/80 pt-10">
        <p className="font-serif text-[clamp(1.25rem,2vw,1.5rem)] italic leading-relaxed">
          Not an AI that tells you who you should become.
        </p>
        <p className="font-serif text-[clamp(1.25rem,2vw,1.5rem)] italic leading-relaxed text-accent">
          A companion that helps you notice who you&apos;re already
          becoming.
        </p>
      </div>
    </article>
  );
}
