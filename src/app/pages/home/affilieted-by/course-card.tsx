import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import PrimaryButton from "@/components/primary-button";
import { cn } from "@/lib/utils";
import type { Course } from "@/types/course";

type PropsTypes = {
  course: Course;
  className?: string;
};

const CourseCard = ({ course, className }: PropsTypes) => {
  return (
    <div
      className={cn(
        "bg-background dark:bg-background2 rounded-card hover:scale-[1.02] transition-all duration-500",
        className,
      )}
    >
      <Image
        className="w-full h-[150px] object-cover rounded-t-card"
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
          {course.name.length > 70
            ? course.name.slice(0, 70) + "..."
            : course.name}
        </p>

        <Link href={`/courses/${course.id}`}>
          <PrimaryButton
            iconRight={<FaArrowRight className="text-primary" />}
            variant="outline"
            className="shadow-none w-full"
          >
            বিস্তারিত দেখি
          </PrimaryButton>{" "}
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
