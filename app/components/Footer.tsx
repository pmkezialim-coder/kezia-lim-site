import Link from "next/link";
import { nav, site } from "@/app/lib/site";
import { MailIcon, LinkedInIcon } from "@/app/components/SocialIcons";

export default function Footer() {
  return (
    <footer className="border-t border-border/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-12 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-serif text-lg">Kezia Lim</p>
          <p className="mt-1 text-sm text-muted">
            AI Product Leader. Builder. Problem Solver.
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-foreground/70">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-foreground">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={`mailto:${site.email}`}
            aria-label="Email"
            className="text-foreground/70 transition-colors hover:text-foreground"
          >
            <MailIcon />
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-foreground/70 transition-colors hover:text-foreground"
          >
            <LinkedInIcon />
          </a>
        </div>
      </div>

      <div className="border-t border-border/80 px-6 py-4 text-center text-xs text-muted">
        © {new Date().getFullYear()} Kezia Lim. All rights reserved.
      </div>
    </footer>
  );
}
