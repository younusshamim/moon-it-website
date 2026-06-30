import type { ReactNode } from "react";
import ScrollAnimation from "./ScrollAnimation";

interface SlideInScrollProps {
  children: ReactNode;
  direction?: "left" | "right" | "top" | "bottom";
  delay?: number;
  className?: string;
}

const SlideInScroll = ({
  children,
  direction = "left",
  delay = 0,
  className = "",
}: SlideInScrollProps) => {
  const directionMap = {
    left: { x: -100, y: 0 },
    right: { x: 100, y: 0 },
    top: { x: 0, y: -100 },
    bottom: { x: 0, y: 100 },
  };

  return (
    <ScrollAnimation
      initial={{ opacity: 0, ...directionMap[direction] }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.7, delay }}
      className={className}
    >
      {children}
    </ScrollAnimation>
  );
};

export default SlideInScroll;
