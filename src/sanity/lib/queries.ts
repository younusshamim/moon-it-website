import { defineQuery } from "next-sanity";

// Shared projection for course cards / listings.
const CARD_FIELDS = /* groq */ `
  _id,
  "id": slug.current,
  name,
  "slug": slug.current,
  category,
  briefDescription,
  "thumbnail": thumbnail.asset->url,
  priceModel,
  "pricing": select(priceModel == "single" => pricing, null),
  "variations": select(
    priceModel == "variations" =>
      variations[]{ "id": variationId, name, subtitle, recommended, pricing },
    []
  ),
  isAffiliated
`;

/** All courses, ordered — used for card grids and the home carousel. */
export const COURSES_QUERY = defineQuery(`
  *[_type == "course"] | order(order asc, name asc) {
    ${CARD_FIELDS}
  }
`);

/** A single course with everything needed for the detail page. */
export const COURSE_BY_SLUG_QUERY = defineQuery(`
  *[_type == "course" && slug.current == $slug][0] {
    ${CARD_FIELDS},
    descriptionParagraphs,
    youtubeUrl,
    features,
    curriculum[]{ title, topics },
    "instructors": instructors[]->{
      "id": slug.current,
      name,
      "picture": picture.asset->url,
      highlights
    },
    about
  }
`);

/** Just the slugs — for generateStaticParams and the sitemap. */
export const COURSE_SLUGS_QUERY = defineQuery(`
  *[_type == "course" && defined(slug.current)]{ "slug": slug.current }
`);

/** Lightweight list used by the admission + seminar dropdowns. */
export const COURSE_OPTIONS_QUERY = defineQuery(`
  *[_type == "course"] | order(order asc, name asc) {
    "id": slug.current,
    name,
    priceModel,
    "pricing": select(priceModel == "single" => pricing, null),
    "variations": select(
      priceModel == "variations" =>
        variations[]{ "id": variationId, name, pricing },
      []
    )
  }
`);

/** Editable content for the home page hero (singleton). */
export const HOME_HERO_QUERY = defineQuery(`
  *[_type == "homeHero"][0]{
    badge,
    titleBefore,
    titleHighlight,
    titleAfter,
    description,
    "thumbnail": thumbnail.asset->url,
    youtubeUrl
  }
`);

/** Editable content for the shared About Us section (singleton). */
export const ABOUT_US_QUERY = defineQuery(`
  *[_type == "aboutUs"][0]{
    badge,
    titleBefore,
    titleHighlight,
    titleAfter,
    paragraphs,
    "images": images[].asset->url
  }
`);

/** All instructors, ordered — for the mentors grid. */
export const INSTRUCTORS_QUERY = defineQuery(`
  *[_type == "instructor"] | order(order asc, name asc) {
    "id": slug.current,
    name,
    "picture": picture.asset->url,
    highlights
  }
`);
