import courseList from "@/data/course-list";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const courseEntries: MetadataRoute.Sitemap = courseList.map((course) => ({
    url: `${baseUrl}/courses/${course.slug}`,
    // lastModified: new Date(course.updatedAt),
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
