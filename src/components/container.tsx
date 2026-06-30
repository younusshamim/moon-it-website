import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type PropsTypes = {
  children: ReactNode;
  className?: string;
};

const Container = ({ children, className }: PropsTypes) => {
  return (
    <div className={cn("w-full xl:w-[1280px] mx-auto px-4 xl:px-0", className)}>
      {children}
    </div>
  );
};

export default Container;
