// app/services/[slug]/page.tsx

import type { Metadata } from "next";
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
  Stagger,
  StaggerItem,
} from "@/components/animations/motion";

import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import {
  getRelatedServices,
  getServiceBySlug,
  services,
} from "@/features/services/data/services";
import { container, eyebrow, textLink } from "@/data/data";
import ClosingInvitation from "@/components/common/closing-invitation";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service | Codemaven Solutions",
    };
  }

  return {
    title: service.seo.title,
    description: service.seo.description,

    keywords: service.seo.keywords,

    alternates: {
      canonical: `/services/${service.slug}`,
    },

    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: "Codemaven Solutions",
      url: `/services/${service.slug}`,
      title: service.seo.title,
      description: service.seo.description,
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: `${service.name} | Codemaven Solutions`,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: service.seo.title,
      description: service.seo.description,
      images: ["/og-image.png"],
    },
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;

  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const relatedServices = getRelatedServices(service);

  return (
    <>
      {/* Hero */}
      <section
        aria-labelledby="service-heading"
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
            <Link href="/" className={textLink}>
              <ArrowLeftIcon aria-hidden="true" className="size-4" />
              Codemaven Solutions
            </Link>
          </HeroSequence>

          <div className="mt-12 grid gap-12 lg:grid-cols-[1.35fr_0.65fr] lg:items-end lg:gap-20">
            <div>
              <HeroSequence delay={0.08}>
                <p className={eyebrow}>{service.hero.eyebrow}</p>
              </HeroSequence>

              <h1
                id="service-heading"
                className="mt-7 max-w-5xl text-4xl font-medium leading-[1.04] tracking-[-0.045em] sm:text-6xl lg:text-7xl"
              >
                {service.hero.heading}

                {service.hero.highlightedText && (
                  <>
                    {" "}
                    <span className="text-primary">
                      {service.hero.highlightedText}
                    </span>
                  </>
                )}
              </h1>

              <HeroSequence delay={0.12}>
                <p className="mt-8 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
                  {service.hero.description}
                </p>
              </HeroSequence>

              <HeroSequence delay={0.18}>
                <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
                  <Link
                    href="/contact"
                    className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-background"
                  >
                    {service.hero.primaryCta}

                    <ArrowRightIcon aria-hidden="true" className="size-4" />
                  </Link>

                  {service.hero.secondaryCta && (
                    <Link href="/work" className={textLink}>
                      {service.hero.secondaryCta}

                      <ArrowUpRightIcon aria-hidden="true" className="size-4" />
                    </Link>
                  )}
                </div>
              </HeroSequence>
            </div>

            <HeroSequence delay={0.2}>
              <aside className="border-l-2 border-primary/40 py-2 pl-6">
                <p className={eyebrow}>What this service solves</p>

                <p className="mt-5 text-xl font-medium leading-relaxed tracking-tight">
                  {service.shortDescription}
                </p>
              </aside>
            </HeroSequence>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section aria-labelledby="overview-heading" className="py-20 sm:py-28">
        <div
          className={`${container} grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24`}
        >
          <RevealLeft>
            <div>
              <p className={eyebrow}>01 / {service.overview.eyebrow}</p>

              <h2
                id="overview-heading"
                className="mt-5 max-w-xl text-3xl font-medium leading-tight tracking-tight sm:text-5xl"
              >
                {service.overview.heading}
              </h2>
            </div>
          </RevealLeft>

          <RevealRight>
            <p className="max-w-2xl text-base leading-8 text-muted-foreground">
              {service.overview.description}
            </p>
          </RevealRight>
        </div>
      </section>

      {/* What we build */}
      <section
        aria-labelledby="what-we-build-heading"
        className="border-y border-border bg-muted/25 py-20 sm:py-28"
      >
        <div className={container}>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <RevealLeft>
              <div>
                <p className={eyebrow}>02 / What we build</p>

                <h2
                  id="what-we-build-heading"
                  className="mt-5 max-w-xl text-3xl font-medium leading-tight tracking-tight sm:text-5xl"
                >
                  {service.whatWeBuild.heading}
                </h2>
              </div>
            </RevealLeft>

            <RevealRight>
              <p className="max-w-xl text-base leading-8 text-muted-foreground">
                {service.whatWeBuild.description}
              </p>
            </RevealRight>
          </div>

          <Stagger className="mt-14 grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {service.whatWeBuild.items.map((item, index) => (
              <StaggerItem key={item.title}>
                <article className="h-full border-t border-border pt-6">
                  <span className="font-mono text-xs text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="mt-5 text-xl font-medium tracking-tight sm:text-2xl">
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

      {/* Process */}
      <section aria-labelledby="process-heading" className="py-20 sm:py-28">
        <div className={container}>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <RevealLeft>
              <div>
                <p className={eyebrow}>03 / {service.process.eyebrow}</p>

                <h2
                  id="process-heading"
                  className="mt-5 max-w-2xl text-3xl font-medium leading-tight tracking-tight sm:text-5xl"
                >
                  {service.process.heading}
                </h2>
              </div>
            </RevealLeft>

            <RevealRight>
              <p className="max-w-xl text-base leading-8 text-muted-foreground">
                {service.process.description}
              </p>
            </RevealRight>
          </div>

          <Stagger className="mt-14">
            {service.process.steps.map((step) => (
              <StaggerItem key={step.number}>
                <article className="grid gap-5 border-t border-border py-7 sm:grid-cols-[4rem_0.75fr_1.25fr] sm:gap-8">
                  <span className="font-mono text-xs text-primary">
                    {step.number}
                  </span>

                  <h3 className="text-xl font-medium tracking-tight">
                    {step.title}
                  </h3>

                  <p className="max-w-2xl text-sm leading-7 text-muted-foreground">
                    {step.description}
                  </p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Tools */}
      {service.tools && (
        <section
          aria-labelledby="tools-heading"
          className="border-y border-border bg-muted/25 py-20 sm:py-28"
        >
          <div className={container}>
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
              <RevealLeft>
                <div>
                  <p className={eyebrow}>04 / {service.tools.eyebrow}</p>

                  <h2
                    id="tools-heading"
                    className="mt-5 max-w-xl text-3xl font-medium leading-tight tracking-tight sm:text-5xl"
                  >
                    {service.tools.heading}
                  </h2>
                </div>
              </RevealLeft>

              <RevealRight>
                <p className="max-w-xl text-base leading-8 text-muted-foreground">
                  {service.tools.description}
                </p>
              </RevealRight>
            </div>

            <Stagger className="mt-14 grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
              {service.tools.groups.map((group) => (
                <StaggerItem key={group.title}>
                  <article className="h-full bg-background p-6 sm:p-7">
                    <h3 className="text-lg font-medium tracking-tight">
                      {group.title}
                    </h3>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="border border-border px-3 py-1.5 text-xs text-muted-foreground"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </article>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>
      )}

      {/* Deep dive */}
      {service.deepDive && service.deepDive.length > 0 && (
        <section aria-labelledby="deep-dive-heading" className="py-20 sm:py-28">
          <div className={container}>
            <Reveal>
              <p className={eyebrow}>05 / A closer look</p>
            </Reveal>

            <div className="mt-5">
              <RevealLeft>
                <h2
                  id="deep-dive-heading"
                  className="max-w-3xl text-3xl font-medium leading-tight tracking-tight sm:text-5xl"
                >
                  {service.deepDive[0].title}
                </h2>
              </RevealLeft>

              {service.deepDive[0].description && (
                <RevealRight>
                  <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground">
                    {service.deepDive[0].description}
                  </p>
                </RevealRight>
              )}
            </div>

            <Stagger className="mt-14 grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
              {service.deepDive[0].items.map((item, index) => (
                <StaggerItem key={item.title}>
                  <article className="border-t border-border pt-6">
                    <span className="font-mono text-xs text-primary">
                      {String(index + 1).padStart(2, "0")}
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
      )}

      {/* Common problems */}
      {service.commonProblems && (
        <section
          aria-labelledby="problems-heading"
          className="border-y border-border bg-muted/25 py-20 sm:py-28"
        >
          <div className={container}>
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
              <RevealLeft>
                <div>
                  <p className={eyebrow}>
                    06 / {service.commonProblems.eyebrow}
                  </p>

                  <h2
                    id="problems-heading"
                    className="mt-5 max-w-xl text-3xl font-medium leading-tight tracking-tight sm:text-5xl"
                  >
                    {service.commonProblems.heading}
                  </h2>

                  <p className="mt-6 max-w-md text-base leading-8 text-muted-foreground">
                    {service.commonProblems.description}
                  </p>
                </div>
              </RevealLeft>

              <Stagger className="grid gap-x-10 gap-y-10 md:grid-cols-2">
                {service.commonProblems.items.map((item) => (
                  <StaggerItem key={item.title}>
                    <article className="border-l-2 border-primary/30 pl-5">
                      <h3 className="text-lg font-medium tracking-tight">
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
          </div>
        </section>
      )}

      {/* Terminology */}
      {service.terminology && (
        <section
          aria-labelledby="terminology-heading"
          className="py-20 sm:py-28"
        >
          <div className={container}>
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
              <RevealLeft>
                <div>
                  <p className={eyebrow}>07 / {service.terminology.eyebrow}</p>

                  <h2
                    id="terminology-heading"
                    className="mt-5 max-w-xl text-3xl font-medium leading-tight tracking-tight sm:text-5xl"
                  >
                    {service.terminology.heading}
                  </h2>

                  <p className="mt-6 max-w-md text-base leading-8 text-muted-foreground">
                    {service.terminology.description}
                  </p>
                </div>
              </RevealLeft>

              <Stagger className="border-t border-border">
                {service.terminology.terms.map((item) => (
                  <StaggerItem key={item.term}>
                    <article className="grid gap-3 border-b border-border py-6 sm:grid-cols-[0.4fr_1.6fr] sm:gap-8">
                      <h3 className="text-sm font-medium">{item.term}</h3>

                      <p className="text-sm leading-7 text-muted-foreground">
                        {item.definition}
                      </p>
                    </article>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </section>
      )}

      {/* Ideal for */}
      {service.idealFor && (
        <section
          aria-labelledby="ideal-for-heading"
          className="border-y border-border bg-muted/25 py-20 sm:py-28"
        >
          <div className={container}>
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
              <RevealLeft>
                <div>
                  <p className={eyebrow}>08 / {service.idealFor.eyebrow}</p>

                  <h2
                    id="ideal-for-heading"
                    className="mt-5 max-w-xl text-3xl font-medium leading-tight tracking-tight sm:text-5xl"
                  >
                    {service.idealFor.heading}
                  </h2>
                </div>
              </RevealLeft>

              <Stagger className="border-t border-border">
                {service.idealFor.items.map((item) => (
                  <StaggerItem key={item}>
                    <div className="flex gap-4 border-b border-border py-5">
                      <CheckIcon
                        aria-hidden="true"
                        className="mt-1 size-4 shrink-0 text-primary"
                      />

                      <p className="text-sm leading-7">{item}</p>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      <section aria-labelledby="faq-heading" className="py-20 sm:py-28">
        <div
          className={`${container} grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20`}
        >
          <RevealLeft>
            <div>
              <p className={eyebrow}>Frequently asked questions</p>

              <h2
                id="faq-heading"
                className="mt-5 max-w-md text-3xl font-medium leading-tight tracking-tight sm:text-5xl"
              >
                Questions that usually come up before a project starts.
              </h2>

              <p className="mt-6 max-w-sm text-sm leading-7 text-muted-foreground">
                Have something more specific to ask?
              </p>

              <Link href="/contact" className={`${textLink} mt-3`}>
                Send us your question
                <ArrowRightIcon aria-hidden="true" className="size-4" />
              </Link>
            </div>
          </RevealLeft>

          <RevealRight>
            <div className="border-t border-border">
              {service.faqs.map((faq) => (
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

                      <span className="hidden group-open:inline">−</span>
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

      {/* Related services */}
      {relatedServices.length > 0 && (
        <section
          aria-labelledby="related-services-heading"
          className="border-t border-border py-20 sm:py-28"
        >
          <div className={container}>
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <RevealLeft>
                <div>
                  <p className={eyebrow}>Related services</p>

                  <h2
                    id="related-services-heading"
                    className="mt-5 max-w-xl text-3xl font-medium leading-tight tracking-tight sm:text-5xl"
                  >
                    The work around this service is often connected.
                  </h2>
                </div>
              </RevealLeft>

              <RevealRight>
                <Link href="/#services" className={textLink}>
                  Explore all services
                  <ArrowRightIcon aria-hidden="true" className="size-4" />
                </Link>
              </RevealRight>
            </div>

            <Stagger className="mt-14 grid gap-px border border-border bg-border md:grid-cols-3">
              {relatedServices.map((related) => (
                <StaggerItem key={related.slug}>
                  <Link
                    href={`/services/${related.slug}`}
                    className="group block h-full bg-background p-7 transition-colors hover:bg-muted/40"
                  >
                    <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                      Service
                    </p>

                    <h3 className="mt-6 text-xl font-medium tracking-tight">
                      {related.name}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-muted-foreground">
                      {related.shortDescription}
                    </p>

                    <span className={`${textLink} mt-6`}>
                      Explore service
                      <ArrowUpRightIcon
                        aria-hidden="true"
                        className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </span>
                  </Link>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>
      )}

      {/* CTA */}
      <ClosingInvitation
        title={service.cta.eyebrow}
        heading={service.cta.heading}
        content={service.cta.description}
      />
    </>
  );
}
