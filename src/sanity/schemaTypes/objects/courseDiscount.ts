import { TagIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const courseDiscount = defineType({
  name: "courseDiscount",
  title: "Discount",
  type: "object",
  icon: TagIcon,
  fields: [
    defineField({
      name: "type",
      title: "Discount Type",
      type: "string",
      options: {
        list: [
          { title: "Flat Amount (৳)", value: "amount" },
          { title: "Percentage (%)", value: "percentage" },
        ],
        layout: "radio",
      },
      initialValue: "amount",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "value",
      title: "Discount Value",
      type: "number",
      validation: (rule) => rule.required().positive(),
    }),
    defineField({
      name: "endDate",
      title: "Offer Ends On",
      type: "date",
      description: "The discount is active until the end of this day.",
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: { type: "type", value: "value", endDate: "endDate" },
    prepare({ type, value, endDate }) {
      const label = type === "percentage" ? `${value}%` : `৳${value}`;
      return { title: `${label} off`, subtitle: `Ends ${endDate ?? "—"}` };
    },
  },
});
