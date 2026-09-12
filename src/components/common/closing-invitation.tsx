import Link from "next/link";
import { ScaleIn } from "../animations/motion";
import { ArrowRightIcon, ArrowUpRightIcon } from "lucide-react";
import { bookingUrl, container } from "@/data/data";

interface ClosingInvitationProps {
  title: string;
  heading: string;
  content: string;
}

export default function ClosingInvitation({
  title,
  heading,
  content,
}: ClosingInvitationProps) {
  return (
    <>
      <section aria-labelledby="contact-heading" className="pb-16 sm:pb-24">
        <div className={container}>
          <ScaleIn>
            <div className="relative isolate overflow-hidden rounded-3xl bg-primary px-7 py-12 text-primary-foreground sm:px-12 sm:py-16">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-20 -top-32 -z-10 size-96 rounded-full border border-white/15"
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-56 -right-40 -z-10 size-128 rounded-full border border-white/10"
              />

              <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-end lg:gap-16">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white">
                    {title}
                  </p>

                  <h2
                    id="contact-heading"
                    className="mt-6 max-w-2xl text-2xl font-medium leading-tight tracking-tight sm:text-5xl text-white"
                  >
                    {heading}
                  </h2>

                  <p className="mt-6 max-w-xl text-sm md:text-base leading-8 text-white">
                    {content}
                  </p>
                </div>

                <div className="flex flex-col items-start gap-4">
                  <Link
                    href={bookingUrl}
                    className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-background px-6 py-3 text-sm font-medium text-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-primary"
                  >
                    Book a 30-minute call
                    <ArrowUpRightIcon aria-hidden="true" className="size-4" />
                  </Link>

                  <Link
                    href="/contact"
                    className="inline-flex min-h-11 items-center gap-2 rounded-sm text-sm text-white underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    Send your project details
                    <ArrowRightIcon aria-hidden="true" className="size-4" />
                  </Link>
                </div>
              </div>
            </div>
          </ScaleIn>
        </div>
      </section>
    </>
  );
}
