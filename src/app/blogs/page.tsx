// app/blogs/page.tsx

import type { Metadata } from "next";
import Link from "next/link";

import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  BotIcon,
  Code2Icon,
  Layers3Icon,
  MegaphoneIcon,
  PaletteIcon,
  SearchIcon,
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

const title = "Blog | Codemaven Solutions";

const description =
  "Practical insights from Codemaven Solutions on software development, SaaS, AI automation, product design, SEO, digital marketing, and building better digital products.";

export const metadata: Metadata = {
  title: {
    absolute: title,
  },

  description,

  alternates: {
    canonical: "/blogs",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Codemaven Solutions",
    url: "/blogs",
    title,
    description,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Codemaven Solutions Blog",
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

const container = "mx-auto max-w-7xl px-6 sm:px-8 lg:px-12";

const eyebrow =
  "text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground";

const textLink =
  "inline-flex min-h-11 items-center gap-2 rounded-sm text-sm font-medium transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-background";

const categories = [
  {
    label: "Software Development",
    slug: "software-development",
    icon: Code2Icon,
  },
  {
    label: "SaaS",
    slug: "saas",
    icon: Layers3Icon,
  },
  {
    label: "AI & Automation",
    slug: "ai-automation",
    icon: BotIcon,
  },
  {
    label: "Product Design",
    slug: "product-design",
    icon: PaletteIcon,
  },
  {
    label: "SEO & Growth",
    slug: "seo-growth",
    icon: SearchIcon,
  },
  {
    label: "Digital Marketing",
    slug: "digital-marketing",
    icon: MegaphoneIcon,
  },
];

const posts = [
  {
    slug: "how-to-design-saas-mvp",
    title: "How to decide what actually belongs in a SaaS MVP",
    description:
      "A practical framework for separating essential product functionality from features that should wait until after validation.",
    category: "SaaS",
    date: "September 2026",
    readTime: "7 min read",
    featured: true,
  },
  {
    slug: "ai-automation-business-workflows",
    title: "Where AI automation actually helps a business",
    description:
      "How to identify repetitive workflows worth automating without introducing unnecessary complexity.",
    category: "AI & Automation",
    date: "September 2026",
    readTime: "6 min read",
  },
  {
    slug: "website-business-problem",
    title: "A business website should solve more than a design problem",
    description:
      "Why strong websites begin with customer journeys, business goals, and information architecture before visual design.",
    category: "Software Development",
    date: "August 2026",
    readTime: "5 min read",
  },
  {
    slug: "technical-seo-foundations",
    title: "Technical SEO foundations we consider before launch",
    description:
      "A practical look at metadata, semantic structure, performance, crawlability, and the technical decisions that support search visibility.",
    category: "SEO & Growth",
    date: "August 2026",
    readTime: "8 min read",
  },
  {
    slug: "designing-admin-dashboards",
    title: "What makes an admin dashboard genuinely useful",
    description:
      "Good dashboards reduce operational friction. Here is what to consider when designing internal tools around real workflows.",
    category: "Product Design",
    date: "August 2026",
    readTime: "6 min read",
  },
  {
    slug: "marketing-and-product-connection",
    title: "Why product and marketing should not be treated separately",
    description:
      "A campaign, landing page, product experience, and conversion path work better when they are designed as connected parts of the same system.",
    category: "Digital Marketing",
    date: "July 2026",
    readTime: "5 min read",
  },
];

const featuredPost = posts.find((post) => post.featured);
const remainingPosts = posts.filter((post) => !post.featured);

export default function BlogsPage() {
  return (
    <>
      {/* Hero */}
      <section
        aria-labelledby="blogs-heading"
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
                <p className={eyebrow}>Codemaven insights</p>
              </HeroSequence>

              <h1
                id="blogs-heading"
                className="mt-7 max-w-5xl text-4xl font-medium leading-[1.06] tracking-[-0.045em] sm:text-6xl lg:text-7xl"
              >
                Notes from building,
                <br />
                <span className="text-primary">
                  shipping, and improving digital products.
                </span>
              </h1>

              <HeroSequence delay={0.12}>
                <p className="mt-8 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
                  Practical thinking around software development, SaaS,
                  automation, design, SEO, and growth — based on the decisions
                  that come up while building real products and business
                  systems.
                </p>
              </HeroSequence>
            </div>

            <HeroSequence delay={0.2}>
              <div className="border-l-2 border-primary/40 py-2 pl-6">
                <p className={eyebrow}>What we write about</p>

                <p className="mt-5 text-xl font-medium leading-relaxed tracking-tight">
                  Engineering decisions, product thinking, automation, technical
                  SEO, and lessons from building for real businesses.
                </p>
              </div>
            </HeroSequence>
          </div>
        </div>
      </section>

      {/* Featured article */}
      {featuredPost && (
        <section
          aria-labelledby="featured-article-heading"
          className="py-20 sm:py-28"
        >
          <div className={container}>
            <Reveal>
              <div className="flex items-center justify-between gap-6 border-t border-border pt-5">
                <p className={eyebrow}>Featured article</p>

                <span className="font-mono text-xs text-muted-foreground">
                  01
                </span>
              </div>
            </Reveal>

            <div className="mt-8 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
              <RevealLeft>
                <Link
                  href={`/blogs/${featuredPost.slug}`}
                  className="group block"
                >
                  <div className="relative aspect-16/10 overflow-hidden border border-border bg-muted/30">
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0"
                    >
                      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-size-[48px_48px] opacity-30" />
                    </div>

                    <div className="relative flex h-full items-center justify-center px-8 py-16">
                      <div className="max-w-xl text-center">
                        <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                          {featuredPost.category}
                        </p>

                        <p className="mt-5 text-3xl font-medium leading-tight tracking-[-0.035em] sm:text-4xl lg:text-5xl">
                          {featuredPost.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </RevealLeft>

              <RevealRight>
                <div className="lg:pt-4">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-muted-foreground">
                    <span>{featuredPost.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{featuredPost.date}</span>
                    <span aria-hidden="true">·</span>
                    <span>{featuredPost.readTime}</span>
                  </div>

                  <h2
                    id="featured-article-heading"
                    className="mt-5 text-3xl font-medium leading-tight tracking-tight sm:text-4xl"
                  >
                    {featuredPost.title}
                  </h2>

                  <p className="mt-5 max-w-xl text-base leading-8 text-muted-foreground">
                    {featuredPost.description}
                  </p>

                  <Link
                    href={`/blogs/${featuredPost.slug}`}
                    className={`${textLink} mt-7`}
                  >
                    Read article
                    <ArrowUpRightIcon aria-hidden="true" className="size-4" />
                  </Link>
                </div>
              </RevealRight>
            </div>
          </div>
        </section>
      )}

      {/* Categories */}
      <section
        aria-labelledby="topics-heading"
        className="border-y border-border bg-muted/25 py-20 sm:py-24"
      >
        <div className={container}>
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <RevealLeft>
              <div>
                <p className={eyebrow}>02 / Explore by topic</p>

                <h2
                  id="topics-heading"
                  className="mt-5 max-w-xl text-3xl font-medium leading-tight tracking-tight sm:text-5xl"
                >
                  Follow the part of the work you care about.
                </h2>
              </div>
            </RevealLeft>

            <RevealRight>
              <p className="max-w-xl text-base leading-8 text-muted-foreground">
                Our writing covers the same connected disciplines we work
                across: development, product, automation, design, search, and
                digital growth.
              </p>
            </RevealRight>
          </div>

          <Stagger className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <StaggerItem key={category.slug}>
                <Link
                  href={`/blogs?category=${category.slug}`}
                  className="group block h-full bg-background p-6 transition-colors hover:bg-muted/40 sm:p-7"
                >
                  <category.icon
                    aria-hidden="true"
                    className="size-5 text-primary"
                    strokeWidth={1.5}
                  />

                  <div className="mt-8 flex items-end justify-between gap-6">
                    <h3 className="text-lg font-medium tracking-tight">
                      {category.label}
                    </h3>

                    <ArrowUpRightIcon
                      aria-hidden="true"
                      className="size-4 text-muted-foreground transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Latest articles */}
      <section
        aria-labelledby="latest-articles-heading"
        className="py-20 sm:py-28"
      >
        <div className={container}>
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-20">
            <RevealLeft>
              <div>
                <p className={eyebrow}>03 / Latest articles</p>

                <h2
                  id="latest-articles-heading"
                  className="mt-5 max-w-xl text-3xl font-medium leading-tight tracking-tight sm:text-5xl"
                >
                  Practical ideas you can apply to real projects.
                </h2>
              </div>
            </RevealLeft>

            <RevealRight>
              <p className="max-w-xl text-base leading-8 text-muted-foreground">
                No trend summaries written for the sake of publishing. The goal
                is to explain decisions, trade-offs, and patterns that matter
                when building or growing digital products.
              </p>
            </RevealRight>
          </div>

          <Stagger className="mt-14 grid gap-x-8 gap-y-14 md:grid-cols-2">
            {remainingPosts.map((post, index) => (
              <StaggerItem key={post.slug}>
                <article className="group border-t border-border pt-6">
                  <Link href={`/blogs/${post.slug}`} className="block">
                    <div className="flex items-start justify-between gap-6">
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-muted-foreground">
                        <span>{post.category}</span>
                        <span aria-hidden="true">·</span>
                        <span>{post.date}</span>
                      </div>

                      <span className="shrink-0 font-mono text-xs text-muted-foreground">
                        {String(index + 2).padStart(2, "0")}
                      </span>
                    </div>

                    <h3 className="mt-5 max-w-xl text-2xl font-medium leading-tight tracking-tight sm:text-3xl">
                      {post.title}
                    </h3>

                    <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground">
                      {post.description}
                    </p>

                    <div className="mt-6 flex items-center justify-between gap-6">
                      <span className="text-xs text-muted-foreground">
                        {post.readTime}
                      </span>

                      <span className={textLink}>
                        Read article
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

      {/* Writing philosophy */}
      <section
        aria-labelledby="writing-heading"
        className="border-y border-border bg-muted/25 py-20 sm:py-28"
      >
        <div className={container}>
          <Reveal>
            <p className={eyebrow}>04 / Why we write</p>
          </Reveal>

          <div className="mt-5 grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-20">
            <RevealLeft>
              <h2
                id="writing-heading"
                className="max-w-2xl text-3xl font-medium leading-tight tracking-tight sm:text-5xl"
              >
                Good work gets better when the thinking behind it is clear.
              </h2>
            </RevealLeft>

            <RevealRight>
              <div className="space-y-6 text-base leading-8 text-muted-foreground">
                <p>
                  We use the blog to document the decisions behind development,
                  product design, automation, SEO, and digital growth.
                </p>

                <p>
                  That means writing about what worked, what did not, why a
                  particular approach made sense, and where the trade-offs were.
                </p>
              </div>
            </RevealRight>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        aria-labelledby="blogs-contact-heading"
        className="py-16 sm:py-24"
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
                    From reading to building
                  </p>

                  <h2
                    id="blogs-contact-heading"
                    className="mt-6 max-w-3xl text-3xl font-medium leading-tight tracking-tight sm:text-5xl"
                  >
                    Have a problem worth thinking through together?
                  </h2>

                  <p className="mt-6 max-w-xl text-base leading-8 text-primary-foreground/90">
                    Tell us what you are trying to build, improve, automate, or
                    grow. We can start with the problem and work forward from
                    there.
                  </p>
                </div>

                <div className="flex flex-col items-start gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-background px-6 py-3 text-sm font-medium text-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-primary"
                  >
                    Start a conversation
                    <ArrowRightIcon aria-hidden="true" className="size-4" />
                  </Link>

                  <Link
                    href="/work"
                    className="inline-flex min-h-11 items-center gap-2 rounded-sm text-sm text-primary-foreground underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    Explore our work
                    <ArrowUpRightIcon aria-hidden="true" className="size-4" />
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
