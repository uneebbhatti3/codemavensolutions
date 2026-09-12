import { z } from "zod";

import {
  BudgetRange,
  ExistingAsset,
  ProjectStage,
  ProjectTimeline,
  ProjectType,
} from "../../../../generated/prisma/client";

const optionalString = z.preprocess(
  (value) => {
    if (typeof value !== "string") {
      return value;
    }

    const trimmed = value.trim();

    return trimmed === "" ? undefined : trimmed;
  },
  z.string().optional(),
);

const optionalUrl = z.preprocess(
  (value) => {
    if (typeof value !== "string") {
      return value;
    }

    const trimmed = value.trim();

    return trimmed === "" ? undefined : trimmed;
  },
  z
    .string()
    .url("Please enter a valid website URL.")
    .optional(),
);

export const leadSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name.")
    .max(100, "Name is too long."),

  email: z
    .string()
    .trim()
    .email("Please enter a valid email address.")
    .max(254, "Email address is too long."),

  company: optionalString.pipe(
    z
      .string()
      .max(150, "Company name is too long.")
      .optional(),
  ),

  website: optionalUrl,

  projectTypes: z
    .array(z.nativeEnum(ProjectType))
    .min(
      1,
      "Please select at least one project type.",
    ),

  projectStage: z
    .nativeEnum(ProjectStage)
    .optional(),

  problem: z
    .string()
    .trim()
    .min(
      20,
      "Please tell us a little more about what needs to change.",
    )
    .max(
      5000,
      "Please keep this response under 5,000 characters.",
    ),

  desiredOutcome: optionalString.pipe(
    z
      .string()
      .max(
        5000,
        "Please keep this response under 5,000 characters.",
      )
      .optional(),
  ),

  existingAssets: z
    .array(z.nativeEnum(ExistingAsset))
    .default([]),

  budget: z.nativeEnum(BudgetRange).optional(),

  timeline: z
    .nativeEnum(ProjectTimeline)
    .optional(),

  successCriteria: optionalString.pipe(
    z
      .string()
      .max(
        5000,
        "Please keep this response under 5,000 characters.",
      )
      .optional(),
  ),

  additionalNotes: optionalString.pipe(
    z
      .string()
      .max(
        5000,
        "Please keep this response under 5,000 characters.",
      )
      .optional(),
  ),
});

export type LeadInput = z.infer<
  typeof leadSchema
>;

export type LeadFieldErrors = Partial<
  Record<keyof LeadInput, string[]>
>;