import type { Metadata } from "next";
import CategoryAndCourseWrapper from "@/app/pages/courses/category-and-course-wrapper/category-and-course-wrapper";
import PageHeading from "@/components/page-heading";

export const metadata: Metadata = {
  title: "কোর্স সমূহ",
  description:
    "প্রতিটি কোর্সের সিলেবাস ব্যাসিক টু এডভান্সড লেভেল পর্যন্ত এমনভাবে সাজানো হয়েছে, যাতে আপনি কোর্স শেষে প্রতিটি টপিকে কাজ করার আত্মবিশ্বাস পান।",
};

const Courses = () => {
  return (
    <>
      <PageHeading label="কোর্স সমূহ" />
      <CategoryAndCourseWrapper />
    </>
  );
};

export default Courses;
