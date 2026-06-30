import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CourseAbout from "@/app/pages/course-details/course-about/course-about";
import CourseCurriculum from "@/app/pages/course-details/course-curriculum/course-curriculum";
import CourseHero from "@/app/pages/course-details/course-hero/course-hero";
import CourseInstructors from "@/app/pages/course-details/course-instructors/course-instructors";
import {categoryList} from "@/data/categories";
import { courses, getCourseBySlug } from "@/data/course-list";

type PropsTypes = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({
  params,
}: PropsTypes): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  return {
    title: course?.name,
    description: course?.briefDescription,
    openGraph: {
      images: {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}${course?.thumbnail}`,
        width: 1200,
        height: 630,
        alt: course?.name,
      },
    },
  };
}

const Course = async ({ params }: PropsTypes) => {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    return notFound();
  }

  const categoryLabel = categoryList.find(
    (category) => category.name === course.category,
  )?.label;

  return (
    <>
      <CourseHero course={course} categoryLabel={categoryLabel} />
      <CourseAbout course={course} />
      {course.curriculum && <CourseCurriculum curriculum={course.curriculum} />}
      {course.instructors && (
        <CourseInstructors instructors={course.instructors} />
      )}
    </>
  );
};

export default Course;
