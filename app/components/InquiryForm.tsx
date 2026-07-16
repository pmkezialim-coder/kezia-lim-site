"use client";

import { useState } from "react";
import { site } from "@/app/lib/site";

export default function InquiryForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = `Inquiry from ${name || "your website"}`;
    const body = `${message}\n\n— ${name} (${email})`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-md text-left">
      <div>
        <label htmlFor="name" className="text-sm font-medium">
          Name
        </label>
        <input
          id="name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-accent focus-visible:ring-2 focus-visible:ring-accent/40"
        />
      </div>

      <div className="mt-5">
        <label htmlFor="email" className="text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-accent focus-visible:ring-2 focus-visible:ring-accent/40"
        />
      </div>

      <div className="mt-5">
        <label htmlFor="message" className="text-sm font-medium">
          What are you working on?
        </label>
        <textarea
          id="message"
          required
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-accent focus-visible:ring-2 focus-visible:ring-accent/40"
        />
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-colors hover:brightness-90"
      >
        Send
      </button>
      <p className="mt-3 text-xs text-muted">
        Opens your email client with this pre-filled.
      </p>
    </form>
  );
}
