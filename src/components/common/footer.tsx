import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { navLinks, serviceGroups } from "@/data/services-menu-data";
import { ArrowUpRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const footerLinkClassName =
  "text-sm leading-relaxed text-muted-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-background rounded-sm";

export default function Footer() {
  return (
    <footer className="relative isolate overflow-hidden border-t border-border bg-background">
      {/* Subtle background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <AnimatedGridPattern
          maxOpacity={0.04}
          className="absolute inset-0 opacity-30 mask-[linear-gradient(to_bottom,black,transparent)] motion-reduce:hidden"
        />

        <div className="absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-6 pt-12 sm:px-8 sm:pt-16 lg:px-12">
        {/* Brand, company links, and contact */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_0.7fr_1fr] lg:gap-16">
          <div className="min-w-0 space-y-4 md:col-span-2 lg:col-span-1">
            <Link
              href="/"
              aria-label="Codemaven Solutions home"
              className="inline-flex rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-background"
            >
              <Image
                src="/logo-full.png"
                alt="Codemaven Solutions"
                width={300}
                height={300}
                className="h-auto w-64 max-w-full"
              />
            </Link>

            <p className="max-w-sm text-sm leading-7 text-muted-foreground">
              Websites, apps, and digital products built for your business.
              Design, automation, and marketing to help it grow.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-base font-semibold">Company</h2>

            <nav aria-label="Footer company navigation">
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <Link href={link.href} className={footerLinkClassName}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="min-w-0">
            <h2 className="mb-4 text-base font-semibold">Get in touch</h2>

            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@codemavensolutions.com"
                  className={`${footerLinkClassName} wrap-break-word`}
                >
                  hello@codemavensolutions.com
                </a>
              </li>

              <li>
                <a href="tel:+923147257787" className={footerLinkClassName}>
                  +92 314 7257787
                </a>
              </li>

              <li className="pt-2">
                <Link
                  href="https://cal.com/codemavensolutions/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-sm text-sm font-medium text-primary transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-background"
                >
                  Book a call
                  <ArrowUpRightIcon aria-hidden="true" className="size-4" />
                  <span className="sr-only">(opens in a new tab)</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Services grouped to match the main navigation */}
        <div className="mt-10 pt-8 sm:mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-16">
            {serviceGroups.map((group) => (
              <div key={group.title}>
                <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-foreground">
                  {group.title}
                </h2>

                <nav aria-label={`Footer: ${group.title.toLowerCase()}`}>
                  <ul className="space-y-3">
                    {group.services.map((service) => (
                      <li key={service.href}>
                        <Link
                          href={service.href}
                          className={footerLinkClassName}
                        >
                          {service.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 pt-6">
          <p className="text-center text-xs leading-relaxed text-muted-foreground">
            &copy; {new Date().getFullYear()} Codemaven Solutions. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
