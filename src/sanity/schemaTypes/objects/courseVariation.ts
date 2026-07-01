import { ComponentIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const courseVariation = defineType({
  name: "courseVariation",
  title: "Variation / Package",
  type: "object",
  icon: ComponentIcon,
  fields: [
    defineField({
      name: "variationId",
      title: "Variation ID",
      type: "string",
      description:
        'Short stable identifier, e.g. "a1", "photoshop". Lowercase, no spaces.',
      validation: (rule) =>
        rule.required().custom((value) => {
          if (value && !/^[a-z0-9-]+$/.test(value)) {
            return "Use lowercase letters, numbers and hyphens only";
          }
          return true;
        }),
    }),
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "string",
      description: "Short single-line note (duration etc.).",
    }),
    defineField({
      name: "recommended",
      title: "Recommended",
      type: "boolean",
      description: "Highlights this package as the suggested pick.",
      initialValue: false,
    }),
    defineField({
      name: "pricing",
      title: "Pricing",
      type: "coursePricing",
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "subtitle", fee: "pricing.fee" },
    prepare({ title, subtitle, fee }) {
      return { title, subtitle: subtitle || (fee ? `৳${fee}` : "") };
    },
  },
});
