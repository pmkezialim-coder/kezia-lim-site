import type { Metadata } from "next";
import Button from "@/app/components/Button";
import FlowSteps from "@/app/components/FlowSteps";
import ImageCopySplit from "@/app/components/ImageCopySplit";
import { site } from "@/app/lib/site";

export const metadata: Metadata = {
  title: "About — Kezia Lim",
};

const career = [
  { icon: "🏭", label: "ERP" },
  { icon: "🏠", label: "Property Tech" },
  { icon: "🌏", label: "Regional Product" },
  { icon: "🤖", label: "Enterprise AI" },
  { icon: "🏛️", label: "Government" },
  { icon: "🧭", label: "BECOME" },
];

export default function AboutPage() {
  return (
    <>
      {/* Opening statement */}
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-16 sm:pt-28">
        <h1 className="font-serif text-[clamp(2.25rem,4.5vw,3.75rem)] leading-[1.05]">
          I didn&apos;t start in AI. I started by solving operational
          problems.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
          Teams weren&apos;t struggling because they lacked technology. They
          were struggling because their processes were fragmented and hard
          to use. AI became the tool that let me redesign how people
          interact with systems, instead of just patching around them.
        </p>
      </section>

      {/* Career timeline */}
      <section className="border-t border-border/80 bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="text-sm font-medium uppercase tracking-widest text-muted">
            14+ Years
          </p>
          <div className="mt-8">
            <FlowSteps steps={career} />
          </div>
        </div>
      </section>

      {/* Why I build this way */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <ImageCopySplit
          eyebrow="Why AI"
          title="Why I build this way"
          body="Not because it's trending. Because it's the first real chance to rebuild how people and systems interact from the ground up, instead of adding another layer on top of the old way."
          assetName="product-notes-sketches.jpg"
          imageDescription="Hands sketching a product flow on paper, desk overhead angle"
          imageAspect="video"
          imageSrc="/images/become/product-notes-sketches.jpg"
          imageWidth={1536}
          imageHeight={1024}
        />
      </section>

      {/* BECOME founder story */}
      <section className="border-t border-border/80 bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <ImageCopySplit
            eyebrow="Why BECOME Exists"
            title="Built from lived truth, not theory"
            body="At 37, after years of imperfect journaling, I found something I didn't expect: no regrets, and a much clearer sense of what actually makes me happy. Every decision in BECOME teaches me something I bring back into client work."
            assetName="solo-trip-journaling-notebook.jpg"
            imageDescription="Notebook and coffee on a table, travel setting, no visible face"
            imageAspect="video"
            imageSrc="/images/become/solo-trip-journaling-notebook.jpg"
            imageWidth={1672}
            imageHeight={941}
            reverse
          />
        </div>
      </section>

      {/* Personal discipline */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <ImageCopySplit
          eyebrow="Outside Work"
          title="Muay Thai, running, and consistency"
          body="Progress comes from consistency, not perfection. You don't get better by getting one session exactly right — you get better by showing up repeatedly, and paying attention to what breaks down when you're tired. The same lesson applies to every product I build."
          assetName="muay-thai-wraps-running-shoes-desk.jpg"
          imageDescription="Muay Thai hand wraps and running shoes beside a work desk"
          imageAspect="video"
          imageSrc="/images/become/muay-thai-wraps-running-shoes-desk.jpg"
          imageWidth={1536}
          imageHeight={1024}
        />
      </section>

      {/* Current focus */}
      <section className="border-t border-border/80 bg-surface">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center">
          <p className="font-serif text-[clamp(1.25rem,2vw,1.5rem)] italic leading-relaxed">
            Right now: growing BECOME, and bringing what it teaches me
            straight into client work.
          </p>
          <div className="mt-10">
            <Button href="/consulting">{site.workWithMeLabel}</Button>
          </div>
        </div>
      </section>
    </>
  );
}
