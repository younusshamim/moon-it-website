import { DocumentIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

// Free-seminar registrations. Records are created by the `onJoinSeminar`
// server action and are read-only in the Studio (a submission log).
export const seminarSubmission = defineType({
  name: "seminarSubmission",
  title: "Free Seminar",
  type: "document",
  icon: DocumentIcon,
  fields: [
    defineField({ name: "name", title: "Name", type: "string" }),
    defineField({ name: "contactNo", title: "Contact No", type: "string" }),
    defineField({ name: "courseName", title: "Course", type: "string" }),
    defineField({
      name: "attendPosibility",
      title: "Attend Possibility",
      type: "string",
    }),
    defineField({ name: "address", title: "Address", type: "text", rows: 2 }),
    defineField({
      name: "courseId",
      title: "Course Slug",
      type: "string",
      description: "Course identifier (slug) captured at submission time.",
      readOnly: true,
    }),
  ],
  orderings: [
    {
      title: "Newest first",
      name: "createdDesc",
      by: [{ field: "_createdAt", direction: "desc" }],
    },
  ],
  preview: {
    select: { title: "name", subtitle: "courseName" },
  },
});
