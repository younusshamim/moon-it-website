import { BookOpen, CheckCircle } from "lucide-react";
import React from "react";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { CurriculumModuleType } from "@/types/course";

interface CourseModuleProps {
  module: CurriculumModuleType;
  sectionIndex: number;
  moduleIndex: number;
}

const CourseModule: React.FC<CourseModuleProps> = React.memo(
  ({ module, sectionIndex, moduleIndex }) => {
    return (
      <AccordionItem
        value={`module-${sectionIndex}-${moduleIndex}`}
        className="bg-background rounded-lg border border-muted overflow-hidden transition-all duration-300 hover:border-primary-lighter"
      >
        <AccordionTrigger
          className="md:text-lg font-semibold hover:no-underline px-3 md:px-4 py-3"
          iconClassName="ml-3 bg-card p-1 w-6 h-6 rounded-full"
        >
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center space-x-3">
              <span className="bg-primary text-primary-foreground p-2 rounded-full">
                <BookOpen className="h-3 w-3 md:h-5 md:w-5" />
              </span>
              <span className="text-foreground text-left">{module.title}</span>
            </div>

            <span className="text-muted-foreground text-sm hidden md:block">
              {module.lessons.length} Lessons
            </span>
          </div>
        </AccordionTrigger>

        <AccordionContent>
          <hr className="border-muted" />

          <div className="p-4">
            <ul className="space-y-3">
              {module.lessons.map((lesson, lessonIndex) => (
                <li key={lessonIndex} className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium text-foreground">
                      {lesson.title}
                    </span>
                    {lesson.details && (
                      <p className="text-sm text-muted-foreground mt-1">
                        {lesson.details}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </AccordionContent>
      </AccordionItem>
    );
  },
);

CourseModule.displayName = "CourseModule";

export default CourseModule;
