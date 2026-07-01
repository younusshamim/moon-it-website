/** Editable content for the home page hero section (Sanity singleton). */
export type HomeHero = {
  badge: string;
  titleBefore: string;
  titleHighlight: string; // rendered with the gradient accent
  titleAfter?: string;
  description: string;
  thumbnail: string; // resolved image URL (Sanity CDN)
  youtubeUrl?: string; // optional — enables the play overlay + popup
};
