"use client";

import { useEffect } from "react";
import Image from "next/image";

type Shot = {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption?: string;
};

export default function Lightbox({
  shots,
  index,
  onClose,
  onNavigate,
}: {
  shots: Shot[];
  index: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}) {
  const shot = shots[index];
  const hasPrev = index > 0;
  const hasNext = index < shots.length - 1;

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && hasPrev) onNavigate(index - 1);
      if (e.key === "ArrowRight" && hasNext) onNavigate(index + 1);
    }
    window.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [index, hasPrev, hasNext, onClose, onNavigate]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 sm:p-10"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={shot.alt}
    >
      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-lg text-white transition-colors hover:bg-white/20"
      >
        ✕
      </button>

      {hasPrev && (
        <button
          type="button"
          aria-label="Previous image"
          onClick={(e) => {
            e.stopPropagation();
            onNavigate(index - 1);
          }}
          className="absolute left-2 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-xl text-white transition-colors hover:bg-white/20 sm:left-6"
        >
          ←
        </button>
      )}

      {hasNext && (
        <button
          type="button"
          aria-label="Next image"
          onClick={(e) => {
            e.stopPropagation();
            onNavigate(index + 1);
          }}
          className="absolute right-2 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-xl text-white transition-colors hover:bg-white/20 sm:right-6"
        >
          →
        </button>
      )}

      <div
        className="flex max-h-full max-w-full flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={shot.src}
          width={shot.width}
          height={shot.height}
          alt={shot.alt}
          className="max-h-[78vh] w-auto rounded-lg object-contain"
          priority
        />
        {shot.caption && (
          <p className="mt-4 max-w-md text-center text-sm text-white/80">
            {shot.caption}
          </p>
        )}
        {shots.length > 1 && (
          <p className="mt-2 text-xs text-white/50">
            {index + 1} / {shots.length}
          </p>
        )}
      </div>
    </div>
  );
}
