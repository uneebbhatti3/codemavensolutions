"use client";

import {
  FormEvent,
  useState,
} from "react";

import {
  ArrowRightIcon,
  CheckCircle2Icon,
  Loader2Icon,
} from "lucide-react";

import {
  Stagger,
  StaggerItem,
} from "@/components/animations/motion";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

type FieldErrors = Partial<
  Record<
    | "name"
    | "email"
    | "company"
    | "website"
    | "projectTypes"
    | "projectStage"
    | "problem"
    | "desiredOutcome"
    | "existingAssets"
    | "budget"
    | "timeline"
    | "successCriteria"
    | "additionalNotes",
    string[]
  >
>;

type SubmitState = {
  success: boolean;
  message: string;
  errors?: FieldErrors;
};

const eyebrow =
  "text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground";

const inputClassName =
  "h-12 rounded-none border-x-0 border-t-0 border-b border-border bg-transparent px-0 text-base shadow-none transition-colors placeholder:text-muted-foreground/60 focus-visible:border-primary focus-visible:ring-0";

const textareaClassName =
  "min-h-36 resize-y rounded-none border-x-0 border-t-0 border-b border-border bg-transparent px-0 py-3 text-base leading-7 shadow-none transition-colors placeholder:text-muted-foreground/60 focus-visible:border-primary focus-visible:ring-0";

const selectTriggerClassName =
  "h-12 w-full rounded-none border-x-0 border-t-0 border-b border-border bg-transparent px-0 text-base shadow-none focus:ring-0 focus:ring-offset-0 data-[placeholder]:text-muted-foreground/60";

const projectTypes = [
  {
    label: "Website",
    value: "WEBSITE",
  },
  {
    label: "Mobile App",
    value: "MOBILE_APP",
  },
  {
    label: "SaaS Product",
    value: "SAAS",
  },
  {
    label: "AI & Automation",
    value: "AI_AUTOMATION",
  },
  {
    label: "UI/UX Design",
    value: "UI_UX_DESIGN",
  },
  {
    label: "SEO",
    value: "SEO",
  },
  {
    label: "Digital Marketing",
    value: "DIGITAL_MARKETING",
  },
  {
    label: "Social Media",
    value: "SOCIAL_MEDIA",
  },
  {
    label: "Not sure yet",
    value: "NOT_SURE",
  },
] as const;

const existingAssets = [
  {
    label: "Existing website",
    value: "WEBSITE",
  },
  {
    label: "Existing application",
    value: "APPLICATION",
  },
  {
    label: "Designs / Figma",
    value: "FIGMA_DESIGNS",
  },
  {
    label: "Brand identity",
    value: "BRAND_IDENTITY",
  },
  {
    label: "Backend / APIs",
    value: "BACKEND_API",
  },
  {
    label: "Database",
    value: "DATABASE",
  },
  {
    label: "Content",
    value: "CONTENT",
  },
  {
    label: "Analytics",
    value: "ANALYTICS",
  },
  {
    label: "Nothing yet",
    value: "NOTHING",
  },
] as const;

const initialState: SubmitState = {
  success: false,
  message: "",
  errors: undefined,
};

function FieldError({
  errors,
}: {
  errors?: string[];
}) {
  if (!errors?.length) {
    return null;
  }

  return (
    <p className="mt-2 text-sm leading-6 text-destructive">
      {errors[0]}
    </p>
  );
}

