import type { Metadata } from "next";
import CategoryAndCourseWrapper from "@/app/pages/courses/category-and-course-wrapper/category-and-course-wrapper";
import TrustBar from "@/app/shared/affiliation/trust-bar";
import Container from "@/components/container";
import PageHeading from "@/components/page-heading";
import { getCourses } from "@/data/course-list";

export const metadata: Metadata = {
  title: "কোর্স সমূহ",
  description:
    "প্রতিটি কোর্সের সিলেবাস ব্যাসিক টু এডভান্সড লেভেল পর্যন্ত এমনভাবে সাজানো হয়েছে, যাতে আপনি কোর্স শেষে প্রতিটি টপিকে কাজ করার আত্মবিশ্বাস পান।",
};

const Courses = async () => {
  const courses = await getCourses();

  return (
    <>
      <PageHeading label="কোর্স সমূহ" />
      <Container>
        <TrustBar className="-mt-2 mb-2" />
      </Container>
      <CategoryAndCourseWrapper courses={courses} />
    </>
  );
};

export default Courses;
