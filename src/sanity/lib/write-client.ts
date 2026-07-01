import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId } from "../env";

// Server-only client with a write token, used to persist form submissions
// (admission / seminar). Only imported from `"use server"` action files, so
// the token never reaches the browser bundle. Kept separate from the public
// read client in `client.ts`.
export const writeClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token: process.env.SANITY_WRITE_TOKEN,
});
