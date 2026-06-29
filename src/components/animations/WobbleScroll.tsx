"use client";

import { ReactNode } from "react";
import ScrollAnimation from "./ScrollAnimation";

interface WobbleScrollProps
  extends React.ComponentProps<typeof ScrollAnimation> {
  children: ReactNode;
  rotation?: number;
}

const WobbleScroll = ({
  children,
  rotation = 10,
  ...props
}: WobbleScrollProps) => {
  return (
    <ScrollAnimation
      initial={{ opacity: 0, rotate: -rotation, scale: 0.8 }}
      animate={{
        opacity: 1,
        rotate: [
          null,
          rotation,
          -rotation * 0.8,
          rotation * 0.6,
          -rotation * 0.4,
          rotation * 0.2,
          0,
        ],
        scale: 1,
      }}
      transition={{
        type: "spring" as const,
        damping: 12,
        stiffness: 200,
        times: [0, 0.2, 0.4, 0.6, 0.8, 0.9, 1],
      }}
      {...props}
    >
      {children}
    </ScrollAnimation>
  );
};

export default WobbleScroll;
