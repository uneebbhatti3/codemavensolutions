// app/work/[slug]/page.tsx

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpRightIcon,
  CheckIcon,
} from "lucide-react";

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
import { testimonials } from "@/data/testimonials";
import { Testimonials } from "@/components/common/testimonials";

const container = "mx-auto max-w-7xl px-6 sm:px-8 lg:px-12";

const eyebrow =
  "text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground";

const textLink =
  "inline-flex min-h-11 items-center gap-2 rounded-sm text-sm font-medium transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-background";

const bookingUrl = "https://calendly.com/codemaven-solutions/30min";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return caseStudies.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const project = caseStudies.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: "Case Study | Codemaven Solutions",
    };
  }

  return {
    title: `${project.name} Case Study | Codemaven Solutions`,
    description: project.description,

    alternates: {
      canonical: `/work/${project.slug}`,
    },

    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: "Codemaven Solutions",
      url: `/work/${project.slug}`,
      title: `${project.name} Case Study | Codemaven Solutions`,
      description: project.description,
      images: project.ogImage
        ? [
            {
              url: project.ogImage,
              alt: `${project.name} case study by Codemaven Solutions`,
            },
          ]
        : [
            {
              url: "/og-image.png",
              width: 1200,
              height: 630,
              alt: `${project.name} case study by Codemaven Solutions`,
            },
          ],
    },

    twitter: {
      card: "summary_large_image",
      title: `${project.name} Case Study | Codemaven Solutions`,
      description: project.description,
      images: [project.ogImage ?? "/og-image.png"],
    },
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;

  const projectIndex = caseStudies.findIndex((item) => item.slug === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = caseStudies[projectIndex];

  const nextProject =
    caseStudies.length > 1
      ? caseStudies[(projectIndex + 1) % caseStudies.length]
      : null;

  const projectTestimonial = testimonials.filter(
    (testimonial) => testimonial.project === project.name,
  );

  return (
    <>
      {/* Hero */}
      <section
        aria-labelledby="case-study-heading"
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
          <HeroSequence delay={0.05}>
            <Link href="/work" className={textLink}>
              <ArrowLeftIcon aria-hidden="true" className="size-4" />
              All case studies
            </Link>
          </HeroSequence>

          <div className="mt-12 grid gap-12 lg:grid-cols-[1.35fr_0.65fr] lg:items-end lg:gap-20">
            <div>
              <HeroSequence delay={0.08}>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                  <p className={eyebrow}>{project.category}</p>

                  <span aria-hidden="true" className="text-muted-foreground">
                    /
                  </span>

                  <p className={eyebrow}>{project.year}</p>
                </div>
              </HeroSequence>

              <h1
                id="case-study-heading"
                className="mt-7 max-w-5xl text-4xl font-medium leading-[1.04] tracking-[-0.045em] sm:text-6xl lg:text-7xl"
              >
                {project.name}
              </h1>

              <HeroSequence delay={0.12}>
                <p className="mt-8 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
                  {project.description}
                </p>
              </HeroSequence>
            </div>

            <HeroSequence delay={0.18}>
              <aside className="border-l-2 border-primary/40 py-2 pl-6">
                <p className={eyebrow}>Project overview</p>

                <dl className="mt-6 space-y-5">
                  <div>
                    <dt className="text-xs text-muted-foreground">Client</dt>

                    <dd className="mt-1 text-sm font-medium">
                      {project.client}
                    </dd>
                  </div>

                  <div>
                    <dt className="text-xs text-muted-foreground">Industry</dt>

                    <dd className="mt-1 text-sm font-medium">
                      {project.industry}
                    </dd>
                  </div>

                  <div>
                    <dt className="text-xs text-muted-foreground">
                      Project period
                    </dt>

                    <dd className="mt-1 text-sm font-medium">{project.year}</dd>
                  </div>
                </dl>
              </aside>
            </HeroSequence>
          </div>
        </div>
      </section>

      {/* Project image */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className={container}>
          <ScaleIn>
            <div className="relative overflow-hidden border border-border bg-[#111]">
              {project.ogImage ? (
                <div className="relative aspect-square w-full sm:aspect-4/3 lg:aspect-16/10">
                  <Image
                    src={project.ogImage}
                    alt={`${project.name} case study by Codemaven Solutions`}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 1200px"
                    className="object-contain"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/10 via-transparent to-transparent" />
                </div>
              ) : (
                <div className="relative flex aspect-16/10 items-center justify-center px-8">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 opacity-60"
                  >
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-size-[56px_56px] opacity-25" />
                  </div>

                  <div className="relative z-10 max-w-3xl text-center">
                    <p className="font-mono text-xs uppercase tracking-[0.18em] text-white/50">
                      {project.category}
                    </p>

                    <p className="mt-5 text-4xl font-medium tracking-[-0.04em] text-white sm:text-5xl lg:text-7xl">
                      {project.name}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </ScaleIn>
        </div>
      </section>

      {/* Services */}
      <section className="pb-20 sm:pb-28">
        <div className={container}>
          <div className="grid gap-8 border-y border-border py-8 sm:grid-cols-[0.7fr_1.3fr] sm:py-10">
            <RevealLeft>
              <p className={eyebrow}>Services involved</p>
            </RevealLeft>

            <RevealRight>
              <div className="flex flex-wrap gap-2">
                {project.services.map((service) => (
                  <span
                    key={service}
                    className="border border-border px-3 py-1.5 text-xs text-muted-foreground"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </RevealRight>
          </div>
        </div>
      </section>

      {/* Situation */}
      <section
        aria-labelledby="situation-heading"
        className="border-t border-border py-20 sm:py-28"
      >
        <div
          className={`${container} grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24`}
        >
          <RevealLeft>
            <div>
              <p className={eyebrow}>01 / The situation</p>

              <h2
                id="situation-heading"
                className="mt-5 max-w-xl text-3xl font-medium leading-tight tracking-tight sm:text-5xl"
              >
                What was happening before the project.
              </h2>
            </div>
          </RevealLeft>

          <RevealRight>
            <div className="space-y-6 text-base leading-8 text-muted-foreground">
              {project.situation.map((paragraph, index) => (
                <p key={`${project.slug}-situation-${index}`}>{paragraph}</p>
              ))}
            </div>
          </RevealRight>
        </div>
      </section>

      {/* Challenge */}
      <section
        aria-labelledby="challenge-heading"
        className="border-y border-border bg-muted/25 py-20 sm:py-28"
      >
        <div
          className={`${container} grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24`}
        >
          <RevealLeft>
            <div>
              <p className={eyebrow}>02 / The challenge</p>

              <h2
                id="challenge-heading"
                className="mt-5 max-w-xl text-3xl font-medium leading-tight tracking-tight sm:text-5xl"
              >
                The problem the work needed to solve.
              </h2>
            </div>
          </RevealLeft>

          <div>
            <RevealRight>
              <p className="max-w-2xl text-base leading-8 text-muted-foreground">
                {project.challenge.description}
              </p>
            </RevealRight>

            <Stagger className="mt-10 border-t border-border">
              {project.challenge.points.map((point, index) => (
                <StaggerItem key={`${project.slug}-challenge-${index}`}>
                  <div className="grid grid-cols-[2rem_1fr] gap-4 border-b border-border py-6 sm:gap-6">
                    <span className="pt-1 font-mono text-xs text-primary">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p className="text-sm leading-7">{point}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section aria-labelledby="approach-heading" className="py-20 sm:py-28">
        <div className={container}>
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-20">
            <RevealLeft>
              <div>
                <p className={eyebrow}>03 / The approach</p>

                <h2
                  id="approach-heading"
                  className="mt-5 max-w-2xl text-3xl font-medium leading-tight tracking-tight sm:text-5xl"
                >
                  The decisions that shaped the solution.
                </h2>
              </div>
            </RevealLeft>

            <RevealRight>
              <p className="max-w-2xl text-base leading-8 text-muted-foreground">
                {project.approach.intro}
              </p>
            </RevealRight>
          </div>

          <Stagger className="mt-14 grid gap-x-10 gap-y-12 md:grid-cols-2">
            {project.approach.points.map((item, index) => (
              <StaggerItem key={`${project.slug}-approach-${item.title}`}>
                <article className="border-t border-border pt-6">
                  <span className="font-mono text-xs text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="mt-5 text-2xl font-medium tracking-tight">
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
      </section>

      {/* What we built */}
      <section
        aria-labelledby="built-heading"
        className="border-y border-border bg-muted/25 py-20 sm:py-28"
      >
        <div className={container}>
          <Reveal>
            <p className={eyebrow}>04 / What we built</p>
          </Reveal>

          <div className="mt-5 grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-20">
            <RevealLeft>
              <h2
                id="built-heading"
                className="max-w-2xl text-3xl font-medium leading-tight tracking-tight sm:text-5xl"
              >
                The solution, broken into the parts that mattered.
              </h2>
            </RevealLeft>

            <RevealRight>
              <p className="max-w-2xl text-base leading-8 text-muted-foreground">
                {project.solution.intro}
              </p>
            </RevealRight>
          </div>

          <Stagger className="mt-14 grid gap-x-10 gap-y-12 md:grid-cols-2">
            {project.solution.features.map((feature, index) => (
              <StaggerItem key={`${project.slug}-feature-${feature.title}`}>
                <article className="border-t border-border pt-6">
                  <div className="flex items-center justify-between gap-6">
                    <span className="font-mono text-xs text-primary">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <CheckIcon
                      aria-hidden="true"
                      className="size-4 text-primary"
                    />
                  </div>

                  <h3 className="mt-5 text-xl font-medium tracking-tight sm:text-2xl">
                    {feature.title}
                  </h3>

                  <p className="mt-3 max-w-xl text-sm leading-7 text-muted-foreground">
                    {feature.description}
                  </p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Outcome */}
      <section aria-labelledby="outcome-heading" className="py-20 sm:py-28">
        <div
          className={`${container} grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24`}
        >
          <RevealLeft>
            <div>
              <p className={eyebrow}>05 / The outcome</p>

              <h2
                id="outcome-heading"
                className="mt-5 max-w-xl text-3xl font-medium leading-tight tracking-tight sm:text-5xl"
              >
                What changed when the work came together.
              </h2>
            </div>
          </RevealLeft>

          <RevealRight>
            <div>
              <p className="text-xl font-medium leading-relaxed tracking-tight sm:text-2xl">
                {project.outcome.summary}
              </p>

              {project.outcome.description && (
                <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground">
                  {project.outcome.description}
                </p>
              )}
            </div>
          </RevealRight>
        </div>
      </section>

      {/* Results */}
      {project.results && project.results.length > 0 && (
        <section className="border-y border-border bg-muted/25 py-16 sm:py-20">
          <div className={container}>
            <Stagger className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
              {project.results.map((result) => (
                <StaggerItem key={`${project.slug}-${result.label}`}>
                  <div className="h-full bg-background p-7 sm:p-8">
                    <p className="text-3xl font-medium tracking-tight sm:text-4xl">
                      {result.value}
                    </p>

                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                      {result.label}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>
      )}

      {/* Technologies */}
      {project.technologies && project.technologies.length > 0 && (
        <section className="py-16 sm:py-20">
          <div className={container}>
            <div className="grid gap-8 border-y border-border py-8 sm:grid-cols-[0.7fr_1.3fr] sm:py-10">
              <RevealLeft>
                <p className={eyebrow}>Technology behind the work</p>
              </RevealLeft>

              <RevealRight>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="border border-border px-3 py-1.5 text-xs text-muted-foreground"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </RevealRight>
            </div>
          </div>
        </section>
      )}

      {projectTestimonial.length > 0 && (
        <Testimonials
          testimonials={projectTestimonial}
          eyebrow="Client perspective"
          heading="What the project was like from their side."
          description="A project is not only the system that gets delivered. The working relationship matters too."
        />
      )}

      {/* Next project */}
      {nextProject && (
        <section
          aria-labelledby="next-project-heading"
          className="border-t border-border py-20 sm:py-28"
        >
          <div className={container}>
            <Reveal>
              <p className={eyebrow}>Next case study</p>
            </Reveal>

            <Link
              href={`/work/${nextProject.slug}`}
              className="group mt-6 block"
            >
              <div className="grid gap-8 border-y border-border py-8 transition-colors group-hover:border-primary/40 sm:py-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-16">
                <div className="relative aspect-square overflow-hidden bg-[#111] sm:aspect-4/3">
                  {nextProject.ogImage ? (
                    <Image
                      src={nextProject.ogImage}
                      alt={`${nextProject.name} case study`}
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="object-contain transition-transform duration-700 ease-out group-hover:scale-[1.015]"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center p-8 text-center">
                      <p className="text-3xl font-medium tracking-tight text-white">
                        {nextProject.name}
                      </p>
                    </div>
                  )}
                </div>

                <div className="flex items-end justify-between gap-8">
                  <div>
                    <p className="text-sm text-muted-foreground">
                      {nextProject.category}
                    </p>

                    <h2
                      id="next-project-heading"
                      className="mt-3 text-3xl font-medium tracking-tight sm:text-5xl"
                    >
                      {nextProject.name}
                    </h2>

                    <p className="mt-5 max-w-xl text-sm leading-7 text-muted-foreground">
                      {nextProject.description}
                    </p>
                  </div>

                  <ArrowRightIcon
                    aria-hidden="true"
                    className="hidden size-5 shrink-0 transition-transform duration-300 group-hover:translate-x-1 sm:block"
                  />
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* CTA */}
      <section
        aria-labelledby="case-study-contact-heading"
        className="pb-16 sm:pb-24"
      >
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
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground/80">
                    Have something similar in mind?
                  </p>

                  <h2
                    id="case-study-contact-heading"
                    className="mt-6 max-w-3xl text-3xl font-medium leading-tight tracking-tight sm:text-5xl"
                  >
                    Tell us what needs to change in your business.
                  </h2>

                  <p className="mt-6 max-w-xl text-base leading-8 text-primary-foreground/90">
                    Share what exists today, what is creating friction, and
                    where you want the project to take you.
                  </p>
                </div>

                <div className="flex flex-col items-start gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-background px-6 py-3 text-sm font-medium text-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-primary"
                  >
                    Start a project
                    <ArrowRightIcon aria-hidden="true" className="size-4" />
                  </Link>

                  <a
                    href={bookingUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-11 items-center gap-2 rounded-sm text-sm text-primary-foreground underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    Book a 30-minute call
                    <ArrowUpRightIcon aria-hidden="true" className="size-4" />
                  </a>
                </div>
              </div>
            </div>
          </ScaleIn>
        </div>
      </section>
    </>
  );
}
