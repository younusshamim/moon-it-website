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
import Tabs from "@/components/tabs";
import { CarouselItem } from "@/components/ui/carousel";
import categories from "@/data/categories";
import courseList from "@/data/course-list";
import getOptions from "@/lib/utils/get-options";
import CourseCard from "./course-card";

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | number>(
    categories[0].name,
  );
  const courses = useMemo(
    () => courseList.filter((course) => course.category === selectedCategory),
    [selectedCategory],
  );
  const tabOptions = getOptions(categories, "label", "name");

  return (
    <div className="bg-card border-b border-muted section-padding-sm">
      <Container>
        <h2 className="text-4xl text-foreground-dark font-extrabold  text-center mb-[6px]">
          অসাধারন <GradientText>কোর্স সমূহ</GradientText>
        </h2>
        <p className="font-semibold mb-10 text-center">
          প্রতিটি কোর্সের সিলেবাস ব্যাসিক টু এডভান্সড লেভেল পর্যন্ত সাজানো হয়েছে।
        </p>

        <Tabs
          tabOptions={tabOptions}
          selected={selectedCategory}
          setSelected={setSelectedCategory}
        />

        <StaggerContainer>
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-6">
            {courses.map((course, index) => {
              return (
                <StaggerItem key={course.name + index}>
                  <CourseCard course={course} />
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
          {courses.map((course, index) => (
            <CarouselItem
              key={course.name + index}
              className="basis-4/5 sm:basis-1/2"
            >
              <CourseCard course={course} />
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
