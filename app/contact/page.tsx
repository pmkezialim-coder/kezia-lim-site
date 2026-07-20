import type { Metadata } from "next";
import Button from "@/app/components/Button";
import InquiryForm from "@/app/components/InquiryForm";
import { MailIcon, LinkedInIcon } from "@/app/components/SocialIcons";
import { site } from "@/app/lib/site";

export const metadata: Metadata = {
  title: "Contact — Kezia Lim",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-24 text-center sm:py-32">
      <h1 className="font-serif text-4xl sm:text-5xl">Let&apos;s Build Something Meaningful</h1>
      <p className="mt-6 text-lg leading-relaxed text-muted">
        Whether you&apos;re exploring AI adoption, building a product, or
        just want a fresh perspective on digital transformation — I&apos;d
        love to hear your story.
      </p>

      <div className="mt-10">
        <Button href={site.discoveryCallMailto}>{site.ctaLabel}</Button>
      </div>

      <div className="mt-12 flex items-center justify-center gap-3">
        <a
          href={`mailto:${site.email}`}
          aria-label="Email"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground/70 transition-colors hover:border-foreground/40 hover:text-foreground"
        >
          <MailIcon />
        </a>
        <a
          href={site.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground/70 transition-colors hover:border-foreground/40 hover:text-foreground"
        >
          <LinkedInIcon />
        </a>
      </div>

      <InquiryForm />
    </div>
  );
}
