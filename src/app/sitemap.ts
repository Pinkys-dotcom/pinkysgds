import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog";
import { servicePages } from "@/lib/servicePages";

const siteUrl = "https://pinkysgaragedoors.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/services", "/financing", "/about", "/contact", "/blog", "/book"];
  const legalRoutes = ["/privacy-policy", "/terms-of-service"];

  const staticEntries: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));

  const legalEntries: MetadataRoute.Sitemap = legalRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.3,
  }));

  const postEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const serviceEntries: MetadataRoute.Sitemap = servicePages.map((s) => ({
    url: `${siteUrl}/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  return [...staticEntries, ...postEntries, ...legalEntries, ...serviceEntries];
}
