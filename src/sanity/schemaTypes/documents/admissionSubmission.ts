import { DocumentIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

// Admission form submissions from the course pages. Records are created by the
// `onAdmission` server action and are read-only in the Studio (a submission
// log, not editorial content).
export const admissionSubmission = defineType({
  name: "admissionSubmission",
  title: "Admission",
  type: "document",
  icon: DocumentIcon,
  fields: [
    defineField({ name: "name", title: "Name", type: "string" }),
    defineField({ name: "contactNo", title: "Contact No", type: "string" }),
    defineField({
      name: "courseName",
      title: "Course",
      type: "string",
    }),
    defineField({
      name: "variationName",
      title: "Level / Package",
      type: "string",
    }),
    defineField({ name: "courseFee", title: "Course Fee", type: "number" }),
    defineField({ name: "address", title: "Address", type: "text", rows: 2 }),
    defineField({
      name: "courseId",
      title: "Course Slug",
      type: "string",
      description: "Course identifier (slug) captured at submission time.",
      readOnly: true,
    }),
    defineField({
      name: "variationId",
      title: "Variation Id",
      type: "string",
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
