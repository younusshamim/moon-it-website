"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/StaggerAnimation";
import { Carousel } from "@/components/carousel";
import Container from "@/components/container";
import GradientText from "@/components/gradient-text";
import PrimaryButton from "@/components/primary-button";
import { CarouselItem } from "@/components/ui/carousel";
import { type CategoryName, categoryList } from "@/data/categories";
import type { Course } from "@/types/course";
import CategoryTabs from "./category-tabs";
import CourseCardNew from "./course-card-new";

const Courses = ({ courses: courseList }: { courses: Course[] }) => {
  const [selectedCategory, setSelectedCategory] =
    useState<CategoryName>("it-course");
  const courses = useMemo(
    () => courseList.filter((course) => course.category === selectedCategory),
    [courseList, selectedCategory],
  );
  const tabOptions = categoryList.map((item) => ({
    label: String(item.label),
    value: item.name,
  }));

  return (
    <div className="bg-card border-b border-muted section-padding-sm">
      <Container>
        <h2 className="text-4xl text-foreground-dark font-extrabold  text-center mb-[6px]">
          অসাধারন <GradientText>কোর্স সমূহ</GradientText>
        </h2>
        <p className="font-semibold mb-10 text-center">
          প্রতিটি কোর্সের সিলেবাস ব্যাসিক টু এডভান্সড লেভেল পর্যন্ত সাজানো হয়েছে।
        </p>

        <CategoryTabs
          tabOptions={tabOptions}
          selected={selectedCategory}
          setSelected={setSelectedCategory}
        />

        <StaggerContainer>
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-6">
            {courses.map((course) => {
              return (
                <StaggerItem key={course.slug}>
                  <CourseCardNew course={course} />
                </StaggerItem>
              );
            })}
          </div>
        </StaggerContainer>

        <Carousel
          key={selectedCategory}
          sliderDots={true}
          className="block md:hidden"
          dotsClassName="bg-gray-500"
        >
          {courses.map((course) => (
            <CarouselItem key={course.slug} className="basis-4/5 sm:basis-1/2">
              <CourseCardNew course={course} />
            </CarouselItem>
          ))}
        </Carousel>

        <Link href="/courses">
          <PrimaryButton
            size="lg"
            className="mx-auto mt-10"
            iconRight={<FaArrowRight />}
          >
            সব কোর্স দেখুন
          </PrimaryButton>
        </Link>
      </Container>
    </div>
  );
};

export default Courses;
