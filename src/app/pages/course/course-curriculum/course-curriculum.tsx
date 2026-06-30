"use client";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useMemo, useState } from "react";
import Container from "@/components/container";
import GradientText from "@/components/gradient-text";
import PrimaryButton from "@/components/primary-button";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { CurriculumSectionType } from "@/types/course";
import CourseSection from "./course-section";

type PropsTypes = {
  curriculum: CurriculumSectionType[];
};

const CourseCurriculum = ({ curriculum }: PropsTypes) => {
  const [showAll, setShowAll] = useState(false);

  const visibleModules = useMemo(() => {
    let count = 0;
    const limitedSections = curriculum.reduce(
      (acc: CurriculumSectionType[], section) => {
        if (count >= 5) return acc;

        const limitedModules = section.modules.filter(() => {
          if (count < 4) {
            count++;
            return true;
          }
          return false;
        });

        if (limitedModules.length > 0) {
          acc.push({ ...section, modules: limitedModules });
        }
        return acc;
      },
      [],
    );

    return limitedSections;
  }, [curriculum]);

  const dataToRender = showAll ? curriculum : visibleModules;

  return (
    <section className="py-10">
      <Container>
        <h2 className="text-4xl text-foreground-dark font-extrabold text-center mb-4">
          কোর্স <GradientText>কারিকুলাম</GradientText>
        </h2>

        <div className="space-y-8 max-w-3xl mx-auto relative">
          {dataToRender.map((section: CurriculumSectionType, index: number) => (
            <CourseSection key={index} section={section} sectionIndex={index} />
          ))}

          {!showAll && (
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white via-white/80 dark:from-gray-800 dark:via-gray-800/80  to-transparent pointer-events-none" />
          )}

          <div
            className={cn(
              "absolute inset-x-0 bottom-0 flex justify-center pb-2",
              {
                static: showAll,
              },
            )}
          >
            <PrimaryButton
              onClick={() => setShowAll(!showAll)}
              iconRight={showAll ? <ChevronUp /> : <ChevronDown />}
            >
              {showAll ? "কমিয়ে দেখুন" : "সব দেখুন"}
            </PrimaryButton>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CourseCurriculum;
