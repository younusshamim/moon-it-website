import { CreditCardIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const coursePricing = defineType({
  name: "coursePricing",
  title: "Pricing",
  type: "object",
  icon: CreditCardIcon,
  fields: [
    defineField({
      name: "fee",
      title: "Course Fee (৳)",
      type: "number",
      validation: (rule) => rule.required().positive(),
    }),
    defineField({
      name: "discount",
      title: "Discount (optional)",
      type: "courseDiscount",
    }),
  ],
  preview: {
    select: { fee: "fee", discountValue: "discount.value" },
    prepare({ fee, discountValue }) {
      return {
        title: `৳${fee ?? 0}`,
        subtitle: discountValue ? `Discount: ${discountValue}` : "No discount",
      };
    },
  },
});
