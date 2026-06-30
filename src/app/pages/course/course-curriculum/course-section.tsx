import { GraduationCap } from "lucide-react";
import React from "react";
import { Accordion } from "@/components/ui/accordion";
import type { CurriculumSectionType } from "@/types/course-legacy";
import CourseModule from "./course-module";

interface CourseSectionProps {
  section: CurriculumSectionType;
  sectionIndex: number;
}

const CourseSection: React.FC<CourseSectionProps> = React.memo(
  ({ section, sectionIndex }) => {
    return (
      <section className="bg-card border border-muted rounded-lg px-4 md:px-5 py-5 space-y-6 shadow-sm transition-all duration-300 hover:shadow-xl">
        <div className="flex items-center justify-center space-x-2 flex-col md:flex-row">
          <GraduationCap className="size-12 md:size-9 text-secondary" />
          <h3 className="text-xl font-bold text-center text-foreground ">
            {section.title}
          </h3>
        </div>

        <Accordion type="multiple" className="w-full space-y-4">
          {section.modules.map((module, modIndex) => (
            <CourseModule
              key={`module-${sectionIndex}-${modIndex}`}
              module={module}
              sectionIndex={sectionIndex}
              moduleIndex={modIndex}
            />
          ))}
        </Accordion>
      </section>
    );
  },
);

CourseSection.displayName = "CourseSection";

export default CourseSection;
