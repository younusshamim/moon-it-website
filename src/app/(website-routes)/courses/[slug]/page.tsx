import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CourseAbout from "@/app/pages/course-details/course-about/course-about";
import CourseCurriculum from "@/app/pages/course-details/course-curriculum/course-curriculum";
import CourseHero from "@/app/pages/course-details/course-hero/course-hero";
import CourseInstructors from "@/app/pages/course-details/course-instructors/course-instructors";
import { categoryList } from "@/data/categories";
import { getCourseBySlug, getCourseSlugs } from "@/data/course-list";

type PropsTypes = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = await getCourseSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PropsTypes): Promise<Metadata> {
  const { slug } = await params;
  const course = await getCourseBySlug(slug);
  return {
    title: course?.name,
    description: course?.briefDescription,
    openGraph: course?.thumbnail
      ? {
          images: {
            url: course.thumbnail,
            width: 1200,
            height: 630,
            alt: course.name,
          },
        }
      : undefined,
  };
}

const Course = async ({ params }: PropsTypes) => {
  const { slug } = await params;
  const course = await getCourseBySlug(slug);

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
