import { client } from "@/sanity/lib/client";
import { HOME_HERO_QUERY } from "@/sanity/lib/queries";
import type { HomeHero } from "@/types/home-hero";

// Content changes rarely; revalidate on a short interval so Studio edits show
// up quickly without hitting Sanity on every request.
const fetchOptions = { next: { revalidate: 300 } } as const;

/** Editable home hero content, or `null` before the singleton is created. */
export const getHomeHero = async (): Promise<HomeHero | null> =>
  (await client.fetch(HOME_HERO_QUERY, {}, fetchOptions)) as HomeHero | null;
