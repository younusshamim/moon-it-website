import { BlockElementIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const curriculumModule = defineType({
  name: "curriculumModule",
  title: "Curriculum Module",
  type: "object",
  icon: BlockElementIcon,
  fields: [
    defineField({
      name: "title",
      title: "Module Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "topics",
      title: "Topics",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
      validation: (rule) => rule.min(1),
    }),
  ],
  preview: {
    select: { title: "title", topics: "topics" },
    prepare({ title, topics }) {
      const count = topics?.length ?? 0;
      return { title, subtitle: `${count} topic${count === 1 ? "" : "s"}` };
    },
  },
});
