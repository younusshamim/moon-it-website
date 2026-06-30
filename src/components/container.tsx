import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type PropsTypes = {
  children: ReactNode;
  className?: string;
};

const Container = ({ children, className }: PropsTypes) => {
  return <div className={cn("container-page", className)}>{children}</div>;
};

export default Container;
