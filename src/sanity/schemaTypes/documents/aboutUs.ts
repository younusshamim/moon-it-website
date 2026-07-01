import { InfoOutlineIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const aboutUs = defineType({
  name: "aboutUs",
  title: "About Us",
  type: "document",
  icon: InfoOutlineIcon,
  fields: [
    defineField({
      name: "badge",
      title: "Badge",
      type: "string",
      description: "Small eyebrow text above the title.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "titleBefore",
      title: "Title (before highlight)",
      type: "string",
    }),
    defineField({
      name: "titleHighlight",
      title: "Title (highlight)",
      type: "string",
      description: "Rendered with the gradient accent.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "titleAfter",
      title: "Title (after highlight)",
      type: "string",
    }),
    defineField({
      name: "paragraphs",
      title: "Paragraphs",
      type: "array",
      of: [{ type: "text", rows: 5 }],
      description: "One entry per paragraph. Add, remove or reorder freely.",
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
      description: "Carousel images. Falls back to the default set when empty.",
    }),
  ],
  preview: {
    select: { subtitle: "titleHighlight", media: "images.0" },
    prepare({ subtitle, media }) {
      return { title: "About Us", subtitle, media };
    },
  },
});
