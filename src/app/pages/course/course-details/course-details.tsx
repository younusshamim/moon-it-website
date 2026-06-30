import Image from "next/image";
import SpringyScroll from "@/components/animations/SpringyScroll";
import Container from "@/components/container";
import LineShapes from "@/components/shapes/line-shapes";
import type { CourseType } from "@/types/course";
import FeeAndDiscount from "./fee-and-discount";

const CourseDetails = ({ course }: { course: CourseType }) => {
  const {
    name,
    description1,
    description2,
    description3,
    fee,
    discount,
    image,
  } = course;

  return (
    <Container className="pb-10 lg:py-10 flex flex-col-reverse lg:flex-row gap-10 lg:gap-20 relative">
      <LineShapes lightClassName="left-[350px]" />

      <div className="flex flex-col gap-5 w-full lg:w-1/2 z-40">
        <h1 className="text-4xl text-foreground font-extrabold">{name}</h1>
        <div className="text-justify flex flex-col gap-3 text-[17px]">
          <h2>{description1}</h2>
          <h2>{description2}</h2>
          <h2>{description3}</h2>
        </div>

        <FeeAndDiscount course={course} />
      </div>

      <div className="w-full lg:w-1/2 z-40">
        <SpringyScroll>
          <Image
            className="w-full lg:h-[390px] object-cover object-center rounded-card shadow-lg  hover:scale-[1.02] transition-all duration-500"
            sizes="100vw"
            width={0}
            height={0}
            src={image}
            alt={name}
          />
        </SpringyScroll>
      </div>
    </Container>
  );
};

export default CourseDetails;
