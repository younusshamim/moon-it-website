/** Editable content for the shared About Us section (Sanity singleton). */
export type AboutUs = {
  badge: string;
  titleBefore?: string;
  titleHighlight: string; // rendered with the gradient accent
  titleAfter?: string;
  paragraphs: string[];
  images?: string[]; // resolved image URLs (Sanity CDN); falls back to static set
};
