import type { ReactNode } from "react";
import ScrollAnimation from "./ScrollAnimation";

interface ScaleInScrollProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

const ScaleInScroll = ({
  children,
  delay = 0,
  className = "",
}: ScaleInScrollProps) => {
  return (
    <ScrollAnimation
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </ScrollAnimation>
  );
};

export default ScaleInScroll;
