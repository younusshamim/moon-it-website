import type { MetadataRoute } from "next";
import { getCourseSlugs } from "@/data/course-list";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const slugs = await getCourseSlugs();
  const courseEntries: MetadataRoute.Sitemap = slugs.map((slug) => ({
    url: `${baseUrl}/courses/${slug}`,
  }));

  return [
    { url: `${baseUrl}` },
    { url: `${baseUrl}/courses` },
    { url: `${baseUrl}/about-us` },
    { url: `${baseUrl}/contact` },
    { url: `${baseUrl}/free-seminar` },
    ...courseEntries,
  ];
}
