import type { ReactNode } from "react";
import Footer from "@/app/shared/footer/footer";
import TopBar from "@/app/shared/topbar/topbar";
import { getCourseOptions } from "@/data/course-list";
import { CourseOptionsProvider } from "../shared/course-options/course-options-context";
import ConditionalNavbar from "../shared/navbar/conditional-navbar";

type PropsTypes = {
  children: ReactNode;
};

const Layout = async ({ children }: PropsTypes) => {
  const courseOptions = await getCourseOptions();

  return (
    <div className="overflow-hidden">
      <TopBar />
      <ConditionalNavbar />
      <CourseOptionsProvider options={courseOptions}>
        {children}
      </CourseOptionsProvider>
      <Footer />
    </div>
  );
};

export default Layout;
