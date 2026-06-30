import Container from "@/components/container";
import categories from "@/data/categories";
import { courses } from "@/data/course-list";
import CourseCard from "../../home/courses/course-card";

type PropsType = {
  courseRef: React.MutableRefObject<Record<string, HTMLDivElement | null>>;
};

const CategoryWiseCourses = ({ courseRef }: PropsType) => {
  return (
    <Container className="pt-10 pb-20 flex flex-col gap-16">
      {categories.map((category, index) => {
        const filteredCourses = courses.filter(
          (item) => item.category === category.name,
        );

        return (
          <div
            key={category.label + index}
            className="bg-card shadow-sm p-5 lg:p-10 rounded-card"
            ref={(el) => {
              courseRef.current[category.name] = el;
            }}
          >
            <h3 className="text-4xl text-primary-lighter font-extrabold mb-5 pt-3 lg:pt-0">
              {category.label}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-6">
              {filteredCourses.map((course, index) => {
                return <CourseCard course={course} key={course.name + index} />;
              })}
            </div>
          </div>
        );
      })}
    </Container>
  );
};

export default CategoryWiseCourses;
