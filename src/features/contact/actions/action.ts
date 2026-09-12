"use server";

import prisma from "@/lib/prisma";
import {
  leadSchema,
  type LeadFieldErrors,
} from "../validations/lead";

// NOTE: Only async function exports are allowed in "use server" files.
// "initialLeadState" and type should NOT be exported from this file.
// Move the following two exports to a different (non-"use server") file:

// export type SubmitLeadState = { ... }
// export const initialLeadState: SubmitLeadState = { ... }

// Instead, just define them for use within this file only:

type SubmitLeadState = {
  success: boolean;
  message: string;
  errors?: LeadFieldErrors;
};

export const initialLeadState: SubmitLeadState = {
  success: false,
  message: "",
};

export async function submitLead(
  _previousState: SubmitLeadState,
  formData: FormData,
): Promise<SubmitLeadState> {
  const rawData = {
    name: formData.get("name"),
    email: formData.get("email"),
    company: formData.get("company"),
    website: formData.get("website"),

    projectTypes: formData.getAll("projectTypes"),

    projectStage: formData.get("projectStage") || undefined,

    problem: formData.get("problem"),

    desiredOutcome: formData.get("desiredOutcome") || undefined,

    existingAssets: formData.getAll("existingAssets"),

    budget: formData.get("budget") || undefined,

    timeline: formData.get("timeline") || undefined,

    successCriteria: formData.get("successCriteria") || undefined,

    additionalNotes: formData.get("additionalNotes") || undefined,
  };

  const result = leadSchema.safeParse(rawData);

  if (!result.success) {
    return {
      success: false,
      message: "Please review the highlighted fields and try again.",
      errors: result.error.flatten().fieldErrors as LeadFieldErrors,
    };
  }

  try {
    await prisma.lead.create({
      data: {
        name: result.data.name,
        email: result.data.email,
        company: result.data.company,
        website: result.data.website,

        projectTypes: result.data.projectTypes,

        projectStage: result.data.projectStage,

        problem: result.data.problem,

        desiredOutcome: result.data.desiredOutcome,

        existingAssets: result.data.existingAssets,

        budget: result.data.budget,

        timeline: result.data.timeline,

        successCriteria: result.data.successCriteria,

        additionalNotes: result.data.additionalNotes,
      },
    });

    return {
      success: true,
      message:
        "We’ll review your project brief and get back to you with the right context for the next conversation.",
    };
  } catch (error) {
    console.error("Failed to create lead:", error);

    return {
      success: false,
      message:
        "We couldn’t send your project brief right now. Please try again.",
    };
  }
}