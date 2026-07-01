"use client";

import { motion } from "framer-motion";
import type { CategoryName } from "@/data/categories";
import { cn } from "@/lib/utils";
import type { CategoryOptionType } from "@/types/option-type";

type PropsType = {
  tabOptions: CategoryOptionType[];
  selected: CategoryName;
  setSelected: (item: CategoryName) => void;
  className?: string;
};

const CategoryTabs = ({
  tabOptions,
  selected,
  setSelected,
  className,
}: PropsType) => {
  return (
    <div className={cn("flex justify-center mb-10", className)}>
      <div className="flex gap-1 p-1.5 rounded-full bg-muted/60 border border-muted overflow-x-auto max-w-full no-scrollbar">
        {tabOptions.map((tab) => {
          const isActive = selected === tab.value;

          return (
            <button
              key={tab.value}
              type="button"
              onClick={() => setSelected(tab.value)}
              className={cn(
                "relative shrink-0 rounded-full px-5 py-2 text-sm font-semibold whitespace-nowrap transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-primary/40",
                isActive
                  ? "text-primary-foreground"
                  : "text-foreground hover:text-primary",
              )}
            >
              {isActive && (
                <motion.span
                  layoutId="course-category-pill"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  className="absolute inset-0 rounded-full bg-primary shadow-sm shadow-primary/30"
                />
              )}
              <span className="relative z-10">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryTabs;
