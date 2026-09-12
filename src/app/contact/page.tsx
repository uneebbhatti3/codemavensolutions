import type { Metadata } from "next";

import {
  ArrowUpRightIcon,
  CalendarIcon,
  CheckIcon,
} from "lucide-react";

import {
  HeroSequence,
  Reveal,
  RevealLeft,
  RevealRight,
} from "@/components/animations/motion";

import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import Link from "next/link";
import { ContactForm } from "@/features/contact/components/contact-form";
import { bookingUrl, container, eyebrow, textLink } from "@/data/data";

const title = "Contact Codemaven Solutions | Start Your Project";

const description =
  "Tell Codemaven Solutions about your website, mobile app, SaaS product, AI automation, design, SEO, or digital marketing project.";

export const metadata: Metadata = {
  title: {
    absolute: title,
  },

  description,

  alternates: {
    canonical: "/contact",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Codemaven Solutions",
    url: "/contact",
    title,
    description,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Start a project with Codemaven Solutions",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.png"],
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section
        aria-labelledby="contact-hero-heading"
        className="relative isolate overflow-hidden border-b border-border"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
        >
          <AnimatedGridPattern
            maxOpacity={0.045}
            className="absolute inset-0 h-full w-full opacity-40 mask-[radial-gradient(ellipse_at_70%_30%,black,transparent_75%)] motion-reduce:hidden"
          />

          <div className="absolute right-0 top-0 size-96 rounded-full bg-primary/5 blur-3xl" />
        </div>

        <div className={`${container} pb-14 pt-20 sm:pt-28 lg:pt-36`}>
          <div className="grid gap-14 lg:grid-cols-[1.4fr_0.6fr] lg:items-end lg:gap-16">
            <div>
              <HeroSequence delay={0.05}>
                <p className={eyebrow}>Start a conversation</p>
              </HeroSequence>

              <h1
                id="contact-hero-heading"
                className="mt-7 max-w-5xl text-4xl font-medium leading-[1.06] tracking-[-0.045em] sm:text-6xl lg:text-7xl"
              >
                Tell us what you&apos;re trying to
                <span className="text-primary"> move forward.</span>
              </h1>

              <HeroSequence delay={0.12}>
                <p className="mt-8 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
                  You do not need a finished specification. Tell us what exists
                  today, what needs to change, and where you want the project to
                  go. We use that context to understand the problem before
                  discussing the solution.
                </p>
              </HeroSequence>
            </div>

            <HeroSequence delay={0.2}>
              <div className="border-l-2 border-primary/40 py-2 pl-6">
                <p className={eyebrow}>Prefer a conversation?</p>

                <p className="mt-5 text-xl font-medium leading-relaxed tracking-tight">
                  If explaining the project is easier in conversation, start
                  with a 30-minute call.
                </p>

                <Link
                  href={bookingUrl}
                  className={`${textLink} mt-5`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Book a call
                  <ArrowUpRightIcon aria-hidden="true" className="size-4" />
                </Link>
              </div>
            </HeroSequence>
          </div>
        </div>
      </section>

      {/* Project brief */}
      <section
        aria-labelledby="project-brief-heading"
        className="py-20 sm:py-28"
      >
        <div
          className={`${container} grid gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20`}
        >
          {/* Sticky intro */}
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <p className={eyebrow}>Project brief</p>

              <h2
                id="project-brief-heading"
                className="mt-5 max-w-md text-3xl font-medium leading-tight tracking-tight sm:text-4xl"
              >
                Give us the context we would normally ask for on the first call.
              </h2>

              <p className="mt-6 max-w-md text-sm leading-7 text-muted-foreground">
                These questions help us understand the business problem, your
                current setup, and the outcome you are working toward. You do
                not need to have every answer figured out.
              </p>

              <div className="mt-8 border-t border-border pt-7">
                <div className="flex items-start gap-3">
                  <CheckIcon
                    aria-hidden="true"
                    className="mt-1 size-4 shrink-0 text-primary"
                  />

                  <p className="text-sm leading-7 text-muted-foreground">
                    Share what you know. Uncertain answers can be worked through
                    later.
                  </p>
                </div>

                <div className="mt-4 flex items-start gap-3">
                  <CheckIcon
                    aria-hidden="true"
                    className="mt-1 size-4 shrink-0 text-primary"
                  />

                  <p className="text-sm leading-7 text-muted-foreground">
                    The goal is useful context, not a perfect requirements
                    document.
                  </p>
                </div>
              </div>

              <div className="mt-8 border-t border-border pt-7">
                <p className={eyebrow}>Rather talk it through?</p>

                <Link
                  href={bookingUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={`${textLink} mt-3`}
                >
                  <CalendarIcon aria-hidden="true" className="size-4" />
                  Book a 30-minute call
                  <ArrowUpRightIcon aria-hidden="true" className="size-4" />
                </Link>
              </div>
            </aside>

          {/* Form UI */}
           <ContactForm/>
        </div>
      </section>

      {/* Alternative route */}
      <section
        aria-labelledby="contact-call-heading"
        className="border-t border-border pb-16 pt-20 sm:pb-24 sm:pt-28"
      >
        <div className={container}>
          <Reveal>
            <div className="grid gap-10 border-y border-border py-10 sm:py-14 lg:grid-cols-[1.25fr_0.75fr] lg:items-center lg:gap-20">
              <div>
                <p className={eyebrow}>Prefer to talk it through?</p>

                <h2
                  id="contact-call-heading"
                  className="mt-5 max-w-2xl text-3xl font-medium leading-tight tracking-tight sm:text-4xl"
                >
                  Some projects are easier to explain in conversation.
                </h2>

                <p className="mt-5 max-w-xl text-sm leading-7 text-muted-foreground">
                  Book a 30-minute call and walk us through what exists today,
                  what you are considering, and where you want to get to.
                </p>
              </div>

              <div className="lg:flex lg:justify-end">
                <a
                  href={bookingUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-background"
                >
                  Book a 30-minute call
                  <ArrowUpRightIcon aria-hidden="true" className="size-4" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
