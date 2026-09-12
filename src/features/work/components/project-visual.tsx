import { CaseStudy } from "@/features/work/data/case-studies";
import Image from "next/image";

export default function ProjectVisual({
  project,
  featured = false,
}: {
  project: CaseStudy;
  featured?: boolean;
}) {
  return (
    <div
      className={`group relative isolate overflow-hidden border border-border bg-[#111] ${
        featured
          ? "aspect-square sm:aspect-4/3 lg:aspect-16/10"
          : "aspect-square"
      }`}
    >
      {project.ogImage ? (
        <Image
          src={project.ogImage}
          alt={`${project.name} project by Codemaven Solutions`}
          fill
          priority={featured}
          sizes={
            featured
              ? "(max-width: 768px) 100vw, 1200px"
              : "(max-width: 768px) 100vw, 50vw"
          }
          className="object-contain transition-transform duration-700 ease-out group-hover:scale-[1.015]"
        />
      ) : (
        <>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-60"
          >
            <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] g-size-[48px_48px] opacity-25" />
          </div>

          <div className="relative flex h-full items-center justify-center px-8 py-20">
            <div className="max-w-xl text-center">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-white/50">
                {project.category}
              </p>

              <p
                className={`mt-4 font-medium tracking-[-0.04em] text-white ${
                  featured
                    ? "text-4xl sm:text-5xl lg:text-6xl"
                    : "text-3xl sm:text-4xl"
                }`}
              >
                {project.name}
              </p>
            </div>
          </div>
        </>
      )}

      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/10 via-transparent to-transparent" />
    </div>
  );
}
