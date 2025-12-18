import CourseDetails from "@/app/pages/course/course-details/course-details";
import CourseMentors from "@/app/pages/course/course-mentors/course-mentors";
import CourseCurriculum from "@/app/pages/course/course-curriculum/course-curriculum";
import ServicesSection from "@/app/shared/services-section/services-section";
import Container from "@/components/container";
import GradientText from "@/components/gradient-text";
import courseList from "@/data/course-list";
import mentorList from "@/data/mentor-list";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type PropsTypes = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return courseList.map((course) => ({ params: { slug: course.slug } }));
}

export async function generateMetadata({
  params,
}: PropsTypes): Promise<Metadata> {
  const {slug} = params;
  const targetCourse = courseList.find((course) => course.slug === slug);
  return {
    title: targetCourse?.name,
    description: `${targetCourse?.description1} ${targetCourse?.description2}`,
    openGraph: {
      images: {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}${targetCourse?.image}`,
        width: 1200,
        height: 630,
        alt: targetCourse?.name,
      },
    },
  };
}

const Course = ({ params }: PropsTypes) => {
  const {slug} = params;
  const targetCourse = courseList.find((course) => course.slug === slug);
  const mentors = mentorList.filter((mentor) =>
    targetCourse?.metorIds.includes(mentor.id)
  );

  if (!targetCourse) {
    return notFound();
  }

  return (
    <>
      <CourseDetails course={targetCourse} />

      <Container className="py-10">
        <h2 className="text-4xl text-foreground-dark font-extrabold text-center mb-4">
          কোর্সে <GradientText>আপনি পাচ্ছেন</GradientText>
        </h2>
        <ServicesSection servicesData={targetCourse?.services} />
      </Container>

      {targetCourse.curriculum && (
        <CourseCurriculum curriculum={targetCourse.curriculum} />
      )}

      {mentors.length > 0 && <CourseMentors mentors={mentors} />}
    </>
  );
};

export default Course;
