export const dynamic = "auto";

import { siteConfig } from "@/config/site";
import Link from "next/link";

export async function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background/95 backdrop-blur py-6">
      <div className="container-wrapper">
        <div className="container flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="text-sm text-muted-foreground">
            <span className="font-medium text-foreground">{siteConfig.name}</span>
            <span className="text-muted-foreground"> © {year}</span>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-sm">
            <Link
              href={siteConfig.links.resume}
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Resume
            </Link>

            <Link
              href={siteConfig.links.email}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Email
            </Link>

            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              GitHub
            </Link>
          </div>

          <div className="text-xs text-muted-foreground">
            Built with <span className="font-medium text-foreground">Next.js</span> · Deployed on
            <span className="font-medium text-foreground"> Vercel</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
