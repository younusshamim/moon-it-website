"use client";

import { useRef } from "react";
import Categories from "../categories/categories";
import CategoryWiseCourses from "../category-wise-course/category-wise-course";

const CategoryAndCourseWrapper = () => {
  const courseRef = useRef({});

  return (
    <>
      <Categories courseRef={courseRef} />
      <CategoryWiseCourses courseRef={courseRef} />
    </>
  );
};

export default CategoryAndCourseWrapper;
