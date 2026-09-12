import type { Metadata } from "next";

export const siteUrl = "https://codemavensolutions.com";

export function pageMetadata(title: string, description: string, path: string, index = true): Metadata {
  return {
    title,
    description,
    alternates: { canonical: `${siteUrl}${path}` },
    ...(!index ? { robots: { index: false, follow: true, googleBot: { index: false, follow: true } } } : {}),
    openGraph: {
      type: "website",
      siteName: "Codemaven Solutions",
      title: `${title} | Codemaven Solutions`,
      description,
      url: `${siteUrl}${path}`,
      images: [{ url: "/og-image.png", alt: "Codemaven Solutions" }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Codemaven Solutions`,
      description,
      images: ["/og-image.png"],
    },
  };
}
