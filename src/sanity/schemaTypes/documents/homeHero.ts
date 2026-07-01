import { HomeIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const homeHero = defineType({
  name: "homeHero",
  title: "Home Hero",
  type: "document",
  icon: HomeIcon,
  fields: [
    defineField({
      name: "badge",
      title: "Badge",
      type: "string",
      description: "Small pill text above the title.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "titleBefore",
      title: "Title (before highlight)",
      type: "string",
      validation: (rule) => rule.required(),
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
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "thumbnail",
      title: "Thumbnail",
      type: "image",
      options: { hotspot: true },
      description:
        "Poster image shown for the hero video (not shown on its own).",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "youtubeUrl",
      title: "YouTube URL",
      type: "url",
      description:
        "The hero is always a video — this powers the play overlay + popup.",
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: { subtitle: "titleHighlight", media: "thumbnail" },
    prepare({ subtitle, media }) {
      return { title: "Home Hero", subtitle, media };
    },
  },
});
