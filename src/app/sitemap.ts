import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  // Section anchors belong to one document; they are not separate pages.
  return [
    { url: siteUrl.href },
    { url: new URL("/politica-de-privacidade/", siteUrl).href },
  ];
}
