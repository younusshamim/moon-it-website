import { BookIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

// Keep these in sync with the static list in `src/data/categories.ts`.
const CATEGORY_OPTIONS = [
  { title: "প্রফেশনাল আইটি/কম্পিউটার কোর্স", value: "it-course" },
  { title: "ল্যাঙ্গুয়েজ কোর্স", value: "language-course" },
  { title: "এডভান্সড সার্টিফিকেট কোর্স", value: "one-year-course" },
  { title: "ডিপ্লোমা ইন্ড্রাষ্ট্রিয়াল ট্রেনিং", value: "industrial-course" },
];

export const course = defineType({
  name: "course",
  title: "Course",
  type: "document",
  icon: BookIcon,
  groups: [
    { name: "content", title: "Content", default: true },
    { name: "pricing", title: "Pricing" },
    { name: "details", title: "Details" },
  ],
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      group: "content",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      group: "content",
      description: "Used in the course URL and as the course identifier.",
      options: { source: "name", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      group: "content",
      options: { list: CATEGORY_OPTIONS, layout: "dropdown" },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "thumbnail",
      title: "Thumbnail",
      type: "image",
      group: "content",
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "briefDescription",
      title: "Brief Description",
      type: "text",
      rows: 3,
      group: "content",
      description: "Used on course cards and as the meta description.",
      validation: (rule) => rule.required().max(400),
    }),
    defineField({
      name: "descriptionParagraphs",
      title: "Description Paragraphs",
      type: "array",
      group: "content",
      of: [defineArrayMember({ type: "text", rows: 3 })],
      description: "2–3 short paragraphs shown in the course hero.",
    }),
    defineField({
      name: "youtubeUrl",
      title: "YouTube URL",
      type: "url",
      group: "content",
      description: "Optional — enables the play overlay + popup.",
    }),

    // Pricing
    defineField({
      name: "priceModel",
      title: "Price Model",
      type: "string",
      group: "pricing",
      options: {
        list: [
          { title: "Single price", value: "single" },
          { title: "Multiple variations / packages", value: "variations" },
        ],
        layout: "radio",
      },
      initialValue: "single",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "pricing",
      title: "Pricing",
      type: "coursePricing",
      group: "pricing",
      hidden: ({ parent }) => parent?.priceModel !== "single",
    }),
    defineField({
      name: "variations",
      title: "Variations / Packages",
      type: "array",
      group: "pricing",
      of: [defineArrayMember({ type: "courseVariation" })],
      hidden: ({ parent }) => parent?.priceModel !== "variations",
      validation: (rule) =>
        rule.custom((variations, context) => {
          const parent = context.parent as { priceModel?: string };
          if (parent?.priceModel === "variations" && !variations?.length) {
            return "Add at least one variation";
          }
          return true;
        }),
    }),

    // Details
    defineField({
      name: "features",
      title: "Features",
      type: "array",
      group: "details",
      of: [defineArrayMember({ type: "string" })],
      description: "Core features, one line each.",
    }),
    defineField({
      name: "curriculum",
      title: "Curriculum",
      type: "array",
      group: "details",
      of: [defineArrayMember({ type: "curriculumModule" })],
    }),
    defineField({
      name: "instructors",
      title: "Instructors",
      type: "array",
      group: "details",
      of: [
        defineArrayMember({ type: "reference", to: [{ type: "instructor" }] }),
      ],
    }),
    defineField({
      name: "about",
      title: "About (rich text)",
      type: "array",
      group: "details",
      of: [
        defineArrayMember({
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "Heading", value: "h3" },
          ],
          lists: [{ title: "Bullet", value: "bullet" }],
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
            ],
            annotations: [
              {
                name: "link",
                type: "object",
                title: "Link",
                fields: [{ name: "href", type: "url", title: "URL" }],
              },
            ],
          },
        }),
      ],
    }),
    defineField({
      name: "isAffiliated",
      title: "Affiliated Course",
      type: "boolean",
      group: "details",
      description:
        "Whether the course is affiliated with a partner organization.",
      initialValue: false,
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      group: "details",
      description: "Lower numbers appear first within a category.",
      initialValue: 100,
    }),
  ],
  orderings: [
    {
      title: "Display order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "name", subtitle: "category", media: "thumbnail" },
  },
});
