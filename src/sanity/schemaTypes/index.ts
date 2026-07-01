import type { SchemaTypeDefinition } from "sanity";

import { aboutUs } from "./documents/aboutUs";
import { admissionSubmission } from "./documents/admissionSubmission";
import { course } from "./documents/course";
import { homeHero } from "./documents/homeHero";
import { instructor } from "./documents/instructor";
import { seminarSubmission } from "./documents/seminarSubmission";
import { courseDiscount } from "./objects/courseDiscount";
import { coursePricing } from "./objects/coursePricing";
import { courseVariation } from "./objects/courseVariation";
import { curriculumModule } from "./objects/curriculumModule";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // Documents
    homeHero,
    aboutUs,
    course,
    instructor,
    admissionSubmission,
    seminarSubmission,
    // Objects
    coursePricing,
    courseDiscount,
    courseVariation,
    curriculumModule,
  ],
};
