import type { Metadata } from "next";
import Link from "next/link";
import Todo from "@/app/components/Todo";

export const metadata: Metadata = {
  title: "Three Weeks From PRD to Live — Kezia Lim",
};

export default function Post() {
  return (
    <article className="mx-auto max-w-2xl px-6 py-20 sm:py-28">
      <Link href="/insights" className="text-sm text-muted hover:text-foreground">
        ← Insights
      </Link>
      <h1 className="mt-4 font-serif text-4xl">Three Weeks From PRD to Live</h1>
      <p className="mt-3 text-muted">
        What shipping BECOME solo taught me about my own pace.
      </p>
      <div className="mt-10">
        <Todo>full post text — will come from become-behind-the-scenes-posts.md</Todo>
      </div>
    </article>
  );
}
