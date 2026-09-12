"use client";

import { QuoteIcon } from "lucide-react";

import {
  RevealLeft,
  RevealRight,
  Stagger,
  StaggerItem,
} from "@/components/animations/motion";

export type Testimonial = {
  quote: string;
  name: string;
  role?: string;
  company: string;
  project?: string;
};

type TestimonialsProps = {
  testimonials: Testimonial[];

  eyebrow?: string;

  heading?: string;

  description?: string;

  className?: string;
};

const container = "mx-auto max-w-7xl px-6 sm:px-8 lg:px-12";

const eyebrowClassName =
  "text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground";

export function Testimonials({
  testimonials,
  eyebrow = "Client perspective",
  heading = "What the work was like from the other side.",
  description = "The finished product matters. So does the experience of getting there.",
  className = "",
}: TestimonialsProps) {
  if (!testimonials.length) {
    return null;
  }

  const isSingle = testimonials.length === 1;
  const isTwo = testimonials.length === 2;

  return (
    <section
      aria-labelledby="testimonials-heading"
      className={`border-y border-border bg-muted/25 py-20 sm:py-28 ${className}`}
    >
      <div className={container}>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <RevealLeft>
            <div>
              <p className={eyebrowClassName}>{eyebrow}</p>

              <h2
                id="testimonials-heading"
                className="mt-5 max-w-xl text-3xl font-medium leading-tight tracking-tight sm:text-5xl"
              >
                {heading}
              </h2>
            </div>
          </RevealLeft>

          <RevealRight>
            <p className="max-w-xl text-base leading-8 text-muted-foreground">
              {description}
            </p>
          </RevealRight>
        </div>

        {isSingle ? (
          <div className="mt-14">
            <SingleTestimonial testimonial={testimonials[0]} />
          </div>
        ) : (
          <Stagger
            className={`mt-14 grid gap-px border border-border bg-border ${
              isTwo ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3"
            }`}
          >
            {testimonials.map((testimonial) => (
              <StaggerItem key={`${testimonial.company}-${testimonial.name}`}>
                <TestimonialCard testimonial={testimonial} />
              </StaggerItem>
            ))}
          </Stagger>
        )}
      </div>
    </section>
  );
}

function SingleTestimonial({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="grid overflow-hidden border border-border bg-background lg:grid-cols-[0.7fr_1.3fr]">
      <div className="flex flex-col justify-between border-b border-border p-7 sm:p-10 lg:border-b-0 lg:border-r">
        <div>
          <QuoteIcon
            aria-hidden="true"
            className="size-6 text-primary"
            strokeWidth={1.5}
          />

          <p className="mt-8 font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
            Client feedback
          </p>
        </div>

        <div className="mt-12 border-t border-border pt-5 lg:mt-20">
          <p className="text-sm font-medium">{testimonial.name}</p>

          <p className="mt-1 text-sm text-muted-foreground">
            {testimonial.role
              ? `${testimonial.role} · ${testimonial.company}`
              : testimonial.company}
          </p>

          {testimonial.project && (
            <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.14em] text-primary">
              {testimonial.project}
            </p>
          )}
        </div>
      </div>

      <div className="flex items-center p-7 sm:p-10 lg:p-14">
        <blockquote>
          <p className="max-w-3xl text-2xl font-medium leading-normal tracking-[-0.02em] sm:text-3xl lg:text-4xl">
            “{testimonial.quote}”
          </p>
        </blockquote>
      </div>
    </div>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className="flex h-full flex-col bg-background p-7 sm:p-8">
      <QuoteIcon
        aria-hidden="true"
        className="size-5 text-primary"
        strokeWidth={1.5}
      />

      <blockquote className="mt-7 flex-1">
        <p className="text-lg font-medium leading-8 tracking-tight">
          “{testimonial.quote}”
        </p>
      </blockquote>

      <div className="mt-10 border-t border-border pt-5">
        <p className="text-sm font-medium">{testimonial.name}</p>

        <p className="mt-1 text-sm text-muted-foreground">
          {testimonial.role
            ? `${testimonial.role} · ${testimonial.company}`
            : testimonial.company}
        </p>

        {testimonial.project && (
          <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.14em] text-primary">
            {testimonial.project}
          </p>
        )}
      </div>
    </article>
  );
}
