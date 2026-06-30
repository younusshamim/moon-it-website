"use client";

import { useEffect, useState } from "react";
import sizes from "@/constants/screen-size";
import useMediaQuery from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";
import NavContainer from "./nav-container";

const Navbar = () => {
  const [fixedNavbar, setFixedNavbar] = useState(false);
  const isSmScreen = useMediaQuery(`(max-width: ${sizes.lg}px)`);

  const changeBackground: any = () => {
    setFixedNavbar(window.scrollY >= 1 ? true : false);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => window.removeEventListener("scroll", changeBackground);
  }, []);

  return (
    <>
      <nav
        className={cn("py-[15px] lg:py-[25px] mb-6 lg:mb-0 w-full z-50", {
          "lg:py-[15px] fixed top-0 backdrop-blur-2xl-new border-b border-muted bg-slate-50/60 dark:bg-[#0B1120]/80 transition-[backdrop-filter] duration-1000":
            fixedNavbar,
        })}
      >
        <NavContainer
          logoWidth={
            isSmScreen ? (fixedNavbar ? 120 : 130) : fixedNavbar ? 130 : 150
          }
          mobileNavClassNames={
            fixedNavbar
              ? ""
              : "bg-gradient-to-b from-transparent to-card shadow-md"
          }
        />
      </nav>
    </>
  );
};

export default Navbar;
