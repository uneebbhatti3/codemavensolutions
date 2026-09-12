// app/api/leads/route.ts

import { NextResponse } from "next/server";

import prisma from "@/lib/prisma";
import { leadSchema } from "@/features/contact/validations/lead";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const result = leadSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Please review the submitted fields and try again.",
          errors: result.error.flatten().fieldErrors,
        },
        {
          status: 400,
        },
      );
    }

    const lead = await prisma.lead.create({
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
      select: {
        id: true,
      },
    });

    return NextResponse.json(
      {
        success: true,
        message:
          "We'll review your project brief and get back to you with the right context for the next conversation.",
        leadId: lead.id,
      },
      {
        status: 201,
      },
    );
  } catch (error) {
    console.error("Failed to create lead:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          "We couldn’t send your project brief right now. Please try again.",
      },
      {
        status: 500,
      },
    );
  }
}