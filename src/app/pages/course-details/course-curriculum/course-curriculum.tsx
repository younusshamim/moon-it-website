"use client";

import { useState } from "react";
import { FaCheck, FaChevronDown, FaChevronUp } from "react-icons/fa6";
import Container from "@/components/container";
import GradientText from "@/components/gradient-text";
import NumSpan from "@/components/num-span";
import PrimaryButton from "@/components/primary-button";
import { convertToBanglaNumber } from "@/lib/utils";
import type { CurriculumModule } from "@/types/course";

const VISIBLE_COUNT = 3;

const CourseCurriculum = ({
  curriculum,
}: {
  curriculum: CurriculumModule[];
}) => {
  const [expanded, setExpanded] = useState(false);

  if (!curriculum.length) return null;

  const hasMore = curriculum.length > VISIBLE_COUNT;
  const visibleModules =
    expanded || !hasMore ? curriculum : curriculum.slice(0, VISIBLE_COUNT);

  return (
    <Container className="py-10">
      <h2 className="mb-8 text-center text-3xl font-extrabold text-foreground-dark lg:text-4xl">
        কোর্স <GradientText>ক্যারিকুলাম</GradientText>
      </h2>

      <div className="flex flex-col gap-5">
        {visibleModules.map((module, index) => (
          <div
            key={module.title}
            className="rounded-card border border-muted bg-background2 p-6 shadow-sm transition-all duration-300 hover:shadow-md"
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary-lighter to-primary text-base font-bold text-white shadow-sm">
                <NumSpan>{convertToBanglaNumber(index + 1)}</NumSpan>
              </span>
              <h3 className="text-xl font-bold text-foreground-dark">
                {module.title}
              </h3>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {module.topics.map((topic) => (
                <div key={topic} className="flex items-start gap-2.5">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs text-primary">
                    <FaCheck />
                  </span>
                  <p className="text-[16px] text-foreground">{topic}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {hasMore && (
        <div className="mt-8 flex justify-center">
          <PrimaryButton
            variant="outline"
            onClick={() => setExpanded((prev) => !prev)}
            iconRight={
              expanded ? (
                <FaChevronUp className="text-primary" />
              ) : (
                <FaChevronDown className="text-primary" />
              )
            }
          >
            {expanded ? "কম দেখুন" : "আরো দেখুন"}
          </PrimaryButton>
        </div>
      )}
    </Container>
  );
};

export default CourseCurriculum;
