/**
 * Subtle, non-interactive background accents that frame the hero. Kept low in
 * the stacking order so hero content (z-40) always sits on top. Tuned to read
 * as gentle glows in both light and dark themes.
 */
const LineShapes = () => {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      {/* Top-right cool glow */}
      <div className="absolute -top-10 -right-24 h-72 w-72 rounded-full bg-primary-lighter/20 blur-3xl dark:bg-primary/30 lg:h-96 lg:w-96" />

      {/* Bottom-left warm accent */}
      <div className="absolute -bottom-16 -left-24 h-64 w-64 rounded-full bg-secondary/15 blur-3xl dark:bg-secondary/10 lg:h-80 lg:w-80" />

      {/* Soft radial glow anchored behind the media area (right side on lg) */}
      <div className="absolute right-0 top-1/2 hidden h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-primary/10 blur-3xl dark:bg-primary/20 lg:block" />
    </div>
  );
};

export default LineShapes;
