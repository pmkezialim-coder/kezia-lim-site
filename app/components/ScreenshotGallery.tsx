"use client";

import { useState } from "react";
import AppScreenshot from "@/app/components/AppScreenshot";
import Lightbox from "@/app/components/Lightbox";

type Shot = {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption?: string;
};

export default function ScreenshotGallery({
  shots,
  fit = "natural",
  className = "grid gap-4 sm:grid-cols-3",
}: {
  shots: Shot[];
  fit?: "natural" | "contain";
  className?: string;
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      <div className={className}>
        {shots.map((shot, i) => (
          <button
            key={shot.src}
            type="button"
            onClick={() => setActiveIndex(i)}
            aria-label={`Open full size: ${shot.alt}`}
            className="cursor-zoom-in text-left transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 rounded-2xl"
          >
            <AppScreenshot {...shot} fit={fit} />
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <Lightbox
          shots={shots}
          index={activeIndex}
          onClose={() => setActiveIndex(null)}
          onNavigate={setActiveIndex}
        />
      )}
    </>
  );
}
