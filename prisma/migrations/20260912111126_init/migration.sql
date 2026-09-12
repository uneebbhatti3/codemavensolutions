-- CreateEnum
CREATE TYPE "LeadStatus" AS ENUM ('NEW', 'CONTACTED', 'QUALIFIED', 'CALL_BOOKED', 'PROPOSAL_SENT', 'WON', 'LOST');

-- CreateEnum
CREATE TYPE "ProjectType" AS ENUM ('WEBSITE', 'MOBILE_APP', 'SAAS', 'AI_AUTOMATION', 'UI_UX_DESIGN', 'SEO', 'DIGITAL_MARKETING', 'SOCIAL_MEDIA', 'NOT_SURE');

-- CreateEnum
CREATE TYPE "ProjectStage" AS ENUM ('IDEA', 'DEFINING_REQUIREMENTS', 'EXISTING_PRODUCT_IMPROVEMENT', 'EXISTING_SYSTEM_REPLACEMENT', 'DESIGNED_NEEDS_DEVELOPMENT', 'LIVE_NEEDS_GROWTH', 'OTHER');

-- CreateEnum
CREATE TYPE "ExistingAsset" AS ENUM ('WEBSITE', 'APPLICATION', 'FIGMA_DESIGNS', 'BRAND_IDENTITY', 'BACKEND_API', 'DATABASE', 'CONTENT', 'ANALYTICS', 'NOTHING');

-- CreateEnum
CREATE TYPE "BudgetRange" AS ENUM ('UNDER_1000', 'FROM_1000_TO_3000', 'FROM_3000_TO_7500', 'FROM_7500_TO_15000', 'ABOVE_15000', 'NOT_SURE');

-- CreateEnum
CREATE TYPE "ProjectTimeline" AS ENUM ('ASAP', 'WITHIN_ONE_MONTH', 'ONE_TO_THREE_MONTHS', 'THREE_TO_SIX_MONTHS', 'NO_FIXED_DEADLINE');

-- CreateTable
CREATE TABLE "Lead" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "company" TEXT,
    "website" TEXT,
    "projectTypes" "ProjectType"[],
    "projectStage" "ProjectStage",
    "problem" TEXT NOT NULL,
    "desiredOutcome" TEXT,
    "existingAssets" "ExistingAsset"[],
    "budget" "BudgetRange",
    "timeline" "ProjectTimeline",
    "successCriteria" TEXT,
    "additionalNotes" TEXT,
    "status" "LeadStatus" NOT NULL DEFAULT 'NEW',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Lead_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Lead_email_idx" ON "Lead"("email");

-- CreateIndex
CREATE INDEX "Lead_status_idx" ON "Lead"("status");

-- CreateIndex
CREATE INDEX "Lead_createdAt_idx" ON "Lead"("createdAt");