export function ContactForm() {
  const [state, setState] =
    useState<SubmitState>(initialState);

  const [isPending, setIsPending] =
    useState(false);

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    if (isPending) {
      return;
    }

    setIsPending(true);

    setState({
      success: false,
      message: "",
      errors: undefined,
    });

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      company:
        formData.get("company") || undefined,
      website:
        formData.get("website") || undefined,

      projectTypes:
        formData.getAll("projectTypes"),

      projectStage:
        formData.get("projectStage") ||
        undefined,

      problem: formData.get("problem"),

      desiredOutcome:
        formData.get("desiredOutcome") ||
        undefined,

      existingAssets:
        formData.getAll("existingAssets"),

      budget:
        formData.get("budget") || undefined,

      timeline:
        formData.get("timeline") ||
        undefined,

      successCriteria:
        formData.get("successCriteria") ||
        undefined,

      additionalNotes:
        formData.get("additionalNotes") ||
        undefined,
    };

    try {
      const response = await fetch(
        "/api/contact",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(payload),
        },
      );

      const data =
        (await response.json()) as SubmitState;

      if (!response.ok) {
        setState({
          success: false,
          message:
            data.message ||
            "Please review the form and try again.",
          errors: data.errors,
        });

        return;
      }

      setState({
        success: true,
        message:
          data.message ||
          "Your project brief has been submitted successfully.",
        errors: undefined,
      });

      form.reset();
    } catch (error) {
      console.error(
        "Failed to submit contact form:",
        error,
      );

      setState({
        success: false,
        message:
          "We couldn’t send your project brief right now. Please try again.",
        errors: undefined,
      });
    } finally {
      setIsPending(false);
    }
  }

  if (state.success) {
    return (
      <div className="border-y border-border py-12 sm:py-16">
        <CheckCircle2Icon
          aria-hidden="true"
          className="size-7 text-primary"
          strokeWidth={1.5}
        />

        <p className={`${eyebrow} mt-8`}>
          Project brief received
        </p>

        <h3 className="mt-4 max-w-xl text-3xl font-medium leading-tight tracking-tight">
          Thanks for giving us the context.
        </h3>

        <p className="mt-5 max-w-xl text-base leading-8 text-muted-foreground">
          {state.message}
        </p>

        <Button
          type="button"
          variant="outline"
          className="mt-8 rounded-full"
          onClick={() =>
            setState(initialState)
          }
        >
          Send another enquiry
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border-t border-border"
      noValidate
    >
      {/* 01 — About you */}
      <section
        aria-labelledby="contact-about-you"
        className="border-b border-border py-10 sm:py-12"
      >
        <div className="flex items-baseline gap-4">
          <span className="font-mono text-xs text-primary">
            01
          </span>

          <p className={eyebrow}>
            About you
          </p>
        </div>

        <h3
          id="contact-about-you"
          className="mt-5 text-2xl font-medium tracking-tight sm:text-3xl"
        >
          Who are we speaking with?
        </h3>

        <div className="mt-9 grid gap-x-8 gap-y-8 sm:grid-cols-2">
          <div>
            <div className="space-y-2">
              <Label
                htmlFor="name"
                className="text-sm font-medium"
              >
                Your name
              </Label>

              <Input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Jane Smith"
                aria-invalid={
                  Boolean(
                    state.errors?.name,
                  ) || undefined
                }
                className={
                  inputClassName
                }
              />
            </div>

            <FieldError
              errors={state.errors?.name}
            />
          </div>

          <div>
            <div className="space-y-2">
              <Label
                htmlFor="email"
                className="text-sm font-medium"
              >
                Work email
              </Label>

              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="jane@company.com"
                aria-invalid={
                  Boolean(
                    state.errors?.email,
                  ) || undefined
                }
                className={
                  inputClassName
                }
              />
            </div>

            <FieldError
              errors={state.errors?.email}
            />
          </div>

          <div>
            <div className="space-y-2">
              <Label
                htmlFor="company"
                className="text-sm font-medium"
              >
                Company or organization
              </Label>

              <Input
                id="company"
                name="company"
                type="text"
                autoComplete="organization"
                placeholder="Your company"
                aria-invalid={
                  Boolean(
                    state.errors?.company,
                  ) || undefined
                }
                className={
                  inputClassName
                }
              />
            </div>

            <FieldError
              errors={
                state.errors?.company
              }
            />
          </div>

          <div>
            <div className="space-y-2">
              <Label
                htmlFor="website"
                className="text-sm font-medium"
              >
                Current website

                <span className="ml-2 font-normal text-muted-foreground">
                  Optional
                </span>
              </Label>

              <Input
                id="website"
                name="website"
                type="url"
                placeholder="https://example.com"
                aria-invalid={
                  Boolean(
                    state.errors?.website,
                  ) || undefined
                }
                className={
                  inputClassName
                }
              />
            </div>

            <FieldError
              errors={
                state.errors?.website
              }
            />
          </div>
        </div>
      </section>

      {/* 02 — Project type */}
      <section
        aria-labelledby="contact-project-type"
        className="border-b border-border py-10 sm:py-12"
      >
        <div className="flex items-baseline gap-4">
          <span className="font-mono text-xs text-primary">
            02
          </span>

          <p className={eyebrow}>
            The project
          </p>
        </div>

        <h3
          id="contact-project-type"
          className="mt-5 text-2xl font-medium tracking-tight sm:text-3xl"
        >
          What are you trying to work on?
        </h3>

        <p className="mt-3 max-w-xl text-sm leading-7 text-muted-foreground">
          Select everything that is
          relevant. The final scope does
          not need to be clear yet.
        </p>

        <Stagger className="mt-8 grid gap-3 sm:grid-cols-2">
          {projectTypes.map((item) => {
            const id = `project-${item.value.toLowerCase()}`;

            return (
              <StaggerItem
                key={item.value}
              >
                <Label
                  htmlFor={id}
                  className="flex min-h-14 cursor-pointer items-center gap-4 border border-border px-4 py-3 text-sm font-medium transition-colors hover:border-primary/50 hover:bg-muted/40"
                >
                  <Checkbox
                    id={id}
                    name="projectTypes"
                    value={item.value}
                  />

                  <span>
                    {item.label}
                  </span>
                </Label>
              </StaggerItem>
            );
          })}
        </Stagger>

        <FieldError
          errors={
            state.errors?.projectTypes
          }
        />
      </section>

      {/* 03 — Project stage */}
      <section
        aria-labelledby="contact-current-stage"
        className="border-b border-border py-10 sm:py-12"
      >
        <div className="flex items-baseline gap-4">
          <span className="font-mono text-xs text-primary">
            03
          </span>

          <p className={eyebrow}>
            Current position
          </p>
        </div>

        <h3
          id="contact-current-stage"
          className="mt-5 text-2xl font-medium tracking-tight sm:text-3xl"
        >
          Where is the project today?
        </h3>

        <div className="mt-8">
          <div className="space-y-2">
            <Label
              htmlFor="project-stage"
              className="text-sm font-medium"
            >
              Current stage
            </Label>

            <Select name="projectStage">
              <SelectTrigger
                id="project-stage"
                className={
                  selectTriggerClassName
                }
              >
                <SelectValue placeholder="Select the closest description" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="IDEA">
                  Just an idea
                </SelectItem>

                <SelectItem value="DEFINING_REQUIREMENTS">
                  Requirements are being
                  defined
                </SelectItem>

                <SelectItem value="EXISTING_PRODUCT_IMPROVEMENT">
                  Existing product needs
                  improvement
                </SelectItem>

                <SelectItem value="EXISTING_SYSTEM_REPLACEMENT">
                  Existing system needs
                  replacing
                </SelectItem>

                <SelectItem value="DESIGNED_NEEDS_DEVELOPMENT">
                  Already designed, needs
                  development
                </SelectItem>

                <SelectItem value="LIVE_NEEDS_GROWTH">
                  Already live, needs
                  growth
                </SelectItem>

                <SelectItem value="OTHER">
                  Something else
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <FieldError
            errors={
              state.errors
                ?.projectStage
            }
          />
        </div>
      </section>

      {/* 04 — Problem */}
      <section
        aria-labelledby="contact-change"
        className="border-b border-border py-10 sm:py-12"
      >
        <div className="flex items-baseline gap-4">
          <span className="font-mono text-xs text-primary">
            04
          </span>

          <p className={eyebrow}>
            The problem
          </p>
        </div>

        <h3
          id="contact-change"
          className="mt-5 text-2xl font-medium tracking-tight sm:text-3xl"
        >
          What needs to change?
        </h3>

        <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">
          Tell us what is happening today,
          what is not working, and what
          you would like to be different.
        </p>

        <div className="mt-8">
          <Label
            htmlFor="problem"
            className="sr-only"
          >
            What needs to change?
          </Label>

          <Textarea
            id="problem"
            name="problem"
            placeholder="For example: customers currently have to call us to book appointments, our team manages availability manually, and scheduling conflicts happen regularly..."
            aria-invalid={
              Boolean(
                state.errors?.problem,
              ) || undefined
            }
            className={
              textareaClassName
            }
          />

          <FieldError
            errors={
              state.errors?.problem
            }
          />
        </div>
      </section>

      {/* 05 — Desired outcome */}
      <section
        aria-labelledby="contact-users"
        className="border-b border-border py-10 sm:py-12"
      >
        <div className="flex items-baseline gap-4">
          <span className="font-mono text-xs text-primary">
            05
          </span>

          <p className={eyebrow}>
            The experience
          </p>
        </div>

        <h3
          id="contact-users"
          className="mt-5 text-2xl font-medium tracking-tight sm:text-3xl"
        >
          What should people be able to
          do?
        </h3>

        <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">
          Think about your customers,
          users, or internal team. What
          should become possible or easier
          once this project is working?
        </p>

        <div className="mt-8">
          <Label
            htmlFor="desiredOutcome"
            className="sr-only"
          >
            Desired outcome
          </Label>

          <Textarea
            id="desiredOutcome"
            name="desiredOutcome"
            placeholder="Describe the actions, workflows, or experience you want people to have..."
            aria-invalid={
              Boolean(
                state.errors
                  ?.desiredOutcome,
              ) || undefined
            }
            className={
              textareaClassName
            }
          />

          <FieldError
            errors={
              state.errors
                ?.desiredOutcome
            }
          />
        </div>
      </section>

      {/* 06 — Existing setup */}
      <section
        aria-labelledby="contact-existing"
        className="border-b border-border py-10 sm:py-12"
      >
        <div className="flex items-baseline gap-4">
          <span className="font-mono text-xs text-primary">
            06
          </span>

          <p className={eyebrow}>
            Existing setup
          </p>
        </div>

        <h3
          id="contact-existing"
          className="mt-5 text-2xl font-medium tracking-tight sm:text-3xl"
        >
          What do you already have?
        </h3>

        <p className="mt-3 max-w-xl text-sm leading-7 text-muted-foreground">
          Knowing what already exists
          helps us understand what can be
          reused, improved, or connected.
        </p>

        <div className="mt-8 grid gap-x-8 gap-y-4 sm:grid-cols-2">
          {existingAssets.map(
            (item) => {
              const id = `existing-${item.value.toLowerCase()}`;

              return (
                <Label
                  key={item.value}
                  htmlFor={id}
                  className="flex cursor-pointer items-center gap-3 border-b border-border py-4 text-sm font-normal"
                >
                  <Checkbox
                    id={id}
                    name="existingAssets"
                    value={item.value}
                  />

                  {item.label}
                </Label>
              );
            },
          )}
        </div>

        <FieldError
          errors={
            state.errors
              ?.existingAssets
          }
        />
      </section>

      {/* 07 — Constraints */}
      <section
        aria-labelledby="contact-constraints"
        className="border-b border-border py-10 sm:py-12"
      >
        <div className="flex items-baseline gap-4">
          <span className="font-mono text-xs text-primary">
            07
          </span>

          <p className={eyebrow}>
            Constraints
          </p>
        </div>

        <h3
          id="contact-constraints"
          className="mt-5 text-2xl font-medium tracking-tight sm:text-3xl"
        >
          What should we plan around?
        </h3>

        <p className="mt-3 max-w-xl text-sm leading-7 text-muted-foreground">
          Budget and timing help us
          suggest a realistic first phase
          instead of designing a scope
          around assumptions.
        </p>

        <div className="mt-8 grid gap-8 sm:grid-cols-2">
          <div>
            <div className="space-y-2">
              <Label
                htmlFor="budget"
                className="text-sm font-medium"
              >
                Approximate budget
              </Label>

              <Select name="budget">
                <SelectTrigger
                  id="budget"
                  className={
                    selectTriggerClassName
                  }
                >
                  <SelectValue placeholder="Select a range" />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="UNDER_1000">
                    Under $1,000
                  </SelectItem>

                  <SelectItem value="FROM_1000_TO_3000">
                    $1,000 – $3,000
                  </SelectItem>

                  <SelectItem value="FROM_3000_TO_7500">
                    $3,000 – $7,500
                  </SelectItem>

                  <SelectItem value="FROM_7500_TO_15000">
                    $7,500 – $15,000
                  </SelectItem>

                  <SelectItem value="ABOVE_15000">
                    $15,000+
                  </SelectItem>

                  <SelectItem value="NOT_SURE">
                    Not sure yet
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <FieldError
              errors={
                state.errors?.budget
              }
            />
          </div>

          <div>
            <div className="space-y-2">
              <Label
                htmlFor="timeline"
                className="text-sm font-medium"
              >
                Preferred timeline
              </Label>

              <Select name="timeline">
                <SelectTrigger
                  id="timeline"
                  className={
                    selectTriggerClassName
                  }
                >
                  <SelectValue placeholder="Select a timeline" />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="ASAP">
                    As soon as practical
                  </SelectItem>

                  <SelectItem value="WITHIN_ONE_MONTH">
                    Within 1 month
                  </SelectItem>

                  <SelectItem value="ONE_TO_THREE_MONTHS">
                    1–3 months
                  </SelectItem>

                  <SelectItem value="THREE_TO_SIX_MONTHS">
                    3–6 months
                  </SelectItem>

                  <SelectItem value="NO_FIXED_DEADLINE">
                    No fixed deadline
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <FieldError
              errors={
                state.errors
                  ?.timeline
              }
            />
          </div>
        </div>
      </section>

      {/* 08 — Success criteria */}
      <section
        aria-labelledby="contact-success"
        className="border-b border-border py-10 sm:py-12"
      >
        <div className="flex items-baseline gap-4">
          <span className="font-mono text-xs text-primary">
            08
          </span>

          <p className={eyebrow}>
            The outcome
          </p>
        </div>

        <h3
          id="contact-success"
          className="mt-5 text-2xl font-medium tracking-tight sm:text-3xl"
        >
          What would make this project
          successful?
        </h3>

        <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">
          Imagine the project has been
          live for six months. What would
          need to be true for you to
          consider the work worthwhile?
        </p>

        <div className="mt-8">
          <Label
            htmlFor="successCriteria"
            className="sr-only"
          >
            Success criteria
          </Label>

          <Textarea
            id="successCriteria"
            name="successCriteria"
            placeholder="For example: fewer manual bookings, more qualified leads, a working MVP in customers' hands, or less time spent on repetitive internal work..."
            aria-invalid={
              Boolean(
                state.errors
                  ?.successCriteria,
              ) || undefined
            }
            className={
              textareaClassName
            }
          />

          <FieldError
            errors={
              state.errors
                ?.successCriteria
            }
          />
        </div>
      </section>

      {/* 09 — Additional notes */}
      <section
        aria-labelledby="contact-additional"
        className="py-10 sm:py-12"
      >
        <div className="flex items-baseline gap-4">
          <span className="font-mono text-xs text-primary">
            09
          </span>

          <p className={eyebrow}>
            Anything else
          </p>
        </div>

        <h3
          id="contact-additional"
          className="mt-5 text-2xl font-medium tracking-tight sm:text-3xl"
        >
          Is there anything else we
          should know?
        </h3>

        <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">
          Existing constraints,
          references, integrations,
          previous work, concerns, or
          anything else that gives us
          useful context.
        </p>

        <div className="mt-8">
          <Label
            htmlFor="additionalNotes"
            className="sr-only"
          >
            Additional project details
          </Label>

          <Textarea
            id="additionalNotes"
            name="additionalNotes"
            placeholder="Optional additional context..."
            aria-invalid={
              Boolean(
                state.errors
                  ?.additionalNotes,
              ) || undefined
            }
            className={
              textareaClassName
            }
          />

          <FieldError
            errors={
              state.errors
                ?.additionalNotes
            }
          />
        </div>
      </section>

      {/* Global error */}
      {state.message &&
        !state.success && (
          <div
            role="alert"
            className="border-t border-border py-5"
          >
            <p className="text-sm leading-6 text-destructive">
              {state.message}
            </p>
          </div>
        )}

      {/* Submit */}
      <div className="border-t border-border pt-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-medium">
              Ready when you are.
            </p>

            <p className="mt-2 max-w-md text-sm leading-6 text-muted-foreground">
              We review every enquiry
              before responding so the
              conversation can begin with
              the right context.
            </p>
          </div>

          <Button
            type="submit"
            size="lg"
            disabled={isPending}
            className="min-h-12 shrink-0 rounded-full px-7"
          >
            {isPending ? (
              <>
                Sending project brief

                <Loader2Icon
                  aria-hidden="true"
                  className="size-4 animate-spin"
                />
              </>
            ) : (
              <>
                Send project brief

                <ArrowRightIcon
                  aria-hidden="true"
                  className="size-4"
                />
              </>
            )}
          </Button>
        </div>
      </div>
    </form>
  );
}