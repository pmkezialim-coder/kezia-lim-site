import Link from "next/link";
import { nav, site } from "@/app/lib/site";
import { MailIcon, LinkedInIcon } from "@/app/components/SocialIcons";

export default function Footer() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-14 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-serif text-xl">Kezia Lim</p>
          <p className="mt-1 text-sm text-ink-foreground/60">
            AI Product Leader · Builder · Problem Solver
          </p>
          <p className="mt-1 text-sm text-ink-foreground/60">
            Singapore · Working across Southeast Asia
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-foreground/70">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-ink-foreground">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`mailto:${site.email}`}
            aria-label="Email"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-ink-foreground/25 text-ink-foreground/70 transition-colors hover:border-ink-foreground/50 hover:text-ink-foreground"
          >
            <MailIcon className="h-4 w-4" />
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-ink-foreground/25 text-ink-foreground/70 transition-colors hover:border-ink-foreground/50 hover:text-ink-foreground"
          >
            <LinkedInIcon className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="border-t border-ink-foreground/15 px-6 py-4 text-center text-xs text-ink-foreground/50">
        © {new Date().getFullYear()} Kezia Lim. All rights reserved.
      </div>
    </footer>
  );
}
