import type { Metadata } from "next";
import Link from "next/link";

import { ArrowUpRightIcon } from "lucide-react";

import {
  HeroSequence,
  Reveal,
  RevealLeft,
  RevealRight,
  ScaleIn,
  Stagger,
  StaggerItem,
} from "@/components/animations/motion";

import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";

import { caseStudies } from "@/features/work/data/case-studies";
import { container, eyebrow, textLink } from "@/data/data";
import ClosingInvitation from "@/components/common/closing-invitation";
import ProjectVisual from "@/features/work/components/project-visual";
import ProjectMeta from "@/features/work/components/project-meta";

const title = "Explore Case Studies | Codemaven Solutions";

const description =
  "Discover in-depth Codemaven Solutions case studies detailing real-world business transformations through custom web and mobile app development, SaaS solutions, AI automation, UX/UI design, digital marketing, operational platforms, and lead-generation systems. See how our experts deliver measurable results, solve complex challenges, and drive growth for startups, SMBs, and enterprises across diverse industries. Explore portfolio highlights, project approaches, business outcomes, and client success stories that showcase our capabilities in software innovation and digital strategy.";

export const metadata: Metadata = {
  title: {
    absolute: title,
  },

  description,

  alternates: {
    canonical: "/work",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Codemaven Solutions",
    url: "/work",
    title,
    description,

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Codemaven Solutions Case Studies",
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

export default function WorkPage() {
  const featuredProject = caseStudies[0];
  const remainingProjects = caseStudies.slice(1);

  return (
    <>
      {/* Hero */}
      <section
        aria-labelledby="work-hero-heading"
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
                <p className={eyebrow}>Selected work</p>
              </HeroSequence>

              <h1
                id="work-hero-heading"
                className="mt-7 max-w-4xl text-4xl font-medium leading-[1.06] tracking-[-0.045em] sm:text-6xl lg:text-7xl"
              >
                See the problem.
                <br />
                <span className="text-primary">
                  Then see what we built around it.
                </span>
              </h1>

              <HeroSequence delay={0.12}>
                <p className="mt-8 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
                  Our work is more than a collection of screens. Each project
                  begins with something a business wants to launch, improve, or
                  make easier, and the solution is shaped around that context.
                </p>
              </HeroSequence>
            </div>

            <HeroSequence delay={0.2}>
              <div className="border-l-2 border-primary/40 py-2 pl-6">
                <p className={eyebrow}>What you&apos;ll find here</p>

                <p className="mt-5 text-xl font-medium leading-relaxed tracking-tight">
                  The challenge, the thinking behind the work, what was built,
                  and how the finished solution fits the business.
                </p>
              </div>
            </HeroSequence>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 sm:py-20">
        <div className={container}>
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <RevealLeft>
              <div>
                <p className={eyebrow}>01 / Case studies</p>

                <h2 className="mt-5 max-w-xl text-3xl font-medium leading-tight tracking-tight sm:text-5xl">
                  Work explained in context, not just shown in screenshots.
                </h2>
              </div>
            </RevealLeft>

            <RevealRight>
              <p className="max-w-xl text-base leading-8 text-muted-foreground">
                A polished interface only tells part of the story. These case
                studies look at what the business needed, how the project was
                approached, and what the finished solution was designed to make
                possible.
              </p>
            </RevealRight>
          </div>
        </div>
      </section>

      {/* Featured */}
      {featuredProject && (
        <section
          aria-labelledby="featured-project-heading"
          className="pb-20 sm:pb-28"
        >
          <div className={container}>
            <Reveal>
              <div className="flex items-center justify-between gap-6 border-t border-border pt-5">
                <p className={eyebrow}>Featured case study</p>

                <span className="font-mono text-xs text-muted-foreground">
                  01
                </span>
              </div>
            </Reveal>

            <div className="mt-8">
              <ScaleIn>
                <Link
                  href={`/work/${featuredProject.slug}`}
                  className="group block"
                >
                  <ProjectVisual project={featuredProject} featured />
                </Link>
              </ScaleIn>
            </div>

            <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
              <RevealLeft>
                <div>
                  <ProjectMeta project={featuredProject} />

                  <h2
                    id="featured-project-heading"
                    className="mt-4 max-w-2xl text-3xl font-medium tracking-tight sm:text-4xl"
                  >
                    {featuredProject.name}
                  </h2>

                  <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground">
                    {featuredProject.description}
                  </p>
                </div>
              </RevealLeft>

              <RevealRight>
                <div>
                  <p className="text-sm font-medium">What changed</p>

                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {featuredProject.outcome.summary}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {featuredProject.services.map((service) => (
                      <span
                        key={service}
                        className="border border-border px-3 py-1.5 text-xs text-muted-foreground"
                      >
                        {service}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/work/${featuredProject.slug}`}
                    className={`${textLink} mt-7`}
                  >
                    Read the case study
                    <ArrowUpRightIcon aria-hidden="true" className="size-4" />
                  </Link>
                </div>
              </RevealRight>
            </div>
          </div>
        </section>
      )}

      {/* Remaining work */}
      {remainingProjects.length > 0 && (
        <section
          aria-labelledby="more-work-heading"
          className="border-t border-border py-20 sm:py-28"
        >
          <div className={container}>
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-20">
              <RevealLeft>
                <div>
                  <p className={eyebrow}>02 / More work</p>

                  <h2
                    id="more-work-heading"
                    className="mt-5 max-w-xl text-3xl font-medium leading-tight tracking-tight sm:text-5xl"
                  >
                    Different businesses. Different problems. Different
                    solutions.
                  </h2>
                </div>
              </RevealLeft>

              <RevealRight>
                <p className="max-w-lg text-base leading-8 text-muted-foreground">
                  Each project begins with a different business context. The
                  implementation changes with it, from marketing websites and
                  lead-generation systems to operational platforms and
                  AI-assisted workflows.
                </p>
              </RevealRight>
            </div>

            <Stagger className="mt-14 grid gap-x-8 gap-y-16 md:grid-cols-2">
              {remainingProjects.map((project, index) => (
                <StaggerItem key={project.slug}>
                  <article className="group">
                    <Link href={`/work/${project.slug}`} className="block">
                      <ProjectVisual project={project} />

                      <div className="mt-6">
                        <div className="flex items-start justify-between gap-6">
                          <div>
                            <ProjectMeta project={project} />

                            <h3 className="mt-3 text-2xl font-medium tracking-tight sm:text-3xl">
                              {project.name}
                            </h3>
                          </div>

                          <span className="shrink-0 font-mono text-xs text-muted-foreground">
                            {String(index + 2).padStart(2, "0")}
                          </span>
                        </div>

                        <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground">
                          {project.description}
                        </p>

                        <div className="mt-6 flex flex-wrap gap-2">
                          {project.services.map((service) => (
                            <span
                              key={service}
                              className="border border-border px-3 py-1.5 text-xs text-muted-foreground"
                            >
                              {service}
                            </span>
                          ))}
                        </div>

                        <span className={`${textLink} mt-6`}>
                          View case study
                          <ArrowUpRightIcon
                            aria-hidden="true"
                            className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          />
                        </span>
                      </div>
                    </Link>
                  </article>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>
      )}

      {/* Case study structure */}
      <section
        aria-labelledby="case-study-structure-heading"
        className="border-y border-border bg-muted/25 py-20 sm:py-28"
      >
        <div className={container}>
          <Reveal>
            <p className={eyebrow}>03 / What a case study covers</p>
          </Reveal>

          <div className="mt-5 grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-20">
            <RevealLeft>
              <h2
                id="case-study-structure-heading"
                className="max-w-2xl text-3xl font-medium leading-tight tracking-tight sm:text-5xl"
              >
                The work is easier to judge when you can see why it exists.
              </h2>
            </RevealLeft>

            <RevealRight>
              <p className="max-w-xl text-base leading-8 text-muted-foreground">
                Each case study focuses on the decisions behind the project, not
                only the final interface. That gives you a clearer picture of
                how we approach similar work.
              </p>
            </RevealRight>
          </div>

          <Stagger className="mt-14 grid gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                number: "01",
                title: "The situation",
                description:
                  "What existed before the project and what was creating friction.",
              },
              {
                number: "02",
                title: "The challenge",
                description:
                  "The operational, product, or communication problem the work needed to solve.",
              },
              {
                number: "03",
                title: "The work",
                description:
                  "The development, design, automation, or marketing work delivered.",
              },
              {
                number: "04",
                title: "The outcome",
                description:
                  "How the finished solution fits into the business and what it makes possible.",
              },
            ].map((item) => (
              <StaggerItem key={item.number}>
                <article className="border-t border-border pt-6">
                  <span className="font-mono text-xs text-primary">
                    {item.number}
                  </span>

                  <h3 className="mt-5 text-xl font-medium tracking-tight">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {item.description}
                  </p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* CTA */}
      <ClosingInvitation
        title="Your project could be next"
        heading="Have a problem that needs more than a polished screen?"
        content="Tell us what is happening today, what needs to change, and
                    what you want the project to make possible."
      />
    </>
  );
}
