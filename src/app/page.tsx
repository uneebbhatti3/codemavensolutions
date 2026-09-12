import type { Metadata } from "next";
import Link from "next/link";

import { ArrowDownIcon, ArrowRightIcon, ArrowUpRightIcon } from "lucide-react";

import {
  HeroSequence,
  MotionLi,
  MotionOl,
  Reveal,
  RevealLeft,
  RevealRight,
  Stagger,
  StaggerItem,
} from "@/components/animations/motion";

import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { Button } from "@/components/ui/button";
import ClosingInvitation from "@/components/common/closing-invitation";
import {
  businessNeeds,
  capabilities,
  faqs,
  process,
} from "@/features/home/data/home-data";
import {
  bookingUrl,
  container,
  eyebrow,
  primaryButton,
  textLink,
} from "@/data/data";
import { Testimonials } from "@/components/common/testimonials";
import { testimonials } from "@/data/testimonials";

const title =
  "Codemaven Solutions | Custom Software Development, AI Automation, Web Design & Digital Marketing Agency";

const description =
  "Codemaven Solutions is a leading software development and digital marketing agency specializing in custom web and mobile app development, SaaS solutions, AI workflow automation, UX/UI design, SEO strategies, content marketing, and multi-channel digital campaigns. Partner with us to elevate your business with tailor-made technology, drive growth through seamless automation, and attract customers with proven online marketing and innovation. Discover expert web development, brand-building, digital transformation, and measurable results for startups, SMBs, and established companies.";

