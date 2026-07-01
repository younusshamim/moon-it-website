"use client";

import { createContext, type ReactNode, useContext } from "react";
import type { CourseOption } from "@/types/course";

const CourseOptionsContext = createContext<CourseOption[]>([]);

/**
 * Provides the (server-fetched) list of courses to client-side forms
 * (admission, seminar) without prop-drilling through the component tree.
 */
export const CourseOptionsProvider = ({
  options,
  children,
}: {
  options: CourseOption[];
  children: ReactNode;
}) => (
  <CourseOptionsContext.Provider value={options}>
    {children}
  </CourseOptionsContext.Provider>
);

export const useCourseOptions = () => useContext(CourseOptionsContext);
