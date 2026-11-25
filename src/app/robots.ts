import type { MetadataRoute } from "next";
import { productionOrigin } from "@/lib/site";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    // Crawlers must be able to read the page's noindex directive before launch.
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${productionOrigin}/sitemap.xml`,
  };
}
