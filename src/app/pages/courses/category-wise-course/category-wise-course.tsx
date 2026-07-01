import Container from "@/components/container";
import { categoryList } from "@/data/categories";
import type { Course } from "@/types/course";
import CourseCard from "../../home/courses/course-card";
import CourseCardNew from "../../home/courses/course-card-new";

type PropsType = {
  courseRef: React.MutableRefObject<Record<string, HTMLDivElement | null>>;
  courses: Course[];
};

const CategoryWiseCourses = ({ courseRef, courses }: PropsType) => {
  return (
    <Container className="pt-10 pb-20 flex flex-col gap-16">
      {categoryList.map((category, index) => {
        const filteredCourses = courses.filter(
          (item) => item.category === category.name,
        );

        return (
          <div
            key={category.label}
            className="bg-card shadow-sm p-5 lg:p-10 rounded-card"
            ref={(el) => {
              courseRef.current[category.name] = el;
            }}
          >
            <h3 className="text-4xl text-primary-lighter font-extrabold mb-5 pt-3 lg:pt-0">
              {category.label}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-6">
              {filteredCourses.map((course) => {
                return <CourseCardNew course={course} key={course.name} />;
              })}
            </div>
          </div>
        );
      })}
    </Container>
  );
};

export default CategoryWiseCourses;
