import { FaCheck } from "react-icons/fa6";
import Container from "@/components/container";
import LineShapes from "@/components/shapes/line-shapes";
import type { Course } from "@/types/course";
import CoursePricingCard from "../course-pricing-card/course-pricing-card";

const CourseHero = ({
  course,
  categoryLabel,
}: {
  course: Course;
  categoryLabel?: string;
}) => {
  const { name, descriptionParagraphs, features } = course;

  return (
    <Container className="relative flex flex-col-reverse gap-10 pb-12 lg:flex-row lg:items-start lg:gap-16 lg:py-14">
      <LineShapes lightClassName="left-[350px]" />

      <div className="z-40 flex w-full flex-col gap-5 lg:w-1/2">
        {categoryLabel && (
          <span className="w-fit rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            {categoryLabel}
          </span>
        )}

        <h1 className="text-3xl font-extrabold leading-tight text-foreground-dark lg:text-[2.6rem]">
          {name}
        </h1>

        <div className="flex flex-col gap-3 text-justify text-[17px] leading-relaxed text-foreground">
          {descriptionParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        {features.length > 0 && (
          <div className="mt-2 flex flex-col gap-4 border-t border-muted pt-6">
            <h2 className="text-lg font-bold text-foreground-dark">
              কোর্সে যা পাচ্ছেন
            </h2>
            <ul className="grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-[11px] text-primary">
                    <FaCheck />
                  </span>
                  <span className="text-[15px] leading-snug text-foreground">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="z-40 w-full lg:sticky lg:top-24 lg:w-1/2">
        <CoursePricingCard course={course} />
      </div>
    </Container>
  );
};

export default CourseHero;
