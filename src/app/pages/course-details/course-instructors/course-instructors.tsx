import Image from "next/image";
import Container from "@/components/container";
import GradientText from "@/components/gradient-text";
import type { Instructor } from "@/types/course";

const CourseInstructors = ({ instructors }: { instructors: Instructor[] }) => {
  if (!instructors.length) return null;

  return (
    <section className="bg-card/50 py-12">
      <Container>
        <h2 className="mb-8 text-center text-3xl font-extrabold text-foreground-dark lg:text-4xl">
          কোর্স <GradientText>ইনস্ট্রাক্টর</GradientText>
        </h2>

        <div className="flex flex-wrap justify-center gap-6">
          {instructors.map((instructor) => (
            <div
              key={instructor.name}
              className="flex w-full max-w-[460px] items-center gap-5 rounded-card border border-muted bg-background2 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:w-[440px]"
            >
              <Image
                className="h-20 w-20 shrink-0 rounded-full border-2 border-primary/20 bg-card object-cover object-top"
                width={80}
                height={80}
                src={instructor.picture}
                alt={instructor.name}
              />

              <div className="flex flex-col gap-1.5">
                <h3 className="text-lg font-bold text-foreground-dark">
                  {instructor.name}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {instructor.highlights.join(" · ")}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CourseInstructors;
