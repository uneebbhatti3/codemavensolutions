import { CaseStudy } from "@/features/work/data/case-studies";

export default function ProjectMeta({ project }: { project: CaseStudy }) {
  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-muted-foreground">
      <span>{project.category}</span>
      <span aria-hidden="true">·</span>
      <span>{project.industry}</span>
      <span aria-hidden="true">·</span>
      <span>{project.year}</span>
    </div>
  );
}
