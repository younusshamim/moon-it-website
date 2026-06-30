"use client";

import { format } from "date-fns";
import { useMemo, useState } from "react";
import { MdCall } from "react-icons/md";
import NumSpan from "@/components/num-span";
import PrimaryButton from "@/components/primary-button";
import { cn, convertToBanglaNumber } from "@/lib/utils";
import { formatDiscountAmount, getEffectivePrice } from "@/lib/utils/pricing";
import type { Course, CoursePricing } from "@/types/course";
import CourseMedia from "../course-media/course-media";
import EnrollButton from "../enroll-button/enroll-button";

const PHONE_NUMBER = "+8801785882381";

const CoursePricingCard = ({ course }: { course: Course }) => {
  const { name, thumbnail, youtubeUrl, pricing, variations, id } = course;

  const hasVariations = !!variations?.length;
  const showSelector = (variations?.length ?? 0) > 1;

  // Default to the cheapest (effective) variation, falling back to the
  // recommended one if every variation costs the same.
  const defaultVariationId = useMemo(() => {
    if (!variations?.length) return undefined;
    const recommended = variations.find((v) => v.recommended);
    if (recommended) return recommended.id;
    return [...variations].sort(
      (a, b) =>
        getEffectivePrice(a.pricing).feeAfterDiscount -
        getEffectivePrice(b.pricing).feeAfterDiscount,
    )[0].id;
  }, [variations]);

  const [selectedId, setSelectedId] = useState(defaultVariationId);

  const selectedVariation = variations?.find((v) => v.id === selectedId);
  const activePricing: CoursePricing | undefined =
    selectedVariation?.pricing ?? pricing;

  const effective = activePricing ? getEffectivePrice(activePricing) : null;

  return (
    <div className="overflow-hidden rounded-card border border-muted bg-background2">
      <CourseMedia thumbnail={thumbnail} name={name} youtubeUrl={youtubeUrl} />

      <div className="flex flex-col gap-5 p-5 lg:p-6">
        {showSelector && (
          <div className="flex flex-col gap-2">
            <p className="text-sm font-semibold text-foreground-dark">
              প্যাকেজ বাছাই করুন
            </p>
            <div className="flex flex-wrap gap-2">
              {variations?.map((variation) => {
                const isActive = variation.id === selectedId;
                return (
                  <button
                    key={variation.id}
                    type="button"
                    onClick={() => setSelectedId(variation.id)}
                    aria-pressed={isActive}
                    className={cn(
                      "rounded-full border px-4 py-1.5 text-sm font-semibold transition-all duration-200",
                      isActive
                        ? "border-primary bg-primary text-primary-foreground shadow-sm"
                        : "border-muted bg-background text-foreground hover:border-primary/50",
                    )}
                  >
                    {variation.name}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {selectedVariation?.subtitle && (
          <p className="-mt-2 text-sm leading-relaxed text-muted-foreground">
            {selectedVariation.subtitle}
          </p>
        )}

        {effective && (
          <div className="flex flex-col gap-1.5">
            <div className="flex flex-wrap items-baseline gap-2.5">
              <span className="text-3xl font-extrabold text-primary lg:text-4xl">
                ৳
                <NumSpan>
                  {convertToBanglaNumber(effective.feeAfterDiscount)}
                </NumSpan>
              </span>
              {effective.isDiscountActive && (
                <span className="text-lg font-semibold text-muted-foreground line-through">
                  ৳<NumSpan>{convertToBanglaNumber(effective.fee)}</NumSpan>
                </span>
              )}
              {effective.isDiscountActive && effective.discount && (
                <span className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-bold text-secondary-foreground">
                  {formatDiscountAmount(effective.discount)} ছাড়
                </span>
              )}
            </div>

            {effective.isDiscountActive && effective.discount && (
              <p className="text-xs font-medium text-accent-foreground">
                অফার শেষ{" "}
                <NumSpan>
                  {convertToBanglaNumber(
                    format(new Date(effective.discount.endDate), "dd/MM/yyyy"),
                  )}
                </NumSpan>{" "}
                তারিখে।
              </p>
            )}
          </div>
        )}

        <div className="mt-1 flex flex-col gap-3">
          {activePricing ? (
            <EnrollButton
              initialCourseId={id}
              initialVariationId={hasVariations ? selectedId : undefined}
              className="w-full"
            >
              {effective?.isDiscountActive ? "ডিসকাউন্টে ভর্তি হোন" : "ভর্তি হোন"}
            </EnrollButton>
          ) : null}

          <a href={`tel:${PHONE_NUMBER}`} className="w-full">
            <PrimaryButton
              variant="outline"
              className="w-full"
              iconLeft={<MdCall className="text-primary" />}
            >
              কল করুন
            </PrimaryButton>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CoursePricingCard;
