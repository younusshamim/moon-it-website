import Container from "@/components/container";
import GradientText from "@/components/gradient-text";
import RichText from "@/components/rich-text";
import type { Course } from "@/types/course";

const CourseAbout = ({ course }: { course: Course }) => {
  if (!course.about?.trim()) return null;

  return (
    <Container className="py-10">
      <h2 className="mb-6 text-3xl font-extrabold text-foreground-dark lg:text-4xl">
        কোর্স <GradientText>সম্পর্কে</GradientText>
      </h2>
      <RichText html={course.about} />
    </Container>
  );
};

export default CourseAbout;
