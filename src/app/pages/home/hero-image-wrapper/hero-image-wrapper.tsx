"use client";

import { useTheme } from "next-themes";
import type { ReactNode } from "react";

const HeroImageWrapper = ({ children }: { children: ReactNode }) => {
  const { theme } = useTheme();

  return (
    <div
      style={{
        backgroundImage:
          theme === "light"
            ? "url(svg/hero-bg-light-pattern.svg)"
            : "url(svg/hero-bg-dark-pattern.svg)",
        backgroundRepeat: "repeat",
      }}
    >
      {children}
    </div>
  );
};

export default HeroImageWrapper;
