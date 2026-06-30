export interface AffiliatedType {
  icon: string;
  title: string;
  /** Short label for compact UIs (e.g. trust bar, badges). */
  shortName?: string;
  description: string;
  /** Student-facing "what you get" line — leads with the benefit. */
  benefit?: string;
  affiliatedNo: string;
  website?: string;
  pdf?: string;
}
