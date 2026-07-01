import { client } from "@/sanity/lib/client";
import { ABOUT_US_QUERY } from "@/sanity/lib/queries";
import type { AboutUs } from "@/types/about-us";

// Content changes rarely; revalidate on a short interval so Studio edits show
// up quickly without hitting Sanity on every request.
const fetchOptions = { next: { revalidate: 300 } } as const;

/** Editable About Us content, or `null` before the singleton is created. */
export const getAboutUs = async (): Promise<AboutUs | null> =>
  (await client.fetch(ABOUT_US_QUERY, {}, fetchOptions)) as AboutUs | null;