export const metadata: Metadata = {
  title: {
    absolute: title,
  },

  description,

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Codemaven Solutions",
    url: "/",
    title,
    description,

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Codemaven Solutions — Development, Design & Digital Marketing",
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

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section
        aria-labelledby="hero-heading"
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

        <div className={`${container} pb-10 pt-20 sm:pt-28 lg:pt-36`}>
          <div className="grid gap-14 lg:grid-cols-[1.5fr_0.65fr] lg:items-end lg:gap-16">
            <div>
              <HeroSequence delay={0.05}>
                <p className={eyebrow}>
                  Software development, design & digital marketing
                </p>
              </HeroSequence>

              <h1
                id="hero-heading"
                className="mt-7 max-w-4xl text-4xl font-medium leading-[1.06] tracking-[-0.045em] sm:text-6xl lg:text-7xl"
              >
                Your next business move.
                <br />
                <span className="text-primary">
                  Designed, built, and brought to market.
                </span>
              </h1>

              <HeroSequence delay={0.12}>
                <p className="mt-8 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">
                  Launch a product. Rebuild your online presence. Automate the
                  work slowing you down. Codemaven brings development, design,
                  and marketing together to move your plans into everyday use.
                </p>
              </HeroSequence>

              <HeroSequence delay={0.2}>
                <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
                  <Link href={bookingUrl}>
                    <Button className="rounded-full px-8 py-8">
                      Discuss your project
                      <ArrowUpRightIcon aria-hidden="true" className="size-4" />
                    </Button>
                  </Link>

                  <Link href="/work" className={textLink}>
                    <Button variant="ghost">
                      Explore our work
                      <ArrowRightIcon aria-hidden="true" className="size-4" />
                    </Button>
                  </Link>
                </div>
              </HeroSequence>
            </div>

            <HeroSequence delay={0.25}>
              <aside className="border-l-2 border-primary/40 py-2 pl-6 lg:mb-2">
                <p className={eyebrow}>A clear starting point</p>

                <p className="mt-5 text-xl font-medium leading-relaxed tracking-tight">
                  What should your customers be able to do? What should be
                  easier for your business?
                </p>

                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  Those answers shape what we build, how we design it, and where
                  the work begins.
                </p>

                <a href="#starting-point" className={`${textLink} mt-4`}>
                  Find your starting point
                  <ArrowDownIcon aria-hidden="true" className="size-4" />
                </a>
              </aside>
            </HeroSequence>
          </div>

          <HeroSequence
            delay={0.3}
            className="mt-16 flex flex-col gap-3 border-t border-border/70 pt-6 text-xs leading-6 text-muted-foreground sm:flex-row sm:items-center sm:justify-between lg:mt-24"
          >
            <p>Websites · Mobile Apps · SaaS · AI & Automation</p>

            <p>UI/UX · SEO · Social Media · Digital Marketing</p>
          </HeroSequence>
        </div>
      </section>

      {/* Starting point */}
      <section
        id="starting-point"
        aria-labelledby="starting-point-heading"
        className="scroll-mt-24 py-20 sm:py-28"
      >
        <div
          className={`${container} grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20`}
        >
          <RevealLeft>
            <div>
              <p className={eyebrow}>01 / What needs to move forward?</p>

              <h2
                id="starting-point-heading"
                className="mt-5 max-w-lg text-3xl font-medium leading-tight tracking-tight sm:text-5xl"
              >
                There’s a business reason
                <span className="text-muted-foreground">
                  {" "}
                  behind the project.
                </span>
              </h2>

              <p className="mt-6 max-w-md text-base leading-8 text-muted-foreground">
                A new offer to introduce. A product to launch. A process that
                takes too much effort. We start there, then define the
                development, design, or marketing work that serves that purpose.
              </p>

              <a href={bookingUrl} className={`${textLink} mt-6`}>
                Tell us what you have in mind
                <ArrowUpRightIcon aria-hidden="true" className="size-4" />
              </a>
            </div>
          </RevealLeft>

          <MotionOl className="border-t border-border">
            {businessNeeds.map((item) => (
              <MotionLi
                key={item.number}
                className="grid grid-cols-[2rem_1fr] gap-4 border-b border-border py-7 sm:gap-6"
              >
                <span className="pt-1 font-mono text-xs text-primary">
                  {item.number}
                </span>

                <div>
                  <h3 className="text-lg font-medium tracking-tight sm:text-xl">
                    {item.title}
                  </h3>

                  <p className="mt-3 max-w-lg text-sm leading-7 text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </MotionLi>
            ))}
          </MotionOl>
        </div>
      </section>

      {/* Capabilities */}
      <section
        aria-labelledby="services-heading"
        className="border-y border-border bg-muted/25 py-20 sm:py-28"
      >
        <div className={container}>
          <div className="grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-16">
            <RevealLeft>
              <div>
                <p className={eyebrow}>02 / From intent to execution</p>

                <h2
                  id="services-heading"
                  className="mt-5 max-w-xl text-3xl font-medium leading-tight tracking-tight sm:text-5xl"
                >
                  What you build, how it works, and how people find it.
                </h2>
              </div>
            </RevealLeft>

            <RevealRight>
              <p className="max-w-lg text-base leading-8 text-muted-foreground">
                A campaign needs a destination that explains the offer. A
                product needs an interface people can use. An automated workflow
                needs to fit your operations. Our services cover these connected
                parts of the work.
              </p>
            </RevealRight>
          </div>

          <Stagger className="mt-14 grid gap-x-12 gap-y-12 md:grid-cols-2">
            {capabilities.map((item) => (
              <StaggerItem key={item.title}>
                <article className="flex flex-col border-t border-border pt-7 transition-transform duration-300 ease-out md:hover:-translate-y-1">
                  <item.icon
                    aria-hidden="true"
                    className="size-6 text-primary"
                    strokeWidth={1.5}
                  />

                  <h3 className="mt-5 text-2xl font-medium leading-tight tracking-tight">
                    {item.title}
                  </h3>

                  <p className="mt-4 max-w-lg text-sm leading-7 text-muted-foreground">
                    {item.description}
                  </p>

                  <ul className="mt-6 space-y-1">
                    {item.links.map((link) => (
                      <li key={link.href}>
                        <Link href={link.href} className={textLink}>
                          {link.label}

                          <ArrowUpRightIcon
                            aria-hidden="true"
                            className="size-4 text-muted-foreground"
                          />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Work */}
      <section aria-labelledby="work-heading" className="py-20 sm:py-28">
        <div className={container}>
          <Reveal>
            <p className={eyebrow}>03 / The work behind the introduction</p>
          </Reveal>

          <div className="mt-5 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
            <RevealLeft>
              <h2
                id="work-heading"
                className="max-w-2xl text-3xl font-medium leading-tight tracking-tight sm:text-5xl"
              >
                Get to know us through what we’ve built.
              </h2>
            </RevealLeft>

            <RevealRight>
              <div>
                <p className="text-base leading-8 text-muted-foreground">
                  Take a closer look at our projects, from the interface
                  customers see to the functionality they use. Our case studies
                  give you a more concrete view of the work we can bring to your
                  project.
                </p>

                <Link href="/work" className={`${primaryButton} mt-7`}>
                  Explore case studies
                  <ArrowUpRightIcon aria-hidden="true" className="size-4" />
                </Link>
              </div>
            </RevealRight>
          </div>
        </div>
      </section>

      <Testimonials testimonials={testimonials} />

      {/* Process */}
      <section
        aria-labelledby="process-heading"
        className="border-t border-border py-20 sm:py-28"
      >
        <div className={container}>
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-16">
            <RevealLeft>
              <div>
                <p className={eyebrow}>04 / How the work happens</p>

                <h2
                  id="process-heading"
                  className="mt-5 max-w-xl text-3xl font-medium leading-tight tracking-tight sm:text-5xl"
                >
                  Clear scope.
                  <br />
                  Shared decisions.
                  <br />A defined next step.
                </h2>
              </div>
            </RevealLeft>

            <RevealRight>
              <p className="max-w-lg self-end text-base leading-8 text-muted-foreground">
                You should understand what is being delivered, where your input
                is needed, and what comes next. We structure the project around
                those expectations.
              </p>
            </RevealRight>
          </div>

          <MotionOl className="mt-14 grid gap-x-10 gap-y-12 md:grid-cols-2">
            {process.map((step) => (
              <MotionLi
                key={step.number}
                className="border-t border-border pt-6"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="font-mono text-sm text-primary">
                    {step.number}
                  </span>

                  <span className="text-xs text-muted-foreground">
                    {step.detail}
                  </span>
                </div>

                <h3 className="mt-5 text-2xl font-medium tracking-tight">
                  {step.title}
                </h3>

                <p className="mt-3 max-w-lg text-sm leading-7 text-muted-foreground">
                  {step.description}
                </p>
              </MotionLi>
            ))}
          </MotionOl>
        </div>
      </section>

      {/* FAQs */}
      <section
        aria-labelledby="faq-heading"
        className="border-t border-border py-20 sm:py-28"
      >
        <div
          className={`${container} grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20`}
        >
          <RevealLeft>
            <div>
              <p className={eyebrow}>Before getting started</p>

              <h2
                id="faq-heading"
                className="mt-5 text-3xl font-medium leading-tight tracking-tight sm:text-4xl"
              >
                The details that help you decide.
              </h2>

              <p className="mt-5 text-sm leading-7 text-muted-foreground">
                Have something more specific to discuss?
              </p>

              <Link href="/contact" className={`${textLink} mt-2`}>
                Send us your question
                <ArrowRightIcon aria-hidden="true" className="size-4" />
              </Link>
            </div>
          </RevealLeft>

          <RevealRight>
            <div className="border-t border-border">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group border-b border-border"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-base font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary [&::-webkit-details-marker]:hidden">
                    {faq.question}

                    <span
                      aria-hidden="true"
                      className="shrink-0 text-xl font-normal text-muted-foreground"
                    >
                      <span className="group-open:hidden">+</span>

                      <span className="hidden group-open:inline">-</span>
                    </span>
                  </summary>

                  <p className="max-w-2xl pb-6 pr-8 text-sm leading-7 text-muted-foreground">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </RevealRight>
        </div>
      </section>

      {/* Closing invitation */}
      <ClosingInvitation
        title="Let's define the next step"
        heading="What would you like to launch, improve, or simplify?"
        content="Bring your idea, your current setup, or the problem you keep
                    working around. We'll discuss the goal, the
                    constraints, and what a sensible first phase could include."
      />
    </>
  );
}
