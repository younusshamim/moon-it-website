import { PortableText, type PortableTextComponents } from "@portabletext/react";
import Container from "@/components/container";
import GradientText from "@/components/gradient-text";
import type { Course } from "@/types/course";

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p>{children}</p>,
    h3: ({ children }) => <h3>{children}</h3>,
  },
  marks: {
    link: ({ children, value }) => (
      <a href={value?.href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ),
  },
};

const CourseAbout = ({ course }: { course: Course }) => {
  if (!course.about?.length) return null;

  return (
    <Container className="py-10">
      <h2 className="mb-6 text-3xl font-extrabold text-foreground-dark lg:text-4xl">
        কোর্স <GradientText>সম্পর্কে</GradientText>
      </h2>
      <div className="rich-content">
        <PortableText value={course.about} components={components} />
      </div>
    </Container>
  );
};

export default CourseAbout;
