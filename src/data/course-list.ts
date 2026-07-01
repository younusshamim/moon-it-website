import { client } from "@/sanity/lib/client";
import {
  COURSE_BY_SLUG_QUERY,
  COURSE_OPTIONS_QUERY,
  COURSE_SLUGS_QUERY,
  COURSES_QUERY,
} from "@/sanity/lib/queries";
import type { Course, CourseOption } from "@/types/course";

// Content changes rarely; revalidate on a short interval so Studio edits show
// up quickly without hitting Sanity on every request.
const fetchOptions = { next: { revalidate: 300 } } as const;

/** All courses (card fields), ordered for grids and the home carousel. */
export const getCourses = async (): Promise<Course[]> =>
  (await client.fetch(COURSES_QUERY, {}, fetchOptions)) as Course[];

/** Full course for the detail page, or `null` when the slug is unknown. */
export const getCourseBySlug = async (slug: string): Promise<Course | null> =>
  (await client.fetch(
    COURSE_BY_SLUG_QUERY,
    { slug },
    fetchOptions,
  )) as Course | null;

/** Lightweight list for the admission + seminar dropdowns. */
export const getCourseOptions = async (): Promise<CourseOption[]> =>
  (await client.fetch(
    COURSE_OPTIONS_QUERY,
    {},
    fetchOptions,
  )) as CourseOption[];

/** Course slugs for generateStaticParams and the sitemap. */
export const getCourseSlugs = async (): Promise<string[]> => {
  const rows = (await client.fetch(COURSE_SLUGS_QUERY, {}, fetchOptions)) as {
    slug: string;
  }[];
  return rows.map((row) => row.slug);
};
