/** Editable content for the home page hero section (Sanity singleton). */
export type HomeHero = {
  badge: string;
  titleBefore: string;
  titleHighlight: string; // rendered with the gradient accent
  titleAfter?: string;
  description: string;
  thumbnail: string; // resolved image URL (Sanity CDN) — used as the video poster
  youtubeUrl?: string; // the hero is always a video; optional only to cover the pre-Sanity fallback
};
