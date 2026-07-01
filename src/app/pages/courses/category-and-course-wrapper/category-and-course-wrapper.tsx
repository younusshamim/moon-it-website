"use client";

import { useRef } from "react";
import type { Course } from "@/types/course";
import Categories from "../categories/categories";
import CategoryWiseCourses from "../category-wise-course/category-wise-course";

const CategoryAndCourseWrapper = ({ courses }: { courses: Course[] }) => {
  const courseRef = useRef({});

  return (
    <>
      <Categories courseRef={courseRef} />
      <CategoryWiseCourses courseRef={courseRef} courses={courses} />
    </>
  );
};

export default CategoryAndCourseWrapper;
