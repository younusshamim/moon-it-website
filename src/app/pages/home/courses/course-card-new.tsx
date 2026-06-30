import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import NumSpan from "@/components/num-span";
import PrimaryButton from "@/components/primary-button";
import { cn, convertToBanglaNumber } from "@/lib/utils";
import { getEffectivePrice } from "@/lib/utils/pricing";
import type { Course } from "@/types/course";

type PropsTypes = {
  course: Course;
  className?: string;
};

const getStartingPrice = (course: Course): number | null => {
  if (course.variations?.length) {
    return Math.min(
      ...course.variations.map(
        (v) => getEffectivePrice(v.pricing).feeAfterDiscount,
      ),
    );
  }
  if (course.pricing) {
    return getEffectivePrice(course.pricing).feeAfterDiscount;
  }
  return null;
};

const CourseCardNew = ({ course, className }: PropsTypes) => {
  const startingPrice = getStartingPrice(course);

  return (
    <div
      className={cn(
        "bg-background dark:bg-background2 rounded-card hover:scale-[1.02] transition-all duration-500",
        className,
      )}
    >
      <Image
        className="w-full h-[170px] object-cover rounded-t-card"
        sizes="100vw"
        width={0}
        height={0}
        src={course.thumbnail}
        alt={course.name}
      />

      <div className="p-5 flex flex-col gap-2">
        <h3 className="text-xl font-bold whitespace-nowrap overflow-hidden text-ellipsis">
          {course.name}
        </h3>
        <p className="text-justify mb-2">
          {course.briefDescription.length > 90
            ? `${course.briefDescription.slice(0, 90)}...`
            : course.briefDescription}
        </p>

        {startingPrice !== null && (
          <p className="font-bold text-primary mb-1">
            {course.variations?.length ? "শুরু " : ""}৳
            <NumSpan>{convertToBanglaNumber(startingPrice)}</NumSpan> টাকা
            {course.variations?.length ? " থেকে" : ""}
          </p>
        )}

        <Link href={`/courses/${course.slug}`}>
          <PrimaryButton
            iconRight={<FaArrowRight className="text-primary" />}
            variant="outline"
            className="shadow-none w-full"
          >
            বিস্তারিত দেখি
          </PrimaryButton>
        </Link>
      </div>
    </div>
  );
};

export default CourseCardNew;
