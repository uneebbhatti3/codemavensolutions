import type { Metadata } from "next";
import Link from "next/link";

import {
  ArrowUpRightIcon,
  BotIcon,
  Code2Icon,
  MegaphoneIcon,
  PaletteIcon,
} from "lucide-react";

import {
  HeroSequence,
  Reveal,
  RevealLeft,
  RevealRight,
  Stagger,
  StaggerItem,
} from "@/components/animations/motion";

import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { Testimonials } from "@/components/common/testimonials";
import { testimonials } from "@/data/testimonials";
import { container, eyebrow, primaryButton } from "@/data/data";
import ClosingInvitation from "@/components/common/closing-invitation";

const title = "About Codemaven Solutions | Development, Design & Growth";

const description =
  "Learn how Codemaven Solutions approaches software development, UI/UX design, AI automation, SEO, and digital marketing with a business-first focus.";

export const metadata: Metadata = {
  title: {
    absolute: title,
  },

  description,

  alternates: {
    canonical: "/about",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Codemaven Solutions",
    url: "/about",
    title,
    description,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "About Codemaven Solutions",
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

const principles = [
  {
    number: "01",
    title: "Understand before proposing.",
    description:
      "We first understand what is happening today, what needs to improve, and what constraints the project has before deciding what should be built.",
  },
  {
    number: "02",
    title: "Keep the scope connected to the goal.",
    description:
      "Features, pages, campaigns, and automations earn their place by contributing to the outcome, not because they belong on a standard checklist.",
  },
  {
    number: "03",
    title: "Make decisions visible.",
    description:
      "We explain the reasoning behind important technical, design, and marketing decisions so you understand what is being done and why.",
  },
  {
    number: "04",
    title: "Build for what happens after launch.",
    description:
      "Delivery is not the finish line. We consider how the product will be maintained, how customers will find it, and what the business may need next.",
  },
];

const disciplines = [
  {
    icon: Code2Icon,
    title: "Development",
    items: ["Websites", "Mobile Apps", "SaaS Products"],
  },
  {
    icon: PaletteIcon,
    title: "Design",
    items: ["UI/UX Design", "Product Interfaces", "Digital Creative"],
  },
  {
    icon: BotIcon,
    title: "Automation",
    items: ["AI Agents", "Workflow Automation", "Business Integrations"],
  },
  {
    icon: MegaphoneIcon,
    title: "Growth",
    items: ["SEO", "Social Media", "Digital Marketing"],
  },
];

const standards = [
  {
    title: "Practical over impressive.",
    description:
      "We prefer a solution that works reliably for the business over one that is technically impressive but unnecessarily complex.",
  },
  {
    title: "Progress you can see.",
    description:
      "Projects are broken into defined stages with opportunities to review the work while decisions can still be made, not only after delivery.",
  },
  {
    title: "Honest recommendations.",
    description:
      "If something does not need to be rebuilt, automated, redesigned, or added, we would rather say that than increase the scope without a reason.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section
        aria-labelledby="about-hero-heading"
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
          <div className="grid gap-14 lg:grid-cols-[1.45fr_0.55fr] lg:items-end lg:gap-16">
            <div>
              <HeroSequence delay={0.05}>
                <p className={eyebrow}>About Codemaven Solutions</p>
              </HeroSequence>

              <h1
                id="about-hero-heading"
                className="mt-7 max-w-5xl text-4xl font-medium leading-[1.06] tracking-[-0.045em] sm:text-6xl lg:text-7xl"
              >
                Good digital work starts with understanding
                <span className="text-primary"> what needs to change.</span>
              </h1>

              <HeroSequence delay={0.12}>
                <p className="mt-8 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
                  Codemaven Solutions is a digital product and growth company
                  helping businesses turn ideas, operational problems, and
                  growth plans into work people can actually use.
                </p>
              </HeroSequence>
            </div>

            <HeroSequence delay={0.2}>
              <div className="border-l-2 border-primary/40 py-2 pl-6">
                <p className={eyebrow}>How we work</p>

                <p className="mt-5 text-xl font-medium leading-relaxed tracking-tight">
                  Development, design, automation, and growth stay connected
                  when the problem calls for more than one discipline.
                </p>
              </div>
            </HeroSequence>
          </div>
        </div>
      </section>

      {/* Why Codemaven exists */}
      <section aria-labelledby="why-heading" className="py-20 sm:py-28">
        <div
          className={`${container} grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20`}
        >
          <RevealLeft>
            <div>
              <p className={eyebrow}>01 / Why Codemaven exists</p>

              <h2
                id="why-heading"
                className="mt-5 max-w-xl text-3xl font-medium leading-tight tracking-tight sm:text-5xl"
              >
                The technology is only useful when it solves the right problem.
              </h2>
            </div>
          </RevealLeft>

          <RevealRight>
            <div className="space-y-6 text-base leading-8 text-muted-foreground">
              <p>
                A website can look polished and still leave customers unsure
                what to do next. An application can have dozens of features and
                still make the underlying workflow harder. An automation can
                save time in one place while creating problems somewhere else.
              </p>

              <p>
                That is why our work does not begin with a framework, a design
                trend, or a predefined package.
              </p>

              <p>
                It begins with understanding the business, the people using the
                solution, and the outcome the work is expected to create.
              </p>
            </div>
          </RevealRight>
        </div>
      </section>

      {/* Principles */}
      <section
        aria-labelledby="principles-heading"
        className="border-y border-border bg-muted/25 py-20 sm:py-28"
      >
        <div className={container}>
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <RevealLeft>
              <div>
                <p className={eyebrow}>02 / How we think</p>

                <h2
                  id="principles-heading"
                  className="mt-5 max-w-xl text-3xl font-medium leading-tight tracking-tight sm:text-5xl"
                >
                  We work backwards from the outcome.
                </h2>
              </div>
            </RevealLeft>

            <RevealRight>
              <p className="max-w-lg text-base leading-8 text-muted-foreground">
                The work becomes clearer when every decision can be traced back
                to the reason the project exists in the first place.
              </p>
            </RevealRight>
          </div>

          <Stagger className="mt-14 grid gap-x-12 gap-y-12 md:grid-cols-2">
            {principles.map((item) => (
              <StaggerItem key={item.number}>
                <article className="border-t border-border pt-6">
                  <span className="font-mono text-sm text-primary">
                    {item.number}
                  </span>

                  <h3 className="mt-5 text-2xl font-medium tracking-tight">
                    {item.title}
                  </h3>

                  <p className="mt-3 max-w-lg text-sm leading-7 text-muted-foreground">
                    {item.description}
                  </p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Connected disciplines */}
      <section aria-labelledby="disciplines-heading" className="py-20 sm:py-28">
        <div className={container}>
          <Reveal>
            <p className={eyebrow}>03 / Connected disciplines</p>
          </Reveal>

          <div className="mt-5 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
            <RevealLeft>
              <h2
                id="disciplines-heading"
                className="max-w-3xl text-3xl font-medium leading-tight tracking-tight sm:text-5xl"
              >
                Some problems do not fit neatly into one service.
              </h2>
            </RevealLeft>

            <RevealRight>
              <p className="text-base leading-8 text-muted-foreground">
                A marketing campaign performs better when the destination
                communicates clearly. A SaaS product depends on both the system
                behind it and the interface people use. An AI workflow only
                creates value when it fits the way the business actually
                operates.
              </p>
            </RevealRight>
          </div>

          <Stagger className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {disciplines.map((item) => (
              <StaggerItem key={item.title}>
                <article className="h-full border-t border-border pt-6 transition-transform duration-300 ease-out md:hover:-translate-y-1">
                  <item.icon
                    aria-hidden="true"
                    className="size-6 text-primary"
                    strokeWidth={1.5}
                  />

                  <h3 className="mt-5 text-xl font-medium tracking-tight">
                    {item.title}
                  </h3>

                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    {item.items.map((entry) => (
                      <li key={entry}>{entry}</li>
                    ))}
                  </ul>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Standards */}
      <section
        aria-labelledby="standards-heading"
        className="border-y border-border bg-muted/25 py-20 sm:py-28"
      >
        <div className={container}>
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <RevealLeft>
              <div>
                <p className={eyebrow}>04 / What you can expect</p>

                <h2
                  id="standards-heading"
                  className="mt-5 max-w-xl text-3xl font-medium leading-tight tracking-tight sm:text-5xl"
                >
                  Clear work. Clear communication. No unnecessary complexity.
                </h2>
              </div>
            </RevealLeft>

            <Stagger className="border-t border-border">
              {standards.map((item) => (
                <StaggerItem key={item.title}>
                  <article className="border-b border-border py-7">
                    <h3 className="text-xl font-medium tracking-tight">
                      {item.title}
                    </h3>

                    <p className="mt-3 max-w-xl text-sm leading-7 text-muted-foreground">
                      {item.description}
                    </p>
                  </article>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      <Testimonials testimonials={testimonials} />

      {/* Work bridge */}
      <section
        aria-labelledby="work-heading"
        className="border-t border-border py-20 sm:py-28"
      >
        <div className={container}>
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-20">
            <RevealLeft>
              <div>
                <p className={eyebrow}>05 / See the work itself</p>

                <h2
                  id="work-heading"
                  className="mt-5 max-w-3xl text-3xl font-medium leading-tight tracking-tight sm:text-5xl"
                >
                  The work says more than an introduction can.
                </h2>
              </div>
            </RevealLeft>

            <RevealRight>
              <div>
                <p className="text-base leading-8 text-muted-foreground">
                  Explore the businesses, products, and operational problems we
                  have worked on, and how each project moved from requirement to
                  working solution.
                </p>

                <Link href="/work" className={`${primaryButton} mt-7`}>
                  Explore our work
                  <ArrowUpRightIcon aria-hidden="true" className="size-4" />
                </Link>
              </div>
            </RevealRight>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <ClosingInvitation
        title="Ready to talk about the work?"
        heading="If the way we work makes sense to you, let's talk about the
                    work itself."
        content="Tell us where your business is today, what you are trying to
                    change, and what you have already considered. We can take it
                    from there."
      />
    </>
  );
}
