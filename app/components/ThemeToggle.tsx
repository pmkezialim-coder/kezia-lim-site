"use client";

import { useSyncExternalStore } from "react";

const listeners = new Set<() => void>();

function subscribe(callback: () => void) {
  listeners.add(callback);
  return () => listeners.delete(callback);
}

function getSnapshot() {
  return document.documentElement.classList.contains("dark");
}

function getServerSnapshot() {
  return false;
}

function setDarkMode(next: boolean) {
  document.documentElement.classList.toggle("dark", next);
  localStorage.setItem("theme", next ? "dark" : "light");
  listeners.forEach((listener) => listener());
}

export default function ThemeToggle() {
  const dark = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  return (
    <button
      type="button"
      onClick={() => setDarkMode(!dark)}
      aria-label={`Switch to ${dark ? "light" : "dark"} mode`}
      className="relative flex h-7 w-[52px] shrink-0 items-center justify-between rounded-full border border-border bg-surface px-1.5 text-[10px] text-muted transition-colors"
    >
      <span aria-hidden>☀</span>
      <span aria-hidden>☾</span>
      <span
        aria-hidden
        className={`absolute top-0.5 h-5 w-5 rounded-full bg-background shadow-sm transition-transform duration-200 ${
          dark ? "translate-x-[26px]" : "translate-x-0.5"
        }`}
      />
    </button>
  );
}
