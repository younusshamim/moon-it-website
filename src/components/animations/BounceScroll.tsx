"use client";

import { ReactNode } from "react";
import ScrollAnimation from "./ScrollAnimation";

interface BounceScrollProps
  extends React.ComponentProps<typeof ScrollAnimation> {
  children: ReactNode;
  bounce?: number;
}

const BounceScroll = ({
  children,
  bounce = 0.25,
  ...props
}: BounceScrollProps) => {
  return (
    <ScrollAnimation
      initial={{ opacity: 0, scale: 0.3, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        type: "spring" as const,
        stiffness: 300,
        damping: 20,
        bounce,
      }}
      {...props}
    >
      {children}
    </ScrollAnimation>
  );
};

export default BounceScroll;
