"use client";

import { ReactNode } from "react";
import ScrollAnimation from "./ScrollAnimation";

interface ElasticScrollProps
  extends React.ComponentProps<typeof ScrollAnimation> {
  children: ReactNode;
  intensity?: number;
}

const ElasticScroll = ({
  children,
  intensity = 1,
  ...props
}: ElasticScrollProps) => {
  return (
    <ScrollAnimation
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{
        opacity: 1,
        scale: [null, 1.1 * intensity, 0.9 * intensity, 1.05 * intensity, 1],
      }}
      transition={{
        type: "spring" as const,
        stiffness: 300,
        damping: 15,
        times: [0, 0.4, 0.6, 0.8, 1],
      }}
      {...props}
    >
      {children}
    </ScrollAnimation>
  );
};

export default ElasticScroll;
