/**
 * Extracts the YouTube video id from common URL formats:
 *  - https://www.youtube.com/watch?v=ID
 *  - https://youtu.be/ID
 *  - https://www.youtube.com/embed/ID
 * Returns null when the id cannot be parsed.
 */
export const getYoutubeId = (url: string): string | null => {
  // A YouTube id is exactly 11 chars. The trailing `(?![\w-])` boundary rejects
  // longer tokens (e.g. a placeholder like `watch?v=graphics-design-demo`) so we
  // return null instead of silently truncating to a bogus 11-char id.
  const patterns = [
    /(?:youtube\.com\/watch\?v=)([\w-]{11})(?![\w-])/,
    /(?:youtu\.be\/)([\w-]{11})(?![\w-])/,
    /(?:youtube\.com\/embed\/)([\w-]{11})(?![\w-])/,
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match?.[1]) return match[1];
  }
  return null;
};

/**
 * Builds an autoplaying embed URL for use inside an iframe.
 *
 * Uses the privacy-enhanced `youtube-nocookie.com` host and, when an `origin`
 * is supplied, includes it so YouTube can verify the embedding domain even if
 * the referer is stripped (e.g. by a host-level `Referrer-Policy`). This avoids
 * the "This video is unavailable" / watch-on-YouTube overlay on deployed sites.
 *
 * Returns null when the source url is not a parseable YouTube link.
 */
export const getYoutubeEmbedUrl = (
  url: string,
  origin?: string,
): string | null => {
  const id = getYoutubeId(url);
  if (!id) return null;

  const params = new URLSearchParams({
    autoplay: "1",
    playsinline: "1",
    rel: "0",
  });
  if (origin) params.set("origin", origin);

  return `https://www.youtube-nocookie.com/embed/${id}?${params.toString()}`;
};
