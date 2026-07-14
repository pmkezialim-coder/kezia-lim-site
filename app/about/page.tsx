import type { Metadata } from "next";
import Button from "@/app/components/Button";

export const metadata: Metadata = {
  title: "About — Kezia Lim",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20 sm:py-28">
      <h1 className="font-serif text-4xl">I Didn&apos;t Start in AI</h1>

      <div className="mt-10 space-y-6 text-lg leading-relaxed text-muted">
        <p>I started by solving operational problems.</p>
        <p>
          Across more than a decade in product and digital transformation, I
          kept running into the same pattern: teams weren&apos;t struggling
          because they lacked technology. They were struggling because their
          processes were complicated, fragmented, and hard to actually use.
          AI became the tool that finally let me fix that properly — not
          because it was new, but because it let me redesign how people
          interact with systems instead of just patching around them.
        </p>
      </div>

      <h2 className="mt-16 font-serif text-2xl">Why AI</h2>
      <p className="mt-4 text-lg leading-relaxed text-muted">
        Not because it&apos;s trending. Because it&apos;s the first real
        chance to rebuild how people and systems interact from the ground up,
        instead of adding another layer on top of the old way.
      </p>

      <h2 className="mt-16 font-serif text-2xl">Why BECOME Exists</h2>
      <div className="mt-4 space-y-6 text-lg leading-relaxed text-muted">
        <p>
          While I was helping organisations transform digitally, I noticed
          the same gap showing up in people, not just processes: most of us
          don&apos;t have a reliable way to actually understand ourselves —
          our patterns, our blind spots, what we&apos;re actually working
          toward.
        </p>
        <p>
          At 37, after years of imperfect journaling — some of it
          consistent, most of it not, mostly written on solo trips when I
          finally had the quiet to sit with a question — I found something I
          didn&apos;t expect looking back at every choice I&apos;d made: no
          regrets, and a much clearer sense of what actually makes me happy.
        </p>
        <p>
          That process is what BECOME is built from. Not theory — lived
          truth. Every design decision I make there teaches me something I
          bring straight back into consulting work: what makes people trust
          an AI, what makes them abandon it, what &quot;helpful&quot;
          actually feels like versus what it looks like on a slide.
        </p>
      </div>

      <h2 className="mt-16 font-serif text-2xl">Outside Work</h2>
      <div className="mt-4 space-y-6 text-lg leading-relaxed text-muted">
        <p>
          Outside of technology, you&apos;ll usually find me training Muay
          Thai, running, or travelling.
        </p>
        <p>
          None of that is separate from the work. Muay Thai in particular has
          hammered in the same lesson I try to apply to every product I
          build: progress comes from consistency, not from perfection. You
          don&apos;t get better by getting one session exactly right. You get
          better by showing up correctly, repeatedly, and paying attention to
          what breaks down when you&apos;re tired.
        </p>
      </div>

      <div className="mt-16">
        <Button href="/consulting">Work With Me</Button>
      </div>
    </div>
  );
}
