import { client } from "@/sanity/lib/client";
import { INSTRUCTORS_QUERY } from "@/sanity/lib/queries";
import type { Instructor } from "@/types/course";

const fetchOptions = { next: { revalidate: 300 } } as const;

/** All instructors, ordered — for the mentors grid and course pages. */
export const getInstructors = async (): Promise<Instructor[]> =>
  (await client.fetch(INSTRUCTORS_QUERY, {}, fetchOptions)) as Instructor[];
