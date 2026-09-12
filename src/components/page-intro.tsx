import Link from "next/link";

export function PageIntro({ title, description }: { title: string; description: string }) {
  return (
    <>
      <nav aria-label="Breadcrumb" className="mb-8 text-sm">
        <ol className="flex flex-wrap gap-2">
          <li><Link href="/">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li aria-current="page">{title}</li>
        </ol>
      </nav>
      <h1>{title}</h1>
      <p className="mt-5">{description}</p>
    </>
  );
}
