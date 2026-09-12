import type { MetadataRoute } from "next";
import { serviceGroups } from "@/data/services-menu-data";
import { siteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  // Empty editorial pages remain noindex until approved content is published.
  return [
    "/",
    "/about",
    "/contact",
    ...serviceGroups.flatMap((group) =>
      group.services.map((service) => service.href),
    ),
  ].map((path) => ({ url: `${siteUrl}${path}` }));
}
